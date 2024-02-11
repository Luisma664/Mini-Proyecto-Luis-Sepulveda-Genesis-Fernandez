let estudiantes = [
    {
        nombre: 'Carlos',
        apellido: 'Toretto',
        cedula: '30874005',

        calificaciones: {
            matematica: 15,
            ingles: 20,
            quimica: 17
        }
    }
];



function agregar() {
    // Agrega un nuevo estudiante
    estudiantes.push({
        nombre: 'Nuevo',
        apellido: 'Estudiante',
        cedula: '12345678',
        calificaciones: {
            matematica: 10,
            ingles: 10,
            quimica: 10
        }
    });
    leer();
}


    function eliminar() {
        // Elimina el último estudiante
        estudiantes.pop();
        leer();
    }

    function actualizar() {
        // Actualiza el último estudiante
        let estudiante = estudiantes[estudiantes.length - 1];
        estudiante.nombre = 'Actualizado';
        estudiante.apellido = 'Estudiante';
        estudiante.cedula = '87654321';
        estudiante.calificaciones.matematica = 20;
        estudiante.calificaciones.ingles = 20;
        estudiante.calificaciones.quimica = 20;
        leer();
    }

    function leer() {
        // Lee y muestra todos los estudiantes
        let output = '';
            estudiantes.forEach((estudiante, index) => {
                output += `<h2>Estudiante ${index + 1}</h2>`;
                output += `<p>Nombre: ${estudiante.nombre}</p>`;
                output += `<p>Apellido: ${estudiante.apellido}</p>`;
                output += `<p>Cédula: ${estudiante.cedula}</p>`;
                output += `<h3>Calificaciones</h3>`;
                output += `<p>Matemática: ${estudiante.calificaciones.matematica}</p>`;
                output += `<p>Inglés: ${estudiante.calificaciones.ingles}</p>`;
                output += `<p>Química: ${estudiante.calificaciones.quimica}</p>`;
            });
            document.getElementById('output').innerHTML = output;
    }

// Muestra los estudiantes iniciales
leer();







<h1>listado de Estudiantes</h1>

        
<button onclick="agregar()" class="agregar">Agregar</button>
<button onclick="eliminar()" class="eliminar">Eliminar</button>
<button onclick="actualizar()" class="actualizar">Actualizar</button>
<button onclick="leer()" class="leer">Leer</button>
<div id="output"></div>