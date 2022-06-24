import ReviewsDAO from "../dao/reviewsDAO.js"

export default class ReviewsController {
  // post new review
  /**
   * in the video https://youtu.be/mrHNSanmqQ4?t=3217 , the instructor used Insomnia to make a POST call to the /review route.
   * now since we have a ".post" method in the "restaurants.route.js" file, this will the "apiPostReview" method in this file.  
   * the "apiPostReview" method in this file will grab the restaurantID, review, and userInfo from the body of the request as seen below.
   * it will then make an async call to "addReview" which is inside of the reviewsDAO.js file. It will pass all the necessary data to the "addReview" method to get a record created in the DB.
   * */ 

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
  static async apiUpdateReview(req, res, next) {
    // get information from the body
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

  static async apiDeleteReview(req, res, next) {
    try {
      const reviewId = req.query.id // get the id from the query parameter
      const userId = req.body.user_id  // get the user_id from the body. In a prod environment, you would not include anything from the body in the delete request.
      console.log(reviewId)
      const reviewResponse = await ReviewsDAO.deleteReview(
        reviewId,
        userId,
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

}