import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./Auth";
import munch_transparent from "./images/munch_transparent.png";
import munch_slogan from "./images/munch_slogan.png";
import star from "./images/star.png";

function MunchesColumn(props) {
  return (
    <div className="col bg-color">
      {props.list.map((munch) => (
        <div key={munch.id}>
          <Link to={`/munch/${munch.id}`} className="card-link">
            <div
              className="card"
              style={{
                height: "399px",
                marginBottom: "45px",
                marginLeft: "20px",
                border: "0",
              }}
            >
              <img
                src={munch.photo}
                className="card-img-top"
                alt={`${munch.location}`}
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
                loading="lazy"
              />
              <div
                className="card-body"
                style={{
                  height: "100%",
                  overflow: "hidden",
                  padding: 0,
                  margin: 0,
                }}
              >
                <h5
                  className="card-location mt-3"
                  style={{
                    marginBottom: "0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {munch.location}
                  <div
                    className="d-flex"
                    style={{
                      fontSize: "0.9em",
                      justifyContent: "end",
                      marginLeft: "auto",
                    }}
                  >
                    {munch.rating}
                    <img
                      src={star}
                      alt="star"
                      style={{
                        width: "0.9em",
                        height: "0.9em",
                        marginLeft: "1px",
                      }}
                    ></img>
                  </div>
                </h5>
                <div className="d-flex">
                  <div
                    className="card-city-state"
                    style={{
                      marginTop: "0",
                      marginBottom: "10px",
                      fontSize: "0.9em",
                    }}
                  >
                    {munch.city}, {munch.state}
                  </div>
                </div>
                <p className="card-review">{munch.review}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

function HomePage() {
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
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <div className="px-4 py-5 my-5 mt-0 text-center bg-transparent">
          <Link to="/home">
            <img src={munch_transparent} alt="Logo" width="450" />
            <div>
              <p>
                <img src={munch_slogan} alt="Slogan" width="350px" />
              </p>
            </div>
          </Link>
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

export default HomePage;
