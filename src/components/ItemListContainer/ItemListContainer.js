import {useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom"
import { Cargando } from "../Cargando/Cargando"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import "./ItemListContainer.css"

const ItemListContainer = ( {greeting} ) => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()
  


  useEffect(()=>{

    const db = getFirestore()
    const queryCollection = collection(db, "productos")

    const queryFitrado = id ? query(queryCollection, where ("categoria", "==", id)) : queryCollection


    getDocs(queryFitrado)
    .then(data => setProductos (data.docs.map(productos => ({id: productos.id, ...productos.data()}) )))
    .catch(err => console.log(err))
    .finally(()=> setCargando(false))
  
  }, [id])

  return (
    <section className="cards">
      { cargando ? 
            <Cargando/>
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