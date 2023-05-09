import "./Cart.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CarContext } from "../../context/carContext";
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { car, clearCar, totalQuantity } = useContext(CarContext);

    const total = car.reduce((total, product) => total + (product.item.price * product.quantity), 0)

    if (totalQuantity === 0) {
        return (
            <>
                <h2>No hay productos en el Carrito</h2>
                <Link to="/"> Productos </Link>
            </>
        )
    }

    return (
        <div>
            {car.map(product => <CartItem key={product.id} {...product} />) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCar()} className="buttonV"> Vaciar Carrito </button>
            <Link to="/" className="buttonS"> Seguir comprando </Link>
            <Link to="/checkout" className="ends"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart;