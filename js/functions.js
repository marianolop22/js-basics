// funciones
// si la declaro así, puedo usarla antes de declararlaa
saludar('pedro');

function saludar(  nombre ) {
    console.log(`hola mariano ${nombre}`);
};

saludarDefault( 'mariano');
function saludarDefault (  nombre, trabajo='por defecto' ) {
    console.log(`hola mariano ${nombre} y trabajo de ${trabajo}`);
};


// si la declaro  así,  no  puedo usarla antes de declarla
const suma = ()=> {
    console.log( 2+1 );
}
suma();

// iife son funciones que se autoinvocan
( function ( tecnologia ) {
    console.log(`aqui estoy y aprendo ${tecnologia}`);
}) ('javascript');



//funciones con parametros
const sumas = function (a=0, b=0) {
    return a  + b;
}

console.log( 'la suma es ' + sumas (10, 20));

