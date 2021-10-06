//itzel guadalupe sanchez munguia 3F
var n = prompt("Dame el tamaño del objeto:");
function names(n){

  var objeto = {};
  var arreglo =[];
  var contador = 0;
  var tiempo = 0;
  
  const add = (key, value) => objeto[key] = value;   
  
  while (contador < 7) {
    var empezar = new Date();
    
    for (var i=0; i<n; i++){
      arreglo[i] = parseInt(Math.random() * n);
      add('name'+arreglo[i]);
    }
    var terminar = new Date() - empezar;
    
    contador++;
    tiempo+= terminar;
  }
  console.log("El tiempo promedio en las 7 corridas fue: " + tiempo/7 + " ms");
}
  names(n);