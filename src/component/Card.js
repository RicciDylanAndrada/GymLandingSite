import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.module.css"






export default function Card(props){

    const cardStyle={
        width:"15rem",
        height:props.height,

    }
    
    const cardContainer={
        display:"flex",
        padding:"20px 60px",
        marginLeft:"100px%",
        width:"100%",
    
        marginTop:props.marginTop
        
    
    }
var list = ""
    
if(props.header=="Basic"){
    var list = 
    <ul>
    <li>24/7 Gym Access</li>
    <li>Free Wifi Access</li>
    <li>Gym Access to all Locations </li>



      </ul>
      
}
else if(props.header=="Silver"){
    var list = 
    <ul>
    <li>24/7 Gym Access</li>
    <li>Free Wifi Access</li>
    <li>Gym Access to all Locations </li>
    <li>Bring a Friend</li>
    <li>Access to Tranning Booth </li>


      </ul>
      
}
else if (props.header=="Gold"){
    var list = 
    <ul>
    <li>24/7 Gym Access</li>
    <li>Free Wifi Access</li>
    <li>Gym Access to all Locations </li>
    <li>Bring a Friend</li>
    <li>Access to Tranning Booth </li>
    <li>20% Discount at Shake Bar</li>
    <li>Access to all Special Classes</li>


      </ul>
      
}

return(
    
    <div class = "card-container " style={cardContainer} >
<div class="card bg-light mb-3 " style={cardStyle}>
<div class="card-header">{props.header}</div>
<div class="card-body">
  <h5 class="card-title">{props.title}</h5>
  <p class="card-text">
  {list}
  </p>
</div>
</div>
    </div>
    

)
}
