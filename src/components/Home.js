import React from "react";
import "./Home.css"
import img1 from "../images/home1.jpg"
import img2 from "../images/vneck1.jpg"
import img3 from "../images/vneck2.jpg"
import img4 from "../images/vneck3.jpg"
import img5 from "../images/oneck1.jpg"
import img6 from "../images/oneck2.jpg"
import img7 from "../images/oneck3.jpg"
import img8 from "../images/flipkart-logo.avif"
import img9 from "../images/amazonlogo.avif"


function Home() {
   return(<>
   <img src={img1} id="img1" alt="img1"/>
   <div id="topic1">
      <center><h1>TOP SELLING PRODUCTS</h1></center>
   </div>
       <center><h1 className="topic2">V NECK</h1></center>
   <div id="vneck">
      <div><img src={img2}/></div>
      <div><img src={img3}/></div>
      <div><img src={img4}/></div>
   </div>
   <center><h1 className="topic2">ROUND NECK</h1></center>
   <div id="Oneck">
      <div><img src={img5}/></div>
      <div><img src={img6}/></div>
      <div><img src={img7}/></div>
   </div>
   <center><h1 className="topic3">GET OUR COOL COLLECTIONS ON</h1></center>
   <div id="logo">
      <div><img src={img8}/></div>
      <div><img src={img9}/></div>
   </div>
   </>)
}
export default Home