import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Clase from './components/clase'
import Carrito from './components/carrito';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
let  arrayDeNavBar =["home","contacto","peliculas"]
  return (
    <>
      <NavBar nombre ={"agustin"} apellido={"casas"} arrayDeLinks={arrayDeNavBar} greeting={"hola mundo"}  />
      <Carrito/>
    
      
 {/* <Clase/>  */}


    </>

  );
}

export default App;
