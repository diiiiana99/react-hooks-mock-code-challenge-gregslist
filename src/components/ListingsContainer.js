import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings} ) {

//   const [listings, setListings] = useState([])

//   useEffect(() => {
//     fetch("http://localhost:6001/listings")
//     .then((response) => response.json())
//     .then((data) => {
//       setListings(data);
//   });
// }, []);

function onDeleteListing(deleteListing) {
  const updatedListing= listings.filter(listing =>  listing.id !== deleteListing.id)
  setListings(updatedListing)
}

const listingInfo = listings.map (listing => {return <ListingCard key={listing.id} id={listing.id} image={listing.image} description={listing.description} location={listing.location} onDeleteListing={onDeleteListing}/>})
  return (
    <main>
      <ul className="cards">
        {listingInfo}
      </ul>
    </main>
  );
}

export default ListingsContainer;
