// Inicializa una lista vacía de estudiantes
let listaEstudiantes = [];
// Obtiene el formulario del DOM
const formulario = document.querySelector('#formulario');
// Agrega un evento 'submit' al formulario
formulario.addEventListener('submit', function(e) {
    // Previene la acción por defecto del formulario
    e.preventDefault();
       // Obtiene los valores de los campos del formulario
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let cedula = document.getElementById('cedula').value;
    // Verifica que todos los campos estén llenos
    if(nombre === '' || apellido === '' || cedula === ''){
        alert("Todos los campos deben ser llenados");
        return;   
    }
    // Crea un objeto estudiante con los valores obtenidos
    let estudiante = {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula
    };
    // Agrega el estudiante a la lista de estudiantes
    listaEstudiantes.push(estudiante);
    // Actualiza la lista de estudiantes en el DOM
    actualizarLista();
});
// Función para actualizar la lista de estudiantes en el DOM
function actualizarLista() {
    // Obtiene el div de la lista de estudiantes
    let divLista = document.getElementById('listaEstudiantes');
     // Limpia el contenido del div
    divLista.innerHTML = '';
    // Itera sobre cada estudiante en la lista
    listaEstudiantes.forEach((estudiante, index) => {
        // Crea un nuevo div para cada estudiante
        let fila = document.createElement('div');
        // Agrega el nombre, apellido y cédula del estudiante al div
        // También agrega botones para editar y eliminar al estudiante
        fila.innerHTML = `
            <p>${estudiante.nombre} ${estudiante.apellido}, ${estudiante.cedula}</p>
            <button onclick="editar(${index})">Editar</button>
            <button onclick="eliminar(${index})">Eliminar</button>
        `; // Agrega el div al div de la lista de estudiantes
        divLista.appendChild(fila);
    });
}
// Función para editar un estudiante
function editar(index) {
     // Obtiene el estudiante de la lista
    let estudiante = listaEstudiantes[index];
     // Rellena los campos del formulario con los datos del estudiante
    document.getElementById('nombre').value = estudiante.nombre;
    document.getElementById('apellido').value = estudiante.apellido;
    document.getElementById('cedula').value = estudiante.cedula;
}
// Función para eliminar un estudiante
function eliminar(index) {
    listaEstudiantes.splice(index, 1);
    // Actualiza la lista de estudiantes en el DOM
    actualizarLista();
}