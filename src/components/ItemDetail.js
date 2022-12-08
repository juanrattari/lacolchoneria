
import { gFetch } from "../helpers/gFetch"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"


const ItemDetail = ({}) => {
    const [producto, setProductos] = useState({})
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
    <div>
        <div>
            <img src={producto.imagen} alt="foto"/>
            <h2>Producto: {producto.nombre}</h2>
            <h2>Marca: {producto.marca}</h2>
            <h2>Categoria: {producto.categoria}</h2>
        </div>
        <div>
            <ItemCount
            stock={20}
            inicial={1}
            onAdd={onAdd}
            />
        </div>
    </div>
  )
}

export default ItemDetail