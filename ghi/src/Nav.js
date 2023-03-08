import { NavLink } from "react-router-dom";
import React from "react";
import { useAuthContext } from "./Auth";

function Nav({ backgroundImage }) {
  const { token } = useAuthContext();

  if (token === false) {
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
                    <img
                      src="/login.png"
                      alt="home"
                      style={{
                        width: "15px",
                        marginBottom: "3px",
                      }}
                    />{" "}
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/signup"
                  >
                    <img
                      src="/signup.png"
                      alt="home"
                      style={{
                        width: "15px",
                        marginBottom: "3px",
                      }}
                    />{" "}
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
            <NavLink className="navbar-brand mb-2" to="/home">
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
                    to="/home"
                  >
                    <img
                      src="/home.png"
                      alt="home"
                      style={{
                        width: "15px",
                        marginBottom: "3px",
                      }}
                    />{" "}
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to={`/munchbunch`}
                  >
                    <img
                      src="/friends.png"
                      alt="friends"
                      style={{
                        width: "17px",
                        marginBottom: "3px",
                      }}
                    />{" "}
                    Bunch
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/munch/create"
                  >
                    <img
                      src="/create.png"
                      alt="create"
                      style={{
                        width: "18px",
                        marginBottom: "3px",
                      }}
                    />{" "}
                    Create
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to={`/accounts`}
                  >
                    <img
                      src="/account.png"
                      alt="account"
                      style={{
                        width: "15px",
                        marginBottom: "3px",
                      }}
                    />{" "}
                    Account
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    <img
                      src="/logout.png"
                      alt="logout"
                      style={{
                        width: "15px",
                        marginBottom: "3px",
                      }}
                    />{" "}
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
