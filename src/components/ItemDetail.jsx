import React, {useState, useEffect, useContext} from "react";
import puma from "./puma.png"
import adidas from "./adidas.png"
import nike from "./nike.png"
import Contador from "./Contador";
import { Link } from "react-router-dom";
import { cartcontext } from "./context/CartProvider";

export default function ItemDetail({producto}){
    const [addtocart]= useContext(cartcontext)

const [mostrarContador, setMostarcontador]= useState(true);



    function onAdd(cantidad){
        alert(producto.nombre+ ' '+ cantidad);
        setMostarcontador(false)
        addtocart(producto)
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
