/*
******** PROBLEMA Lista enlazada**********
* por ejemplo, cree 100,000, luego:
  * insertar un nuevo elemento en la posición 3
  * quitar elemento en la posición 4
*/
//Itzel guadalupe sanchez munguia 3F

//se crea una funcion para imprimir 100,000 numeros aleatorios
let miarray = Array.from({length: 100000}, () => Math.floor(Math.random() * 10));

miarray.forEach(function(item,index,arr){
    
    //inserta un nuevo elemento en la posición 3
    miarray.splice(3,1,'454');

    //quitar elemento en la posición 4 regresando 0 como resultado 
    miarray.splice(4,1);

    //imprime en consola
    console.log(item);
});

