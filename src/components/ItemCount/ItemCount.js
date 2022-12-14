import {useState} from "react"
import "./ItemCount.css"

const ItemCount = ( { stock=10, inicial=1, onAdd} ) => {
  const [count, setCount] = useState(inicial)

  const handleContadorSumar = () => {
    if (count < stock){
      setCount (count+1)
    }
  }
  const handleContadorRestar = () => {
    if (count > inicial) {
      setCount (count-1)
    } 
  }
  const handleOnAdd = () => {
    onAdd (count)
  }

  console.log(handleOnAdd)   // IMPRIME EN CONSOLA EL NUMERO AGREGADO AL CARRITO
  
  return (
    <>
    <div className="contador">
      <button onClick={ handleContadorRestar } > - </button>
      <h1>{count}</h1>
      <button onClick={ handleContadorSumar } > + </button>
    </div>
    <button onClick={handleOnAdd} > Agregar al carrito </button>
    </> 
  )
}

export default ItemCount
