

const ItemCount = ({stock, initial, onAdd}) => {
    return <form>
        <p>Stock : {stock}</p>
        <input id="cantidad" type="number" value={initial}></input>
        <button onClick={(e) => onAdd(e,1)}>Agregar al carrito</button>
    </form>
}

export default ItemCount;