import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import Producto from "./Producto";
import puma from "./puma.png";
import adidas from "./adidas.png";
import nike from "./nike.png";


    

export default function ItemDetailContainer({}){
    const { productoId } = useParams();

    const [producto, setProducto] = useState([]);



//     useEffect(()=>{
//         setTimeout(()=>{
// const listaDeProductos= [{nombre: 'nike', stock:5, initial:2, id:'001'},{nombre: 'adidas', stock:7, initial:3, id:'002'}, {nombre: 'puma', stock:9, initial:5 , id:'003'}]
// setProductos(listaDeProductos.filter(Producto=> producto.id ==itemId))
//         }, 2000)
//     },[])
useEffect(()=>{
    setTimeout(()=>{

        let listaDeProductos =[{imagen: <img src={nike} alt="nike" />,nombre: 'nike', stock:5, initial:2, precio: 2500 , descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, quis?", id:'001'},
        {imagen: <img src={adidas} alt="adidas" />,nombre: 'adidas', stock:7, initial:3, precio: 2000 , descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, nisi.", id:'002'}, 
        {imagen: <img src={puma} alt="puma" /> ,nombre: 'puma', stock:9, initial:5 ,precio: 2300 , descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ab.", id:'003'}];

        listaDeProductos = listaDeProductos.filter(producto => producto.id == productoId);

        let myProducto = listaDeProductos[0];

        setProducto(myProducto);

    }, 2000)
}, [productoId])

    return(
        <>
        {productoId}
        <ItemDetail producto={producto}/>
        <Link to={"/"}>ir a la pagina principal</Link>
        {/* <img src={puma} alt="" /> */}
        </>

    )
}