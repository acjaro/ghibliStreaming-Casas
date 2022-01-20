import React, {useState} from "react";
import { Button  } from 'react-bootstrap';
export default function MasMenos({tope, initial}){


const [cantidad, setCantidad] = useState(initial);


    function sumar (){
let nuevaSuma = cantidad
if(nuevaSuma < tope){ setCantidad(nuevaSuma + 1)}




}

function restar (){
    let nuevaResta = cantidad
    if(nuevaResta > 1){ setCantidad(nuevaResta - 1)};
    
}

    return(
        <>
        <Button onClick={()=>restar()}>-</Button>
        {cantidad}
        <Button onClick={()=>sumar()}>+</Button>
        <br/>
        <br/>
        </>
    )
}