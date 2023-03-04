import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useAuthContext } from "./Auth";

function EditMunch({ backgroundImage }) {
  let { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuthContext();
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [photo, setPhoto] = useState("");
  const [userId, setUserId] = useState("");
  //   const [tag, setTag] = useState("");
  //   const [tags, setTags] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = React.createRef();

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(value);
  };

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  const handleStateChange = (event) => {
    const value = event.target.value;
    setState(value);
  };

  const handleRatingChange = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (event) => {
    const value = event.target.value;
    setReview(value);
    event.target.style.height = `${event.target.scrollHeight}px`;
    event.target.style.resize = "none";
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUserIdChange = (event) => {
    const value = event.target.value;
    setUserId(value);
  };

  //   const handleTagChange = (event) => {
  //     const value = event.target.value;
  //     setTag(value);
  //   };

  const clearState = () => {
    setLocation("");
    setCity("");
    setState("");
    setRating("");
    setReview("");
    setPhoto("");
    setUserId("");
    // setTag("");
    // setTags("");
    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.location = location;
    data.city = city;
    data.state = state;
    data.rating = rating;
    data.review = review;
    data.photo = photo;
    data.user_id = userId;
    // data.tag = tag;

    const munchUrl = `http://localhost:8010/munches/${id}`;
    const fetchConfig = {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(munchUrl, fetchConfig);
    if (response.ok) {
      setSubmitted(true);
      clearState();
      navigate("/home");
    }
  };

  useEffect(() => {
    const getOneMunch = async () => {
      try {
        const url = `http://localhost:8010/munches/${id}`;
        const fetchConfig = {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await fetch(url, fetchConfig);
        console.log("Edit Token:", token);
        console.log("response", response);
        if (response.ok) {
          const data = await response.json();
          setLocation(data.location);
          setCity(data.city);
          setState(data.state);
          setReview(data.review);
          setPhoto(data.photo);
          setRating(data.rating);
          setUserId(data.user_id);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getOneMunch();
  }, [id, token]);

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
                  <Link to="/home">
                    <h1 className="text-center mb-3">
                      <img
                        src="../../edit_munch.png"
                        alt="Logo"
                        style={{
                          maxWidth: "100%",
                          width: "350px",
                        }}
                      />
                    </h1>
                  </Link>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleLocationChange}
                      placeholder="Location"
                      required
                      type="text"
                      name="location"
                      className="form-control"
                      value={location}
                    />
                    <label className="form-label" htmlFor="location">
                      Location
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleCityChange}
                      placeholder="City"
                      required
                      type="text"
                      name="city"
                      className="form-control"
                      value={city}
                    />
                    <label className="form-label" htmlFor="location">
                      City
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleStateChange}
                      placeholder="State"
                      required
                      type="text"
                      name="state"
                      className="form-control"
                      value={state}
                    />
                    <label className="form-label" htmlFor="location">
                      State (ex: California)
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      onChange={handleReviewChange}
                      placeholder="Review"
                      rows="20"
                      style={{ minHeight: 100, overflow: "hidden" }}
                      required
                      type="text"
                      name="review"
                      className="form-control"
                      value={review}
                    />
                    <label className="form-label" htmlFor="review">
                      Review
                    </label>
                  </div>
                  <div className="form-floating">
                    <button
                      type="button"
                      className="btn text-bold"
                      style={{
                        background: "#FFDE79",
                        color: "#512b20",
                        fontWeight: "bold",
                      }}
                      onClick={() => fileInputRef.current.click()}
                    >
                      Change Photo
                    </button>
                    <input
                      type="file"
                      className="form-control"
                      id="photo"
                      ref={fileInputRef}
                      onChange={handlePhotoChange}
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                    {photo && (
                      <div className="my-3">
                        <img
                          src={photo}
                          alt="preview"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    )}
                  </div>
                  {/* <div className="form-floating mb-3">
                    <input
                      onChange={handleTagChange}
                      placeholder="Tags"
                      required
                      type="text"
                      name="tags"
                      className="form-control"
                      value={tag}
                    />
                    <label className="form-label" htmlFor="tags">
                      Tags
                    </label>
                  </div> */}
                  <div className="form-floating mb-3">
                    <Rating
                      onClick={handleRatingChange}
                      rate={rating}
                      size={35}
                      label
                      transition
                      fillColor="#FFE085"
                      emptyColor="gray"
                      className="foo" // Will remove the inline style if applied
                    />
                  </div>

                  {/* hidden user id */}
                  <div className="form-floating mb-3 d-none">
                    <input
                      onChange={handleUserIdChange}
                      placeholder="userId"
                      rows="20"
                      type="integer"
                      name="userId"
                      className="form-control"
                      value={userId}
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="button-container" style={{ display: "flex" }}>
                    <button
                      className="btn btn-md lead text-bold text mx-2"
                      style={{
                        background: "#F8D876",
                        fontWeight: "750",
                        color: "#512b20",
                        width: "100%",
                        fontSize: "18px",
                        height: "40px",
                      }}
                      type="submit"
                      value="Update Munch"
                    >
                      Submit
                    </button>
                    {"  "}
                  </div>
                </form>
                {submitted && (
                  <div
                    className="alert text-center alert-success mb-0 p-4 mt-4"
                    id="success-message"
                  >
                    Your munch has been posted!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditMunch;
