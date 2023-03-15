import { NavLink } from "react-router-dom";
import React from "react";
import { useAuthContext } from "./Auth";
import munch_icon from "./images/munch_icon.png";
import munch_transparent from "./images/munch_transparent.png";
import home from "./images/home.png";
import friends from "./images/friends.png";
import create from "./images/create.png";
import account from "./images/account.png";
import logout from "./images/logout.png";

function Nav({ backgroundImage }) {
  const { token } = useAuthContext();

  if (token === false) {
    return (
      <>
        <nav
          className="navbar-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0, 0.68), rgba(0,0,0, 0.68)), url('${backgroundImage}')`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        ></nav>
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
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            position: "fixed",
          }}
        >
          <div className="container-fluid">
            <NavLink className="navbar-brand mb-2" to="/home">
              <img
                src={munch_transparent}
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
                      src={home}
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
                      src={friends}
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
                      src={create}
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
                      src={account}
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
                      src={logout}
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
