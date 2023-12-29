
// Cart.js
import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "./Levelcontext";
import "./Cart.css";

function Cart() {
  const { cart, setCart } = useContext(Mycontext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate the total amount whenever the cart changes
    const calculatedTotalAmount = cart.reduce(
      (total, item) => total + item.amount,
      0
    );
    setTotalAmount(calculatedTotalAmount);
  }, [cart]);

  const handleIncrement = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    const updatedCart = [...cart];

    updatedCart[itemIndex] = {
      ...updatedCart[itemIndex],
      quantity: updatedCart[itemIndex].quantity + 1,
      amount: updatedCart[itemIndex].amount + updatedCart[itemIndex].price,
    };

    setCart(updatedCart);
  };

  const handleDecrement = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    const updatedCart = [...cart];

    if (updatedCart[itemIndex].quantity > 0) {
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        quantity: updatedCart[itemIndex].quantity - 1,
        amount: updatedCart[itemIndex].amount - updatedCart[itemIndex].price,
      };

      setCart(updatedCart);
    }
    if (updatedCart[itemIndex].quantity === 0) {
      updatedCart.splice(itemIndex, 1);
      setCart(updatedCart);
    }

  };

  return (
    <article>
      <div id="show">
        <center><h2 id="topic">SHOPPING CART</h2></center>
        <table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                <p>{item.title}</p>
                </td>
                <td id="image">
                  <img src={item.img} alt={item.title} />
                </td>
                <td>
                  <p>₹{item.price}</p>
                </td>
                <td>
                  <button onClick={() => handleDecrement(item)} id="button1"> - </button>
                  {item.quantity}
                  <button onClick={() => handleIncrement(item)} id="button2"> + </button>
                </td>
                <td>
                  <p>₹{item.amount} </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total">
          <h1>TOTAL AMOUNT: ₹{totalAmount} </h1>
        </div>
      </div>
    </article>
  );
}

export default Cart;
