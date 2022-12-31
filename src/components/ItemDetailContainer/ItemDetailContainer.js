import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Cargando } from "../Cargando/Cargando"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
  const [producto, setProductos] = useState({})
  const [cargando, setCargando] = useState (true)

  const { productoId} = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryDoc = doc(db, "productos", productoId)
    getDoc(queryDoc)
    .then(resp => setProductos ({id: resp.id,...resp.data()}))
    .catch(err=> console.log(err))
    .finally(()=> setCargando(false))
  },[])


  return (
    <>
    {cargando ? <Cargando/> : <ItemDetail producto ={producto}/>}
    </>
  )
}

export default ItemDetailContainer