import { NavLink, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuthContext } from "./Auth";

function Nav({ backgroundImage }) {
  const { id } = useParams();
  const { token } = useAuthContext();
  console.log(token);

  useEffect(() => {
    const fetchID = async () => {
      try {
        const url = `http://localhost:8010/token`;
        const fetchConfig = {
          credentials: "include",
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          await response.json();
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchID();
  }, [token, id]);

  return (
    <>
      <nav
        className="navbar navbar-dark"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, 0.68), rgba(0,0,0, 0.68)), url('${backgroundImage}')`,
          backgroundColor: "#FFFAEB",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          position: "fixed",
        }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand mb-2" to="/">
            <img
              src="/munch_transparent.png"
              alt="Munch"
              style={{
                width: "110px",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            />
          </NavLink>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to={`/feed`}
                >
                  Munch Bunch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/munches/create"
                >
                  Create Munch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to={`/accounts`}
                >
                  Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style>
        {`
          .nav-link {
            width: 10rem;
            display: block;
            text-align: center;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}

export default Nav;
