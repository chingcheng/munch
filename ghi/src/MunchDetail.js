import React, { useEffect, useState } from "react";
import { useAuthContext } from "./Auth";
import { Link, useParams, useNavigate } from "react-router-dom";
import star from "./images/star.png";
// import Button from ".react-bootstrap"

function MunchDetail() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [munch, setMunch] = useState([]);
  const { token } = useAuthContext();
  const [userId, setUserId] = useState("");
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [munchId, setMunchId] = useState("");
  const [commentId, setCommentId] = useState("");
  // const [userUserId, setUserUserId] = useState("");
  const [username, setUsername] = useState("");
  console.log("commentId from top", commentId)
  console.log("id", id)
  // console.log("munch_id", munch_id)
  console.log("munchId", munchId)
  console.log("comments", comments)

  const handleCommentChange = (event) => {
    const value = event.target.value;
    setComment(value);
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

    data.comment = comment
    data.munch_id = munchId;
    data.user_id = userId;
    data.user_username = username;
    data.id = commentId;

    console.log("DATA", data)
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
    console.log("response", response)
    if (response.ok) {
      clearState();
      setCommentId(commentId);
    }
  };

  const handleDeleteComment = async () => {
    console.log("comment", comment)
    const commentId = comment.id
    console.log("commentId", commentId)
    const commentUrl = `${process.env.REACT_APP_MUNCH_API_HOST}/comments/${commentId}`;
    console.log("comment.id", comment.id)
    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(commentUrl, fetchConfig);
    console.log("delete response", response)
    if (response.ok) {
      // getComments();
      }
  };

  const handleDelete = async () => {
    const munchUrl = `${process.env.REACT_APP_MUNCH_API_HOST}/munches/${id}`;
    const fetchConfig = {
      method: "delete",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(munchUrl, fetchConfig);
    if (response.ok) {
      navigate("/home");
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
        console.log("getonemunchdata", data)
        setMunch(data);
        setMunchId(data.id)
        handleSubmit(data.id)
      }
    };

    const fetchID = async () => {
      try {
        const url = `${process.env.REACT_APP_MUNCH_API_HOST}/token`;
        const fetchConfig = {
          credentials: "include",
        };
        console.log("token", token.data)

        const response = await fetch(url, fetchConfig);
        console.log("token response", response)
        if (response.ok) {
          const data = await response.json();
          setUserId(data.account.id);
          console.log("data.account.id", data.account.id)
          setUsername(data.account.username);
        }
      } catch (e) {
        console.error(e);
      }
    };

    const getComments = async () => {
      const commentUrl =`${process.env.REACT_APP_MUNCH_API_HOST}/comments`;
      const fetchConfig = {
        method: "get",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };
        const response = await fetch(commentUrl, fetchConfig);
        console.log(response)
        if (response.ok) {
          const data = await response.json();
          console.log("comments", data)
          const filteredComments = data.filter((comment) => comment.munch_id === munch.id)
          console.log("comment.munch_id", comments.munch_id)
          setComments(filteredComments);
          console.log("filtered comments", filteredComments)
        }
      };

    const handleSubmit = async (event) => {
      event.preventDefault();

      const data = {};

      data.comment = comment
      data.munch_id = munchId;
      data.user_id = userId;
      data.user_username = username;

      console.log("DATA", data)
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
      console.log("response", response)
      if (response.ok) {
        clearState();
      }
    };

    // const getOneComment = async () => {
    //   try {
    //     const url = `${process.env.REACT_APP_MUNCH_API_HOST}/comments/${id}`;
    //     const fetchConfig = {
    //       method: "get",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     };
    //     const response = await fetch(url, fetchConfig);
    //     if (response.ok) {
    //       const data = await response.json();
    //       setComment(data.comment);
    //       setMunchId(data.munch_id);
    //       setUserId(data.user_id);
    //       setUsername(data.user_username);
    //     }
    //   } catch (e) {
    //     console.error(e);
    //   }
    // };

    if (token) {
      getOneMunch();
      getComments();
      handleSubmit();
    }

    fetchID();
  }, [token, id, userId, comments.munch_id, munch.id, comment, munchId, username]);

  if (userId === Number(munch.user_id)) {
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
          <div className="container mt-5">
            <div className="row">
              <div className="offset-3 col-6">
                <div className="col mx-auto d-flex justify-content-center">
                  <div
                    className="card munch-detail-card"
                    style={{
                      height: "auto",
                      width: "550px",
                    }}
                  >
                    <Link
                      to={`/munches/${munch.user_username}`}
                      className="card-link"
                    >
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
                      <div
                        className="card-city-state"
                        style={{ marginTop: "0" }}
                      >
                        {munch.city}, {munch.state}
                      </div>
                      <p className="card-review pt-3">{munch.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="button-container mt-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link to={`/munch/edit/${id}`}>
              <button
                className="btn btn-md lead text-bold text mx-2"
                style={{
                  background: "#FFEBAD",
                  fontWeight: "725",
                  color: "#834534",
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
              className="btn btn-md lead text-bold text mx-2"
              style={{
                background: "#f4989c",
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
        <div className="comments">
          <table className="comments-table">
            <tbody>
              {comments.map((comment, idx) => {
                return (
                  <>
                    <tr key={comment.id + idx.toString()}>
                      <td>{comment.user_username}</td>
                      <td>{comment.comment}</td>
                      <>
                        {userId === comment.user_id ? (
                          <>
                            <td>
                              {
                                <button
                                  id={comment.id}
                                  onClick={() => handleDeleteComment(comment)}
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  delete
                                </button>
                              }
                            </td>
                            <td>
                              {
                                <button
                                  id={comment.id}
                                  onClick={() => handleDeleteComment(comment)}
                                  type="button"
                                  className="btn btn-warning"
                                >
                                  edit
                                </button>
                              }
                            </td>
                          </>
                        ) : (
                          <div></div>
                        )}
                      </>
                    </tr>
                  </>
                );
              })}
              ;
            </tbody>
          </table>
          <form className="form form-shadow p-5 m-1" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <textarea
                onChange={handleCommentChange}
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
                Comment
              </label>
            </div>

            <button>Submit</button>
            {
            <button
              onClick={handleDeleteComment}
              className="btn btn-md lead text-bold text mx-2"
              style={{
                background: "#f4989c",
                fontWeight: "725",
                color: "white",
                width: "150px",
                height: "40px",
              }}
              type="button"
              value="Delete Munch"
            ></button>}
          </form>
        </div>
      </>
    );
  }
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
        <div className="container mt-5">
          <div className="row">
            <div className="offset-3 col-6">
              <div className="col mx-auto d-flex justify-content-center">
                <div
                  className="card munch-detail-card"
                  style={{
                    height: "auto",
                    width: "550px",
                  }}
                >
                  <Link
                    to={`/munches/${munch.user_username}`}
                    className="card-link"
                  >
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
                  <img
                    src={munch.photo}
                    className="card-img-top px-3"
                    alt="Munch" />
                  <div className="card-body">
                    <h3
                      className="card-location"
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
                            marginLeft: "1px",
                          }}
                        ></img>
                      </div>
                    </h3>
                    <p className="card-city-state" style={{ marginTop: "0" }}>
                      {munch.city}, {munch.state}
                    </p>
                    <p className="card-review pt-3">{munch.review}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="button-container mt-4"
          style={{ display: "flex", justifyContent: "center" }}
        ></div>
      </div>
      <div className="comments">
        <table className="comments-table">
          <tbody>
        {comments.map((comment, idx) => {
          return (
            <>
              <tr key={comment.id + idx.toString()}>
                <td>{comment.user_username}</td>
                <td>{comment.comment}</td>

              {userId === comment.user_id ? (
                <><td>{(
                    <button id={comment.id} onClick={() => handleDeleteComment(comment)}
                      type="button" className="btn btn-danger">
                      delete
                    </button>
                  )}</td><td>{(
                    <button id={comment.id} onClick={() => handleDeleteComment(comment)}
                      type="button" className="btn btn-warning">
                      edit
                    </button>

                  )}</td></>
          ): (<div></div>)}
              </tr>
            </>
          );
        }

        )};
        </tbody>
        </table>
        <form className="form form-shadow p-5 m-1" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <textarea
              onChange={handleCommentChange}
              placeholder="comment"
              rows="20"
              style={{ minHeight: 100, overflow: "hidden" }}
              required
              type="text"
              name="comment"
              className="form-control"
              value={comment} />
            <label className="form-label" htmlFor="comment">
              Comment
            </label>
          </div>

          <button>Submit</button>

        </form>
      </div>
      </>
  );
}
export default MunchDetail;
