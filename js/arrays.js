// arrays
// const numeros = [10,20,30,40,50];

// console.table(numeros);

// const obj = [
//     {nombre: 'mariano', edad: '20'},
//     {nombre: 'mariano', edad: '20'},
//     {nombre: 'mariano', edad: '20'},
//     {nombre: 'mariano', edad: '20'},
// ];

// console.table(obj);

const meses = new Array('enero', 'febrero', 'marzo', 'abril');
console.table(meses);
console.table(meses.length);

meses.push ('mayo'); //agrega al final
console.table(meses);

meses.unshift('diciembre'); //agrega al inicico
console.table(meses);

meses.pop(); //elimina al final

meses.shift(); //elimina al inicio
console.table(meses);

meses.slice (0, 1); //elimina rangos



