/*
/ ** INSTRUCCIONES
  *
  * crear un archivo por programa
  * implementar un método, función, solución no funcional
  * resolver cada uno según lo solicitado
  * puede usar código de ejercicios anteriores
  *
  * PROBLEMA 1
  * ejercicio de implementación de lista enlazada (pila )
  *
  * /
*/
//Itzel guadalupe sanchez munguia 3F

class Stack {
    constructor() {
      this.stack = [];
    }
    
    push(element) {
      this.stack.push(element);
      return this.stack;
    }
    
    pop() {
      return this.stack.pop();
    }
    
    peek() {
      return this.stack[this.stack.length - 1];
    }
    
    size() {
      return this.stack.length;
    }
  
    print() {
      console.log(this.stack);
    }
  }
  
  const stack = new Stack();
  console.log(stack.size()); // 0
  console.log(stack.push('Itzel')); // ['Itzel']
  console.log(stack.push('Sanchez')); // ['Itzel', ' Sanchez']
  console.log(stack.size()); // 2
  stack.print(); // ['Itzel ', 'Sanchez]
  console.log(stack.peek()); // 'Sanchez'
  console.log(stack.pop()); // 'Sanchez'
  console.log(stack.peek()); // Itzel