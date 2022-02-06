import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch,  Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@restart/ui/esm/Button';
import CartProvider from './components/context/CartProvider';






function App() {
let  arrayDeNavBar =[{nombre:"home ", link: "/"},{nombre:" contacto ", link: "/contacto"},{nombre:" carrito ", link: "/carrito"},,]
  

return (
    <>
       <CartProvider> 
<BrowserRouter>
        <NavBar nombre ={"agustin"} apellido={"casas"} arrayDeLinks={arrayDeNavBar} greeting={"hola mundo"}  />
        <Switch>

          
          {/* ruta home */}
          <Route exact path="/">
            {/* <button onClick={()=>alertEspacial()}></button>  */}
            Hola soy la home <ItemListContainer/>  
                
          </Route>

          {/* ruta contacto */}
          <Route exact path="/contacto">
            Estas en contacto
          </Route>

          {/* ruta carrito */}
          <Route exact path="/carrito">
            <Cart/>
            <br/>
            listo para comprar
          </Route>

          <Route path="/producto:productoId">
        <ItemDetailContainer/>
          </Route>
        
        
        </Switch>
      </BrowserRouter>
     </CartProvider> 
    </>

  );
}

export default App;
