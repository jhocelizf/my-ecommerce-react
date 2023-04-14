const products = [
    {
        id: "1",
        name: "Cartera negra lujo",
        price: "1000",
        category: "cartera",
        idCategory: "2",  
        img: "https://i.pinimg.com/564x/95/e5/fa/95e5facdeca1c11d5766269ad5e3af57.jpg" ,
        stock: 30,
        description: "descripcion del producto"
    },
    {
        id: "2",
        name: "Cartera camel",
        price: "1100",
        category: "cartera",
        idCategory: "2",  
        img: "https://i.pinimg.com/564x/85/f4/9c/85f49c4c6c34a33eeeae0dc063907a73.jpg" ,
        stock: 25,
        description: "descripcion del producto"
    },
    {
        id: "3",
        name: "Cartera blanca sofia",
        price: "1000",
        category: "cartera",
        idCategory: "2",  
        img: "https://i.pinimg.com/564x/0d/f0/2e/0df02e3f657327c43e39844cf88df584.jpg",
        stock: 25,
        description: "descripcion del producto"
    },
    {
        id: "4",
        name: "Mochila ",
        price: "1050",
        category: "mochila",
        idCategory: "3",  
        img: "https://i.pinimg.com/564x/9c/f4/48/9cf4486cf6d778e0557d75322f9f520e.jpg",
        stock: 25,
        description: "descripcion del producto"
    },
    {
        id: "5",
        name: "Monedero pasteles",
        price: "1050",
        category: "monedero",
        idCategory: "4",  
        img: "https://i.pinimg.com/564x/07/0a/f6/070af6e2b4f1e51ab634e756aa824f40.jpg",
        stock: 25,
        description: "descripcion del producto"
    },
    
    {
        id: "6",
        name: "Monedero negro",
        price: "1050",
        category: "monedero",
        idCategory: "4",  
        img: "https://i.pinimg.com/564x/00/0b/d4/000bd47a757919619169fbf64816096f.jpg",
        stock: 25,
        description: "descripcion del producto"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

// funcion similar pero esta debe retonar un solo item 

export const getProductId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id);
            resolve(product)
        }, 100)
    }) 
}

// funcion que retorna una categoria

export const getProductsForCategory = (idCategory) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productsCategory = products.filter(prod => prod.idCategory === idCategory);
            resolve(productsCategory);
        })
    }, 100)

}