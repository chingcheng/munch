import { NavLink } from "react-router-dom";
// import "navbar-fixed";

function Nav({ backgroundImage }) {
  return (
    <>
      <nav
        className="navbar navbar-dark"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, 0.68), rgba(0,0,0, 0.68)), url('${backgroundImage}')`,
          backgroundColor: "#FFFAEB",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          position: "absolute",
          left: 3,
          top: -4,
        }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="./munch_icon.png" alt="Icon" width="65px" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/munches/create">
                  Create a Munch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/accounts/:id">
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
