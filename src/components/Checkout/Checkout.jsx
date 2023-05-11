import "./Checkout.css"
import { useState, useContext } from "react";
import { CarContext } from "../../context/carContext";
import { db } from "../../services/firebase/config";
import { collection, addDoc, query, where, writeBatch, documentId, getDocs } from "firebase/firestore";

const Checkout = () => {
    const { car, clearCar } = useContext(CarContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    const createOrder = async ({ name, lastName, phone, email }) => {

        try {

            const objOrder = {
                buyer: {
                    name,
                    lastName,
                    phone,
                    email,
                },
                item: car,
                total: car.reduce((total, product) => total + product.price * product.quantity, 0),

            };
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = car.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = car.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }

            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, 'orders');

                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCar();
            } else {
                console.log(outOfStock)
                console.error('Hay productos que están fuera de stock');
            }

        } catch (error) {
            console.error("Error al crear la orden de compra", error);
            setError("Se produjo un error al crear la orden, vuelva a intentar");
        }
    }

    const handleSutmit = (event) => {
        event.preventDefault();

        if (!name || !lastName || !phone || !email || !confirmEmail) {
            setError("Por Favor complete todos los campos");
            return;
        }

        if (email !== confirmEmail) {
            setError("Los emails no son iguales");
            return;
        }
        const userData = {
            name, lastName, phone, email
        }
        createOrder(userData)
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
                    <div key={product.id}>
                        <p>
                            {product.name} x {product.quantity}
                        </p>
                        <p>Precio $: {product.price} </p>
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