let restaurants         // used to store reference to the database

export default class RestaurantsDAO {
  
  // this method allows us to initially connect to our database
  static async injectDB(conn) {
    if (restaurants) {
      return    // if reference already exists, return it
    }
    try {       // if reference does not exist, fill it with the correct DB reference
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

}