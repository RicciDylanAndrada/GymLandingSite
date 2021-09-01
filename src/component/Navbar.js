import { Link } from "gatsby"
import { Container,Navbar, Nav,NavDropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from "react"
import '../style/global.css'
import { white } from "chalk";

const pageStyles = {
    position:"absolute",
   




  }

  const containerStyle ={
    width:"100%"
    

  }



export default function Header(){

  
    return(


        <nav >


<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
  <Container className="navColor">
  <Navbar.Brand href="#home">Shore Strength</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#About">About us</Nav.Link>
      <Nav.Link href="#Price">Pricing</Nav.Link>
      <Nav.Link href="#Programs">Programs</Nav.Link>

      
    </Nav>
    <Nav>
      <Nav.Link className="contact" href="mailto:email@address.com" >Contact Us
</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


</nav>
        )
}