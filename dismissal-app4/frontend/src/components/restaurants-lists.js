import React, { useState, useEffect } from "react"
import RestaurantDataService from "../services/restaurant"
import { Link, useParams } from "react-router-dom"

const RestaurantsList = props => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchName, setSearchName ] = useState("");
  const [searchZip, setSearchZip ] = useState("");
  const [searchCuisine, setSearchCuisine ] = useState("");
  const [cuisines, setCuisines] = useState(["All Cuisines"]);
  
  useEffect(() => {
    retrieveRestaurants();
    retrieveCuisines();
  }, []);
  
  // console.log(restaurants)

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const onChangeSearchZip = e => {
    const searchZip = e.target.value;
    setSearchZip(searchZip);
  };

  const onChangeSearchCuisine = e => {
    const searchCuisine = e.target.value;
    setSearchCuisine(searchCuisine);
    
  };

  const retrieveRestaurants = () => {
    RestaurantDataService.getAll()
      .then(response => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);
        
      })
      .catch(e => {
        console.log(e);
      });
  };


  const retrieveCuisines = () => {
    RestaurantDataService.getCuisines()
      .then(response => {
        console.log(response.data);
        /**
         * instead of setting "response.data" to the "cuisines" variable, first
         * we're going to start with an "All Cuisines" option and append the other
         * cusines that we get from "response.data" to the array that contains "All Cuisines"
         * Basically we're assigning an array to the "cuisines" variable and that array
         * will always start with "All Cuisines".
         */
        setCuisines(["All Cuisines"].concat(response.data));
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveRestaurants();
  };

  // console.log(RestaurantsList.restaurants)

  /**
   * this "find" function will be called by the below three functions (findByName, findByZip, findByCuisine)
   */
  const find = (query, by) => {
    // call the "RestarantDataService" from the "restaurant.js" file located inside the "services" directory under the "src" folder.
    RestaurantDataService.find(query, by)
      .then(response => {
        console.log(response.data);
        setRestaurants(response.data.restaurants);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // this function gets called when you click the button to search by name
  const findByName = () => {
    find(searchName, "name")
  };
  
  // this function gets called when you click the button to search by zip
  const findByZip = () => {
    find(searchZip, "zipcode")
  };
  
  // this function gets called when you click the button to search by cuisine
  const findByCuisine = () => {
    // call the "refreshList" function if "All Cusines" is selected
    if (searchCuisine == "All Cuisines") {
      refreshList();
    } else {
      find(searchCuisine, "cuisine")
    }
  };

  return (
    <div>
    <div className="row pb-1">
      <div className="input-group col-lg-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchName}
          onChange={onChangeSearchName}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={findByName}
          >
            Search
          </button>
        </div>
      </div>
      <div className="input-group col-lg-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by zip"
          value={searchZip}
          onChange={onChangeSearchZip}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={findByZip}
          >
            Search
          </button>
        </div>
      </div>
      <div className="input-group col-lg-4">

        <select onChange={onChangeSearchCuisine}>
           {cuisines.map(cuisine => {
             return (
              // ".substr" is used to limit the character lengh of each cusine to 20 characters
               <option value={cuisine} key={cuisine}> {cuisine.substring(0, 20)} </option>
             )
           })}
        </select>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={findByCuisine}
          >
            Search
          </button>
        </div>

      </div>
    </div>
    <div className="row">
      {restaurants.map((restaurant) => {
        console.log(restaurant._id)
        const address = `${restaurant.address.building} ${restaurant.address.street}, ${restaurant.address.zipcode}`;
        return (
          <div className="col-lg-4 pb-1" key={restaurant._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">
                  <strong>Cuisine: </strong>{restaurant.cuisine}<br/>
                  <strong>Address: </strong>{address}
                </p>
                <div className="row">
                <Link to={"/restaurants/"+restaurant._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                {/* <Link to={`/restaurants/${restaurant._id}`} className="btn btn-primary col-lg-5 mx-1 mb-1"> */}
                  View Reviews
                </Link>
                <a target="_blank" href={"https://www.google.com/maps/place/" + address} className="btn btn-primary col-lg-5 mx-1 mb-1">View Map</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}


    </div>
  </div>
  );
}

export default RestaurantsList