import React, {useEffect, useState} from "react";



export default function Clase({}){
// useEffect(() =>{
// console.log('arraca aca')

// const promesaProductos = new Promise ((resolve, reject)=>{

// setTimeout(() => {
//     //reject('fallo el servidor')
//     resolve(['nike', 'adidas', 'chanel' ])
// },2000);

// });
// // promesaProductos.then(()=>{
// //     console.log(promesaProductos)
// // })


// promesaProductos
// .then((res)=>{
//     console.log(res);
//     console.log(promesaProductos);
// })
// .catch((err)=>{
//     console.log(err)
//     console.log('falloooooo')
// })



// });
//     return(
//         <>
        
//         </>

//     )
// }


//export const Clase2 = () => {


    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const promesaProd = new Promise((resolve, reject) => {
            setTimeout(() => {
                
                resolve([{ nombre: 'manzana', precio: 150 },
                { nombre: 'pera', precio: 450 },
                { nombre: 'naranja', precio: 350 }])

            }, 4000)
        })

        promesaProd
            .then((res) => {
                console.log(res)
                setProductos(res)
            })
            .catch((err) => {
                console.log(err);
            })


    }, [])


    return (
        <div>

            {productos.map(item => {
                return (
                    <>
                        <p>{item.nombre}</p>
                        <p>{item.precio}</p>
                    </>
                )

            })}
        </div>
    )
}
