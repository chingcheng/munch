import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./Auth";
import munch_bunch from "./images/munch_bunch.png";
import star from "./images/star.png";

function MunchesColumn(props) {
  return (
    <div className="col">
      {props.list.map((munch) => (
        <div key={munch.id}>
          <Link to={`/munch/${munch.id}`} className="card-link">
            <div
              className="card"
              style={{
                height: "415px",
                marginBottom: "45px",
                marginLeft: "20px",
                backgroundColor: "#FFFBFA",
                border: "0",
              }}
            >
              <img
                src={munch.photo}
                className="card-img-top"
                alt={`${munch.location}`}
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <div
                className="card-body"
                style={{
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <h5 className="card-location">{munch.location}</h5>
                <p className="card-review">{munch.review}</p>
              </div>
              <div
                className="card-footer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "40px",
                  backgroundColor: "#FFFBFA",
                }}
              >
                <div className="location-info">
                  <small className="text-muted">
                    {munch.city}, {munch.state}
                  </small>
                </div>
                <div className="rating-info">
                  <small className="text-muted">
                    {munch.rating}
                    <img
                      src={star}
                      alt="star"
                      style={{
                        width: "0.9em",
                        height: "0.9em",
                        marginTop: "-0.25em",
                      }}
                    ></img>
                  </small>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
function AllMunches() {
  const [munchColumns, setMunchColumns] = useState([[], [], []]);
  const { token } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${process.env.REACT_APP_MUNCH_API_HOST}/munches`;
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
          backgroundColor: "#FFFBFA",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <Link to="/munchbunch">
          <div className="px-4 py-5 my-5 mt-0 text-center bg-transparent">
            <img src={munch_bunch} alt="Munch Bunch" width="450" />
          </div>
        </Link>
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
