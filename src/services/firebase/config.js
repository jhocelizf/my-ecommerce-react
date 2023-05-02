// importo dos funcioones de la libreria firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// inicializeApp : se usa para inializar una instancia de Firebase en la app
// getFirestore : se utiliza para obtener una instacia de Firestore

//creamos un objeto con toda la info de la cuenta de la base de datos
const firebaseConfig = {
    apiKey: "AIzaSyBQYzfEk_ldOtZV5q_cWVfe5chle2I8jKQ",
    authDomain: "purse-ecommerce.firebaseapp.com",
    projectId: "purse-ecommerce",
    storageBucket: "purse-ecommerce.appspot.com",
    messagingSenderId: "830826006167",
    appId: "1:830826006167:web:ee50da19cdf2fa2bdacbd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// exportamos esta referencia para que este disponible en toda la app