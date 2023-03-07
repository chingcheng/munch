import "./index.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "./Auth";

function LoginForm({ backgroundImage }) {
  const navigate = useNavigate();
  const { login } = useToken();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login(username, password);
    if (response === true) {
      navigate("/home");
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <>
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
        <div className="container text-center mt-5">
          <div className="row row-login-size">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <form
                  className="form p-5 m-5"
                  id="create-login-form"
                  onSubmit={handleSubmit}
                >
                  <Link to="/">
                    <h1 className="text-center mb-3">
                      <img
                        src="./munch_transparent.png"
                        alt="Logo"
                        style={{
                          maxWidth: "100%",
                          width: "350px",
                        }}
                      />
                    </h1>
                  </Link>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleUsernameChange}
                      placeholder="Username"
                      required
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      value={username}
                    />
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handlePasswordChange}
                      placeholder="Password"
                      required
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      value={password}
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div className="col text-center">
                    <button
                      className="btn btn-lg lead text-bold text mb-4"
                      style={{
                        width: "100%",
                        background: "#FFE085",
                        fontWeight: "725",
                        color: "#512b20",
                      }}
                    >
                      Log In
                    </button>
                  </div>
                  <a href="signup" class="signup-munchkin">
                    Join the Munch Bunch!
                  </a>
                  {error && (
                    <div className="alert alert-danger mt-3">{error}</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
