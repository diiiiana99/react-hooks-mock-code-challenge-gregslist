import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {


  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((response) => response.json())
    .then((data) => {
      setListings(data);
  });
}, []);

const [listings,setListings] = useState([])
  const [searchItems, setSetItems] = useState('')

const filteredItems = listings.filter((listing) => {
  let listName = listing.name;   
  return listName.toLowerCase().includes(searchItems.toLowerCase());
})

  return (
    <div className="app">
      <Header  setSetItems={setSetItems} searchItems={searchItems}/>
      <ListingsContainer setListingsj={setListings} listings={listings}/>
    </div>
  );
}

export default App;
