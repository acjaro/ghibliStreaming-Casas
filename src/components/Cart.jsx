import React, {useState, useEffect, useContext} from "react";
import { cartcontext } from "./context/CartProvider";




export default function Cart({}){

    const {deleteItem} =useContext(cartcontext)

const {cart}= useContext(cartcontext)
console.log(cart)
    return(
        <>
        carrito
        {cart.map(element =><> <div key={element.item.id} >{element.item.nombre} - cantidad  {element.count} <button onClick={() => deleteItem(element.item.id)}>borrar producto</button></div></>)}
        
        </>

    )
}