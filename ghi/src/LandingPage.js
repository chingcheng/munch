import "./index.css";
import React from "react";
import { NavLink } from "react-router-dom";

function LandingPage({ backgroundImage }) {
  return (
    <>
      <div className="container-fluid removeMargin">
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
              src="./munch_icon.png"
              alt="Icon"
              width="65px"
              style={{
                position: "absolute",
                top: 9,
                left: 15,
              }}
            />
          </NavLink>
          <div className="hero-image text-center center-block">
            <h1>
              <img src="./munch_transparent.png" alt="Logo" width="400px" />
            </h1>
            <p>
              <img src="./munch_slogan.png" alt="Slogan" width="300px" />
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center"></div>
            <div className="container mt-3">
              <NavLink
                to="login"
                className="btn text-bold"
                style={{
                  width: 225,
                  background: "#FFE085",
                  fontWeight: "725",
                  color: "#512b20",
                }}
              >
                Log In{" "}
              </NavLink>
            </div>
            <p></p>
            <div className="container mt-3">
              <NavLink
                to="signup"
                className="btn text-bold login-btn-text"
                style={{
                  width: 225,
                  background: "#FFE085",
                  fontWeight: "725",
                  color: "#512b20",
                }}
              >
                Sign Up{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
