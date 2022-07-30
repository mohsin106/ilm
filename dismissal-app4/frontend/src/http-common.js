import axios from "axios";

/**
 * this is a helper file that the "restaurant.js" file will use from the "services" directory.
 */
export default axios.create({
  baseURL: "http://localhost:5002/api/v1/restaurants",
  headers: {
    "Content-type": "application/json"
  }
});