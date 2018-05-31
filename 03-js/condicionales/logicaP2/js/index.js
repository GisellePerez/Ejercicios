//Ejercicio 1 

var premium = false
var valorProductoX = 100
var puntos = 50
var PesoCanje
var peso=5


if (valorProductoX == puntos) {
	console.log("Canje directo");
}

if (puntos >= valorProductoX / 2 && premium == false) {
	console.log("Tiene 50% del valor o más. Cada peso equivale a 3 puntos");
	PesoCanje = peso*3;
	console.log("Pesos: "+peso+ " - Puntos(canjeados): "+PesoCanje);
	
}

if (puntos >= valorProductoX / 2 && premium == true) {
	console.log("Tiene 50% del valor o más y es PREMIUM. Cada peso equivale a 5 puntos")
	PesoCanje = peso*5;
	console.log("Pesos: "+peso+" - Puntos(canjeados): "+PesoCanje);	
}


/*

// otra opcion hecha en clase

var x = 100
var puntos = 50
var premium = true


if (puntos>=x) {

	console.log("Puede retirar el producto");

} else if (puntos*2 >= x){

	var diferencia = x - puntos;

	if (premium){
		var monto = diferencia / 5;
		console.log("Total a pagar: "+monto);
	}else{
		monto = diferencia / 3;
		console.log("Total a pagar: "+monto);
	}
}
*/

//Ejercicio 2

var distancia = 5;
var cuota = 1600; // o >1500 o <1500
var costoAlmuerzo = 500;
var dobleTurno = true;
var presupuesto = 2000; /*es un numero al azar?*/

if(distancia>=10){
	if(cuota<1500){
		console.log("La distancia es mayor a 10km. Ana contratará transporte mientras la cuota sea menor a $1500");
	}else/*cuota>1500*/{
		if(dobleTurno == true && costoAlmuerzo == 0){
			console.log("Como la colonia es doble turno e incluye almuerzo, Ana está dispuesta a pagar $2800");
		}
	}
}else/*distancia menor a 10km*/{

	presupuesto = presupuesto*0.2;
	console.log("El presupuesro de Ana aumenta un 20% "+ presupuesto);

	if(costoAlmuerzo < cuota - (cuota*0,15)){
		console.log("Ana incluirá el almuerzo ya que el costo es menor al 15% de la cuota.")
	}else{
		console.log("Ana no incluirá el almuerzo ya que el costo excede el 15% de la cuota.")
	}
}

//Ejercicio 3

var tarjeta="Amex";

if(tarjeta === "Mastercard"){
	console.log("Tarjeta Mastercar: hasta 6 cuotas sin interés.");
}else if(tarjeta === "Visa"){
	console.log("Tarjeta Visa: hasta 9 cuotas sin interés.");
}else if(tarjeta === "Amex"){
	console.log("Tarjeta Amex: hasta 3 cuotas sin interés.");
}else{
	console.log("Todas las demás: 1 cuota sin interés.");
}

//Ejercicio 3 con switch

switch (tarjeta) {

		case "Mastercard":
			console.log("*Tarjeta Mastercar: hasta 6 cuotas sin interés.");
		break;

		case "Visa":
			console.log("*Tarjeta Visa: hasta 9 cuotas sin interés.");
		break;

		case "Amex":
			console.log("*Tarjeta Amex: hasta 3 cuotas sin interés.");
		break;

		default:
			console.log("*Todas las demás: 1 cuota sin interés.");
		break;

}
