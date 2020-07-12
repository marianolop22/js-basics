"use strict";

// cadenas de texto
// let nombre;
// nombre = 'pepe';

// let mensaje = 'Don\'t do that';
// console.log(mensaje);

// concatenar, template de strings
// let aprendiendo = 'Aprendiendo',
//     tecnologia = 'JavaScrcipt';

// console.log(`${aprendiendo} ${tecnologia}` );

// funciones de strings
// let banda = 'Metallica';
// let cancion = 'Enter Sandman';

// let nombre = banda + ": " + cancion;

// console.log(nombre.length);

// nombre = nombre.concat (" ", "y es genial");
// nombre = nombre.toUpperCase();

// console.log(nombre);

// split
let actividad = "estoy aprendiendo javascript con el curso";

let nombre = actividad.split(' ');
console.table(nombre);

nombre = actividad.replace('javascript','JS');
console.log ( nombre );

nombre = actividad.includes('javascript');

console.log(nombre);
