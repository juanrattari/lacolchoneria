import {useState} from "react"


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
  return (
    <>
    <div className="greeting">
        Carrito Contador
        <br/>
    </div>
    <h1>{count}</h1>
    <button onClick={ handleContadorSumar } > + </button>
    <button onClick={ handleContadorRestar } > - </button>
    <button onClick={handleOnAdd} > Agregar al carrito </button>
    </> 
  )
}

export default ItemCount
