import React, {useState, useEffect} from "react";
import puma from "./puma.png"
import adidas from "./adidas.png"
import nike from "./nike.png"
export default function ItemDetail({producto}){


    return(
        <>
        <div>
                {(producto.id) ?
                    <>{producto.id + " Nombre  " + producto.nombre + " precio : " + producto.precio}
                    <br/>
                    { <img src={producto.nombre} alt="" />}
                    {producto.imagen}
                    {producto.descripcion}

                    </>
                    :
                    <>Loading...</>
                }
                {/* <ComponenteQueTenemos stock={producto.stock} id={producto.id}/> */}
            </div>
        </>

    )
}