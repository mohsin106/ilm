// this is the Data Access Object file. It allows our code to access our MongoDB.
import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let restaurants         // used to store reference to the database

export default class RestaurantsDAO {
  
  // this method allows us to initially connect to our database
  // as soon as the server starts, the "injectDB" method is called which gets a reference to the restaurants database.
  static async injectDB(conn) {
    if (restaurants) {
      return    // if reference already exists, return it
    }
    try {       
      /**
       * if reference doesn't not exist, fill it with the correct DB reference.
       * remember..."restaurants" will be referencing the "restaurants" collection inside the "sample_restaurants" MongoDB
       * also notice "process.env.RESTREVIEWS_NS" is being used to reference the "RESTREVIEWS_NS" variable in the .env file
       */
      restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
    } catch (e) {   // error handling
      console.error(
        `Unable to establish a collection handle in restaurantsDAO: ${e}`,
      )
    }
  }

  // after the connection to the DB is made this method is run, which gets a listing of all the restaurants
  static async getRestaurants({
    // these are all the options you can set to help query your data.
    filters = null,     // filters can be added for sorting, etc...
    page = 0,   // defaults to show page 0
    restaurantsPerPage = 20,    // default to show 20 restaurants per page
  } = {}) {
    let query
    // console.log(filters)
    if (filters) {  // if there are filters defined above then:
      // if "name" is in filters then search by name
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } } // with text search you need to configure which fields will be used for "$text" based searches in MongoDB. 
                                                        // in this example the "name" field is being used for a "$text" based search. also please note that "$text" is a MongoDB client operator. 
                                                        // "$text" is not a variable defined in this file or any other file.
        // else if "cuisine" is in filters, search by cuisine
      } else if ("cuisine" in filters) {
        query = { "cuisine": { $eq: filters["cuisine"] } }
        // else if "zippcode" in in filters, search by zipcode
      } else if ("zipcode" in filters) {
        query = { "address.zipcode": { $eq: filters["zipcode"] } }
      }
    }
    let cursor  // a cursor is a pointer, and using this pointer we can access the document (https://www.geeksforgeeks.org/mongodb-cursor/)
    // console.log(query)
    
    try {
      cursor = await restaurants
        .find(query)  //This find() method return a cursor with contain all documents present in the restaurants collection.
        // console.log(cursor)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { restaurantsList: [], totalNumRestaurants: 0 }
    }

    // the limit() method on a cursor is used to specify the maximum number of documents the cursor will return (https://www.mongodb.com/docs/rapid/reference/method/cursor.limit/)
    // the skip() method on a cursor is used to control where MongoDB begins returning results (https://www.mongodb.com/docs/manual/reference/method/cursor.skip/)
    // we're specifying "displayCursor" as a constanct to set how many documents to view per page and what page we should start at
    const displayCursor = cursor.limit(restaurantsPerPage).skip(restaurantsPerPage * page)
    // console.log(displayCursor)
    try {
      const restaurantsList = await displayCursor.toArray() // stores the documents from the query inside an array
      const totalNumRestaurants = await restaurants.countDocuments(query) // gets the count of documents returned by the query
      // console.log(restaurantsList)
      return { restaurantsList, totalNumRestaurants }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { restaurantsList: [], totalNumRestaurants: 0 }
    }
  }

  static async getRestaurantByID(id) {
    console.log(id + " from backend/dao/restaurantDAO.js")
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
        console.log(pipeline)
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
     * only get distinct cuisines one time from the DB.
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