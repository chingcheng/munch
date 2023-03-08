import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./Auth";

function MunchesColumn(props) {
  return (
    <div className="col">
      {props.list.map((munch) => (
        <div key={munch.id}>
          <Link to={`/munch/${munch.id}`} className="card-link">
            <div
              className="card mb"
              style={{
                height: "415px",
                marginBottom: "35px",
                marginLeft: "10px",
              }}
            >
              <img
                src={munch.photo}
                className="card-img-top"
                alt={`${munch.location}`}
                style={{ maxWidth: "100%", maxHeight: "250px" }}
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
                }}
              >
                <div className="location-info">
                  <small className="text-muted">
                    {munch.city}, {munch.state}
                  </small>
                </div>
                <div className="rating-info">
                  <small className="text-muted">
                    Rating: {munch.rating}
                    <img
                      src="/star.png"
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

function HomePage({ backgroundImage }) {
  const [munchColumns, setMunchColumns] = useState([[], [], []]);
  const { token } = useAuthContext();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchFilterMunches = async (userId) => {
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
          const munches = await response.json();
          const filteredMunches = munches
            .filter((munch) => Number(munch.user_id) === userId)
            .reverse();
          const munchColumns = [[], [], []];
          filteredMunches.forEach((munch, index) =>
            munchColumns[index % 3].push(munch)
          );
          setMunchColumns(munchColumns);
        }
      } catch (e) {
        console.error(e);
      }
    };
    const fetchID = async () => {
      try {
        const url = `${process.env.REACT_APP_MUNCH_API_HOST}/token`;
        const fetchConfig = {
          credentials: "include",
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          const data = await response.json();
          setUserId(data.account.id);
          fetchFilterMunches(data.account.id);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchID();
  }, [token, userId]);

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
        <Link to="/home">
          <div className="px-4 py-5 my-5 mt-0 text-center bg-transparent">
            <img src="./munch_transparent.png" alt="" width="450" />
            <div>
              <p>
                <img src="./munch_slogan.png" alt="Slogan" width="350px" />
              </p>
            </div>
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

export default HomePage;
