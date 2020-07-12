const puntaje = 1000;
const logueado = true;

let hayValor; //null undefined o vacío no hay valor

if (puntaje === 1000) {
    console.log('es iguahl');
    
} else {
    console.log('no es igual');
}


if (logueado) {
    console.log('está loguead');

} else {
    console.log('no está logueado');    
}

if ( hayValor ) {
    console.log(`hay valor y es ${hayValor}`);
} else {
    console.log('no hay valor');
}

// ternario
console.log( logueado ? 'ingresaste': 'no ingresaste');

// switch
const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        console.log(`pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`pagaste con ${metodoPago}`);
        break;

    default:
        console.log('no pagaste');
        break;
}