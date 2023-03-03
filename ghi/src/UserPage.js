import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "./Auth";

function MunchesColumn(props){
  return (
    <div className="col">
      {props.list.map((munch) => (
            <div key={munch.id}>
              <Link to={`/munches/${munch.id}`} className="card-link">
                <div className="card mb-3 shadow" style={{ height: "400px" }}>
                  <img
                    src={munch.photo}
                    className="card-img-top"
                    alt={`${munch.location}`}
                    style={{ maxWidth: "100%", maxHeight: "250px" }}
                  />
                  <div
                    className="card-body"
                    style={{ height: "100px", overflow: "hidden" }}
                  >
                    <h5 className="card-location">
                      {munch.location} - {munch.username}
                    </h5>

                    <p className="card-review">{munch.review}</p>
                  </div>
                  <div className="card-footer" style={{ height: "50px" }}>
                    <small className="text-muted">
                      Rating: {munch.rating}/5
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          ))};
    </div>
  );
}
const UserPage = ({backgroundImage}) => {
  const {userName} = useParams();
  const [munchColumns, setMunchColumns] = useState([[], [], []]);
  const { token } = useAuthContext();
  // const { id, user_id } = useParams;
  const [userId, setUserId] = useState("");
  // console.log("username", userName)
  console.log("USERID", userId)

  // const { id } = useParams();
  // const { userId, setuserId } = useState("");
  // const { username, setUsername } = useState("");

  // const getUser = useCallback(async () => {
  //   const fetchConfig = {
  //     method: "get",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   const response = await fetch(url, fetchConfig);
  //   console.log("response", response);
  //   if (response.ok) {
  //     const data = await response.json();
  //     // setUser(data)
  //     setUsername(data.username);
  //   }
  // }, [id, token]);

 useEffect(() => {
  const getUserId = async () => {
    const userUrl = `http://localhost:8010/accounts/`;
    const fetchConfig = {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(userUrl, fetchConfig);
    // console.log("response", response)
    if (response.ok) {
      const users = await response.json();
      const current_user = users.filter((user) => user.username === userName)
      // console.log("userID:", current_user)
      const current_user_id = current_user[0].id
      // console.log("current_user_id:", current_user_id)
      // console.log("userName", userName)
      setUserId(current_user_id);
      // console.log("userId", userId)
      fetchFilterMunches(current_user[0].id)
    }
  }

  const fetchFilterMunches = async (userId) => {
    try {
      const url = `http://localhost:8010/munches`;
      const fetchConfig = {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("userId:", userId)

      const response = await fetch(url, fetchConfig);
      console.log("response", response)
      if (response.ok) {
        console.log("userName", userName)
        const munches = await response.json();
        console.log("munches", munches)
        const filteredMunches = munches.filter((munch) =>
          munch.user_id.includes(userId));
        console.log("filteredMunches", filteredMunches)
        const munchColumns = [[], [], []];
        filteredMunches.forEach((munch, index) =>
          munchColumns[index % 3].push(munch)
        );
        setMunchColumns(munchColumns);
      }
    } catch (e) {
      console.error(e);
    }
  };
    getUserId();
    fetchFilterMunches();
  }, [token, userId]);



  // const getUsername = async (userId) => {
  //   const usernameUrl = `http://localhost:8010/accounts/${userId}`;
  //   const fetchConfig = {
  //     method: "get",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   const response = await fetch(usernameUrl, fetchConfig);
  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log("DATA:", data);
  //     const username = data.username;
  //     console.log("USERNAME:", username);
  //     setUsername(username);
  //   }
  // };

  return (
    <>
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, 0.68), rgba(0,0,0, 0.68)), url('${backgroundImage}')`,
          backgroundColor: "#FFFAEB",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <div className="px-4 py-5 my-5 mt-0 text-center bg-transparent">
          <img src="../munch_transparent.png" alt="" width="450" />
          <div>
            <p>
              <img src="../munch_slogan.png" alt="Slogan" width="300px" />
            </p>
          </div>
        </div>
        <div className="container">
          <h2>{userName}</h2>
          <div className="row"></div>
        </div>
        <div className="container">
          <div className="row">
              {munchColumns.map((munchList, index) => (
              <MunchesColumn key={index} list={munchList} />
               ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
