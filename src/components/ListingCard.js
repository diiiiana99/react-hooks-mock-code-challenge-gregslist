import React, {useState} from "react";

function ListingCard({image, location, description, id, onDeleteListing}) {

  function handleDelete() 
  {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then((data) => {
      onDeleteListing(data);
    });
}


  const [favorite, setFavorite] = useState(true)

  function handleClick () {
    setFavorite((favorite) => !favorite);
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
