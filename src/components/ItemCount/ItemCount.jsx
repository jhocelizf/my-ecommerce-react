import { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);
    // entre () pongo el valor inicial del estado 

    const inscrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="counter">
            <div className="controls">
                <button className="smallButton" onClick={decrement}> - </button>
                <div className="numberContainer">
                    <h4 className="number">{quantity}</h4>
                </div>
                <button className="smallButton" onClick={inscrement}> + </button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount;