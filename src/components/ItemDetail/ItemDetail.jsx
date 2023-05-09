import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { useState } from "react";
// importamos carContext
import { CarContext } from "../../context/carContext";
import { useContext } from "react";

const ItemDetail = ({ id, name, price, img, stock, description }) => {

    const [addQuantity, setAddQueantity] = useState(0);

    const {addItem} = useContext(CarContext);

    const quantityHandler = (queantity) => {
        setAddQueantity(queantity);
        
        // Ahora aca creo un objeto con el item y la cantidad
        const item = {id, name, price};
        addItem(item, queantity );
    }

    return (
        <>
            <div className="padreContainerItem">
                <div className="containerItem">
                    <h2> {name} </h2>
                    <img className="imgDetail" src={img} alt={name} />
                    <h3>Precio: {price} </h3>
                    <h3>Id: {id} </h3>
                    <p> {description}</p>

                    {
                        addQuantity > 0 ? (<Link to="/cart" className="ends"> Terminar compra </Link>) : (<ItemCount initial={1} stock={stock}
                        onAdd={quantityHandler}/>)
                    }
                </div>
            </div>
        </>
    );
}

export default ItemDetail;



