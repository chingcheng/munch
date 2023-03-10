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
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <div className="container text-center">
          <div className="row">
            <div className="offset-3 col-6">
              <div className="col mx-auto mt-5 d-flex justify-content-center">
                <div
                  className="account-detail-card"
                  style={{
                    height: "auto",
                    width: "auto",
                    display: "flex",
                    borderRadius: "70px",
                  }}
                >
                  <div className="card-account-body">
                    <Link to="/accounts">
                      <p className="text-center mt-4 mb-5">
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
                    {/* <p className="text-center mt-3 mb-4">
                      <img
                        src={user}
                        alt="User"
                        style={{
                          maxWidth: "100%",
                          width: "125px",
                        }}
                      />
                    </p> */}
                    <div className="label-value">
                      <h5 className="card-account-title label">User:</h5>
                      <h5 className="card value mx-5">{username}</h5>
                    </div>
                    <div className="label-value">
                      <h5 className="card-account-title label">Name:</h5>
                      <h5 className="card value mx-5">
                        {firstName} {lastName}
                      </h5>
                    </div>
                    <div className="label-value">
                      <h5 className="card-account-title label">Email:</h5>
                      <h5 className="card value mx-5">{email}</h5>
                    </div>
                    <div className="label-value">
                      <h5 className="card-account-title label">Bio:</h5>
                      <h5 className="card value mx-5">{bio}</h5>
                    </div>
                    <Link to={`/accounts/${userId}`}>
                      <button
                        className="btn btn-md lead text-bold text mx-2 mt-2 mb-5"
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
