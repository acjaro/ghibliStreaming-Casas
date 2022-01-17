import React, {useState} from "react";
import Producto from "./Producto";


export default function ListaDeProductos(){

// const arrayDeProductos = [
//     {nombre: 'nike', stock:5},
//     {nombre: 'adidas', stock:7}, 
//     {nombre: 'puma', stock:7}]
    
const [arrayDeProductos, setArrayDeProductos ]= useState([
    {nombre: 'nike', stock:5, initial:2, numero:0},
    {nombre: 'adidas', stock:7, initial:3, numero:0}, 
    {nombre: 'puma', stock:9, initial:5 , numero:0}])
    
    
    return(
<>
{arrayDeProductos.map(item=><Producto item={item}/>)
}
</>
    )
}