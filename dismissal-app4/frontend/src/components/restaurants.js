import React, { useState, useEffect } from "react"
import RestaurantDataService from "../services/restaurant.js"
import { Link, useParams } from "react-router-dom";

const Restaurant = props => {
  const initialRestaurantState = {
    id: null,
    name: "",
    address: {},
    cuisine: "",
    reviews: []
  };
  const [restaurant, setRestaurant] = useState(initialRestaurantState);


  const {id} = useParams()
  const {name} = useParams()
  console.log(id)
  console.log(name)

  // console.log(props)
  // this function will call `RestaurantDataService` with the ID for the restaurant from the "services/restaurant.js" file and will be get back details about the specific restaurant.
  // it will also set the state of `restaurant` with the value it receives.
  const getRestaurant = id => {
    RestaurantDataService.get(id)
      .then(response => {
        setRestaurant(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // this useEffect is going to call `getRestaurant()` only when `props.match.params.id` is updated
  // useEffect(() => {
  //   getRestaurant(props.match.params.id);
  // }, [props.match.params.id]);

  useEffect(() => {
    getRestaurant();
  }, []);

  // this function will delete a review when you pass it a reviewId, and an index of the review from the review array, 
  // which is defined in `initialRestaurantState`
  // this function references the prevState, then deletes the review we don't want and updates the state to reflect the changes. 
  const deleteReview = (reviewId, index) => {
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
  };

  console.log(restaurant)
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
          <Link to={"/restaurants/" + id + "/review"} className="btn btn-primary">
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
                       {props.user && props.user.id === review.user_id && // where is `props.user`, `props.user.id`, and `review.user_id` coming from ??
                          <div className="row">
                            <a onClick={() => deleteReview(review._id, index)} className="btn btn-primary col-lg-5 mx-1 mb-1">Delete</a>
                            <Link to={{
                              // pathname: "/restaurants/" + props.match.params.id + "/review", // this is the route found in "backend/api/restaurants.route.js"
                              pathname: "/restaurants/" + id + "/review", // this is the route found in "backend/api/restaurants.route.js"
                              state: {
                                currentReview: review // pass in the state of the current review to `ReviewsCtrl` in "backend/api/restaurants.route.js"
                              }
                            }} className="btn btn-primary col-lg-5 mx-1 mb-1">Edit</Link>
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
  );
};

export default Restaurant;