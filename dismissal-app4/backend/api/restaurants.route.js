import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"
// get access to express router
const router = express.Router()

// your routes go here
// (/api/v1/restaurants) is the beginning of the route so everything at the end of this route gets configured below
// so "/" just means the main route (/api/v1/restaurants)
// router.route("/").get((req, res) => res.send("hello world"))

// we now use the controller to access the routes
router.route("/").get(RestaurantsCtrl.apiGetRestaurants)
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines) // will be used to populate "cuisines dropdown menu"

// add routes to post, edit, and delete reviews
router
    .route("/review")
    .post(ReviewsCtrl.apiPostReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)
export default router