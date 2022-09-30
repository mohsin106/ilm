import React, { useState } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link, useLocation, useParams } from "react-router-dom";

const AddReview = props => {
  let initialReviewState = ""
  let id = useParams()
  console.log(id.id)
  let editing = false;
  const location = useLocation()
  console.log(location.state)
  // console.log(location.state._id)
  
  if (location.state) {
    editing = true;
    initialReviewState = location.state.text
  }

  // console.log(editing)
  // console.log(initialReviewState)
  // console.log(props.user)

  const [review, setReview] = useState(initialReviewState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    setReview(event.target.value);
  };

  const saveReview = () => {
    var data = {
      text: review,
      name: props.user.name,
      user_id: props.user.id,
      restaurant_id: id
    };

    if (editing) {
      data.review_id = location.state._id
      RestaurantDataService.updateReview(data)
        .then(response => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      RestaurantDataService.createReview(data)
        .then(response => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

  };

  return (
    <div>
      {/* props.user is being sent to this component from App.js */}
      {props.user ? (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <Link to={`/restaurants/${id.id}`} className="btn btn-success">
              Back to Restaurant
            </Link>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="description">{ editing ? "Edit" : "Create" } Review</label>
              <input
                type="text"
                className="form-control"
                id="text"
                required
                value={review}
                onChange={handleInputChange}
                name="text"
              />
            </div>
            <button onClick={saveReview} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>

      ) : (
      <div>
        Please log in.
      </div>
      )}

    </div>
  );
};

export default AddReview;