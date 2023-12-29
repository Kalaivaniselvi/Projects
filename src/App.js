import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Product from "./components/Product";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Home from "./components/Home";
import "./App.css";
import Cart from "./components/Cart";
import { Mycontext } from "./components/Levelcontext";
function App() {
  const [cart, setCart] = useState([]);
  const [show, setshow] = useState(true);
  return (
    <>
      <Mycontext.Provider value={{ cart, setCart, show, setshow }}>
        <Router>
          <div className="App">
            <nav>
              <ul>
                <li>logo</li>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li id="product">
                  <Link to="/product">PRODUCT</Link>
                </li>
                <li>
                  <Link to="/cart">ADD TO CART
                    <i class="fa-solid fa-cart-plus"></i>{" "}
                    <span>{cart.length}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/payment">PAYMENT</Link>
                </li>
                <li>
                  <Link to="/login">LOGIN</Link>
                </li>
              
              </ul>
            </nav>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/product" element={<Product />}></Route>

              <Route path="/login" element={<Login />}></Route>
              <Route path="/payment" element={<Payment />}></Route>
              {/* <Route path="/addtocart" element={<Addtocart />}></Route> */}
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </div>
        </Router>
      </Mycontext.Provider>
    </>
  );
}

export default App;
