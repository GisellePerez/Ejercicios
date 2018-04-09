var monto = 400;
var descuento = 0;
var total = 0;

var pagoTarjeta = true;
var cuotas = 6


if(monto < 500) {

	console.log("Monto a pagar:" + " " + monto);

}else if(monto >= 501 && monto <= 1000) {
	/*Tambien puedo preguntar else if (monto<=1000)
	porque ya me pregunto por if < 500*/

	descuento = (0.1 * monto);
	monto = monto - descuento;
	console.log("Monto a pagar" +  " " + monto);

}else if(monto >= 1001 && monto <= 1500) {

	total = monto - (monto*15 / 100);
	console.log("Monto a pagar" + " " + total)

} else if (monto > 1500){
	
	total = monto - (monto*20 / 100);
	console.log("Monto a pagar" + " " + total)
}else/*porque ya contemplé todas las posibilidades en los else if*/{
	descuento = 0.2 * monto;
	monto = monto - descuento;
	console.log("Gastó más de 1500" + monto)
}

/*Tambien se puede preguntar con muchos bloques if, sin el if else
pero las condiciones tienen que ser SI O SI EXCLUYENTES
ENTRE SI, porque sino corro el riesgo de que la variable
entre en diferentes if y aplique más de un descuento*/

/*Si quiero usar 
monto=450

if(monto<500){
	console.log(monto);
}else{
	monto(monto > 500 && monto < 1000) 
	descuento = (0.1 * monto);
	monto = monto - descuento;
	console.log("Monto a pagar" +  " " + monto);
}

En teoria aplicaria el descuento del 15% porque le 
estoy preguntando si es menor a quinientos pongo solo
monto, y sino, aplicar el 15% de descuento.*/




if (pagoTarjeta == true) /*Tambien puedo preguntar if (pagoTarjeta) {
	porque es boolean y sabemos que si no esta es 0 o falso */ { 

	var recargo = 0;

	if (cuotas == 3) {

		recargo=0.05;
		/*console.log("Monto con recargo del 5%:" + " " + monto)*/
	
	} 

	if (cuotas == 6) {

		recargo=0.1;
		/*console.log("Monto con recargo del 10%:" + " " + monto)*/

	}

	monto = monto + recargo * monto;
	console.log(cuotas + " " + "Total con recargo" + " " + monto)
} 



/* primero pregunta por el monto y su corresondiente descuento y luego pregunta
por las cuotas y hace el correspondiente recargo*/


/* caso con switch

if(pagoTarjeta) {
	var recargo=0;

	switch (cuotas){
		case 1: 
		case 2:
		case 3: recargo=0.05;
				break;
		case 6: recargo=0.1;
				break;
		default: recargo=0;
				break;
	}

}

*/