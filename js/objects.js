// objetos
// object literal
const persona = {
    nombre: 'Mariano',
    apellido: 'Lopez',
    edad: 41,
    trabajo: true,
    getEdad() {
        return this.edad;
    },
    nacimiento: function () {
        return new Date().getFullYear() - this.edad;
    }
}

// console.log(persona.getEdad());


// const musica = {
//     reproducir: function (cancion) {
//         console.log(`reproduciendo la cancion ${cancion}`);
//     },
//     pausar: () =>{
//         console.log('pausado');
//     }
// }

// musica.borrar = function(id) {
//     console.log(`se borra la cancion id ${id}`);
// }

// musica.reproducir('hotel california');
// musica.pausar();

// musica.borrar(125);

console.log(persona);

// object contrusctor formato viejo
// function Tarea(nombre, urgencia) {
//     this.nombre = nombre;
//     this.urgencia = urgencia;
    
// }

//clases formato nuevo
class Tarea {
    constructor (nombre, urgencia) {
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
}

const tarea1  = new Tarea('mariano','urgente');
const tarea2  = new Tarea('pepe','urgente2');

console.log(tarea1);
console.log(tarea2);

console.log( 'anio de nacimiento ', persona.nacimiento (), persona.getEdad() );