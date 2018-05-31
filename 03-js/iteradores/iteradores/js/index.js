/* Ejercicio 1 -  Cargar de forma automática incremental, 
un array de números a partir de un largo dado por el usuario. */

var array = ['nombre','apellido','edad:18'];

for(var i=0 ; i<array.length ; i++){
	console.log(array[i]);
}

/*Ejercicio 2 -   Repetir el ejercicio anterior, ubicando 0 (ceros), en las 
posiciones pares y un valor que coincida con el índice en las posiciones impares. */

var array2 = [1,2,3,4,5,6,7,8,9,10];

for(var i=0 ; i<array2.length ; i++){
	
	if(array2[i]%2 == 0){
		array2[i] = 0;
		console.log(array2[i]);
	}else{
		console.log(array2[i]);
	}
}

/*Ejercicio 3 -  Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], 
mostrar por pantalla el valor máximo. */

var x = [99,10,24,36,7,98,11,14,20]; //agregué un 99 para testear
var max = x[0];


for(var i=0; i<x.length ; i++){
	if(x[i]>max){
		max = x[i];
	}	
}
//Es importante poner el console log afuera porque sino repite la operacion con diferentes valores
console.log('Valor máximo: '+max);

/* Ejercicio 4 -  Dado el arreglo de números del punto 3, 
mostrar por pantalla el valor máximo y su posición. */


var x = [10,24,36,7,98,11,14,20]; //agregué un 99 para testear
var max = x[0];
var posicion;


for(var i=0; i<x.length ; i++){
	if(x[i]>max){
		max = x[i];
		posicion = i;
	}	
}
console.log('Valor máximo: '+max+' y su posición es: '+posicion);

/* Ejercicio 5 -  Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10], 
mostrar por pantalla el valor máximo y la cantidad de veces que se repite. */

var x = [10,24,36,7,98,11,14,20,98,14,10];
var max = x[0];
var repeat=0;

for(var i=0; i<x.length ; i++){
	if(x[i]>max){
		max = x[i];
		repeat=0; //resetea contador
	}	
	if(x[i]==max){
		repeat++; //cuenta cuando la pos de i coincide con el max
	}
}
console.log('Valor máximo: '+max+' y se repite '+repeat+' veces.');


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

		for(i=0 ; i=x.length ; i++){

			if(x[i] != y[i]){ 

				letras = letrasEnComun(x,y);
				return "No son iguales, tienen: "+letras+" letras en común.";
			}

		}

		return "Son iguales";

	}else{

		if(x.length > y.length){

			letras = letrasEnComun(x,y);
			return "X es mayor que Y, tienen: "+letras+" letras en comun";

		}else{

			letras = letrasEnComun(x,y);	
			return "Y es mayor que X, tienen: "+letras+" letras en comun";

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

/* Ejercicio 7 – Dado el siguiente array: 
datos1 = [“Fido”,”Gomez”,26,15000.78,true] y 
datos2 = [“Gervasio”,”Fernandez”,32,28.550,false] 
Determinar: 
• ¿Cuál de los dos personajes es más viejo? 
• ¿Cuál de los dos personajes está casado? 
• Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto será el monto a cobrar? */

var datos1 = ['Fido','Gomez',26,15000.78,true];
var datos2 = ['Gervasio','Fernandez',32,28.550,false]; 
var edad; //el numero mas chico del array
var casado; //el booleano




function compararEdades(){
	if(datos1[2] > datos2[2]){
		console.log('Fido es mayor');
	}else{
		console.log('Gervasio es mayor');
	}
}

function casado(){
	if(datos1[4] == true){
		console.log('Fido está casado');
	}else{
		console.log('Fido está soltero');
	}

	if(datos2[4] == true){
		console.log('Gervasio está casado');
	}else{
		console.log('Gervasio está soltero');
	}
}
function aumentoSueldo(){
	var aumentoFido;
	aumentoFido = datos2[3] * 125;
	console.log('El aumento de Fido es de $'+aumentoFido);
	
	/*
	var sueldoFido = datos1[0]; //numero mayor
	var sueldoGerv = datos2[0];
	
	for(var i=0; i < datos1.length; i++){
		
		if(datos1[i] > sueldoFido){
			sueldoFido = datos1[i];
					
		}
		
	}
	console.log('El sueldo de Fido es '+sueldoFido);
	*/
}



compararEdades();
casado();
aumentoSueldo();

//RESOLVER CON ITERACIONES