import { useState, createContext } from "react";
export const CarContext = createContext({ car: [] });
export const CarProvider = ({ children }) => {


    const [car, setCar] = useState([]);
    const totalQuantity = car.reduce((total, product) => total + product.quantity, 0)

    const addItem = (item, quantity) => {
        const newObj = {
            ...item,
            quantity,
        };
        if (insideCart(newObj.id)) {
            car.map((el) => {
                if (el.id === newObj.id) {
                    el.quantity += newObj.quantity;
                }
                return el;
            });
        } else {
            setCar([...car, newObj]);
        }
    };

    //funcion para eliminar productos del carrito

    const removeItem = (id) => {
        const updatedCar = car.filter(prod => prod.id !== id)
        setCar(updatedCar);
    }

    //funcion para vaciar el carrito

    const clearCar = () => {
        setCar([]);
    }

    // funcion auxiliar para verificar si ya esta el producto en el carrito 

    const insideCart = (id) => {
        return car.some(prod => prod.id === id);
    }

    // usamos el componente CarContext.Provider para enviar el valor actual del carrito y los metedos a los componet
    // de mi aplicacion que lo necesite

    return (
        <CarContext.Provider value={{ car, addItem, clearCar, removeItem, totalQuantity }}>
            {children}
        </CarContext.Provider>
    )

}
