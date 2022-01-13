import React from "react";
import { Button ,Navbar,Container,Nav } from 'react-bootstrap';


export default function NavBar({arrayDeLinks, nombre, apellido, greeting}){


    return(
        <>
        <div>NavBar de {nombre +' '+apellido + ' ' + greeting}</div>
        
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ghiblistreaming</Navbar.Brand>
    <Nav className="me-auto">
      {arrayDeLinks.map(link =>  <Nav.Link href="#">{link}</Nav.Link> )}
    </Nav>
    </Container>
  </Navbar>
        
        </>

    )
}