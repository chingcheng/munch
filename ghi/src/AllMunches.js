import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./Auth";

function MunchesColumn(props) {
  return (
    <div className="col">
      {props.list.map((munch) => (
        <div key={munch.id}>
          <Link to={`/munches/${munch.id}`} className="card-link">
            <div className="card mb-3 shadow" style={{ height: "400px" }}>
              <img
                src={munch.photo}
                className="card-img-top"
                alt={`${munch.location}`}
                style={{ maxWidth: "100%", maxHeight: "250px" }}
              />
              <div
                className="card-body"
                style={{ height: "100px", overflow: "hidden" }}
              >
                <h5 className="card-location">
                  {munch.location} - {munch.username}
                </h5>

                <p className="card-review">{munch.review}</p>
              </div>
              <div className="card-footer" style={{ height: "50px" }}>
                <small className="text-muted">Rating: {munch.rating}/5</small>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
function AllMunches({ backgroundImage }) {
  const [munchColumns, setMunchColumns] = useState([[], [], []]);
  const { token } = useAuthContext();

useEffect(() => {
  const fetchData = async () => {
    try {
      const url = `http://localhost:8010/munches`;
      const fetchConfig = {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(url, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        const munchColumns = [[], [], []];
        data.forEach((munch, index) => munchColumns[index % 3].push(munch));
        setMunchColumns(munchColumns);
      }
    } catch (e) {
      console.error(e);
    }
  };

    fetchData();
  }, [token]);

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
        <div className="px-4 py-5 my-5 mt-0 text-center bg-transparent">
          <img src="./munch_transparent.png" alt="" width="450" />
          <div>
            <p>
              <img src="./munch_slogan.png" alt="Slogan" width="300px" />
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row"></div>
        </div>
        <div className="container">
          <div className="row">
            {munchColumns.map((munchList, index) => (
              <MunchesColumn key={index} list={munchList} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllMunches;
