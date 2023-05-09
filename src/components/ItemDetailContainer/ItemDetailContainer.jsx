//import { getProductId } from "../../asyncMock"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/config";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { idItem } = useParams()

    useEffect(() => {
        const newDoc = doc(db, "products", idItem);

        getDoc(newDoc)
        .then(res => {
            const data = res.data();
            const newProducts = {id: res.id, ...data}
            setProduct(newProducts);
        })
        .catch(error => console.log(error));

    }, [idItem])

    return (
        <div className="ItemDetail">
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer

