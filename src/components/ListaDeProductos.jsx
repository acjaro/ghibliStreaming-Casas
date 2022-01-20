import React, {useState, useEffect} from "react";
import Producto from "./Producto";


export default function ListaDeProductos(){



    const [arrayDeProductos, setArrayDeProductos ]= useState([])
    


    useEffect(() => {



const promesaProd = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([{nombre: 'nike', stock:5, initial:2, numero:0},
    {nombre: 'adidas', stock:7, initial:3, numero:0}, 
    {nombre: 'puma', stock:9, initial:5 , numero:0}])
    }, 2000)
    })

    promesaProd
    .then((res) => {
        console.log(res)
        setArrayDeProductos(res)
    })
    .catch((err) => {
        console.log(err);
    })


}, [])





    return(
<>
{arrayDeProductos.map(item=><Producto item={item}/>)
}
</>
    )
} 






    