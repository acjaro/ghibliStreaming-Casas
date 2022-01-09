import React from "react";


export default function NavBar({arrayDeLinks, nombre, apellido}){


    return(
        <>
        <div>NavBar de {nombre +' '+apellido}</div>
        <p>ghiblistreaming</p>
        {arrayDeLinks.map(link =>  <li><a href="#">{link}</a></li> )}
    
        </>

    )
}