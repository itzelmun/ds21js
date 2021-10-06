
let n= prompt('Ingrese el numero limite para obtener un numero aleatorio en ese rango:');

function generarNumerosRandom(n){
    return Math.floor(Math.random() * (n - 1)) + 1;
}

console.log(generarNumerosRandom(n));