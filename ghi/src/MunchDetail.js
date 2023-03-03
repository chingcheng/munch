import React, { useEffect, useState, useCallback } from "react";
import { useAuthContext } from "./Auth";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function MunchDetail({ backgroundImage }) {
  let { id, user_id } = useParams();
  const navigate = useNavigate();
  const [munch, setMunch] = useState([]);
  const { token } = useAuthContext();
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

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

  const getOneMunch = useCallback(async () => {
    const url = `http://localhost:8010/munches/${id}`;
    const fetchConfig = {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchConfig);
    console.log("response!!", response);
    console.log("Detail Token:", token);
    if (response.ok) {
      const data = await response.json();
      console.log("1MunchDATA:", data);
      console.log(data.user_id);
      setUserId(data.user_id);
      getUsername(data.user_id);
      setMunch(data);
    }
  }, [id, token]);

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
      const username = data.username;
      setUsername(username);
    }
  };

  useEffect(() => {
    getOneMunch();
    getUsername();
  }, [getOneMunch, token, id]);

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
        <NavLink to="/">
          <img
            src="../munch_icon.png"
            alt="Icon"
            width="65px"
            style={{
              position: "absolute",
              top: 9,
              left: 15,
            }}
          />
        </NavLink>
        <div className="container text-center mt-5">
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-2 m-4">
                <form className="form p-5 m-1" id="create-signup-form">
                  <NavLink to="/">
                    <p className="text-center">
                      <img
                        src="../munch_transparent.png"
                        alt="Logo"
                        style={{
                          maxWidth: "100%",
                          width: "7350px",
                        }}
                      />
                    </p>
                  </NavLink>
                  <div className="form-floating mb-3">
                    <h2
                      style={{
                        color: "#FFE085",
                        size: "40px",
                      }}
                    >
                      {munch.location}
                    </h2>
                  </div>
                  <div className="form-floating mb-3"></div>
                  <h6 style={{ color: "#FFE085" }}>
                    {munch.city}, {munch.state}
                  </h6>
                  <div className="form-floating mb-4">
                    <Rating
                      rate={munch.rating}
                      size={35}
                      label
                      transition
                      fillColor="#FFE085"
                      emptyColor="gray"
                      className="foo" // Will remove the inline style if applied
                    />
                  </div>
                  <div className="form-floating mb-3">
                    <img
                      src={munch.photo}
                      alt="preview"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                  <Link to={`/filtered/`} className="card-link">
                    <div className="form-floating mb-3">
                      <h2
                        style={{
                          color: "#FFE085",
                          size: "40px",
                        }}
                      >
                        {username}
                      </h2>
                    </div>
                  </Link>
                  <div className="form-floating mb-3">
                    <p style={{ color: "#FFE085" }}>{munch.review}</p>
                  </div>
                  <div
                    className="button-container"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Link to={`/munches/edit/${id}`}>
                      <button
                        className="btn btn-md lead text-bold text mx-2"
                        style={{
                          background: "#F8D876",
                          fontWeight: "750",
                          color: "#512b20",
                          width: "150px",
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
                        fontWeight: "750",
                        color: "white",
                        width: "150px",
                      }}
                      type="button"
                      value="Delete Munch"
                    >
                      Delete Munch
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MunchDetail;
