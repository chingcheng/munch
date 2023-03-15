import React from "react";
import { Link } from "react-router-dom";
import munch_transparent from "./images/munch_transparent.png";
import munch_slogan from "./images/munch_slogan.png";

function LandingPage({ backgroundImage }) {
  return (
    <>
      <div className="container-fluid removeMargin">
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0, 0.68), rgba(0,0,0, 0.68)), url('${backgroundImage}')`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
          }}
        >
          <div className="hero-image text-center center-block">
            <h1>
              <img src={munch_transparent} alt="Logo" width="400px" />
            </h1>
            <p>
              <img src={munch_slogan} alt="Slogan" width="300px" />
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center"></div>
            <div className="container mt-3">
              <Link
                to="login"
                className="btn text-bold login-btn-text"
                style={{
                  width: 225,
                  background: "#FFE085",
                  fontWeight: "725",
                  color: "#512b20",
                }}
              >
                Log In{" "}
              </Link>
            </div>
            <p></p>
            <div className="container mt-3">
              <Link
                to="signup"
                className="btn text-bold signup-btn-text"
                style={{
                  width: 225,
                  background: "#FFE085",
                  fontWeight: "725",
                  color: "#512b20",
                }}
              >
                Sign Up{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
