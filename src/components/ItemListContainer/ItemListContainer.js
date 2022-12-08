import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { gFetch } from "../../helpers/gFetch"

import "./ItemListContainer.css"

const ItemListContainer = ( {greeting} ) => {
  const [productos, setProductos] = useState(0)
  const [cargando, setCargando] = useState(true)

  useEffect(()=>{
    gFetch()
    .then(data => setProductos(data))
    .catch(err => console.log(err))
    .finally(() => setCargando(false))
  }, [])

  console.log(productos)


  return (
    <section className="cards">
      { cargando ? 
            <h2>Cargando...</h2>
          :
            productos.map (producto =>
              <div className="card" key={producto.id}>
                <div>
                  <div>
                    {`${producto.nombre} ${producto.categoria} `}
                  </div>
                  <div>
                    <img className="card-img" src={producto.imagen} alt=""/>
                    {producto.precio}
                  </div>
                </div>
                <div>
                  <button><Link to={`/detalle`}>
                    Detalle</Link>
                  </button>
                </div>
              </div>
              )}
              
    </section> 
  )
}

export default ItemListContainer