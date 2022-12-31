import { createContext, useContext, useState } from "react"

const CartContext = createContext ([])


export const useCartContext = () => useContext(CartContext)



export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState ([])

    const agregarCarrito = (product) => {
        const idx = cartList.findIndex(prod => prod.id === product.id)
        if (idx !== -1) {
            cartList[idx].cant = cartList[idx].cant + product.cant
        } else {
            setCartList ([...cartList, product])
        }
    }

    const precioTotal = () => cartList.reduce((contador, producto)=> contador += (producto.precio * producto.cant) , 0) 

    const cantidadTotal = () => cartList.reduce((contador, producto)=> contador += producto.cant , 0 )
   
    const eliminarItem = (id) => {
        
        setCartList (cartList.filter(prod => prod.id !== id))
    }
    const vaciarCarrito = () => {
        setCartList ([])
    }

    return(
        <CartContext.Provider value = {{

            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarItem
        }}>
            {children}
        /</CartContext.Provider>
    )
}