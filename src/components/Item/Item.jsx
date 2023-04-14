import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
    return (
        <>
            <div className="cardProducts">
                <img className="imgProducts" src={img} alt={name} />
                <div className="textCard">
                    <h3> {name} </h3>
                    <p>Precio: {price}</p>
                    <p>Id: {id}</p>
                </div>
                {/* <button className="btnProducts"> Ver detalles </button> */}
                <Link to={`/item/${id}`} className="btnProducts"> Ver detalles </Link>
            </div>
        </>

    )
}

export default Item;