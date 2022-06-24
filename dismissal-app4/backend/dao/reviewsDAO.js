import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let reviews

export default class ReviewsDAO {
  static async injectDB(conn) {
    if (reviews) {
      return
    }
    try {
        // "await" is an operator used to wait for a Promise. It can only be used inside an ASYNC function with regualr JS code.
      reviews = await conn.db(process.env.RESTREVIEWS_NS).collection("reviews")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  // receives data from reviews.controller.js
  /** 
   * the "addReview" method receives data from the "apiPostReview", which is in the "reviews.controller.js" file.
   * this same method combines all the data it receives into one variable called "reviewDoc".
   * this method then makes a call to the MongoDB "insertOne" command and passes the "reviewDoc" variable.
   * this method waits for a response back from MongoDB.
   */
  static async addReview(restaurantId, user, review, date) {
    try {
      const reviewDoc = { name: user.name,
          user_id: user._id,
          date: date,
          text: review,
          restaurant_id: ObjectId(restaurantId), }
      console.log(reviewDoc)
        // insertOne is a mongoDB command
      return await reviews.insertOne(reviewDoc)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return { error: e }
    }
  }

  static async updateReview(reviewId, userId, text, date) {
    try {
        // updateOne is a mongoDB command
      const updateResponse = await reviews.updateOne(
        { user_id: userId, _id: ObjectId(reviewId)},
        { $set: { text: text, date: date  } },
      )

      return updateResponse
    } catch (e) {
      console.error(`Unable to update review: ${e}`)
      return { error: e }
    }
  }

  static async deleteReview(reviewId, userId) {

    try {
        // deleteOne is a mongoDB command
      const deleteResponse = await reviews.deleteOne({
        _id: ObjectId(reviewId),
        user_id: userId,
      })

      return deleteResponse
    } catch (e) {
      console.error(`Unable to delete review: ${e}`)
      return { error: e }
    }
  }

}