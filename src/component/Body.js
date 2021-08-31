import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as style from "./body.module.css"

import Card from "./Card"


import Navbar from "./Navbar"
import background from "../images/gym.jpg"

import Image from 'react-bootstrap/Image'
import largeImage from "../images/fake.jpg"
import Treadmill from "../images/treadmill.png"
import Yoga from "../images/yoga.png"
import Time from "../images/24.png"
import Friends from "../images/friends.png"
import Judgement from "../images/judgement.png"
import Equiptment from "../images/kettlebell.png"






const aboutuS =

"Shore Strength  is your new home in boutique wellness."+
 "We join the dependable standards of Pilates with forefront development to give you the most out of each exercise."+
 " Our specialists are very prepared and fit the bill to furnish you with shape centered alterations that will push you as far as possible without bargaining your security."+
  " Expect high-vitality quick paced exercises that leave each muscle shaking. "+
   "Shore Strength was established in 2012 by Jeanette and Ryan and now we have 2 NYC areas… with a third in transit!"+

"The Shore Strength Former was structured solely for Shore Strength to consolidate two of the best bits of Pilates hardware, the reformer and the Pilates seat. Co-structured with the Villency Design Group,"+
 "the Shore StrengthFormer displays an extraordinary cross breed of seat and reformer Pilates techniques, mixing quality preparing and cardio for a full-body exercise."+

"You can anticipate brisk, consistent changes, a quiet carriage and additional choices for shifting dimensions of protection from make the moves all the more difficult, at last focusing on the muscles all the more profoundly for a more prominent consume."+

"Our Shore Strength IR class is warmed by cutting edge full range infrared boards. Full range infrared warmth is the most vitality productive approach to warm a space and you get a noteworthy increase in advantages just from going into the room."+

"You’ll get a vibe decent surge of serotonin and dopamine simply like from the sun’s characteristic beams in addition to IR has been appeared to help with cell fix, flow, detoxification, and stress decrease. IR warm is the following stage in exercise advancement."


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
    <div  id="skew2" className="cus-div">
    
        <div className = "content">
        <div className="AboutUs">
        <div >
        <h1>ABOUT US</h1>

        </div>
        <div className='AB'>
        <h2>Shore Strength</h2>
        <p>{aboutuS}</p>

        </div>
        </div>

        
       
        </div>
    </div>


</div>
          


</section>   

<section id="Price" class>
<div className="wrapper">
    <div  id="skew1" className="cus-div">
        <div className = "content">
        <div className="pricing">
        <h1>PRICING</h1>

        </div>
        <div className="cardContainer">
        <Card height="400px"  marginTop="60px"
            header="Basic"
        />
        <Card height="450px" marginTop="30px" 
             header="Silver "
        />
        <Card height="500px" marginTop="10px"
         header="Gold" />


        </div>
       
        </div>
    </div>


</div>
</section>

<section id="Programs">

<h1>What we Offer </h1>

<div className="offerIcons" class="row justify-content-between">


<div className="offer" class="col-6" >
<img src={Treadmill}/>
<h1>Cardio</h1>
<p>Endless ways to get your cardio in. From treadmills to stairs.</p>
</div>


<div className="offer" class="col-6" >
<img src={Yoga}/>
<h1> Special  classes </h1>
<p>For those not interested into weight training, we offer classes such as Yoga, Pilates and much more </p>

</div>

<div className="offer" class="col-6" >
<img src={Time}/>

</div>

<div className="offer" class="col-6" >
<img src={Friends}/>

    
</div>




<div className="offer" class="col-6" >
<img src={Judgement}/>

    
</div>

<div className="offer" class="col-6" >
<img src={Equiptment}/>

    
</div>

</div>





</section>






        </body>
    );
} ;
export default Body