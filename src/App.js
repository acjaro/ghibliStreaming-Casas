import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch,  Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Carrito from './components/carrito';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
let  arrayDeNavBar =[{nombre:"home ", link: "/"},{nombre:" contacto ", link: "/contacto"},{nombre:" carrito ", link: "/carrito"},,]
  return (
    <>
        
 
 
        

{/* <Clase2/> */}
{/* <Complemetaria/> */}
    
<BrowserRouter>
        <NavBar nombre ={"agustin"} apellido={"casas"} arrayDeLinks={arrayDeNavBar} greeting={"hola mundo"}  />
        <Switch>

          
          {/* ruta home */}
          <Route exact path="/">
            Hola soy la home <ItemListContainer/>  
                <Carrito/>
          </Route>

          {/* ruta contacto */}
          <Route exact path="/contacto">
            Estas en contacto
          </Route>

          {/* ruta carrito */}
          <Route exact path="/carrito">
            listo para comprar
          </Route>

          <Route path="/producto:productoId">
        <ItemDetailContainer/>
          </Route>
        
        
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
