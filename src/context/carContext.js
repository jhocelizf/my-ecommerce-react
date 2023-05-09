// importar el hook usestate y createContext qie me permite crear un contexto con toda 
//la logica de mi carrito de comprar

import { useState, createContext } from "react";

// creamos un nuevo contexto 
// el valor inicial por default es un objeto con la propiedad carrito con un array vacio

export const CarContext = createContext({car:[]});

//creamos un componente llamado "CarProvider" en español proveedor de carrito
//tambien lo puede encontrar como proveedor de contexto

export const CarProvider = ({children}) => {
    //creamos un estado local carrito con el hook useState

    const [car, setCar] = useState([]);
    //verificamos por consola
    console.log(car);
    const totalQuantity = car.reduce((total, product) => total + product.quantity, 0)
    // agregamos algunos metedos al proveedor de contexto para manipular el carrito de compras
    // funcion agregar al carrito

    const addItem = (item, quantity) => {
        if (!insideCart(item.id)){
            setCar(prev => [...prev,{item, quantity}]);
            /*
            La sintaxis: prev => [...prev,{item, quantity}]
            se utiliza paracrear un nuevo arrar apartir del estado anterios del carrito (prev) y agregar 
            un nuevo obejto que representa el nuevo producto
            */
        } else{
            console.log(("productos ya agregador"));
        }
    }

    //funcion para eliminar productos del carrito

    const removeItem = (id) => {
        const updatedCar = car.filter(prod => prod.id !== id)
        setCar(updatedCar);
    }

    //funcion para vaciar el carrito

    const clearCar = () =>{
        setCar([]);
    }

    // funcion auxiliar para verificar si ya esta el producto en el carrito 

    const insideCart = (id) => {
        return car.some(prod => prod.id === id);
    }

    // usamos el componente CarContext.Provider para enviar el valor actual del carrito y los metedos a los componet
    // de mi aplicacion que lo necesite

    return(
        <CarContext.Provider value={{car, addItem, clearCar, removeItem, totalQuantity}}>
            {children}
        </CarContext.Provider>
    )

    // childer: propiedad especial que se utiliza para representar a todos aquellos componentes que puedan
    //necesitar el carrito y sus metedos.
}
