
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyABXbiP8vm7aDi5_GfRioh9H-mooleIryI",
    authDomain: "proyecto-segundo-electiva.firebaseapp.com",
    projectId: "proyecto-segundo-electiva",
    storageBucket: "proyecto-segundo-electiva.appspot.com",
    messagingSenderId: "824367967427",
    appId: "1:824367967427:web:0e45e770aab18b4a7b8676"
};


const app = initializeApp(firebaseConfig);
let db = getFirestore(app);


document.getElementById('FORMULARIO').addEventListener ('submit', function(e){
    e.preventDefault();  
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    agregar_usuario(nombre, apellido);
});


function agregar_usuario(nombre, apellido) {
    const coleccionUsuarios = collection (db, 'usuario');
    addDoc(coleccionUsuarios, {
        nombre: nombre,
        apellido: apellido
    })
    .then((docRef) => {
        console.log("usuario guardado con ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error al guardar usuario: ", error);
    });
}


