import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

import CartContainer from "./components/CartContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos!"}/> } />
        <Route path="/categoria/:id" element={ <ItemListContainer /> } />
        <Route path="/detail/:productoId" element={ <ItemDetailContainer/> }/>
        <Route path="/carrito" element={ <CartContainer /> } />
        <Route path="*" element={ <Navigate to="/" /> } />  
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
