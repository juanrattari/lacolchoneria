
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../helpers/gFetch"
import ItemCount from "../ItemCount/ItemCount"

import "./ItemDetailContainer.css"

const ItemDetail = () => {
    const [producto, setProductos] = useState ({})
    const {productoId} = useParams()

    useEffect(()=>{
        gFetch()
        .then(respProd => setProductos(respProd.find(prod => prod.id === productoId)))
        .catch(err => console.log(err))

       
      }) 

    const onAdd = (cant) => {
        console.log(cant)
    }

  return (
    <div className="detalle">
        <div className="item-detalle">
            <img className="card-img" src={producto.imagen} alt="foto"/>
            <h3>Producto: {producto.nombre}</h3>
            <h3>Marca: {producto.marca}</h3>
            <h3>Categoria: {producto.categoria}</h3>
        </div>
        <div className="item-detalle">
            <ItemCount
            stock={8}
            inicial={1}
            onAdd={onAdd}
            />
        </div>
      
        
    </div>
  )
}

export default ItemDetail