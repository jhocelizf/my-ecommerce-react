import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({ id, name, price, img, stock }) => {
    return (
        <>
            <div className="padreContainerItem">
                <div className="containerItem">
                    <h2> {name} </h2>
                    <img className="imgDetail" src={img} alt={name} />
                    <h3>Precio: {price} </h3>
                    <h3>Id: {id} </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur similique
                        labore quos quae, inventore consequatur perferendis doloremque excepturi rerum, sunt
                        molestiae hic quisquam aliquid. Eos distinctio maxime iure temporibus.</p>

                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada")}>
                    </ItemCount>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;