import React from "react";

function Search({setSetItems, searchItems}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItems}
        onChange={(e) => setSetItems(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
