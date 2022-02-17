import React, {useState, useEffect} from "react";
import Producto from "./Producto";
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase/FireBase'
export default function ItemListContainer(){



    const [arrayDeProductos, setArrayDeProductos ]= useState([])
    


    const [items, setItems] = useState([]);
    useEffect(() => {
  
      const db = getFirestore();
  
      const itemCollection = db.collection("tema")
      //.where('category', '==', 'adidas');
  
      itemCollection.get()
        .then((querySnapShot) => {
  
          if (querySnapShot.size == 0) {
            console.log('no hay documentos con en ese query');
            return
          }
  
          console.log('hay documentos');
  
          //console.log(querySnapShot.docs);
  
          setItems(querySnapShot.docs.map((doc)=> {
              return { id: doc.id, ...doc.data() }
          }
          ));
          
        })
        .catch((err)=>{
          console.log(err);
        })
    }, [])





    return(
<>


{/* {JSON.stringify(items)} */}


{items.map(item=><><p>PRODUCTO</p>
        <p>{item.nombre} </p>
        <Link to={"/producto"+item.id}>ir al item {item.id}</Link></>)
}
</>
    )
} 






    