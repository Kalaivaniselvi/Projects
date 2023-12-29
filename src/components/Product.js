// Product.js
import React, { useContext, useState } from "react";
import Allproducts from "./Data";
import Cards from "./Shop";
import Cart from "./Cart";
import { Mycontext } from "./Levelcontext"

const Product = () => {
  const { cart, setCart, show, setshow } = useContext(Mycontext);
  

  const handleClick = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Item already exists in the cart
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // Item not in the cart, add it
      setCart((prevCart) => [
        ...prevCart,
        { ...item, quantity: 1, amount: item.price },
      ]);
    }
  };

  return (
    <div>
      {show ? (
        <section>
          {Allproducts && Allproducts.length > 0
            ? Allproducts.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
              ))
            : null}
        </section>
      ) : cart ? (
        <Cart cart={cart} setCart={setCart} />
      ) : null}
    </div>
  );
};

export default Product;
