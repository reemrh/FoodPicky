import React from "react";

function RadioButton(props) {
  return (
    <div className={props.className}>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        checked={props.searchParms[props.searchParmsKey] === props.value}
        onChange={props.onChange}
      />
      <label for={props.for}>{props.value}</label>
    </div>
  );
}

export default RadioButton;
