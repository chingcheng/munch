import React, {useEffect, useState} from 'react';
import { useAuthContext } from './Auth'
import { NavLink } from "react-router-dom";

function MunchDetail({id}) {
    const [munch, setMunches] = useState([])
    const { token } = useAuthContext

    const getMunches = async () => {
        const url =`http://localhost:8010/munches/${id}`;
        const fetchConfig = {
        method: "get",
          headers: {
            Authorization: `Bearer ${token}`
          },
        };
        const response = await fetch(url, fetchConfig);
        console.log("response", response)
        if(response.ok) {
            const data = await response.json();
            setMunches(data);
        }
    };


    useEffect(() => {
    getMunches();
    }, [token]);

    return (
      <>
        <div className="container-fluid removeMargin">
          <div
            className="p-5 bg-image"
            style={{
              backgroundColor: "#FFFAEB",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              minHeight: "100vh",
            }}
          >
            <div className="hero-image text-center center-block">
              <h1>
              </h1>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center"></div>
              <div className="container mt-3">
              </div>
              <p></p>
              <div className="container mt-3">
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>City</th>
              <th>State</th>
              <th>Review</th>
              <th>Photo</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>

            <tr key={munch.id}>
              <td>{munch.location}</td>
              <td>{munch.city}</td>
              <td>{munch.state}</td>
              <td>{munch.review}</td>
              <td>{munch.photo}</td>
              <td>{munch.rating}</td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
</div>
</div>
</>
);
}

export default MunchDetail;
