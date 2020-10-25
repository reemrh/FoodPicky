import React from 'react';

function LocationBar(props) {
    return (
        <div className="locationBar">

            {props.nearResturantNo} restaurants matched your loation: <span>{props.currentLocation}</span>         
        </div>
    );
}

export default LocationBar;