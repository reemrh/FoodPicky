import React from "react";

function RadioButton(props) {
  return (
    <div className="range_section">
      <div>Price Range</div>
      <div>
        Filter by price : {props.searchParms.price}$
        <input
          type="range"
          onChange={props.onChangePriceRange}
          value={props.searchParms.price}
        />
      </div>
    </div>
  );
}

export default RadioButton;
