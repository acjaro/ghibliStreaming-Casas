import React, {useState, useEffect, createContext} from "react";


export const cartcontext = createContext();

export default function CartProvider({children}){

const [cart, setCart ]= useState([])

const addtocart=(product, count)=>{
setCart([...cart, {item: product, count: count }])

}



    return(
        <>
        <cartcontext.Provider value={{cart, addtocart}}>

        {children}

        </cartcontext.Provider>
        </>

    )
}