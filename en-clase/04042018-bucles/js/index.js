/*Imprimir los numeros del 1 al 10*/

var n = 1 //si la variable está en cero, no empieza nunca.

while ((n > 0) && (n <= 10)){
	
	console.log(n);
	n++; //postacción, cambio de valor de la variable. Siempre va ultima.

}

/* Imprimir los primeros 50 numeros pares*/

//Esta versión se corta al primer numero impar

while (n <= 50 && (n%2 == 0)) {

	console.log(n);
	n++;

	/*
	n   <50     par

	0	true	true
	1 	true	false

	No entrás ni con el 1. Se corta al 1 (primer numero impar)
	El while deja de ser verdadero cuando se deja de cumplir una
	de las dos condiciones. En este caso quiero seguir hasta el final 
	aunque haya numeros impares en el medio, pero sin imprimirlos
	*/
	

// versión correcta

while (n<=50) {

	if(n%2 == 0){
		console.log(n);
	
	}
	n++;
}

/*FOR*/

var i;

for (i=1; i <= 50; i++) { //resuelve todo en el encabezado. 
						   //No tengo que meter condiciones adicionales
	console.log(i);
}

for (i=1; i <= 50; i++) { 

	if(i%2 == 0){
		console.log(i);
	}
}

/*Determinar si un numero es primo*/

n = 7

while (n<=50) {
	if(n/n=1){
	console.log(n)
	}	
}