
let pendientes = new Array ('Tarea','Comer','Proyecto','Estudiar','Ingles');

let carrito = [
    {id: 1, producto: 'libro'},
    {id: 2, producto: 'camisa'},
    {id: 3, producto: 'disco'},
]

let automovil = {
    modelo: 'Camaro',
    motor: 6.0
}


// for (const pendiente of pendientes) {
//     console.log(pendiente);   
// }

// for (const articulo of carrito) {
//     console.log(articulo);
// }

// for (const prop of Object.values (automovil)) {
//     console.log(prop);
// }


// pendientes.forEach(pendiente => {
//     console.log(pendiente);
// });

// el map crea una copia de lo que está iterando
// let tarea2 = pendientes.map ( tarea => {
//     console.log(tarea);
//     return tarea;
// })

// console.log(tarea2);


let clientes = ['cliente1', 'cliente2','cliente3', 'cliente1', 'cliente2', 'cliente3', 'cliente2', 'cliente1', 'cliente1'];
let unMap = new Map ();

//arma el hashmap
clientes.map ( cli => {
    unMap.set (cli, unMap.get ( cli  ) ? unMap.get ( cli  ) + 1 : 1   );
});



console.log(unMap);

//trae tambien el máximo
console.log( [...unMap.entries()].reduce( (a,b) => a[1] > b[1] ? a : b  ) );


unMap = [...unMap.entries()].sort( (a,b) => a[1] > b[1] ? -1 : 1 );

//trae solo el maximo
console.log(  Math.max.apply(Math, unMap.map(function(o) { return o[1]; })   ) );

//resultado
console.log(unMap[0], unMap[1]);


