import React from "react";
import "../App.css";

function OpenDays(props) {
  const days = props.days;
  return (
    <div className="openDays">
      <label>Open days</label>
      <ul>
        {days.map((i , key) => (
          <li
            key = {key}
            value={i.key}
            // onClick={props.onSelectDay}
            onClick={(event) => {
              props.onSelectDay(event);
            }}
            className={props.openDays.includes(i.key) ? "selectedDay" : ""}
          >
            {i.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OpenDays;
