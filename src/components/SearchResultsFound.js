import React from 'react';

function SearchResultsFound(props) {
    return (
        <div className="SearchResultsFound">
           <span> {props.SearchResultsFound} </span>  Results so far.
        </div>
    );
}

export default SearchResultsFound;