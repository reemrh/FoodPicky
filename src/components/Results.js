import React, { useEffect, useState } from "react";
import Rating from "./rates";
import axios from 'axios';
// import backgroundImage from "../includes/imgs/meal.png";
import zigZag from "../includes/imgs/zig-zag.png";
// import RestaurantImg from "../includes/imgs/restaurantImg.png";
import Pagination from "react-js-pagination";
import SearchResultsFound from "./SearchResultsFound";


function Results(props) {
   let meals = props.meals;
   const [mealsList,setMeals] = useState(meals); 
   let pageMeals = [];
 
  const totalItemsCount =props.SearchResultsFound;
  const [activePage, setActivePage] = useState(1);
  const [mealsPerPage] = useState(6);
  const indexOfLastPage = activePage * mealsPerPage;
  const indexOfFirstPage = indexOfLastPage - mealsPerPage;
  const currentMeals = meals.slice(indexOfFirstPage,indexOfLastPage);
  // const handlePageChange = (pageNumber) => {
  //   setActivePage(pageNumber);
  //     axios
  //     .get(`https://foodie-api-dash.herokuapp.com/api/Meals?page=${pageNumber}&pageSize=6&query=${props.searchKey}`)
  //     .then( (result) => {
  //       if (result.status === 200) {  
  //          pageMeals = result.data.data.meals;
  //       } else {
  //         console.log("error");
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });

     
  // };
  const handlePageChange = async (pageNumber) => {
    setActivePage(pageNumber);
    const { data } = await axios.get('');
   
    console.log(mealsList);
  }
 

  return (
    <div className="Results_wrapper">
      <div className="Results">
      {currentMeals.map((item) => (
        <div className="result">
          <div
            className="mealImg"
            style={{ background: `url(${item.photo}) no-repeat center` }}
          >
            <div className="meal_img">
              <Rating className="rating" rates={item.rating["rate"]} />
              <p className="reviews">{item.rating["ratersCount"]} REVIEWS</p>
            </div>
          </div>
          <img src={zigZag} alt="zigZag" width="100%" className="zigzag" />
          <p className="mealName">{item.name} {item.id}</p>
          <p className="mealDescription">{item.description}</p>
          <div className="orderWrap">
            <p className="price">$ {item.price}</p>
            <div className="order">Order Now</div>
          </div>
          <div className="restaurantInfo">
            <img
              src={item.restaurant.photo}
              alt="restaurant img"
              width="45"
              height="45"
            />
            <div className="restaurantDescription">
              <p>{item.restaurant.name}</p>
              <span>{item.restaurant.address}</span>
            </div>
          </div>
        </div>
      ))}
      </div>

      <Pagination
        hideFirstLastPages
        pageRangeDisplayed={5}
        activePage={activePage}
        itemsCountPerPage={mealsPerPage}
        totalItemsCount={totalItemsCount}
        onChange={handlePageChange}
        className="pagination"
        itemClass="itemClass"
        nextPageText="»"
        prevPageText="«"
        linkClass="linkClass"
        active="active"
        activeLinkClass="activeLinkClass"
      />
    </div>
  );
}

export default Results;
