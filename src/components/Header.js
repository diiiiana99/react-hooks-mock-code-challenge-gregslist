import React from "react";
import Search from "./Search";


function Header({filteredItems, searchItems,setSetItems}) {


  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search  setSetItems={setSetItems} searchItems={searchItems} />
    </header>
  );
}

export default Header;
