/*** Variables globales **/
var ciudades = [
				{
				 "nombre":"Bahía Blanca",
				 "provincia":1
				},
				{"nombre":"Villa Crespo","provincia":0},
				{"nombre":"Chivilcoy","provincia":1}
			   ];


var btnEnviar = document.getElementById('enviar');
var comboProv = document.getElementById('provs');
console.log(ciudades);

/*** Funciones ***/

function cargarProvincias(){

	var provincias = ["CABA","Bs As","Cordoba"];
	console.log(provincias);
	
	for(i=0;i<provincias.length;i++){
		var op = document.createElement('option');
		console.log(op);
		op.value = i;
		op.innerHTML = provincias[i];
		comboProv.appendChild(op);
	}
}

function cargarCiudades(){

	var provId = comboProv.value;

	var comboCity = document.getElementById('city');
	for(i=0;i<ciudades.length;i++){
		if(ciudades[i].provincia == provId){
			var op = document.createElement('option');
			console.log(ciudades[i].provincia);
			op.value = i;
			op.innerHTML = ciudades[i].nombre;
			comboCity.appendChild(op);	
		}
	}
}

function validarMail(mail){

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(mail)){
  	return true; 
  } else {
 	return false;  
  }
}

function validarFormulario(){
	
	var obligatorios = document.getElementsByClassName('obligatorio');
	var obLabels = document.getElementsByClassName('obLabel');
	console.log(obligatorios);

	for (var i = 0; i< obligatorios.length; i++) {
		if(obligatorios[i].value.length == 0){
			obLabels[i].innerHTML = "Campo obligatorio";
		}
	}	
		
	var	mail = document.getElementById('email');
	if(mail.value.length > 0){

		if(!validarMail(mail)){
			var emailError = document.getElementById('emailError');
			emailError.innerHTML = "Formato de email no valido";
			console.log("formato invalido");
		}
	}
}

function limpiar(){
	var inputs = document.getElementByTagName('input');
	var inputsArray = Array.from(inputs); /*convierte los inputs en un array. Se llama casteo/castear*/
	inputsArray.forEach(function(e){
		console.log(e);
		
		if(e.type == 'checkbox'){
			e.checked = false;	
		}else{
			e.value = " ";
		}
		
})

var btnLimpiar = document.getElementById('limpiar');

/*** Llamadas a funciones ***/

cargarProvincias();

btnEnviar.addEventListener('click',validarFormulario);
btnLimpiar.addEventListener('click',limpiar);
comboProv.addEventListener('change',cargarCiudades);


var t = document.createTextNode('Formato no valido');
label.appendChild(t);

/*
label
	formato no valido
label
*/