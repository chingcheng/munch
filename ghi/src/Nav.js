import { NavLink } from "react-router-dom";
// import "navbar-fixed";

function Nav({ backgroundImage }) {
  return (
    <>
      <div
        className="offcanvas offcanvas-end show"
        id="demo"
        style={{ transform: "translateX(0)" }}
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Inventory</h1>
        </div>
        <div className="offcanvas-body">
          <p>Click one of the navigation links below:</p>
          <NavLink className="nav-link" to="/manufacturers/new/">
            <button className="btn btn-dark">Create a Manufacturer</button>
          </NavLink>
          <NavLink className="nav-link" to="/manufacturers/">
            <button className="btn btn-dark">Manufacturer List</button>
          </NavLink>
          <NavLink className="nav-link" to="/models/new">
            <button className="btn btn-dark">Add a Vehicle Model</button>
          </NavLink>
          <NavLink className="nav-link" to="/models/">
            <button className="btn btn-dark">Vehicle Models List</button>
          </NavLink>
          <NavLink className="nav-link" to="/automobiles/new">
            <button className="btn btn-dark">Add an Automobile</button>
          </NavLink>
          <NavLink className="nav-link" to="/automobiles/all">
            <button className="btn btn-dark">Automobiles List</button>
          </NavLink>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-sm navbar-dark"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, 0.68), rgba(0,0,0, 0.68)), url('${backgroundImage}')`,
          backgroundColor: "#FFFAEB",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
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
                  SignUp
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/munches-create">
                  Create a Munch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/munches-create">
                  Account
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
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}

export default Nav;
