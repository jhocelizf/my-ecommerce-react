import { getProductId } from "../../asyncMock"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const{ idItem } = useParams()

    useEffect(() => {
        getProductId(idItem)
            .then(resp => {
                setProduct(resp)
            })
            .catch(error => {
                console.error(error);
            })
    }, [idItem])

    return (
        <div className="ItemDetail">
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer

