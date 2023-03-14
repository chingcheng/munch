import React from "react";
import { Link } from "react-router-dom";
import munch_transparent from "./images/munch_transparent.png";
import munch_slogan from "./images/munch_slogan.png";
import "./index.css";
import "./toggle-theme.css";
import landing1 from "./images/landing1.png";

function LandingPage({ backgroundImage }) {
  return (
    <>
      <div className="container-fluid removeMargin landing-scroll">
        <div className="container-fluid removeMargin">
          <section
            className="p-5 bg-image"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0, 0.68), rgba(0,0,0, 0.68)), url('${backgroundImage}')`,
              backgroundColor: "#FFFAEB",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="hero-image text-center">
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
          </section>
        </div>
        <div
          className="p-5 text-center bg-image"
          style={{
            minHeight: "100vh",
          }}
        >
          <div className="row row-cols-2 row-cols-md-2 g-4 py-5">
            <section className="col">
              <img src={landing1} className="p-5 bg-image" width="550px"></img>
            </section>
            <div className="col landing-welcome">
              <h2 className="p-0 m-0">welcome to</h2>
              <h5 className="header-font m-0">munch</h5>
              <p className="px-1" style={{ fontSize: "24px" }}>
                Munch is a free social media platform and website application
                dedicated to food reviews and recommendations. Munch allows
                users to share their dining experiences through photos their
                meals, as well as written reviews of the restaurants they visit.
              </p>
              <p className="pr-5" style={{ fontSize: "24px" }}>
                Whether you're a foodie looking for your next meal inspiration,
                or a restaurant owner looking to showcase your establishment,
                Munch is the perfect platform to share a passion for food.
              </p>
            </div>
          </div>

          <section>
            <h1>ABOUT US</h1>
          </section>
          <section>
            <h1>MEET OUR TEAM</h1>
          </section>
          <section>
            <h1>REVIEWS</h1>
          </section>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
