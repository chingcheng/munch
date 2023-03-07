import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthContext, useToken } from "./Auth";

function Nav({ backgroundImage }) {
  const { token } = useAuthContext();
  const { logout } = useToken();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const url = `http://localhost:8010/token`;
        const fetchConfig = {
          credentials: "include",
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          const data = await response.json();
          setUser(data)
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchUserData();
  }, [token]);

    // const navigate = useNavigate();
    // const handleLogout = async (e) => {
    //   await logout();
    //   navigate("/login");
    // };

    if (user === null) {
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
              <NavLink className="navbar-brand" to="/">
                <img
                  src="/munch_icon.png"
                  alt="Icon"
                  style={{
                    width: "65px",
                  }}
                />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/signup"
                    >
                      Sign Up
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
    } else {
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
          <NavLink className="navbar-brand" to="/">
            <img
              src="/munch_icon.png"
              alt="Icon"
              style={{
                width: "65px",
              }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li> */}

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={`/feed`}
                >
                  Munch Bunch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/munches/create"
                >
                  Create Munch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
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
}

export default Nav;
