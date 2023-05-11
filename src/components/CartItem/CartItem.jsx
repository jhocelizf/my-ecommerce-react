import "./CartItem.css"

const CartItem  = ({name,price, quantity}) => {
    return (
        <div className="containerCar">
        <h4> {name}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio: $ {price} </p>
        </div>
    );
}

export default CartItem;

