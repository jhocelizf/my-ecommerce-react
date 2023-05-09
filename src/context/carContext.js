import { useState, createContext } from "react";
export const CarContext = createContext({car:[]});
export const CarProvider = ({children}) => {


    const [car, setCar] = useState([]);
    const totalQuantity = car.reduce((total, product) => total + product.quantity, 0)
    // agregamos algunos metedos al proveedor de contexto para manipular el carrito de compras
    // funcion agregar al carrito

    const addItem = (item, quantity) => {
        if (!insideCart(item.id)){
            setCar(prev => [...prev,{item, quantity}]);
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

}
