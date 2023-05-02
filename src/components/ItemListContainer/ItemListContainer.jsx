import { useState, useEffect } from 'react';
import { getProducts, getProductsForCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
// importe nuevas funciones:
import { collection, getDoc, where, query } from 'firebase/firestore';
import { db } from '../../services/firebase/config';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const {idCategory} =useParams();

    useEffect(()=> {
        const myProducts = idCategory ? query(collection(db, "products"), where("idCategory", "==", idCategory)): collection(db,"products");

        getDoc(myProducts)
        .then(res => {
            const newProducts = res.docs.map( doc => {
                const data = doc.data()
                return {id:doc.id, ...data}
            })
            setProducts(newProducts);
        })
        .catch(error => console.log(error));
    }, [])

/*     useEffect(() => {

        const functionProducts = idCategory ? getProductsForCategory : getProducts;

        functionProducts(idCategory)
            .then(response => setProducts(response))
            .catch(error => console.error(error))
    }, [idCategory]) */

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products= {products} />
        </>
    )
}


export default ItemListContainer