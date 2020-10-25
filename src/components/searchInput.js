import React from "react";
import Search from "../includes/imgs/filter_search.png";
import "../App.css";

function SearchInput(props) {
  return (
    <div className="search_input">
      <input
        type="search"
        placeholder="Search for favorite food"
        onChange={props.onChangeSearchInput}
        value={props.searchParm}
      />
      <div>
        <img src={Search} alt="search-icon" />
      </div>
    </div>
  );
}

export default SearchInput;
