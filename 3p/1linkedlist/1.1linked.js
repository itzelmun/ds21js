/*
PROBLEMA 1
  * contiene (v)
  *
  * busque el valor v en la lista vinculada
  * @arg {tipo} v - valor; puede ser de caracteres, números, objetos u
  * @returns {bool} - verdadero o falso, si el valor v existe o no
  * puede usar travesía
  *
  * @ejemplo
  * contiene (3)
*/
//Itzel guadalupe sanchez munguia 3F

//se define un array con letras 
let letras = ['a', 'b', 'c', 'd', 'v', 'j', 'm']
var v = true;
//se busca la letra en la posicion 4, en este caso la v
let pos = 4, numElementos = 7

if(v == true)
{
  //se imprime
console.log("esto es verdadero");
console.log(letras)
console.log("La letra que buscas es la:",letras[4]);
console.log('contiene:',numElementos, 'elementos');
}


