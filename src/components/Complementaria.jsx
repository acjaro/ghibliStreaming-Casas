import React, {useState, useEffect} from "react";



export default function Complemetaria({}){

    const [arrayDeProductos, setArrayDeProductos] = useState([]);
    useEffect(() => {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
            .then(response => response.json())
            .then(function (res) {
                //console.log(res.results);
                setArrayDeProductos(res.results);
            });
    }, [])
    return (
        <>
            {
                (arrayDeProductos.length > 0) ?
                    <>
                        {arrayDeProductos.map(item => {
                            return <div>{item.name}</div>
                        })}
                    </>
                    :
                    <>
                        Loading...
                    </>

            }
        </>
    )
}