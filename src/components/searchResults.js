import React, { useEffect, useState } from "react";
import {useLocation } from "react-router-dom";
import axios from "axios";
import SearchResultsFound from "./SearchResultsFound";
import Filters from "./Filters";
import Results from "./Results";
import "../App.css";

function SearchResults(props) {
  const [tags] = useState(["Pizza", "Sandwich", "Fish", "Desert", "Salad"]);
  const [resultCount, setResultCount] = useState();
  const [meals, setMeals] = useState([]);

  const [searchParms, setSearchParms] = useState([
    {
      searchKey: "",
      cusine_type: "",
      delivery_option: "",
      price: "",
    },
  ]);
  let query = new URLSearchParams(useLocation().search);
  const searchKey =query.get("search");

  useEffect(()=>{
    axios
    .get(`https://foodie-api-dash.herokuapp.com/api/Meals?query=${searchKey}`)
    .then((result) => {
      if (result.status === 200) {
        setResultCount(result.data.data.totalCount);             
        setMeals(result.data.data.meals);             
      } else {
        console.log("error");
      }
    })
    .catch((e) => {
      console.log(e);
    });
  });
  return (
    <div className="SearchResults">
      <SearchResultsFound SearchResultsFound={resultCount} />
      <div className="search-wrapp">
        <Filters tags={tags} onChangeParms={setSearchParms} />
        <Results searchParms={searchParms} setSearchParms={setSearchParms} meals={meals} SearchResultsFound={resultCount} searchKey={searchKey} />
      </div>
    </div>
  );
}

export default SearchResults;
