// since we're using react-router-dom v6, we are passing in the "user" prop from App.js to here.
// the "user" prop contains "user.name" and "user.id" fields.
import React, { useState, useEffect } from "react"
import RestaurantDataService from "../services/restaurant.js"
import { Link, useParams } from "react-router-dom";

function Restaurant(props) {
  const [restaurant, setRestaurant] = useState({
    id: null,
    name: "",
    address: {},
    cuisine: "",
    reviews: []
  })
  // this function will call `RestaurantDataService` with the ID for the restaurant from the "services/restaurant.js" file and will be get back details about the specific restaurant.
  // it will also set the state of `restaurant` with the value it receives.
  let {id} = useParams()

  // console.log(id)
  // console.log(restaurant)
  
  function getRestaurant(id) {
    RestaurantDataService.get(id)
    .then(response => {
      setRestaurant(response.data);
      // console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }
  
  // this useEffect is going to call `getRestaurant()` only when `props.match.params.id` is updated
  useEffect(() => {
    getRestaurant(id);
  }, [id]);
  
  // console.log(props.user.name)
  // console.log(props.user.id)

  // this function will delete a review when you pass it a reviewId, and an index of the review from the review array, 
  // which is defined in `initialRestaurantState`
  // this function references the prevState, then deletes the review we don't want and updates the state to reflect the changes. 
  function deleteReview(reviewId, index) {
    RestaurantDataService.deleteReview(reviewId, props.user.id)
      .then(response => {
        setRestaurant((prevState) => {
          prevState.reviews.splice(index, 1)
          return({
            ...prevState
          })
        })
      })
      .catch(e => {
        console.log(e);
      });
  }
  // console.log(restaurant.address.building)
  return (
    <div>
      {restaurant ? (
        <div>
          <h5>{restaurant.name}</h5>
          <p>
            <strong>Cuisine: </strong>{restaurant.cuisine}<br/>
            <strong>Address: </strong>{restaurant.address.building} {restaurant.address.street}, {restaurant.address.zipcode}
          </p>
          {/* <Link to={"/restaurants/" + props.match.params.id + "/review"} className="btn btn-primary"> */}
          {/* <Link to={"/restaurants/" + restaurant.id + "/review"} className="btn btn-primary"> */}
          <Link to={`/restaurants/${id}/review`} className="btn btn-primary">
            Add Review
          </Link>
          <h4> Reviews </h4>
          <div className="row">
            {restaurant.reviews.length > 0 ? (  // if lenght is > 0 then there are reviews
             restaurant.reviews.map((review, index) => {
               return (
                 <div className="col-lg-4 pb-1" key={index}>
                   <div className="card">
                     <div className="card-body">
                       <p className="card-text">
                         {review.text}<br/>
                         <strong>User: </strong>{review.name}<br/>
                         <strong>Date: </strong>{review.date}
                       </p>
                       {/* show buttons depending on what users are logged in */}
                       {props.user && props.user.id === review.user_id && // `props.user`, `props.user.id` are coming from App.js
                          <div className="row">
                            <a onClick={() => deleteReview(review._id, index)} className="btn btn-primary col-lg-5 mx-1 mb-1">Delete</a>
                            {/* <Link to={{
                              // pathname: "/restaurants/" + props.match.params.id + "/review", // this is the route found in "backend/api/restaurants.route.js"
                              pathname: "/restaurants/" + id + "/review", // this is the route found in "backend/api/restaurants.route.js"
                              state: {
                                currentReview: review // pass in the state of the current review to `ReviewsCtrl` in "backend/api/restaurants.route.js"
                              }
                            }} className="btn btn-primary col-lg-5 mx-1 mb-1">Edit</Link> */}
                            {/* Below link will send you to the /restaurants/:id/review route that App.js will recognize and then call the "AddReview Component" */}
                            <Link to={`/restaurants/${id}/review`} state={review} className="btn btn-primary col-lg-5 mx-1 mb-1">Edit</Link>
                          </div>                   
                       }
                     </div>
                   </div>
                 </div>
               );
             })
            ) : (
            <div className="col-sm-4">
              <p>No reviews yet.</p>
            </div>
            )}

          </div>

        </div>
      ) : (
        <div>
          <br />
          <p>No restaurant selected.</p>
        </div>
      )}
    </div>
    // <div>
    //   hello
    // </div>
  );
};

export default Restaurant;