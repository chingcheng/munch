import React, {useEffect, useState} from 'react';
import { useAuthContext } from './Auth'
import { NavLink, useParams} from "react-router-dom";


function EditUser({ backgroundImage }) {
  let { id } = useParams();
  const [user, setUser] = useState([])
  const { token } = useAuthContext();

  const getUser = async () => {
    console.log("token!!!", token)
    const url =`http://localhost:8010/accounts/${id}`;
    const fetchConfig = {
    method: "get",
      headers: {
        Authorization: `Bearer ${token}`
      },
    };
    const response = await fetch(url, fetchConfig);
    console.log("response!!", response);
    if(response.ok) {
        const data = await response.json();
        setUser(data);
    }
};

  useEffect(() => {
  getUser();
  }, [token, id]);

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
        <NavLink to="/">
          <img
            src="../munch_icon.png"
            alt="Icon"
            width="65px"
            style={{
              position: "absolute",
              top: 9,
              left: 15,
            }}
          />
        </NavLink>
        <div className="container text-center mt-5">
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-2 m-4">
                  <NavLink to="/">
                    <p className="text-center">
                      <img
                        src="../munch_transparent.png"
                        alt="Logo"
                        style={{
                          maxWidth: "100%",
                          width: "7350px",
                        }}
                      />
                    </p>
                  </NavLink>
                  <div className="form-floating mb-3">
                    <h2
                      style={{
                        color: "#FFE085",
                        size: "40px",
                      }}
                    >
                      {munch.first_name}
                    </h2>
                  </div>
                  <div className="form-floating mb-4">
                    <h2
                      style={{
                        color: "#FFE085",
                        size: "40px",
                      }}
                    >
                      {munch.last_name}
                    </h2>
                  </div>
                  <div className="form-floating mb-3">
                    <h2
                      style={{
                        color: "#FFE085",
                        size: "40px",
                      }}
                    >
                      {munch.username}
                    </h2>
                  </div>
                  <div className="form-floating mb-3">
                    <h2
                      style={{
                        color: "#FFE085",
                        size: "40px",
                      }}
                    >
                      {munch.email}
                    </h2>
                    <h2
                      style={{
                        color: "#FFE085",
                        size: "40px",
                      }}
                    >
                      {munch.bio}
                    </h2>
                  </div>
                  <div className="form-floating mb-3">
                    <p style={{ color: "#FFE085" }}>{munch.review}</p>
                  </div>
              </div>
            </div>
          </div>
          </div>
  </>
  );
}
export default EditUser;
