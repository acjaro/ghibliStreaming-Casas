import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Clase from './components/Clase'
import Clase2 from './components/Clase2'
import Carrito from './components/carrito';
import Producto from './components/Producto';
import ListaDeProductos from './components/ListaDeProductos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Complemetaria from './components/Complementaria';
function App() {
let  arrayDeNavBar =["home","contacto","peliculas"]
  return (
    <>
        <NavBar nombre ={"agustin"} apellido={"casas"} arrayDeLinks={arrayDeNavBar} greeting={"hola mundo"}  />
        <Carrito/>
  <ListaDeProductos/>
        

{/* <Clase2/> */}
{/* <Complemetaria/> */}
    </>

  );
}

export default App;
