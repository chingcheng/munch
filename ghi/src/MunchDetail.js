import React, { useEffect, useState } from "react";
import { useAuthContext } from "./Auth";
import { Link, useParams, useNavigate } from "react-router-dom";
import star from "./images/star.png";

function MunchDetail() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [munch, setMunch] = useState([]);
  const { token } = useAuthContext();
  const [userId, setUserId] = useState("");

  const handleDelete = async () => {
    const munchUrl = `${process.env.REACT_APP_MUNCH_API_HOST}/munches/${id}`;
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
      const url = `${process.env.REACT_APP_MUNCH_API_HOST}/munches/${id}`;
      const fetchConfig = {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        setMunch(data);
      }
    };

    const fetchID = async () => {
      try {
        const url = `${process.env.REACT_APP_MUNCH_API_HOST}/token`;
        const fetchConfig = {
          credentials: "include",
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          const data = await response.json();
          setUserId(data.account.id);
        }
      } catch (e) {
        console.error(e);
      }
    };

    if (token) {
      getOneMunch();
    }

    fetchID();
  }, [token, id, userId]);

  if (userId === Number(munch.user_id)) {
    return (
      <div
        className="p-5 bg-image"
        style={{
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
                  className="card munch-detail-card"
                  style={{
                    height: "auto",
                    width: "550px",
                  }}
                >
                  <Link
                    to={`/munches/${munch.user_username}`}
                    className="card-link"
                  >
                    <div className="form-floating mx-3 mt-1">
                      <h2
                        style={{
                          fontSize: "15px",
                          textAlign: "right",
                        }}
                      >
                        @{munch.user_username}
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
                          fontSize: "0.7em",
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
                            marginLeft: "1",
                          }}
                        ></img>
                      </div>
                    </h3>
                    <div className="card-city-state" style={{ marginTop: "0" }}>
                      {munch.city}, {munch.state}
                    </div>
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
          <Link to={`/munch/edit/${id}`}>
            <button
              className="btn btn-md lead text-bold text mx-2"
              style={{
                background: "#FFEBAD",
                fontWeight: "725",
                color: "#834534",
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
              background: "#f4989c",
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
    );
  }
  return (
    <div
      className="p-5 bg-image"
      style={{
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
                className="card munch-detail-card"
                style={{
                  height: "auto",
                  width: "550px",
                }}
              >
                <Link
                  to={`/munches/${munch.user_username}`}
                  className="card-link"
                >
                  <div className="form-floating mx-3 mt-1">
                    <h2
                      style={{
                        fontSize: "15px",
                        textAlign: "right",
                      }}
                    >
                      @{munch.user_username}
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
                    <div
                      className="d-flex"
                      style={{
                        fontSize: "0.7em",
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
                  </h3>
                  <p className="card-city-state" style={{ marginTop: "0" }}>
                    {munch.city}, {munch.state}
                  </p>
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
      ></div>
    </div>
  );
}
export default MunchDetail;
