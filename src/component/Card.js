import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.module.css"






export default function Card(props){

    const cardStyle={
        width:"15rem",
        height:props.height
    }
    
    const cardContainer={
        display:"flex",
        padding:"40px 80px",
    
        marginTop:"0"
        
    
    }

return(
    <div class = "card-container" style={cardContainer} >
<div class="card bg-light mb-3" style={cardStyle}>
<div class="card-header">Header</div>
<div class="card-body">
  <h5 class="card-title">Light card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
    </div>
    

)
}
