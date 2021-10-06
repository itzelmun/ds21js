
 let d= prompt('Ingrese el tamaño del arreglo:');
 var array= new Array(d);

function bubblesort(){
    for(var i=0;i<d;i++){
        array[i]=Math.round(Math.random()*100);
    }
    console.log("Arreglo sin ordenar")
    console.log(array);
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < ( array.length - i -1 ); j++){
          if(array[j] > array[j+1]){
            var aux = array[j]
            array[j] = array[j + 1]
            array[j+1] = aux
          }
        }
      }
    console.log("Arreglo ya ordenado")
    console.log(array);
}



var tiempoInicial = performance.now();
bubblesort();
var tiempoFinal = performance.now();
var tiempoTotal=tiempoFinal-tiempoInicial;// time took to run in millisecond
console.log('Tiempo total fue :'+totalTime +'ms');
