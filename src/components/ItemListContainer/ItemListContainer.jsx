import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
// importe nuevas funciones:
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/firebase/config';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { idCategory } = useParams();

    useEffect(() => {
        const getData = async () => {
            const queryRef = !idCategory
                ? collection(db, "products")
                : query(
                    collection(db, "products"),
                    where("idCategory", "==", parseInt(idCategory))
                    );
            const response = await getDocs(queryRef);
            const productos = response.docs.map((doc) => {
                const newProduct = {
                    ...doc.data(),
                    id: doc.id,
                };
                console.log(newProduct)
                return newProduct;
            });
            setTimeout(() => {
                setProducts(productos);
            }, 200)

        }
        getData();

    }, [idCategory])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </>
    )
}


export default ItemListContainer