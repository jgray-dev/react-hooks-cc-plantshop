import React from "react";

function Search({ updateSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => updateSearch(e.target.value)} // Our search is handled up a level in PlantPage, so onChange we pass the new search value up so it can be distributed to our PlantList and our display can be updated accordingly
      />
    </div>
  );
}

export default Search;
