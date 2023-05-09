import "./CartItem.css"

const CartItem  = ({item, quantity}) => {
    return (
        <div className="containerCar">
        <h4> {item.name}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio: $ {item.price} </p>
        </div>
    );
}

export default CartItem;