// fechas
const diaHoy = new  Date();

let valor = diaHoy;

valor = diaHoy.getMonth()+1; //empieza desde 0, por eso se suma 1
valor = diaHoy.getDay(); //numerodel dia domingo 0
valor = diaHoy.getDate(); //dia del mes
valor = diaHoy.getFullYear(); //año
valor = diaHoy.getMinutes(); //minutos
valor = diaHoy.getHours(); //minutos
valor = diaHoy.getTime();





console.log(valor);