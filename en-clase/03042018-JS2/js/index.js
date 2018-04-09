/*Alimentando a los animales del zoo*/

/*Hervivoros, carnívoros*/
/*Peresozo, koala, tigre, guacamayo, elefante, boa*/
/*cantidad de patas*/
/*A partir de la cant de patas, kilos de comida */

/*Mostrar en pantalla, cmida y cant de kilos*/

//Si tienen 2 patas y herviboro 1.5kg
//Si tiene 4 patas y hervivoro 3kg
//Si tiene 4 patas y carnivoro 5kg
//No tiene patas un cobayo
//Si elefante 20kg


var herv = true; 
var patas = 4;
var elefante = false;
var kg = 0;
var animal = 0;
var comida = 0;

if (elefante == true) {

	if (patas == 4 && herv == true){

		animal="elefante"
		comida="hervivoro";
		kg=20;
		console.log(animal+" "+comida+" "+ kg);

	}else{

		console.log("Ningun animal responde a esta descripción");

	}

} else if (herv == true) {


		if (patas == 2){
			
			animal="ninguno"
			comida="hervivoro";
			kg=1.5;		
		} 

		 if (patas == 4) {

			animal=["Perezoso", "Koala", "Guacamayo"];
			comida="hervivoro";
			kg=3;
		}

		console.log(animal+" "+comida+" "+ kg);	

} else {
	 
		if (patas == 4) {

			animal="tigre"
			comida = "carnivoro";
			kg=5;
			console.log(animal+" "+comida+" "+ kg);
		}

		if (patas == 0) {

			animal="boa"
			comida = "carnivoro";
			kg=0;
			console.log(animal+" "+comida+" "+ kg +" "+"cobayo");
		}
	}


/* 
 var variableGlobal = "esta es global";

 var miFuncion = function(){
 	alert(variableGlobal); //primero accedemos a la variable sin modificar y luego a la modificada
 	variableGlobal="esta es global, modificada" //estoy cambiando el valor de la variable
 	alert(variableGlobal);
 }

miFuncion();

//se manifiestan dos alert, primero el de la variable sin modificar y despues el modificado
 
 */