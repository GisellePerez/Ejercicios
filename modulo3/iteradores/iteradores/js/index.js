/* Ejercicio 1 -  Cargar de forma automática incremental, 
un array de números a partir de un largo dado por el usuario. */

/*var array = [1,2,3,4];

for(i=0;array.length;i++){

}

/*
for(i=0;array.length;i++){
	console.log(array.length); 
}

/* Ejercicio 6 – Dados los siguientes arreglos: 
X = [“a”,”l”,”f”,”a”]; 
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”] 
Crear un bloque de código que permita determinar si: 
• Ambos arreglos son iguales • Cuál de los dos es más largo • Cuantas letras tienen en común  */

var x = ["a","l","f","a"]; 
var y = ["a","l","f","a","j","o","r"];

function compararArrays(x,y){

	var i,letras;

	if(x.length == y.length) {

		for(i=0;x.length;i++){

			if(x[i] != y[i]){ 

				letras = letrasEnComun(x,y);
				return "No son iguales, tiene: "+letras+" en común.";
			}

		}

		return "Son iguales";

	}else{

		if(x.length > y.length){

			letras = letrasEnComun(x,y);
			return "X es mayor que Y, tiene: "+letras+" en comun";

		}else{

			letras = letrasEnComun(x,y);	
			return "Y es mayor que X, tiene: "+letras+" en comun";

		}

	}
		
}

function letrasEnComun(x,y){

	var i,j; 
	var k = 0;
	var cont = 0; 
	var iguales = false; 
	var z = [];


	for (i=0; i<x.length ; i++){ 
		
		for(j=0 ; j<y.length ;j++){ 

			if(x[i] == y[j]){
				iguales = true;
			}
		}


		if (iguales){

			if(z.indexOf(x[i]) == -1){
				z[k] = x[i];
				k++;  
			}
			
			iguales = false;
			
		}
	}

	return z.length;

}

console.log(compararArrays(x,y));