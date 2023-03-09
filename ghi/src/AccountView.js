import React, { useEffect, useState } from "react";
import { useAuthContext } from "./Auth";
import { Link } from "react-router-dom";
import munch_account from "./images/munch_account.png";
import user from "./images/user.png";

function GetAccount() {
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

    const getUser = async () => {
      const userUrl = `${process.env.REACT_APP_MUNCH_API_HOST}/accounts/${userId}`;
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
    if (userId) {
      getUser();
    }
  }, [token, userId]);

  return (
    <>
      <div
        className="p-5 bg-image"
        style={{
          backgroundColor: "#FFFBFA",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <Link to="/accounts">
          <p className="text-center mt-5 mb-3">
            <img
              src={munch_account}
              alt="Munch Account"
              style={{
                maxWidth: "100%",
                width: "350px",
              }}
            />
          </p>
        </Link>
        <div className="container text-center">
          <div className="row">
            <div className="offset-3 col-6">
              <div className="col mx-auto d-flex justify-content-center">
                <div
                  className="card"
                  style={{
                    height: "auto",
                    width: "auto",
                    display: "flex",
                    borderRadius: "20px",
                  }}
                >
                  <div className="card-body">
                    <p className="text-center mt-3 mb-4">
                      <img
                        src={user}
                        alt="User"
                        style={{
                          maxWidth: "100%",
                          width: "125px",
                        }}
                      />
                    </p>
                    <div className="label-value">
                      <h5 className="card-title label mx-3">User:</h5>
                      <h5 className="card value mx-3">{username}</h5>
                    </div>
                    <div className="label-value">
                      <h5 className="card-title label mx-3">Name:</h5>
                      <h5 className="card value mx-3">
                        {firstName} {lastName}
                      </h5>
                    </div>
                    <div className="label-value">
                      <h5 className="card-title label mx-3">Email:</h5>
                      <h5 className="card value mx-3">{email}</h5>
                    </div>
                    <div className="label-value">
                      <h5 className="card-title label mx-3">Bio:</h5>
                      <h5 className="card value mx-3">{bio}</h5>
                    </div>
                    <Link to={`/accounts/${userId}`}>
                      <button
                        className="btn btn-md lead text-bold text mx-2 mt-2 mb-2"
                        style={{
                          background: "#FFEBAD",
                          fontWeight: "725",
                          color: "#834534",
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
