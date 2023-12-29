import React from "react";
import "./Shop.css";

function Cards({
  item,
  num,
  setnum,
  price,
  setprice,
  Allproducts,
  handleClick,
}) {
  return (
    <>
      <div className="cards">
        <div className="image_box">
          <img src={item.img} alt="Image" />
        </div>
        <div className="details">
          <p>{item.title}</p>
          <p>price-₹{item.price}</p>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
 

export default Cards;
