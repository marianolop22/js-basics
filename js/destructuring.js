// destructuring, es desarmar un objeto en variables
let cliente = {
    nombre: 'Alejandra',
    tipo: 'Premium',
    datos: {
        ubicacion: {
            ciudad: 'Mexico DC',
            pais: 'Mexico'
        },
        cuenta: {
            desde: '10-02-2012',
            saldo: 4000
        }
    }
}

console.log(cliente);

let {nombre, tipo} = cliente;
let {datos: { ubicacion: { ciudad } } } = cliente;




console.log(`el nombre es ${nombre} y el tipo ${tipo}`, ciudad);

// si queres que el nombre de la variable no sea el mismo que el de la propiedad
// let {nombre:nombre2, tipo:tipo2} = cliente;
// console.log(`el nombre es ${nombre2} y el tipo ${tipo2}`);

