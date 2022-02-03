import React, {useState, useEffect, useContext} from "react";
import { cartcontext } from "./context/CartProvider";




export default function Cart({}){

const {cart}= useContext(cartcontext)
console.log(cart)
    return(
        <>
        carrito
        </>

    )
}