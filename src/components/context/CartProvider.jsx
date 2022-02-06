import React, {useState, useEffect, createContext} from "react";


export const cartcontext = createContext();

export default function CartProvider({children}){

const [cart, setCart ]= useState([])

const addtocart=(product, count)=>{
    if(isInCart(product.id)){
        const indexItem = cart.findIndex(ele => ele.item.id === product.id)
        cart[indexItem].count = cart[indexItem].count + count
        setCart([...cart])
    }else{
    
    setCart([...cart, {item: product, count: count }])
}
}

const isInCart= (id)=>{
    return cart.some(element => element.item.id === id)
}

const deleteItem= (id) =>{
    const updatedCart = cart.filter(element =>element.item.id !== id)
    setCart(updatedCart)
}

    return(
        <>
        <cartcontext.Provider value={{cart, addtocart, deleteItem}}>

        {children}

        </cartcontext.Provider>
        </>

    )
}