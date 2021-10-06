
let n= (prompt('Ingrese un numero entero:'));
function sieveEratosthenes(n){
    var arreglo=[],limiteSuperior=Math.sqrt(n),output=[];
    
    for(var i=0;i<n;i++){
        arreglo.push(true);//Inicializamos el arreglo para los numeros en true 
    }
    for(var i=2;i<=limiteSuperior;i++){
        if(arreglo[i]){
            for(var j=i*i;j<n;j+=i){
                arreglo[j]=false;
            }
        }
    }
    for(var i=2;i<n;i++){
        if(arreglo[i]){
            output.push(i);
        }
    }
    return output;
}

console.log(sieveEratosthenes(n));