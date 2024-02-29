import React from 'react'
import Search_Icon from "../assets/search.svg";
import Filter from "../assets/filter.png"; 

function Search() {
  return (
<div className="search">
  <input
    className="search-bar"
    type="text"
    placeholder="Search for dining halls or foods"
  />
  <img className="search-icon" src={Search_Icon} alt='Search Icon'/>
  <img className="filter-icon" src={Filter} alt ='Filter Icon' />
  <div className="filter-text"> Filter </div>
</div>
  )
}

export default Search