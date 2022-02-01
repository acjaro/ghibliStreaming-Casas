import React, { useState, useEffect, createContext } from "react";

export const contexto = createContext();

export default function ContextDemo({ children }) {

    // function alertEspacial(){
    //     alert('un alert desde marte!');
    // }

    return (
        <>
            {/* <contexto.Provider value={{alertEspacial}}>
                {children}
            </contexto.Provider>  */}

        </>
    );
}



// import { contexto } from "./ContextDemo"
// const { alertEspacial } = useContext(contexto);