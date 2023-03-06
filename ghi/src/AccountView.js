import React, { useEffect, useState } from "react";
import { useAuthContext } from "./Auth";
import { NavLink, Link } from "react-router-dom";

function GetAccount({ backgroundImage }) {
  const { token } = useAuthContext();
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const fetchID = async () => {
      try {
        const url = `http://localhost:8010/token`;
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

    const getUser = async () => {
      const userUrl = `http://localhost:8010/accounts/${userId}`;
      const fetchConfig = {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(userUrl, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        setUserId(data.id);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
        setUsername(data.username);
        setBio(data.bio);
      }
    };
    fetchID();
    getUser();
  }, [token, userId]);

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
        <div className="shadow p-2 m-4"></div>
        <NavLink to="/home">
          <p className="text-center">
            <img
              src="../munch_transparent.png"
              alt="Logo"
              style={{
                maxWidth: "100%",
                width: "350px",
              }}
            />
          </p>
        </NavLink>
        <div className="container text-center mt-5">
          <div className="row">
            <div className="offset-3 col-6">
              <div className="col mx-auto d-flex justify-content-center">
                <div
                  className="card"
                  style={{ height: "800px", width: "800px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <p className="card-text">
                      {firstName} {lastName}
                    </p>
                    <h5 className="card-title">{email}</h5>
                    <p className="card-text">{bio}</p>
                    <Link
                      to={`/accounts/${userId}`}
                      className="btn btn-warning mx-1"
                    >
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
                        value="Edit Account"
                      >
                        Edit Account
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetAccount;