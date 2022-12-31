
import {  useState } from "react"
import {  Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

import "./ItemDetailContainer.css"

const ItemDetail = ({producto}) => {
  const [isCant , setIsCant] = useState (false)
  
    const { agregarCarrito } = useCartContext()

    const onAdd = (cant) => {
        agregarCarrito({...producto, cant})
        setIsCant(true)
    }

  return (
    <div className="detalle">
        <div className="item-detalle">
            <img className="card-img" src={producto.imagen} alt="foto"/>
            <h3>Producto: {producto.nombre}</h3>
            <h3>Marca: {producto.marca}</h3>
            <h3>Precio: {producto.precio}</h3>
            <h3>Categoria: {producto.categoria}</h3>
        </div>
        <div className="item-detalle">
          {isCant ?
          
          <>
       
            <Link to="/carrito">Ir al Carrito</Link>
 
          </>
          : 
          <ItemCount
          stock={8}
          inicial={1}
          onAdd={onAdd}
          />
        }
        </div>
      
        
    </div>
  )
}

export default ItemDetail