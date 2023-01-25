import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useCartContext } from "../context/CartContext"
import "./CartContainer.css"
import Swal from 'sweetalert2'


const CartContainer = () => {

  const [dataForm, setFormData ] = useState({
    nombre: "",
    email: "",
    telefono: "",
  })
  const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext()

  const agregarOrder = (e)=> {
    e.preventDefault()
    
    const order = {}
    order.buyer = dataForm
    order.precio = precioTotal()
    order.items = cartList.map (({id,precio,nombre}) => ({id,precio,nombre}))
    

    const db = getFirestore()
    const queryCollection = collection(db, "orders")

    if (dataForm.nombre && dataForm.email && dataForm.telefono !== "") {
      addDoc(queryCollection, order)
      .then(({id}) => Swal.fire({
        icon: 'success',
        title: 'Listo!',
        text: `Tu número de seguimiento es: ${id} Muchas gracias por tu compra ${dataForm.nombre}`,
      })
      )
      .catch(err => console.log(err))
      .finally(() => vaciarCarrito())
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacios!',
        text: 'Por favor, completa todos los campos.',
      })
    }

  }


  const handleOnChange = (e) => {
    setFormData({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="centrar">
        <h1>Carrito de Compras</h1>
        {cartList.length !== 0 ?
        <>
        {cartList.map(prod =>
          <div key={prod.id} className="carrito">
              <img src={prod.imagen} alt="" className="img-carrito" />
              <p>Producto: {prod.nombre} - Precio: {prod.precio} - Cantidad: {prod.cant}</p>
                <button onClick={()=>eliminarItem(prod.id)}>X</button>
          </div>)}
       
            
           <h4>El precio total es: {precioTotal()}</h4>
           <form>
            <input className="formulario" type="text" onChange={handleOnChange} name="nombre"  value={dataForm.nombre} placeholder= "ingrese su nombre"/>
            <input className="formulario"type="text" onChange={handleOnChange} name="telefono" value={dataForm.telefono} placeholder= "ingrese su telefono"/>
            <input className="formulario"type="text" onChange={handleOnChange} name="email" value={dataForm.email} placeholder= "ingrese su email"/>
            <button className="formulario" onClick={agregarOrder}>Terminar Compra</button>
           </form>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
        :
        <h2>No hay productos en el carrito.</h2>}
    </div>
  )
}

export default CartContainer