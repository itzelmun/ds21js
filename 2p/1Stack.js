/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * Stack implementation (array-based)
 * 
 *  
 * ITZEL GUADALUPE SANCHEZ MUNGUIA
*/
class Node{
    constructor(data,next){
        this.data=data;
        this.next=next;
    };
};


function main(){
    

     function add(data){
        const newNode=new Node(data,null);
        if(!this.head){
            this.head=newNode;
        }else{
            let current= this.head;
            while(current.next){
                current = current.next;
            }
            current.next= newNode;
        };
        this.size++;
    };

    function addNumberRandom(){
         for(var i=0; i<10000;i++){
        var elemento=Math.round(Math.random()*10000)
        add(elemento);
     }
    }

     function medicionEjecucion(){
        let startTime = new Date();
        addNumberRandom();
        let endTime = new Date();
        let delta = endTime - startTime;
        return delta;
    }


    medicionEjecucion();
}