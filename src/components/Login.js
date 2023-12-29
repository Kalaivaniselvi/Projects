import React from "react"
import "./Login.css"
function Login() {
    return(<>
    <div className="login">
        <div className="loginimg">
        <img src={require('../images/login.jpg')}  alt="fireSpot"/>
        </div>
        <div id="info">
            <h1 id="head">Login</h1>
            <label>Number:</label>
            <input type="text" required/><br/><br/>
            <label>Email:</label>
            <input type="email" className="email"/><br/>
            <button id="phn">Continue with Phonenumber</button>
        </div>
    </div>
    </>)
}
export default Login