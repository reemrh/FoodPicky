import React from "react";

function FormFeild(props) {
  return (
    <div className={props.className}>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        {...props}
      />
    </div>    
  );
}

export default FormFeild;
