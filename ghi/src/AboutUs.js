import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
import "./toggle-theme.css";
import white_munch from "./images/white_munch.png";
import about_arrow from "./images/about_arrow.png";
import chingcheng2 from "./images/chingcheng2.png";
import kennedycassiday2 from "./images/kennedycassiday2.png";
import jasondai2 from "./images/jasondai2.png";
import matthewmai2 from "./images/matthewmai2.png";
import tylerherman2 from "./images/tylerherman2.png";
import linkedin from "./images/linkedin.png";
import gitlab from "./images/gitlab.png";
import about_divider from "./images/about_divider.png";
import about1 from "./images/about1.gif";

function AboutUs() {
  return (
    <>
      <div className="bg-image">
        {/* FIRST SECTION */}
        <div className="container-fluid">
          <div className="about-section">
            <div className="col landing-welcome px-4 pb-0 mt-5 pt-5">
              <h2 className="mt-5 pt-5">meet the</h2>
              <h5 className="header-font">munch bunch</h5>
              <p className="" style={{ fontSize: "22px" }}>
                For us, our hope was to deliver an enjoyable experience where
                you, the user, can gain access to quality food reviews from
                dining experiences of your closest friends and family no matter
                where you are.
              </p>
              <p className="" style={{ fontSize: "22px" }}>
                We invite you to join us in this remarkable journey and continue
                to be the foodie enthusiast while sharing that with your
                network!
              </p>
              <div className="container">
                <img src={about_arrow} alt="about_arrow" width="300px"></img>
              </div>
            </div>
            <div className="col text-center">
              <img src={about1} alt="Logo" width="688px" />
            </div>
          </div>
        </div>
        {/* TEAM CARDS */}
        <div className="container-fluid pb-4">
          <div className="about-section">
            <div className="row p-3"></div>
            {/* CHING CHENG */}
            <div className="col align-items-stretch landing-welcome px-3 pb-0 ">
              <div
                className="card team-card"
                style={{
                  height: "383.79px",
                  width: "auto",
                }}
              >
                <div className="container text-center">
                  <img
                    className="about-img p-3"
                    src={chingcheng2}
                    alt="chingcheng2"
                    width="150"
                  />
                  <h1 className="meet-team-name">Ching Cheng</h1>
                  <h1 className="meet-team-degree">
                    Master of Arts, Education
                  </h1>
                  <h1 className="meet-team-school">Standford University</h1>
                  <img
                    className="mb-2"
                    src={about_divider}
                    alt="divider"
                    width="40"
                  />
                  <h1 className="meet-team-quote-2 pb-1">
                    Most likely to have an Instagram for her dog rather than for
                    herself
                  </h1>
                  <div className="container pt-3 pb-4">
                    <Link to="https://www.linkedin.com/in/ching-cheng/">
                      <img
                        className="p-1"
                        src={linkedin}
                        alt="linkedin"
                        width="40"
                      />
                    </Link>
                    <Link to="https://gitlab.com/mschingcheng">
                      <img
                        className="p-1"
                        src={gitlab}
                        alt="gitlab"
                        width="40"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* CHING CHENG */}

            {/* KENNEDY CASSIDAY */}
            <div className="col align-items-stretch landing-welcome px-3 pb-0 ">
              <div
                className="card team-card"
                style={{
                  height: "383.79px",
                  width: "auto",
                }}
              >
                <div className="container text-center">
                  <img
                    className="about-img p-3"
                    src={kennedycassiday2}
                    alt="kennedycassiday2"
                    width="150"
                  />
                  <h1 className="meet-team-name">Kennedy Cassiday</h1>
                  <h1 className="meet-team-degree">
                    Bachelor of Science, Organismal Biology
                  </h1>
                  <h1 className="meet-team-school">
                    Portland State University Urban Honors College
                  </h1>
                  <img
                    className="mb-2"
                    src={about_divider}
                    alt="divider"
                    width="40"
                  />
                  <h1 className="meet-team-quote-2 pb-1">
                    Most likely to have a bowl of oatmeal for breakfast
                  </h1>
                  <div className="container pb-4">
                    <Link to="https://www.linkedin.com/in/kennedycassiday/">
                      <img
                        className="p-1"
                        src={linkedin}
                        alt="linkedin"
                        width="40"
                      />
                    </Link>
                    <Link to="https://gitlab.com/kennedycassiday">
                      <img
                        className="p-1"
                        src={gitlab}
                        alt="gitlab"
                        width="40"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* KENNEDY CASSIDAY */}

            {/* JASON DAI */}
            <div className="col align-items-stretch landing-welcome px-3 pb-0 ">
              <div
                className="card team-card"
                style={{
                  height: "383.79px",
                  width: "auto",
                }}
              >
                <div className="container text-center">
                  <img
                    className="about-img p-3"
                    src={jasondai2}
                    alt="jasondai2"
                    width="150"
                  />
                  <h1 className="meet-team-name">Jason Dai</h1>
                  <h1 className="meet-team-degree">Masters in Education</h1>
                  <h1 className="meet-team-school">
                    University of California, Santa Barbara
                  </h1>
                  <img
                    className="mb-2"
                    src={about_divider}
                    alt="divider"
                    width="40"
                  />
                  <h1 className="meet-team-quote-2 pb-1">
                    Most likely to get a nosebleed during a half marathon
                  </h1>
                  <div className="container pb-4">
                    <Link to="https://www.linkedin.com/in/jasondai95/">
                      <img
                        className="p-1"
                        src={linkedin}
                        alt="linkedin"
                        width="40"
                      />
                    </Link>
                    <Link to="https://gitlab.com/jason.dai">
                      <img
                        className="p-1"
                        src={gitlab}
                        alt="gitlab"
                        width="40"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* JASON DAI */}

            {/* MATTHEW MAI */}
            <div className="col align-items-stretch landing-welcome px-3 pb-0 ">
              <div
                className="card team-card"
                style={{
                  height: "383.79px",
                  width: "auto",
                }}
              >
                <div className="container text-center">
                  <img
                    className="about-img p-3"
                    src={matthewmai2}
                    alt="matthewmai2"
                    width="150"
                  />
                  <h1 className="meet-team-name">Matthew Mai</h1>
                  <h1 className="meet-team-degree">
                    Bachelor of Science, Biology
                  </h1>
                  <h1 className="meet-team-school">
                    University of California, Riverside
                  </h1>
                  <img
                    className="mb-2"
                    src={about_divider}
                    alt="divider"
                    width="40"
                  />
                  <h1 className="meet-team-quote-2 pb-1">
                    Most likely to be a sugary cereal. His favorite - lucky
                    charms
                  </h1>
                  <div className="container pb-4">
                    <Link to="https://www.linkedin.com/in/matthewlmai/">
                      <img
                        className="p-1"
                        src={linkedin}
                        alt="linkedin"
                        width="40"
                      />
                    </Link>
                    <Link to="https://gitlab.com/matthewlmai">
                      <img
                        className="p-1"
                        src={gitlab}
                        alt="gitlab"
                        width="40"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* MATTHEW MAI */}

            {/* TYLER HERMAN */}
            <div className="col align-items-stretch landing-welcome px-3 pb-0 ">
              <div
                className="card team-card"
                style={{
                  height: "383.79px",
                  width: "auto",
                }}
              >
                <div className="container text-center">
                  <img
                    className="about-img p-3"
                    src={tylerherman2}
                    alt="tylerherman2"
                    width="150"
                  />
                  <h1 className="meet-team-name">Tyler Herman</h1>
                  <h1 className="meet-team-degree">
                    Doctor of Physical Therapy
                  </h1>
                  <h1 className="meet-team-school">Drexel University</h1>
                  <img
                    className="mb-2"
                    src={about_divider}
                    alt="divider"
                    width="40"
                  />
                  <h1 className="meet-team-quote-2 pb-1">
                    Most likely to become a backup dancer on the side
                  </h1>
                  <div className="container pt-3 pb-4">
                    <Link to="https://www.linkedin.com/in/tylercherman/">
                      <img
                        className="p-1"
                        src={linkedin}
                        alt="linkedin"
                        width="40"
                      />
                    </Link>
                    <Link to="https://gitlab.com/felipsh">
                      <img
                        className="p-1"
                        src={gitlab}
                        alt="gitlab"
                        width="40"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* TYLER HERMAN */}
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className="footer-fix">
          <footer
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
                      <Link to="about-us" className="text-reset">
                        About the Team
                      </Link>
                    </p>
                    <p>
                      <Link to="resources" className="text-reset">
                        Resources
                      </Link>
                    </p>
                  </div>
                  <div className="col-md-3 mx-auto text-center center">
                    <h3 className="white-munch-logo mt-2">
                      <Link to="/">
                        <img
                          src={white_munch}
                          alt="white_munch"
                          width="100px"
                        ></img>
                      </Link>
                    </h3>
                    <p>
                      Munch is a social media app for food enthusiasts to
                      connect with friends and discover new culinary hotspots in
                      any city
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
    </>
  );
}
export default AboutUs;
