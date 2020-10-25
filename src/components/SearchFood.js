import React,{ useState } from 'react';
import '../App.css';

function SearchFood(props) {
  const [searchKey, setSearchKey] = useState('');

  const handleSubmit = event=> {
    event.preventDefault();
    props.handleSearch(searchKey);
  }
  return (
    <form className="SearchFood" onSubmit={handleSubmit}> 
        <input type="search" placeholder="I would like to eat...." className="searchInput" value={searchKey} onChange= {e => setSearchKey(e.target.value)}/>
        <input type="submit" value="Search food" className="searchBtn" />     
    </form>
  );
}

export default SearchFood;
