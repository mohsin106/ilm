import axios from "axios";

/**
 * you need to first run "npm install axios" in order to use this file.
 * this is a helper file that the "restaurant.js" file will use from the "frontend/src/components/services" directory.
 */
export default axios.create({
  baseURL: "http://localhost:5002/api/v1/restaurants", // backend server URL
  headers: {
    "Content-type": "application/json" // setting the header
  }
});