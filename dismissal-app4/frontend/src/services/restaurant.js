import http from "../http-common"

/**
 * this is where you're going to code all your functions that are going to make API
 * calls and return the information from the API calls.
 */
class RestaurantDataService {
    /**
     * this "getAll" function uses "http.get" and appends "?page=${page}" to the 
     * base URL which is stored in the "http-common.js" file and assigned to the "baseURL" var. 
     * So it will make the following get request "http://localhost:5000/api/v1/restaurants?page=${page}"
     */
    getAll(page = 0) {
        return http.get(`?page=${page}`);
      }
    
      get(id) {
        // return http.get(`/id=${id}`);  // the "=" sign was being injected into the URl causing 404 errors.
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
        return http.post("/review-new", data);
      }
    
      updateReview(data) {
        return http.put("/review-edit", data);
      }
    
      deleteReview(id, userId) {
        return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
      }
    
      getCuisines(id) {
        return http.get(`/cuisines`);
      }
    
}
    
export default new RestaurantDataService();