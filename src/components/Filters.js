import React from "react";
import Fork from "../includes/imgs/fork.png";
import Tags from "./Tags.js";
import FilterForm from "./FilterForm.js";

function Filters(props) {
  return (
    <div className="filters">
        <div className="cusine">
          <p>Choose Cusine</p>
          <img src={Fork} alt="forkandKnife" />
        </div>
        <FilterForm onChangeParms={props.onChangeParms} />
        <Tags tags={props.tags} />
    </div>
  );
}

export default Filters;
