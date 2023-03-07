import React, { useEffect, useState } from "react";
import { useAuthContext } from "./Auth";
import { Link, useParams, useNavigate } from "react-router-dom";

function MunchDetail({ backgroundImage }) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [munch, setMunch] = useState([]);
  const { token } = useAuthContext();
  const [userName, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  console.log(userId);

  const handleDelete = async () => {
    const munchUrl = `http://localhost:8010/munches/${id}`;
    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(munchUrl, fetchConfig);
    if (response.ok) {
      navigate("/home");
    }
  };

  useEffect(() => {
    const getOneMunch = async () => {
      const url = `http://localhost:8010/munches/${id}`;
      const fetchConfig = {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        setUserId(data.user_id);
        getUsername(data.user_id);
        setMunch(data);
      }
    };

    const getUsername = async (userId) => {
      const usernameUrl = `http://localhost:8010/accounts/${userId}`;
      const fetchConfig = {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(usernameUrl, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        const userName = data.username;
        setUsername(userName);
      }
    };

    getOneMunch();
    getUsername();
  }, [token, id]);

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
        <div className="container mt-5">
          <div className="row">
            <div className="offset-3 col-6">
              <div className="col mx-auto d-flex justify-content-center">
                <div
                  className="card"
                  style={{
                    height: "auto",
                    width: "550px",
                  }}
                >
                  <Link to={`/filtered/${userName}`} className="card-link">
                    <div className="form-floating mx-3 mt-1">
                      <h2
                        style={{
                          color: "black",
                          fontSize: "15px",
                          textAlign: "right",
                        }}
                      >
                        @{userName}
                      </h2>
                    </div>
                  </Link>
                  <img
                    src={munch.photo}
                    className="card-img-top px-3"
                    alt="Munch"
                  />
                  <div className="card-body">
                    <h3
                      className="card-location"
                      style={{
                        marginBottom: "0",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {munch.location}
                      <h7
                        className="d-flex"
                        style={{
                          fontSize: "0.7em",
                          justifyContent: "end",
                          marginLeft: "auto",
                        }}
                      >
                        {munch.rating}
                        <img
                          src="../star.png"
                          alt="star"
                          style={{
                            width: "0.9em",
                            height: "0.9em",
                            marginTop: "0.15em",
                          }}
                        ></img>
                      </h7>
                    </h3>
                    <h7 className="card-city-state" style={{ marginTop: "0" }}>
                      {munch.city}, {munch.state}
                    </h7>
                    <p className="card-review pt-3">{munch.review}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="button-container mt-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to={`/munches/edit/${id}`}>
            <button
              className="btn btn-md lead text-bold text mx-2"
              style={{
                background: "#F8D876",
                fontWeight: "725",
                color: "#512b20",
                width: "150px",
                height: "40px",
              }}
              type="submit"
              value="Update Munch"
            >
              Edit Munch
            </button>
          </Link>
          {"  "}
          <button
            onClick={handleDelete}
            className="btn btn-md lead text-bold text mx-2"
            style={{
              background: "#FF4B3E",
              fontWeight: "725",
              color: "white",
              width: "150px",
              height: "40px",
            }}
            type="button"
            value="Delete Munch"
          >
            Delete Munch
          </button>
        </div>
      </div>
    </>
  );
}

export default MunchDetail;
