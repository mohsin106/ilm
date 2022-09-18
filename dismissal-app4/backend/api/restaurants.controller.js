// this file is used by the restaurants.route.js file to access the restaurantsDAO.js file.
import RestaurantsDAO from "../dao/restaurantsDAO.js"

export default class RestaurantsController {
  // the below method will reference the "query" parameter of the API request to pull out information.
  static async apiGetRestaurants(req, res, next) {
    // if a restaurantsPerPage key:value is passed in with the URL we are going to convert it to an int and assign it to the "restaurantsPerPage" var here, otherwise set default to 20
    const restaurantsPerPage = req.query.restaurantsPerPage ? parseInt(req.query.restaurantsPerPage, 10) : 20
    // if a page key:value is passed in with the URL we are going to convert it to an int and assign it to the "page" var here, otherwise set the default to 0
    const page = req.query.page ? parseInt(req.query.page, 10) : 0


    let filters = {}
    // extract all of the filters out from the URL ("cuisine", "zipcode", "name")
    if (req.query.cuisine) {
      filters.cuisine = req.query.cuisine
    } else if (req.query.zipcode) {
      filters.zipcode = req.query.zipcode
    } else if (req.query.name) {
      filters.name = req.query.name
    }

    // console.log(req.query)
    // console.log(filters.cuisine)
    // console.log(filters.zipcode)

    // get the "restaurantsList" and "totalNumRestaurants" data back from "RestaurantsDAO.getRestaurants"
    const { restaurantsList, totalNumRestaurants } = await RestaurantsDAO.getRestaurants({
      filters,
      page,
      restaurantsPerPage,
    })

    let response = {
      restaurants: restaurantsList,
      page: page,
      filters: filters,
      entries_per_page: restaurantsPerPage,
      total_results: totalNumRestaurants,
    }
    res.json(response)  // a JSON response gets sent to browser to display to all the data that the restaurantsDAO.js file returned to this file.
  }

  // a parameter is anything after the / of the base url, and a query string is anything starting with a ?
  static async apiGetRestaurantById(req, res, next) {
    try {
      let id = req.params.id || {}
      let restaurant = await RestaurantsDAO.getRestaurantByID(id)
      if (!restaurant) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(restaurant)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

  static async apiGetRestaurantCuisines(req, res, next) {
    try {
      let cuisines = await RestaurantsDAO.getCuisines()
      res.json(cuisines)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }
}