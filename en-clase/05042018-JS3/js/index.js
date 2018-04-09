/*Determinar si un numero es primo

var num = 7;
var cont = 2;
var esPrimo = true; 


while ((cont > 1 && cont < num) && esPrimo == true) {

	resto = num%cont; //calculo el modulo de numero y contador

		if (resto == 0) {
			esPrimo = false; //Banderita, cuando se cumple una condicion cambia su valor
		}

		cont++
}

if (esPrimo == false){

	console.log("No es primo");

}else{
	console.log("Es primo");
}
*/

/*Determinar los primeros 10 numeros de la pareja de conejos de Fibonacci*/

var cont = 0;
var x=1;
var y=0;

for (var i = 0 ; i < 10; i++) {
	console.log(cont);
	y = cont;
	cont = cont+x;
	x=y;
}

var numero = 0;
var firstNum = -1;
var lastNum = 1;

while (numero < 11) { // 11 porque son los primeros 10 numeros de la secuencia
	numero = firstNum + lastNum;
	firstNum = lastNum;
	lastNum = numero;

	console.log(numero);
}
