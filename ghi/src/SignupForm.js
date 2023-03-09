import React, { useState } from "react";
import { useToken } from "./Auth";
import { useNavigate, Link } from "react-router-dom";
import munch_transparent from "./images/munch_transparent.png";
import munch_slogan from "./images/munch_slogan.png";

function SignupForm({ backgroundImage }) {
  const navigate = useNavigate();
  const { signup } = useToken();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const clearState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setBio("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signup(
      first_name,
      last_name,
      email,
      username,
      password,
      bio
    );
    if (response === true) {
      clearState();
      navigate("/login");
    } else {
      setError("Username or email is already in use.");
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
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-2 m-4">
                <form
                  className="form p-5 m-1"
                  id="create-signup-form"
                  onSubmit={handleSubmit}
                >
                  <Link to="/">
                    <h1 className="text-center">
                      <img
                        src={munch_transparent}
                        alt="Logo"
                        style={{
                          maxWidth: "100%",
                          width: "350px",
                        }}
                      />
                    </h1>
                  </Link>
                  <p>
                    <img
                      src={munch_slogan}
                      alt="Slogan"
                      style={{
                        maxWidth: "100%",
                        width: "350px",
                      }}
                    />
                  </p>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleFirstNameChange}
                      placeholder="First Name"
                      required
                      type="text"
                      name="first_name"
                      className="form-control"
                      value={first_name}
                    />
                    <label className="form-label" htmlFor="first_name">
                      First Name
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleLastNameChange}
                      placeholder="Last Name"
                      required
                      type="text"
                      name="last_name"
                      className="form-control"
                      value={last_name}
                    />
                    <label className="form-label" htmlFor="last_name">
                      Last Name
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleEmailChange}
                      placeholder="Email"
                      required
                      type="text"
                      name="email"
                      className="form-control"
                      value={email}
                    />
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleUsernameChange}
                      placeholder="Username"
                      required
                      type="text"
                      name="username"
                      className="form-control"
                      value={username}
                    />
                    <label className="form-label" htmlFor="email">
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
                        background: "#F8D876",
                        fontWeight: "725",
                        color: "#512b20",
                      }}
                      type="submit"
                      value="Sign Up"
                    >
                      Sign Up
                    </button>
                  </div>
                  <a href="login" className="munchkin-link">
                    Already a Munchkin?
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

export default SignupForm;
