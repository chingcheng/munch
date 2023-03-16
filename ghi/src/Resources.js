import React from "react";
import { Link, NavLink } from "react-router-dom";
import python from "./images/python.png";
import react from "./images/react.png";
import excalidraw from "./images/excalidraw.png";
import postgresql from "./images/postgresql.png";
import fastapi from "./images/fastapi.png";
import flaticon from "./images/flaticon.png";
import bootstrap from "./images/bootstrap.png";
import javascript from "./images/javascript.png";
import css from "./images/css.png";
import white_munch from "./images/white_munch.png";
import tools from "./images/tools.png";

function Resources() {
  return (
    <div className="text-center bg-image" style={{ minHeight: "100vh" }}>
      <h1
        className="resources-title pb-2 pt-5"
        style={{
          fontWeight: "400",
          fontSize: "60px",
          color: "#B2B9BD",
        }}
      >
        Resources
        <img src={tools} alt="tools" className="tools" />
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 300px)",
          gap: "20px",
          justifyContent: "center",
          margin: "0 auto",
          maxWidth: "1200px",
          marginBottom: "50px",
        }}
      >
        <div className="card card-tech">
          <a href="https://www.python.org/">
            <img
              src={python}
              alt="python"
              style={{ maxWidth: "50%", height: "auto", marginTop: "10px" }}
            />
          </a>
          <div className="card-text mx-2 mt-2 mb-1">
            Python was utilized for creating Pydantic models, working with
            Psycopg, and writing unit tests.
          </div>
        </div>
        <div className="card card-tech">
          <a href="https://getbootstrap.com/">
            <img
              src={bootstrap}
              alt="Bootstrap"
              style={{ maxWidth: "50%", height: "auto", marginTop: "10px" }}
            />
          </a>
          <div className="card-text mx-2 mt-2 mb-1">
            Bootstrap was used to style and design multiple elements in the
            front end.
          </div>
        </div>
        <div className="card card-tech">
          <a href="https://excalidraw.com/">
            <img
              src={excalidraw}
              alt="excalidraw"
              style={{ maxWidth: "50%", height: "auto", marginTop: "10px" }}
            />
          </a>
          <div className="card-text mx-2 mt-2 mb-1">
            Excalidraw was utilized to create wireframes during the exploratory
            phase of the project.
          </div>
        </div>
        <div className="card card-tech">
          <a href="https://www.postgresql.org/">
            <img
              src={postgresql}
              alt="postgresql"
              style={{ maxWidth: "50%", height: "auto", marginTop: "10px" }}
            />
          </a>
          <div className="card-text mx-2 mt-2 mb-1">
            PostgreSQL was used to create a relational database and store all of
            the data.
          </div>
        </div>
        <div className="card card-tech">
          <a href="https://fastapi.tiangolo.com/">
            <img
              src={fastapi}
              alt="fastapi"
              style={{ maxWidth: "50%", height: "auto", marginTop: "10px" }}
            />
          </a>
          <div className="card-text mx-2 mt-2 mb-1">
            FastAPI was the framework we used to build the backend of our web
            application.
          </div>
        </div>
        <div className="card card-tech">
          <a href="https://www.flaticon.com/">
            <img
              src={flaticon}
              alt="flaticon"
              style={{ maxWidth: "50%", height: "auto", marginTop: "10px" }}
            />
          </a>
          <div className="card-text mx-2 mt-2 mb-1">
            Flat Icon was used for a large number of images and icons in our
            application.
          </div>
        </div>
        <div className="card card-tech">
          <a href="https://reactjs.org/">
            <img
              src={react}
              alt="react"
              style={{ maxWidth: "50%", height: "auto", marginTop: "10px" }}
            />
          </a>
          <div className="card-text mx-2 mt-2 mb-1">
            React was used to create Munch's interactive user interface and
            seamless user experience.
          </div>
        </div>
        <div className="card card-tech">
          <a href="https://www.javascript.com/">
            <img
              src={javascript}
              alt="javascript"
              style={{ maxWidth: "50%", height: "auto", marginTop: "10px" }}
            />
          </a>
          <div className="card-text mx-2 mt-2 mb-1">
            JavaScript React was used to build out the front end of our website.
          </div>
        </div>
        <div className="card card-tech">
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <img
              src={css}
              alt="css"
              style={{ maxWidth: "50%", height: "auto", marginTop: "10px" }}
            />
          </a>
          <div className="card-text mx-2 mt-2 mb-1">
            CSS was used to style and formate many JSX elements.
          </div>
        </div>
      </div>
      <footer
        style={{
          height: "auto",
        }}
      >
        <div>
          <div className="container footer-text text-center text-md-start">
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
                  <a href="resources" className="text-reset">
                    Resources
                  </a>
                </p>
              </div>
              <div className="col-md-3 mx-auto text-center center">
                <h3 className="white-munch-logo mt-1">
                  <Link to="/">
                    <img
                      src={white_munch}
                      alt="white_munch"
                      width="100px"
                    ></img>
                  </Link>
                </h3>
                <p>
                  Munch is a social media app for food enthusiasts to connect
                  with friends and discover new culinary hotspots in any city
                </p>
              </div>

              <div className="col-md-3 mx-auto text-center center">
                <h6 className="text-uppercase fw-bold mb-3 mt-3">Contact us</h6>
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
        <div className="text-center footer-text p-1 mt-2 btm-footer">
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
  );
}

export default Resources;
