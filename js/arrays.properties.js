// metodos de arrays
let personas = [
    {nombre: 'Juan', edad: 20},
    {nombre: 'Pedro', edad: 23},
    {nombre: 'Alberto', edad: 50},
    {nombre: 'Carla', edad: 60},
    {nombre: 'Carla', edad: 70},
    {nombre: 'Ana', edad: 60},
    {nombre: 'Juana', edad: 33}
];

console.table(personas);

//filtrar mayores a
const mayores = personas.filter ( persona => {
    return persona.edad > 25;
});

console.table(mayores);

// extraer una persona, trae la primera
const persona = personas.find ( persona => {
    return persona.nombre == 'Carla';
} )

console.log(persona);

// reduce devuelve un acumulado de registros
let total = personas.reduce ( (edadTotal, persona) => {
    return edadTotal + persona.edad;
},0);

// trae el mayor o el menos
let mayor = personas.reduce ( (prev, current) => {
    console.log(prev, current);
    return prev.edad < current.edad ? prev : current;
});


console.table(mayor);






