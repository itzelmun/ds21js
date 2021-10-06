//itzel guadalupe sanchez munguia 3F
var n = prompt("Dame el tamaño del arreglo:");
var arreglo = [n];

for(i = 0; i<n; i++){
  arreglo[i]=Math.round(Math.random()*100);

}
console.log("Tu arreglo generado aleatorio: "+arreglo);

var p = (prompt("Dame que posicion quieres eliminar:"));
let numero = arreglo.splice(p-1,1);
console.log(arreglo);