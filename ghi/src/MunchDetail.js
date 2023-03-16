import React, { useEffect, useState } from "react";
import { useAuthContext } from "./Auth";
import { Link, useParams, useNavigate } from "react-router-dom";
import star from "./images/star.png";

function MunchDetail() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [munch, setMunch] = useState([]);
  const { token } = useAuthContext();
  const [userId, setUserId] = useState("");
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [munchId, setMunchId] = useState("");
  const [username, setUsername] = useState("");

  const handleDelete = async () => {
    const munchUrl = `${process.env.REACT_APP_MUNCH_API_HOST}/munches/${id}`;
    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(munchUrl, fetchConfig);
    if (response.ok) {
      navigate("/home");
    }
  };

  const handleCommentChange = (event) => {
    const value = event.target.value;
    setComment(value);
    event.target.style.height = `${event.target.scrollHeight}px`;
    event.target.style.resize = "none";
  };

  const clearState = () => {
    setComment("");
    setMunchId("");
    setUserId("");
    setUsername("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.comment = comment;
    data.munch_id = munchId;
    data.user_id = userId;
    data.user_username = username;

    const commentUrl = `${process.env.REACT_APP_MUNCH_API_HOST}/comments/${data.munch_id}`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(commentUrl, fetchConfig);
    if (response.ok) {
      clearState();
    }
  };

  useEffect(() => {
    const getOneMunch = async () => {
      const url = `${process.env.REACT_APP_MUNCH_API_HOST}/munches/${id}`;
      const fetchConfig = {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        setMunch(data);
        setMunchId(data.id);
        handleSubmit(data.id);
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
          setUsername(data.account.username);
        }
      } catch (e) {
        console.error(e);
      }
    };

    const getComments = async () => {
      const commentUrl = `${process.env.REACT_APP_MUNCH_API_HOST}/comments`;
      const fetchConfig = {
        method: "get",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(commentUrl, fetchConfig);
      if (response.ok) {
        const data = await response.json();
        const filteredComments = data.filter(
          (comment) => comment.munch_id === munch.id
        );
        setComments(filteredComments);
      }
    };

    if (token) {
      getOneMunch();
      getComments();
    }
    fetchID();
    // eslint-disable-next-line
  }, [token, id, userId, comments.munch_id, munch.id]);

  if (userId === Number(munch.user_id)) {
    return (
      <>
        <div
          className="p-5 bg-image"
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="d-flex">
            <div
              className="card munch-detail-card mr-5"
              style={{
                height: "auto",
                width: "550px",
              }}
            >
              <Link
                to={`/munches/${munch.user_username}`}
                className="at-username card-link"
              >
                <div className="mx-3 mt-1">
                  <h2
                    style={{
                      fontSize: "15px",
                      textAlign: "right",
                    }}
                  >
                    @{munch.user_username}
                  </h2>
                </div>
              </Link>
              <img
                src={munch.photo}
                className="card-img-top px-3"
                alt="Munch"
              />
              <div className="card-body">
                <h3
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
                      fontSize: "0.7em",
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
                        marginLeft: "1",
                      }}
                    ></img>
                  </div>
                </h3>
                <div className="card-city-state" style={{ marginTop: "0" }}>
                  {munch.city}, {munch.state}
                </div>
                <p className="card-review pt-3">{munch.review}</p>
                <div
                  className="button-container mt-4 mb-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Link to={`/munch/edit/${id}`}>
                    <button
                      className="btn btn-edit-munch btn-md lead text-bold text mx-2"
                      style={{
                        fontWeight: "725",
                        width: "150px",
                        height: "40px",
                      }}
                      type="submit"
                      value="Update Munch"
                    >
                      Edit Munch
                    </button>
                  </Link>
                  {"  "}
                  <button
                    onClick={handleDelete}
                    className="btn btn-delete-munch btn-md lead text-bold text mx-2"
                    style={{
                      fontWeight: "725",
                      color: "white",
                      width: "150px",
                      height: "40px",
                    }}
                    type="button"
                    value="Delete Munch"
                  >
                    Delete Munch
                  </button>
                </div>
              </div>
            </div>
            <div className="comment-components px-3">
              <div
                className="comments-container mb-4"
                style={{
                  padding: "20px",
                  width: "400px",
                  maxHeight: "540px",
                  overflowY: "auto",
                }}
              >
                {comments.map((comment, idx) => {
                  return (
                    <p
                      key={comment.id + idx.toString()}
                      style={{ marginBottom: "15px" }}
                    >
                      <Link
                        to={`/munches/${comment.user_username}`}
                        style={{ textDecoration: "none" }}
                      >
                        <strong style={{ marginRight: "8px" }}>
                          @{comment.user_username}
                        </strong>
                      </Link>
                      {"  "}
                      <span>{comment.comment}</span>
                    </p>
                  );
                })}
              </div>
              <form
                className="form form-shadow p-5 m-1"
                onSubmit={handleSubmit}
                style={{ padding: "20px" }}
              >
                <div className="form-floating mb-3">
                  <textarea
                    onChange={handleCommentChange}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        handleSubmit(event);
                      }
                    }}
                    placeholder="comment"
                    rows="20"
                    style={{ minHeight: 100, overflow: "hidden" }}
                    required
                    type="text"
                    name="comment"
                    className="form-control"
                    value={comment}
                  />
                  <label className="form-label" htmlFor="comment">
                    Add a comment...
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-comment btn-md text-bold text"
                    style={{
                      fontWeight: "725",
                      width: "150px",
                      height: "40px",
                    }}
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="p-5 bg-image"
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="d-flex">
          <div
            className="card munch-detail-card mr-5"
            style={{
              height: "auto",
              width: "550px",
            }}
          >
            <Link to={`/munches/${munch.user_username}`} className="card-link">
              <div className="form-floating mx-3 mt-1">
                <h2
                  style={{
                    fontSize: "15px",
                    textAlign: "right",
                  }}
                >
                  @{munch.user_username}
                </h2>
              </div>
            </Link>
            <img src={munch.photo} className="card-img-top px-3" alt="Munch" />
            <div className="card-body">
              <h3
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
                    fontSize: "0.7em",
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
                      marginLeft: "1",
                    }}
                  ></img>
                </div>
              </h3>
              <div className="card-city-state" style={{ marginTop: "0" }}>
                {munch.city}, {munch.state}
              </div>
              <p className="card-review pt-3">{munch.review}</p>
            </div>
          </div>
          <div className="comment-components px-3">
            <div
              className="comments-container mb-4"
              style={{
                padding: "20px",
                width: "400px",
                maxHeight: "540px",
                overflowY: "auto",
              }}
            >
              {comments.map((comment, idx) => {
                return (
                  <p key={comment.id + idx.toString()}>
                    <Link
                      to={`/munches/${comment.user_username}`}
                      style={{ textDecoration: "none" }}
                    >
                      <strong style={{ marginRight: "8px" }}>
                        @{comment.user_username}
                      </strong>
                    </Link>{" "}
                    <span>{comment.comment}</span>
                  </p>
                );
              })}
            </div>
            <form
              className="form form-shadow p-5 m-1"
              onSubmit={handleSubmit}
              style={{ padding: "20px" }}
            >
              <div className="form-floating mb-3">
                <textarea
                  onChange={handleCommentChange}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      handleSubmit(event);
                    }
                  }}
                  placeholder="comment"
                  rows="20"
                  style={{ minHeight: 100, overflow: "hidden" }}
                  required
                  type="text"
                  name="comment"
                  className="form-control"
                  value={comment}
                />
                <label className="form-label" htmlFor="comment">
                  Add a comment...
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-comment btn-md text-bold text"
                  style={{
                    fontWeight: "725",
                    width: "150px",
                    height: "40px",
                  }}
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default MunchDetail;
