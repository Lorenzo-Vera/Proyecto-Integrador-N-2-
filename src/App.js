import './App.css';
import Navegacion from './Componentes/Navegacion';
import {Routes, Route} from "react-router-dom";
import Inicio from './Inicio/Inicio';
import Alta from './Alta/Alta';
import Contacto from './Contacto/Contacto';
import Nosotros from './Nosotros/Nosotros';
import Carrito from './Carrito/Carrito';



function App() {
  return (
    <>
    <Navegacion />

    <Routes>
      <Route  path='/' element={<Inicio />} />
      <Route  path='/alta' element={<Alta/>} />
      <Route  path='/contacto' element={<Contacto/>} />
      <Route  path='/nosotros' element={<Nosotros/>} />
      <Route  path='/carrito' element={<Carrito/>} />
    </Routes>
    </>
    
  );
}

export default App;
