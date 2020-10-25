// @flow
import React, { useState } from "react";
import axios from 'axios';
import "../App.css";
import tick from "../includes/imgs/tick.png";
import deliveryIcon from "../includes/imgs/bycicle.png";
import Rating from "./rates";
import { Link } from "react-router-dom";


export function FeaturedResturants(props) {
  const [featuredResturants,setFeaturedRestaurants] = useState([]);

  // if(featuredResturants.length === 0){
  //       setFeaturedRestaurants(props.featuredResturants);             
    
  // }
  const sortByCatagory = e =>{
    const id = e.target.value;
    axios
    .get(`https://foodie-api-dash.herokuapp.com/api/Restaurants/featured?pageSize=6&category=${id}`)
    .then((result) => {
      if (result.status === 200) {
        setFeaturedRestaurants(result.data.data);               
      } else {
        console.log("error");
      }
    })
    .catch((e) => {
      console.log(e);
    });

  }
  return (
    <div className="featuredResturants">
      <div className="featuredResturants_header">
        <p>Featured Resturants</p>
        <ul className="food_sorts">
          {props.foodSorts.map((sortItem) => (
            <li value={sortItem.id} onClick={sortByCatagory}>{sortItem.name}</li>
          ))}
        </ul>
      </div>
      <div className="featuredResturants_wrapper">
    {/* {console.log(featuredResturants) } */}

        {featuredResturants.map((resturant,key) => (
          <div className="resturantDetails" key={resturant.id}>
            <img
              className="resturant_img"
              src={resturant.photo}
              alt="restaurant"
              width="95px" height="95px"
            />
            <div className="resturantDetails_wrapper">
              <p className="resturant_name">{resturant.name}</p>
              <p className="tags">{resturant.description}.</p>
              <div className="bottom_section">
                <div className="shortDetails">
                  <img src={tick} width="16" height="16" alt="tick" />
                  <p>Min $ {resturant.mealsMinPrice}</p>
                </div>
                <div className="shortDetails">
                  <img src={deliveryIcon} width="16" height="16" alt="icon" />
                  <p>{resturant.deliveryTime}</p>
                </div>
                <div className="shortDetails">
                  <Rating rates={resturant.rating.rate} />
                  <p>({resturant.rating.ratersCount})</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="addYourResturant">
        <h4>Add Your Resturant </h4>
        <p>
          Join the thousands of other resyturants who benefit from having their
          menus on <span>FoodPicky directory </span>
        </p>
        <button className="searchBtn">
          <Link to="/RestaurantRegistration">I'm a Restaurant</Link>
        </button>
      </div>
    </div>
  );
}

export default FeaturedResturants;
