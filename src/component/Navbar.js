import { Link } from "gatsby"
import * as React from "react"
import '../style/global.css'

const pageStyles = {
    position:"absolute",
    color:"white",
    top:"0",
    width:"100%",
    padding:"20px 50px",
       color:"black",
    height:"60px",
    display:"flex",
    flexDirection:"row",
    gap:"30px"




  }

  const containerStyle ={
    alignSelf: "center",
    width:"400px",
    paddingLeft:"300px",
    

    marginTop:"25px",
    display: "flex",
  justifycontent: "center",

    marginLeft:"40px",
    color:"white",
    display:"flex",
    flexDirection:"row",
    gap:"40px",

  }


export default function Navbar(){
    return(
        <nav style ={pageStyles}>
        <h1 >    Shore Strength  </h1>

        <div className ="linkContainer" style={containerStyle}>
        
        <div className="Home" >
        <Link> Home</Link>

        </div>

        <div className="About">
        <Link > About</Link>

        </div>
        <div className="Contact">
        <Link> Contact</Link>

        </div>
        <div className="Classes" >
        <Link > Classes</Link>

        </div>
        <div className="Products">
        <Link > Products</Link>

        </div>
          


          

        </div>
        


        </nav>
    )
}