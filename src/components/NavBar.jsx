import React from "react";
import { Button ,Navbar,Container,Nav,  } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function NavBar({arrayDeLinks,  greeting}){


    return(
        <>
        <div>NavBar {greeting}</div>
        
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ghiblistreaming</Navbar.Brand>
    <Nav className="me-auto">
      {arrayDeLinks.map(link =>  <Link to={link.link}>.{link.nombre}    </Link> )}
    </Nav>
    </Container>
  </Navbar>
        
        </>

    )
}