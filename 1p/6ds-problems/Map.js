//itzel guadalupe sanchez munguia 3F


function names(n)
{
const map = new Map();
var arreglo=[];
var contador = 0;
var tiempo = 0;


    while (contador < 7) {
        var empezar = new Date();
        
        for (var i=0; i<n; i++){
          arreglo[i] = parseInt(Math.random() * n);
          map.set("Name"+arreglo[i]);
        }
        var terminar = new Date() - empezar;
        
        contador++;
        tiempo+= terminar;
      }
      console.log("El tiempo de las 7 corridas fue: " + tiempo/7 + " ms");
    }
      names(10000);

           
     