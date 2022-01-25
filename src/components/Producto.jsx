import React from "react";
import Contador from "./Contador";
import { Link } from 'react-router-dom';

export default function Producto({item}){
   
function onAdd(){
alert(item.nombre+ ' '+item.stock);

}


    console.log(item)
    return(
        <><p>PRODUCTO</p>
        <p>{item.nombre} </p>
        <Link to={"/producto"+item.id}>ir al item {item.id}</Link>
        <p>stock:{item.stock} initial:{item.initial}</p>
        <div onClick={()=>onAdd()}>agregar al carrito</div>
        
        <Contador tope={item.stock} initial={item.initial}  />
        
        
        
        </>
    )
}