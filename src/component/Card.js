import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.module.css"






export default function Card(props){

    const cardStyle={
        width:"15rem",
backgroundColor:"blue",
        height:props.height
    }
    
    const cardContainer={
        display:"flex",
        padding:"20px 40px",
    
        marginTop:props.marginTop
        
    
    }

return(
    <div class = "card-container" style={cardContainer} >
<div class="card bg-light mb-3" style={cardStyle}>
<div class="card-header">{props.header}</div>
<div class="card-body">
  <h5 class="card-title">Light card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
    </div>
    

)
}
