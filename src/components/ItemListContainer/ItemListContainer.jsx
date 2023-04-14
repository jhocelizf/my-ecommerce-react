import { useState, useEffect } from 'react';
import { getProducts, getProductsForCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const {idCategory} =useParams();

    useEffect(() => {

        const functionProducts = idCategory ? getProductsForCategory : getProducts;

        functionProducts(idCategory)
            .then(response => setProducts(response))
            .catch(error => console.error(error))
    }, [idCategory])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products= {products} />
        </>
    )
}


export default ItemListContainer