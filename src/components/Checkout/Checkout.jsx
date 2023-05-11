import "./Checkout.css"
import { useState, useContext } from "react";
import { CarContext } from "../../context/carContext";
import { db } from "../../services/firebase/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const { car, clearCar } = useContext(CarContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const handleSutmit = (even) => {
        even.preventDefault();

        if (!name || !lastName || !phone || !email || !confirmEmail) {
            setError("Por Favor complete todos los campos");
            return;
        }

        if (email !== confirmEmail) {
            setError("Los emails no son iguales");
            return;
        }

        const order = {
            item: car.map((product) => ({
                id: product.item.id,
                name: product.item.name,
                quantity: product.quantity,
            })),
            total: car.reduce((total, product) => total + product.item.price * product.quantity, 0),
            name,
            lastName,
            phone,
            email,
        };

        addDoc(collection(db, "orders"), order)
            .then((docRef) => {
                setOrderId(docRef.id);
                clearCar();
            })
            .catch((error) => {
                console.error("Error al crear la orden de compra", error);
                setError("Se produjo un error al crear la orden, vuelva a intentar");
            })
    }

    if (orderId) {
        return (
            <span className="thanks"><strong>¡Gracias por tu Compra tu numero de orden es {orderId}!</strong> </span> 
        ) 
    }
    
    return (
        <div className="containerForm">
            <h2>Checkout</h2>
            <form onSubmit={handleSutmit} className="form">
                {car.map((product) => (
                    <div key={product.item.id}>
                        <p>
                            {product.item.name} x {product.quantity}
                        </p>
                        <p>Precio $: {product.item.price} </p>
                    </div>
                ))
                }
                
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=""> Correo Electronico </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=""> Confirma tu Email</label>
                    <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                </div>
                {error && <p style={{ color: "red" }}> {error} </p>}
                <button type="submit" className="botonForm"> Finalizar Compra </button>
            </form>
        </div>
    );
}

export default Checkout;