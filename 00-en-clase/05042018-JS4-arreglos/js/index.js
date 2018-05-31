
// Ejercicio 1 iteradores
/*
var N = 10

var numeros = []; //asi se guarda un array vacio

for(i=0; i<N ; i++) {

	numeros[i] = i;
	console.log(numeros[i]);

}
*/

//Ejercicio 2 iteradores
/*
var N = 10

var numeros = []; //asi se guarda un array vacio


for(i=0; i<N ; i++) {

	if (i%2 == 0) {

		numeros[i] = 0;
		console.log(numeros[i]);

	}else{

		numeros[i] = i;
		console.log(numeros[i]);

	}
}
*/
 /* Ejercicio 3 -  Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20],
  mostrar por pantalla el valor máximo. */

var numeros = [10,24,36,7,98,11,14,20];
var max = numeros[0];

for(var i = 0; i < numeros.length; i++) {

	if (numeros[i]>max){
		max = numeros[i];
	
	}
 }
console.log("El mayor es "+max);


/*Ejercicio 4 -  Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su posición*/

var numeros = [10,24,36,7,98,11,14,20];
var max = numeros[0];
var pos = 0;

for(var i = 0; i < numeros.length; i++) {

	if (numeros[i]>max){
		max = numeros[i];
		pos = i;
	
	}
 }
console.log("El mayor es "+max+"y su posición es "+pos);

/*Ejercicio 5 -  Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10], 
mostrar por pantalla el valor máximo y la cantidad de veces que se repite. */

var numeros = [10,24,36,7,98,11,14,20,98,14,10];
var max = numeros[0];
var contador = 0;

for(var i = 0; i < numeros.length; i++) {

	if (numeros[i]>max){
		max = numeros[i];
	
	}
 }
console.log("El mayor es "+max);

for(var i = 0; i < numeros.length; i++){ /*hay otro for que recorre para contar la cantidad de maximos*/

	if(numeros[i] == max){ /*estoy preguntando si la posicion actual es igual al maximo valor*/
		contador++
	}

} 
console.log(max+" se repite "+contador+" veces");


//otra opcion

var numeros = [10,24,36,7,98,11,14,20,98,14,10];
var max = numeros[0];
var contador = 0;

for(var i = 0; i < numeros.length; i++) {

	if (numeros[i]>max){
		max = numeros[i];
		contador = 0; /*para q se resetee el contador cada vez que encuentra un maximo*/
	}
	

	if(numeros[i] == max){
		contador++;
	}

 }
console.log("El mayor es "+max+ " y se repite "+contador+" veces.");




/* Ejercicio 6 – Dados los siguientes arreglos: 
X = [“a”,”l”,”f”,”a”]; 
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”] 
Crear un bloque de código que permita determinar si: 
• Ambos arreglos son iguales • Cuál de los dos es más largo • Cuantas letras tienen en común */

var x = ["a","l","f","a"];
var y = ["a","l","f","a","j","o","r"];  
var i, j;




/*
for (i = 0 ; i < 5 ; i++)
{

	for (j = 0 ; j < 8  ; j++)
	{
		if (x[i] == y[j]) console.log("son iguales");
		if (x[i] < y[j]) console.log("x es menor");
		if (x[i] > y[j]) console.log("y es menor");

	}
}


if (x.lenght < y.lenght) {

	console.log("x es menor que y")

}else{
	console.log("hola")
}
*/






