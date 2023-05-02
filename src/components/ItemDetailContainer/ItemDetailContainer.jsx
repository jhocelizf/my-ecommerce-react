//import { getProductId } from "../../asyncMock"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/config";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { idItem } = useParams()

    useEffect(() => {
        const newDoc = doc(db, "products", idItem);

        getDocs(newDoc)
        .then(res => {
            const data = res.data();
            const newProducts = {id: res.id, ...data}
            setProduct(newProducts);
        })
        .catch(error => console.log(error));

    }, [idItem])


    /*     useEffect(() => {
            getProductId(idItem)
                .then(resp => {
                    setProduct(resp)
                })
                .catch(error => {
                    console.error(error);
                })
        }, [idItem]) */

    return (
        <div className="ItemDetail">
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer

