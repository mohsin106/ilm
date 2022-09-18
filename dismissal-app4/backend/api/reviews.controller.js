// this file will receive the API URL requests for posting, putting (EDIT), getting, and deleting restaurant review.
import ReviewsDAO from "../dao/reviewsDAO.js"

export default class ReviewsController {
  // post new review
  /**
   * in the video https://youtu.be/mrHNSanmqQ4?t=3217 , the instructor used Insomnia to make a POST call to the /review route.
   * now since we have a ".post" method in the "restaurants.route.js" file, this will be the "apiPostReview" method in this file.  
   * the "apiPostReview" method in this file will grab the restaurantID, review, and userInfo from the body of the request as seen below.
   * it will then make an async call to "addReview" which is inside of the reviewsDAO.js file. It will pass all the necessary data to the "addReview" method and create a record in the DB.
   * */ 

  // the below method will reference the "body" parameter of the API request to pull out information.
  /**
   * This is what a post API call looks like:
   * POST 'http://localhost:5002/api/v1/restaurants/review' --header 'Content-Type: application/json' --data-raw '{
    "restaurant_id": "5eb3d669b31de5d588f45e8f",
    "text": "Wings were great!",
    "user_id": "blah",
    "name": "deen" */ 
  static async apiPostReview(req, res, next) {
    // get information from the body of the request
    try {
      const restaurantId = req.body.restaurant_id
      const review = req.body.text
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id
      }
      const date = new Date()

      // console.log(req.body)

      // send all the data to addReview DAO (database access object)
      const ReviewResponse = await ReviewsDAO.addReview(
        restaurantId,
        userInfo,
        review,
        date,
      )
    //   console.log(restaurantId, userInfo, review, date)
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  // edit a review
  // reviewId is actually the document ID (_id) from the specific document in the "reviews" collection.
  static async apiUpdateReview(req, res, next) {
    // get information from the body of PUT API call from Insomnia
    // console.log(req.body)
    try {
      const reviewId = req.body.review_id
      const text = req.body.text
      const date = new Date()

      const reviewResponse = await ReviewsDAO.updateReview(
        reviewId,
        req.body.user_id,
        text,
        date,
      )

      var { error } = reviewResponse
      if (error) {
        res.status(400).json({ error })
      }

      // console.log(reviewResponse)

      if (reviewResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update review - user may not be original poster",
        )
      }

      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  /**
   * the apiDeleteReview is a little different.
   * you need to pass the "_id" of the document that you want to delete in the URL (ex: http://localhost:5002/api/v1/restaurants/review/?id=62e2c485df4536b534c05376)
   * this method is then assigning the "_id" from the URL to the "reviewId" variable.
   * this method is also assigning the "user_id" from the body of the message to the "useId" variable.
   * both "reviewId" and "userId" are then passed to the "deleteReview" method inside the reviewDAO.js file.
   * this method really only needs the "_id" to be correct in order for it to delete the correct record from the db.
   * passing in other variables is okay
   */
  // the below method will reference the "query" and "body" parameters of the API request to pull out information.
  static async apiDeleteReview(req, res, next) {
    try {
      const reviewId = req.query.id // get the id from the query after the "?"... in this case grab "id" after the question mark in this URL (http://localhost:5002/api/v1/restaurants/review?id=62b9c133b7b9e6deed880954)
      const userId = req.body.user_id  // get the user_id from the body. In a prod environment, you would not include anything from the body in the delete request.
      // console.log(reviewId)
      const reviewResponse = await ReviewsDAO.deleteReview(
        reviewId,
        userId,
      )
      
      // i added this error response, wasn't part of video. this just throws an error if MongoDB didn't delete any records and returns a "deletedCount" parameter of 0
      if (reviewResponse.deletedCount === 0) {
        throw new Error(
          "unable to delete review - user not found"
        )
      }
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  // static async apiGetRestaurantById(req, res, next) {
  //   try {
  //     let id = req.params.id || {} // "params" means to grab the parameter from the URL. In this case the "id" parameter is being grabbed.
  //     let restaurant = await RestaurantsDAO.getRestaurantByID(id)
  //     if (!restaurant) {
  //       res.status(404).json({ error: "Not found" })
  //       return
  //     }
  //     res.json(restaurant)
  //   } catch (e) {
  //     console.log(`api, ${e}`)
  //     res.status(500).json({ error: e })
  //   }
  // }

  // static async apiGetRestaurantCuisines(req, res, next) {
  //   try {
  //     let cuisines = await RestaurantsDAO.getCuisines()
  //     res.json(cuisines)
  //   } catch (e) {
  //     console.log(`api, ${e}`)
  //     res.status(500).json({ error: e })
  //   }
  // }
}