import React, { useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function MunchesColumn(props) {
  return (
    <div className="col">
      {props.list.map((munch) => (
        <div key={munch.id} className="card mb-3 shadow">
          <img
            src={munch.photo}
            className="card-img-top"
            alt={`Photo of ${munch.location}`}
          />
          <div className="card-body">
            <h5 className="card-location">{munch.location}</h5>
            <p className="card-review">{munch.review}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Rating: {munch.rating}/5</small>
          </div>
        </div>
      ))}
    </div>
  );
}
function HomePage({ backgroundImage }) {
  const [munchColumns, setMunchColumns] = useState([[], [], []]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8010/munches");
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
  }, []);

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
        {/* <div><</div> */}
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

export default HomePage;
