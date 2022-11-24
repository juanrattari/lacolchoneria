import "./ItemListContainer.css"

const ItemListContainer = ( {greeting} ) => {
  return (
    <div className="greeting">ItemListContainer
        <br/>
        <h1>{greeting}</h1>
    </div> 
  )
}

export default ItemListContainer