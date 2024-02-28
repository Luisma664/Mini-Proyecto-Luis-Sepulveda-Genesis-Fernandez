
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


document.getElementById('formulario').addEventListener ('submit', function(e){
    e.preventDefault();  
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    agregar_usuario(nombre, apellido);
    
});

document.getElementById('formulario').addEventListener ('submit', function(e){
    e.preventDefault();  
    let edad = document.getElementById('edad').value;
    let genero = document.getElementById('genero').value;
    agregar_datos(edad, genero);
});

function agregar_usuario(nombre, apellido) {
    const coleccionUsuarios = collection (db, 'usuario');
    addDoc(coleccionUsuarios, {
        nombre: nombre,
        apellido: apellido,
    })
    .then((docRef) => {
        console.log("usuario guardado con ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error al guardar usuario: ", error);
    });
}

function agregar_datos(edad, genero) {
    const colecciondatos = collection (db, 'datos');
    addDoc(colecciondatos, {
        edad: edad,
        genero: genero,
    })
    .then((docRef) => {
        console.log("usuario guardado con ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error al guardar usuario: ", error);
    });
}










let listaEstudiantes = [];
let estudianteEditando = null; // Variable para almacenar el índice del estudiante que se está editando

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let genero = document.getElementById('genero').value;

    let estudiante = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        genero: genero,
    };

    if (estudianteEditando !== null) { // Si estamos editando
        listaEstudiantes[estudianteEditando] = estudiante; // Actualizar el estudiante
        estudianteEditando = null; // Salir del modo de edición
    } else { // Si estamos agregando un nuevo estudiante
        listaEstudiantes.push(estudiante);
    }

    actualizarTabla();
});

function actualizarTabla() {
    let tabla = document.getElementById('tablaEstudiantes');
    tabla.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Genero</th>
            <th>Acciones</th>
        </tr>
    `;
    listaEstudiantes.forEach((estudiante, index) => {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${estudiante.nombre}</td>
            <td>${estudiante.apellido}</td>
            <td>${estudiante.edad}</td>
            <td>${estudiante.genero}</td>
            <td>
                <button onclick="editar(${index})">Editar</button>
                <button onclick="eliminar(${index})">Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });
}

function editar(index) {
    let estudiante = listaEstudiantes[index];
    document.getElementById('nombre').value = estudiante.nombre;
    document.getElementById('apellido').value = estudiante.apellido;
    document.getElementById('edad').value = estudiante.edad;
    document.getElementById('genero').value = estudiante.genero;
    estudianteEditando = index; // Guardar el índice del estudiante que se está editando
}

function eliminar(index) {
    listaEstudiantes.splice(index, 1);
    actualizarTabla();
}
