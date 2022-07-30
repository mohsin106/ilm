import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let restaurants         // used to store reference to the database

export default class RestaurantsDAO {
  
  // this method allows us to initially connect to our database
  static async injectDB(conn) {
    if (restaurants) {
      return    // if reference already exists, return it
    }
    try {       
      /**
       * if reference doesn't not exist, fill it with the correct DB reference.
       * remember..."restaurants" will be referencing the "restaurant" collection in MongoDB
       */
      restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
    } catch (e) {   // error handling
      console.error(
        `Unable to establish a collection handle in restaurantsDAO: ${e}`,
      )
    }
  }

  static async getRestaurants({
    filters = null,     // filters can be added for sorting, etc...
    page = 0,   // defaults to show page 0
    restaurantsPerPage = 20,    // default to show 20 restaurants per page
  } = {}) {
    let query
    if (filters) {
      // search by name of restaurant
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } } // with text search you need to set up a name field in MongoDB
        // or search by cuisine of the restaurant
      } else if ("cuisine" in filters) {
        query = { "cuisine": { $eq: filters["cuisine"] } }
        // or search by zipcode
      } else if ("zipcode" in filters) {
        query = { "address.zipcode": { $eq: filters["zipcode"] } }
      }
    }

    let cursor
    
    try {
      cursor = await restaurants
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { restaurantsList: [], totalNumRestaurants: 0 }
    }

    const displayCursor = cursor.limit(restaurantsPerPage).skip(restaurantsPerPage * page)

    try {
      const restaurantsList = await displayCursor.toArray()
      const totalNumRestaurants = await restaurants.countDocuments(query)

      return { restaurantsList, totalNumRestaurants }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { restaurantsList: [], totalNumRestaurants: 0 }
    }
  }

  static async getRestaurantByID(id) {
    try {
      /**
       * pipelines help match different collections together.
       * "$lookup" is part of the MongoDB aggregation pipeline.
       * we are going to lookup the reviews of a specific restaurant and add that data to the result in the pipeline
       * the aggregation pipeline is a framework for data aggregation, modeled on the concept of data processing pipelines.
       * documents enter a multi-stage pipeline that transforms the documents into aggregated results.
       * MongoDB Data Explorer and Compass can assist in creating pipeline. Check the video notes for more details.
       */
      const pipeline = [
        {
            /**
             * we are trying to get the review of a restaurant matching a specific "_id" and aggregate those results into a field called "reviews"
             */
            $match: {
                _id: new ObjectId(id),
            },
        },
              {
                  $lookup: {
                      from: "reviews",
                      let: {
                          id: "$_id",
                      },
                      pipeline: [
                          {
                              $match: {
                                  $expr: {
                                      $eq: ["$restaurant_id", "$$id"],
                                  },
                              },
                          },
                          {
                              $sort: {
                                  date: -1,
                              },
                          },
                      ],
                      as: "reviews",
                  },
              },
              {
                  // creating the "reviews" field here in MongoDB and assigning it the value of "$reviews" which was initally refrenced on line 104.
                  $addFields: {
                      reviews: "$reviews",
                  },
              },
          ]
      return await restaurants.aggregate(pipeline).next()
    } catch (e) {
      console.error(`Something went wrong in getRestaurantByID: ${e}`)
      throw e
    }
  }

  static async getCuisines() {
    let cuisines = []
    /**
     * auto populate the "cuisine" dropdown.
     * only get distinct cuisines from the DB.
     * remeber "restaurants" is the MongoDB reference. it has a method distinct assocaited to it in order to run the distinct query.
     */
    try {
      cuisines = await restaurants.distinct("cuisine")
      return cuisines
    } catch (e) {
      console.error(`Unable to get cuisines, ${e}`)
      return cuisines
    }
  }
}