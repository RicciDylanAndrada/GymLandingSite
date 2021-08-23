import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as style from "./body.module.css"

import Card from "./Card"


import Navbar from "./Navbar"
import background from "../images/gym.jpg"

import Image from 'react-bootstrap/Image'
import largeImage from "../images/fake.jpg"




const Body=() =>{
    return(
        <body  >

        <section id="Home">
        <div className={style.nav}>

</div>
<div className = "background">




<h1 className ="quote">¨The only person you are destined to become is the person you decide to be</h1>

</div>

<div>
        <Navbar />

</div>


<h1>Hello</h1>
        </section>
       

<section id="About" class>
<div className="wrapper">
    <div  id="skew1" className="cus-div">
        <div className = "content ">
        <div className="cardContainer">
        <Card height="400px" />

        </div>
        </div>
    </div>


</div>
          


</section>
        </body>
    );
} ;
export default Body