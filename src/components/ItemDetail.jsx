import React, {useState, useEffect} from "react";
import puma from "./puma.png"
import adidas from "./adidas.png"
import nike from "./nike.png"
import Contador from "./Contador";
import { Link } from "react-router-dom";

export default function ItemDetail({producto}){

const [mostrarContador, setMostarcontador]= useState(true);



    function onAdd(cantidad){
        alert(producto.nombre+ ' '+ cantidad);
        setMostarcontador(false)
    }
    return(
        <>
        <div>
                {(producto.id) ?
                    <>{producto.id + " Nombre  " + producto.nombre + " precio : " + producto.precio}
                    <br/>
                    
                    {producto.imagen}
                    <br/>
                    {producto.descripcion}
                    <br/>
                    {
                    (mostrarContador)?
                    <Contador tope={producto.stock} initial={producto.initial} onAdd={onAdd} />
                    :
                    <>
                    <Link to={"/carrito"}>. ir al carrito </Link>
                    </>

                    }
                    
                    </>
                    :
                    <>Loading...</>
                }
                {/* <ComponenteQueTenemos stock={producto.stock} id={producto.id}/> */}
            </div>
                   
        
        </>

    )
}
