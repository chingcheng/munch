import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useAuthContext } from "./Auth";
import create_munch from "./images/create_munch.png";

function CreateMunch() {
  const navigate = useNavigate();
  const { token } = useAuthContext();
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [photo, setPhoto] = useState("");
  const [userId, setUserId] = useState("");
  const [userUsername, setUserUsername] = useState("");
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

  const clearState = () => {
    setLocation("");
    setCity("");
    setState("");
    setRating("");
    setReview("");
    setPhoto("");
    setUserId("");
    setUserUsername("");
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
    data.user_username = userUsername;
    console.log("DATA", data);
    const munchUrl = `${process.env.REACT_APP_MUNCH_API_HOST}/munches`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(munchUrl, fetchConfig);
    console.log("response", response);
    if (response.ok) {
      clearState();
      navigate("/home");
    }
  };

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
        <div className="container text-center mt-5">
          <div className="row">
            <div className="offset-3 col-6">
              <form
                className="form form-shadow p-5 m-1"
                id="create-munch-form"
                onSubmit={handleSubmit}
              >
                <Link to="/home">
                  <h1 className="text-center mb-4">
                    <img
                      src={create_munch}
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
                    Establishment
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
                <div className="form-floating mb-3">
                  <button
                    type="button"
                    className="btn btn-add-photo"
                    style={{
                      fontWeight: "725",
                    }}
                    onClick={() => fileInputRef.current.click()}
                  >
                    Add a Photo
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
                <div className="form-floating mb-3">
                  <Rating
                    onClick={handleRatingChange}
                    rate={rating}
                    size={35}
                    label
                    transition
                    fillColor="#FFE085"
                    emptyColor="gray"
                    className="foo"
                  />
                </div>
                <div className="col text-center">
                  <button
                    className="btn btn-share-munch btn-md lead text-bold text"
                    style={{
                      width: "50%",
                      fontWeight: "725",
                      fontSize: "18px",
                      height: "40px",
                    }}
                    type="submit"
                    value="Create Munch"
                  >
                    Share
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateMunch;
