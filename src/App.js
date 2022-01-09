import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
function App() {
let  arrayDeNavBar =["home","contacto","peliculas"]
  return (
    
      <NavBar nombre ={"agustin"} apellido={"casas"} arrayDeLinks={arrayDeNavBar}  />
    
  );
}

export default App;
