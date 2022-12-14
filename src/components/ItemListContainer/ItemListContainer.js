import {useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../../helpers/gFetch"

import "./ItemListContainer.css"

const ItemListContainer = ( {greeting} ) => {
  const [productos, setProductos] = useState(0)
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()



  useEffect(()=>{
    if (id) {
      gFetch()
      .then(data => setProductos(data.filter(prod => prod.categoria === id)))
      .catch(err => console.log(err))
      .finally(() => setCargando(false))
    } else {
      gFetch()
      .then(data => setProductos(data))
      .catch(err => console.log(err))
      .finally(() => setCargando(false))
    }
  }, [id])

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
                    {`${producto.nombre} - ${producto.marca} `}
                  </div>
                  <div>
                    <img className="card-img" src={producto.imagen} alt=""/>
                  </div>
                  <div>
                    Precio: {producto.precio}
                  </div>
                </div>
                <div>
                  <button><Link to={`/detail/${producto.id}`}>
                    Detalle</Link>
                  </button>
                </div>
              </div>
              )}
              
    </section> 
  )
}

export default ItemListContainer