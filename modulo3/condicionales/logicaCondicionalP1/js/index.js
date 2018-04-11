
//1) Dada una variable x, determinar si es par o impar. 

x = 2

if (x % 2 == 1) {
	console.log(x + " es impar");
}else{
	console.log(x + " es par")
}

/* 2) Dada una variable y que puede contener un número de 1 a 7, determinar a que día de 
la semana corresponde. Incluir la opción si la variable toma un valor no válido (por 
ejemplo 0 u 8). */


var dia = 5;

if (dia){	
	
	switch (dia) {

		case 1: 
			dia = "Lunes";
			break; 
		case 2: 
			dia = "Martes";
			break;
		case 3: 
			dia = "Miercoles";
			break;
		case 4: 
			dia = "Jueves";
			break;
		case 5: 
			dia = "Viernes";
			break;
		case 6: 
			dia = "Sabado";
			break;
		case 7: 
			dia = "Domingo";
			break;
		default: 
			dia = "invalido";
			break;
	
		}
	console.log("El día es "+dia);

}


//uso de .indexof
/*index of me devuelve la posicion del elemento*/ /*numero, elemento de los arreglos*/
var semana = ["Lunes","Martes","Miercoles","Jueves", "Viernes", "Sabado","Domingo"];
var dia = 2;

if (semana.indexOf(dia) == -1){ 
	
	console.log("El dia no existe")

}else{

	console.log("El dia es "+semana[semana.indexOf(dia)]);

}

//Buscar dentro de un arreglo

var nombres = ["Pepe","Pirulo","Lalo","Euclides"];

//como recorro manualmente un arreglo

var x = "Lalo";
var i;

for (i = 0 ; i <nombres.length; i++) {

	if(nombres[i] == x){
		console.log(nombres.length[i]);
	}

}
console.log("Lalo no está") /*afuera del for para que no lo repita un millon de veces*/

//con while

var nombres = ["Pepe","Pirulo","Lalo","Euclides"];
var esta = false;
var i = 0;
var x = "Lalo";

while (esta = false && i < nombres.length) { /*o salgo porque no está o porque me recorri todo el arreglo y no lo encontré*/
	if (nombres[i] == x) {
		esta=true
	}
	i++;
}

if (esta) {
	console.log("está")
}else{
	console.log("Lalo no está2")
}


// version con indexOf

var esta = nombres.indexOf(x);
if (esta = -1){
	console.log("Lalo está");
}






/* 3- Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días 
correspondiente.*/


var treinta = 30;
var treintaYUno = 31;
var veintiOcho = 28;
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
var ingresoMes = "Enero";

if (ingresoMes)  {
	
	switch (ingresoMes) {

		case 1: 
			ingresoMes = "Enero";
			break; 
		case 2:
			ingresoMes = "Febrero";
			break;
		case 3: 	
			ingresoMes = "Marzo";
			break;
		case 4: 	
			ingresoMes = "Abril";
			break;
		case 5: 
			ingresoMes = "Mayo";
			break;
		case 6: 
			ingresoMes = "Junio";
			break;
		case 7: 
			ingresoMes = "Julio";
			break; 
		case 8: 
			ingresoMes = "Agosto";
			break;
		case 9: 
			ingresoMes = "Septiembre";
			break;
		case 10: 
			ingresoMes = "Octubre";
			break; 
		case 11: 
			ingresoMes = "Noviembre";
			break;
		case 12: 
			ingresoMes = "Diciembre";
			break;
	}
}

//4- Dados 3 numeros, determinar si son positivos o negativos 

var numeros = [-1,-2,-3]

for(i = 0; i < numeros.length ; i++){
	if(numeros[i] > 0){
		console.log("Son positivos");
	}else{
		console.log("Son negativos");
	}
}

// 5- Dada una variable que puede ser una letra, determinar si es una vocal. 

var letra = "m";

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
	console.log(letra+" es una vocal.");
}else{
	console.log(letra+" es una consonante.")
}



//6


x = 100
y = 98
z = 14

resultado = 0;

if(x > y){
	
	resultado = (x - z);
	console.log("x es mayor que y");

	if (resultado > y) {
		console.log("El resultado es mayor a y" + ".El resultado es " + resultado +" "+ "mientras que y = " + y);
	
	} else {
		
		var total
		total = (x + z)*y;
		console.log("El resultado es menor a y" + ".El resultado es " +resultado+" mientras que y = "+y+" y el total del else es "+total);
	}
}

/*6 hecho en clase

var x,y,z,w;
	
	if (x > y) {

		w = x - z;
		console.log("W es la resta:"+w);

		if(w > y) {
			console.log("W es mayor que Y:"+w);
		}else{
			w= (x+z)*y;
			console.log("W es menor que Y:" +w);
		}

	}


*/

// 7 

var sueldoAnual = 40000;
var antiguedad = 2;
var aumento = 0;

if (antiguedad>=10) {
	aumento = sueldoAnual*0.1
	console.log("Antiguedad de 10 años o más. Se aplica un aumento del 10%: "+aumento+"€");
}else if(antiguedad<10 && antiguedad>5) {
	aumento = sueldoAnual*0.07
	console.log("Antiguedad: menos de 10 pero más de 5 años. Se aplica un aumento del 7%: "+aumento+"€");
}else if(antiguedad<5 && antiguedad>3) {
	aumento = sueldoAnual*0.05
	console.log("Antiguedad: menos de 5 pero más de 3 años. Se aplica un aumento del 5%: "+aumento+"€");
}else{
	aumento = sueldoAnual*0.03
	console.log("Antiguedad menor a 3 años. Se aplica un aumento del 3%: "+aumento+"€");
}