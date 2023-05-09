// importo dos funcioones de la libreria firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// inicializeApp : se usa para inializar una instancia de Firebase en la app
// getFirestore : se utiliza para obtener una instacia de Firestore

//creamos un objeto con toda la info de la cuenta de la base de datos
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// esta referencia para que este disponible en toda la app