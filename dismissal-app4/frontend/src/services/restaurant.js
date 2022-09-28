import http from "../http-common"

/**
 * This file is used by the frontend and it uses the "http-common.js" file to know how to access the backend server via the appropriate URL.
 * This is where you're going to code all your functions that are going get data from the
 * backend server.
 * 
 * This is where you're going to make all the functions that are going to make the API calls and return data from those API calls.
 */
class RestaurantDataService {
    /**
     * this "getAll" function uses "http.get" and appends "?page=${page}" to the 
     * base URL which is stored in the "http-common.js" file and assigned to the "baseURL" var. 
     * So it will make the following get request "http://localhost:5000/api/v1/restaurants?page=${page}"
     */
    getAll(page = 0) {
        return http.get(`?page=${page}`); // making API call to http://localhost:5000/api/v1/restaurants?page=${page}
      }
    
      get(id) {
        // return http.get(`/?id=${id}`);  // the "=" sign was being injected into the URl causing 404 errors.
        return http.get(`/id/${id}`);
      }
    
      /** 
       * the "find" request takes "query" as a parameter and searches the query by "name".
       * the default value for "by" is "name"
       * it will return the data from page 0 if no page number is passed in.
       * if you changed the "by" variable to "zipcode" then it would search the query by "zipcode"
       */
      find(query, by = "name", page = 0) { 
        return http.get(`?${by}=${query}&page=${page}`); // this is what gets added to the end of the base URL
      } 
    
      createReview(data) {
        return http.post("/review", data);
      }
    
      updateReview(data) {
        return http.put("/review", data);
      }
    
      deleteReview(id, userId) {
        // console.log(id + ":" + userId)
        return http.delete(`/review?id=${id}`, {data:{user_id: userId}})
        // return http.delete(`/review-delete/id/${id}`, {data:{user_id: userId}});
      }
    
      getCuisines(id) {
        return http.get(`/cuisines`);
      }
    
}
    
export default new RestaurantDataService();