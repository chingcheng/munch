import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "./Auth";
import munch_bunch from "./images/munch_bunch.png";
import add_friend from "./images/add_friend.png";
import star from "./images/star.png";

function MunchesColumn(props) {
  return (
    <div className="col">
      {props.list.map((munch) => (
        <div key={munch.id}>
          <Link to={`/munch/${munch.id}`} className="card-link">
            <div
              className="card"
              style={{
                height: "399px",
                marginBottom: "45px",
                marginLeft: "20px",
                border: "0",
              }}
            >
              <img
                src={munch.photo}
                className="card-img-top"
                alt={`${munch.location}`}
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
                loading="lazy"
              />
              <div
                className="card-body"
                style={{
                  height: "100%",
                  overflow: "hidden",
                  padding: 0,
                  margin: 0,
                }}
              >
                <h5
                  className="card-location mt-3"
                  style={{
                    marginBottom: "0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {munch.location}
                  <div
                    className="d-flex"
                    style={{
                      fontSize: "0.9em",
                      justifyContent: "end",
                      marginLeft: "auto",
                    }}
                  >
                    {munch.rating}
                    <img
                      src={star}
                      alt="star"
                      style={{
                        width: "0.9em",
                        height: "0.9em",
                        marginLeft: "1px",
                      }}
                    ></img>
                  </div>
                </h5>
                <div className="d-flex">
                  <div
                    className="card-city-state"
                    style={{
                      marginTop: "0",
                      marginBottom: "10px",
                      fontSize: "0.9em",
                    }}
                  >
                    {munch.city}, {munch.state}
                  </div>
                </div>
                <p className="card-review">{munch.review}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
const UserPage = () => {
  const { userName } = useParams();
  const [munchColumns, setMunchColumns] = useState([[], [], []]);
  const { token } = useAuthContext();
  const [userId, setUserId] = useState("");
  const [userBio, setUserBio] = useState("");

  useEffect(() => {
    const getUserId = async () => {
      const userUrl = `${process.env.REACT_APP_MUNCH_API_HOST}/accounts`;
      const fetchConfig = {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(userUrl, fetchConfig);
      if (response.ok) {
        const users = await response.json();
        const current_user = users.filter((user) => user.username === userName);
        const current_user_id = current_user[0].id;
        const bio = current_user[0].bio;
        setUserId(current_user_id);
        setUserBio(bio);
        fetchFilterMunches(current_user[0].id);
      }
    };

    const fetchFilterMunches = async (userId) => {
      try {
        const url = `${process.env.REACT_APP_MUNCH_API_HOST}/munches`;
        const fetchConfig = {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await fetch(url, fetchConfig);

        if (response.ok) {
          const munches = await response.json();
          const filteredMunches = munches
            .filter((munch) => Number(munch.user_id) === userId)
            .reverse();
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
  }, [token, userId, userName]);

  return (
    <>
      <div
        className="p-5 bg-image"
        style={{
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <div className="px-4 py-5 my-5 mt-0 text-center bg-transparent">
          <Link to="/munchbunch">
            <img src={munch_bunch} alt="Munch Bunch" width="450" />
          </Link>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="offset-3 col-6">
              <div className="col d-flex justify-content-center">
                <div className="card-bio">
                  <div className="card-body d-flex justify-content-between">
                    <div className="label-value-bio py-1 px-5">
                      <h4 className="card-text mt-2">
                        {userName}{" "}
                        <img
                          src={add_friend}
                          alt="Add Friend"
                          style={{
                            maxWidth: "100%",
                            width: "35px",
                            alignItems: "end",
                            marginLeft: "20px",
                          }}
                        />
                      </h4>
                      <p className="row mb-2" style={{ textAlign: "center" }}>
                        {userBio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            {munchColumns.map((munchList, index) => (
              <MunchesColumn key={index} list={munchList} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
