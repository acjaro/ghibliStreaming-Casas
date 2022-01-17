import React from "react";
import MasMenos from "./MasMenos";
export default function Producto({item}){

function onAdd(){
alert(item.nombre+ ' '+item.stock);

}


    console.log(item)
    return(
        <><p>PRODUCTO</p>
        <p>{item.nombre} </p>
        <p>stock:{item.stock} initial:{item.initial}</p>
        <div onClick={()=>onAdd()}>agregar al carrito</div>
        
        <MasMenos tope={item.stock} initial={item.initial}  />
        
        </>
    )
}