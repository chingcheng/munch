import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import munch_transparent from "./images/munch_transparent.png";
import munch_slogan from "./images/munch_slogan.png";
import "./index.css";
import "./toggle-theme.css";
import landing1 from "./images/landing1.png";
import chingcheng1 from "./images/chingcheng1.png";
import kennedycassiday1 from "./images/kennedycassiday1.png";
import jasondai1 from "./images/jasondai1.png";
import matthewmai1 from "./images/matthewmai1.png";
import tylerherman1 from "./images/tylerherman1.png";
import white_munch from "./images/white_munch.png";
import moving_landing from "./images/moving_landing.gif";
import maui_cookie from "./images/maui_cookie.JPG";
import maui_pizza from "./images/maui_pizza.JPG";
import munch_ubatuba from "./images/munch_ubatuba.png";
import { Carousel } from "react-bootstrap";

function LandingPage({ backgroundImage }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
          className="text-center bg-image"
          style={{
            minHeight: "100vh",
          }}
        >
          {/* WELCOME/ABOUT US */}
          <div className="row row-cols-2 row-cols-md-2 p-5">
            <section className="col">
              <img
                src={landing1}
                className="p-5 bg-image"
                alt="landing1"
                width="550px"
              ></img>
            </section>
            <div className="col landing-welcome">
              <h2 className="p-0 m-0">welcome to</h2>
              <h5 className="header-font m-0">munch</h5>
              <p className="px-3" style={{ fontSize: "22px" }}>
                Munch is a free social media platform and website application
                dedicated to food reviews and recommendations. Munch allows
                users to share their dining experiences through photos of their
                meals, as well as written reviews of the restaurants they visit.
              </p>
              <p className="px-3" style={{ fontSize: "22px" }}>
                Whether you're a foodie looking for your next meal inspiration,
                or a restaurant owner looking to showcase your establishment,
                Munch is the perfect platform to share a passion for food.
              </p>
            </div>
          </div>

          {/* MEET THE TEAM INTRO */}
          <div className="row row-2 g-4 meet-the-team p-5">
            <div>
              <h2 className="p-0 m-0">meet the</h2>
              <h5 className="pt-2 m-0 header-font-2 pb-4">munch bunch</h5>
              <hr class="hr hr-blurry" />
              <div className="container-fluid row row-cols-1 row-cols-md-5 py-5 mx-0">
                {/* CHING */}
                <div className="col">
                  <h1
                    className="mt-3 meet-team-name pb-2 pb-2"
                    style={{
                      fontWeight: "615",
                    }}
                  >
                    Ching Cheng
                  </h1>
                  <img src={chingcheng1} alt="chingcheng1" width="100px"></img>

                  <h1 className="meet-team-quote px-5 pt-3">
                    “San Francisco Nari's squid and pork jowl dish, ink-redibly
                    tasty!”
                  </h1>
                </div>

                {/* KENNEDY */}
                <div className="col">
                  <h1
                    className="mt-3 meet-team-name pb-2"
                    style={{
                      fontWeight: "615",
                    }}
                  >
                    Kennedy Cassiday
                  </h1>
                  <img
                    src={kennedycassiday1}
                    alt="kennedycassiday1"
                    width="100px"
                  ></img>

                  <h1 className="meet-team-quote px-5 pt-3">
                    "Savoring every bite of the Green Dragon roll at Uchu!”
                  </h1>
                </div>

                {/* JASON */}
                <div className="col">
                  <h1
                    className="mt-3 meet-team-name pb-2"
                    style={{
                      fontWeight: "615",
                    }}
                  >
                    Jason Dai
                  </h1>
                  <img
                    src={jasondai1}
                    alt="jasondai1"
                    width="100px"
                    style={{
                      fontWeight: "615",
                    }}
                  ></img>

                  <h1 className="meet-team-quote px-5 pt-3">
                    "I'm shrimp-ly impressed with Bavel's grilled prawns!"
                  </h1>
                </div>

                {/* MATTHEW */}
                <div className="col">
                  <h1
                    className="mt-3 meet-team-name pb-2"
                    style={{
                      fontWeight: "615",
                    }}
                  >
                    Matthew Mai
                  </h1>
                  <img src={matthewmai1} alt="matthewmai1" width="100px"></img>

                  <h1 className="meet-team-quote px-5 pt-3">
                    "Currently drowning in Wagyu House's clear pot broth.”
                  </h1>
                </div>

                {/* TYLER */}
                <div className="col">
                  <h1
                    className="mt-3 meet-team-name pb-2"
                    style={{
                      fontWeight: "615",
                    }}
                  >
                    Tyler Herman
                  </h1>
                  <img
                    src={tylerherman1}
                    alt="tylerherman1"
                    width="100px"
                  ></img>

                  <h1 className="meet-team-quote px-5 pt-3">
                    "Knee deep in Austin's East side Kinda Tropical's
                    tamari-glazed wings with a side of yucca fries.”
                  </h1>
                </div>
              </div>
              <div>
                <NavLink className="btn btn-learn-more btn-lg">
                  Learn more about us
                </NavLink>
              </div>
            </div>
          </div>

          {/* COME JOIN US/FOOTER */}
          <div className="container-fluid footer-fix pt-5">
            <div className="row row-cols-2 row-cols-md-2 p-4 mt-5">
              <div className="col landing-welcome mb-5">
                <div className="container-carousel">
                  <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    variant="dark"
                  >
                    <Carousel.Item>
                      <div className="row row-cols-1 row-cols-md-1 g-4">
                        <div className="col text-center center px-5 pt-2">
                          <img
                            src={maui_cookie}
                            alt="maui_cookie"
                            className="rounded"
                            style={{
                              height: "400px",
                              width: "100%",
                              objectFit: "cover",
                              position: "center",
                            }}
                          ></img>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="row row-cols-1 row-cols-md-1 g-4">
                        <div className="col text-center center px-5 pt-2">
                          <img
                            src={maui_pizza}
                            className="rounded"
                            alt="maui_pizza"
                            style={{
                              height: "400px",
                              width: "100%",
                              objectFit: "cover",
                              position: "center",
                            }}
                          ></img>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="row row-cols-1 row-cols-md-1 g-4">
                        <div className="col text-center center px-5 pt-2">
                          <img
                            src={munch_ubatuba}
                            className="rounded"
                            alt="munch_ubatuba"
                            style={{
                              height: "400px",
                              width: "100%",
                              objectFit: "cover",
                              position: "center",
                            }}
                          ></img>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="col">
                <img
                  src={moving_landing}
                  alt="moving_landing"
                  className="px-3 moving-image"
                  width="750px"
                ></img>
              </div>
            </div>

            <footer
              className="mt-5"
              style={{
                height: "auto",
              }}
            >
              <div>
                <div className="container text-center text-md-start">
                  <div className="row">
                    <div className="col-md-3 mx-auto text-center center">
                      <h6 className="text-uppercase fw-bold mb-3 mt-3">
                        Featured links
                      </h6>
                      <p>
                        <a href="#!" className="text-reset">
                          About the Team
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Resources
                        </a>
                      </p>
                    </div>
                    <div className="col-md-3 mx-auto text-center center">
                      <h3 className="white-munch-logo mt-1">
                        <Link to="/signup">
                          <img
                            src={white_munch}
                            alt="white_munch"
                            width="100px"
                          ></img>
                        </Link>
                      </h3>
                      <p>
                        Munch is a social media app for food enthusiasts to
                        connect with friends and discover new culinary hotspots
                        in any city
                      </p>
                    </div>

                    <div className="col-md-3 mx-auto text-center center">
                      <h6 className="text-uppercase fw-bold mb-3 mt-3">
                        Contact us
                      </h6>
                      <p>
                        <a href="#!" className="text-reset">
                          munchbunch@munch.com
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          1-800-GO-MUNCH
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center p-1 mt-2 btm-footer">
                © 2023{" "}
                <NavLink
                  className="text-footer"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  Munch™
                </NavLink>{" "}
                . Munch Bunch . Hack Reactor - SJP Nov PT 2022
              </div>
              <div className="pb-2"></div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
