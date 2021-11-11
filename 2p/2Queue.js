/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Queue implementation (array-based)
 *
 * 
 *  ITZEL GUADALUPE SANCHEZ MUNGUIA 3F
 */



 function Queue() {
    this.dataStore = [];
    this.guarda = guarda;
    this.elimina = elimina;
    this.identificaInicio = identificaInicio;
    this.identificaFinal = identificaFinal;
    this.toString = toString;
    this.empty = empty;
}

//Guarda los elementos en el array 
function guarda(element) {
    this.dataStore.push(element);    
}
//Eliminar el elemento inicial
function elimina() {
    return this.dataStore.shift();   
}
//Identificar el elemento que se encuentra al principio
function identificaInicio() {
    return this.dataStore[0];     
}
//identificar el elemento que se encuentra al final de la cola
function identificaFinal() {
    return this.dataStore[this.dataStore.length-1];    
}

function toString() {
    var devolverString = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        devolverString += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }else{
        return false;
    }
}


var q = new Queue();

q.guarda("Itzel");
q.guarda("Oswaldo");
q.guarda("Miguel");
console.log(q.toString());
q.elimina();
console.log(q.toString());
console.log("Elemento que identifica primero: " + q.identificaInicio());
console.log("Elemento que identifica al final " + q.identificaFinal());