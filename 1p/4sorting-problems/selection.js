

let d= prompt('Ingrese el tamaño del arreglo:');
var array=new Array(d);
function selection(){

    for(var i=0;i<d;i++){
        array[i]=Math.round(Math.random()*100);
    }
    console.log("Arreglo sin ordenar")
    console.log(array)
    for(i=0;i<array.length;i++){
        let min=i;
            for(j=i+1;j<array.length;j++){
                if(array[j]<array[min])
                min=j;
            }
            if(min!=1){
                let tmp=array[i];
                array[i]=array[min];
                array[min]=tmp;
            }
    
    }
    console.log("Arreglo ya ordenado")
    console.log(array)
}

var tiempoInicial = performance.now();
selection();
var tiempoFinal = performance.now();
var tiempoTotal=tiempoFinal-tiempoInicial;// time took to run in milliseconds
alert('Tiempo total:'+tiempoTotal +'ms');