
import React, {useState} from "react";



export default function Clase({}){
const [contador, setContador] = useState(0)
const aumentar= ()=> {
    setContador(contador+1)
}
    return(
        <>
        <button onClick={aumentar}>sumar</button>
        </>

    )
}