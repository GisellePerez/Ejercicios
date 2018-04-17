var formulario = document.getElementById('formulario');
var btnEnviar = document.getElementById('enviar');
var btnLimpiar = document.getElementById('clear');

var ciudades = [
				{"nombre":"Bahía Blanca","provincia":1},
				{"nombre":"Villa Crespo","provincia":0},
				{"nombre":"Chivilcoy","provincia":1}
			];

/**
* función para que pida completar campos
* @params |campoVacio | son los campos que no deben quedar vacios
* return campos con color rojo (?)
**/


function validarFormularios(){

	var obligatorios = document.getElementsByClassName('obligatorio');
	var obLabels = document.getElementsByClassName('obLabel'); 
	console.log(obligatorios);
	/*se puede llamar por tagName y llamar a los input, pero me traería todos y no solo los obligatorios*/
	
	for (var i = 0; i<obligatorios.length; i++){
		
		if(obligatorios[i].value.length == 0){
			obLabels[i].innerHTML = "Campo obligatorio"; //me traigo todas las etiqutas de esa clase
			/*tambien podria crear directamente la etiqueta label de error aca en vez de ternerla en html*/
		} /*por cada item vacio me va a mostrar esa etiqueta que es campo obligatorio*/

	}

}
//Lista de paises

var paisesLista = ["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","Venezuela"];

function cargarPaises(){
	var paises = document.getElementById('paisesLista');
	
	for(i = 0;i < paisesLista.length;i++){
		var option = document.createElement('option');
		paises.appendChild(option);
		option.textContent = paisesLista[i];
	}
}

// cargar documento

var tiposDocumento = ["DNI","LI", "LC", "LE", "CI"];

function cargarDocumento(){
	var tipoDoc = document.getElementById('tipoDoc');
	
	for(i = 0;i < tiposDocumento.length;i++){
		var option = document.createElement('option');
		tipoDoc.appendChild(option);
		option.textContent = tiposDocumento[i];
	}
}

//validar Documento

function validarDocumento(nroDoc) {
  if (!nroDoc.value){ //da error
    return true;
    console.log("Rellene el campo")
  } else {
    return /^[1-9][0-9]{4,7}$/.test(docNumber.value);
    console.log("nro revisado con test")
  }
}

//pcia y ciudad
/*
var ubicacion = [{
	pcia: "CABA",
	ciudades: ["Almagro","Caballito","Puerto Madero"]
},
{
	pcia: "Buenos Aires",
	ciudades: ["Avellaneda","Munro", "Moron","San Justo"]
},
{
	pcia: "La Pampa",
	ciudades: ["Santa Rosa","Gral. Hacha"]
}
]
*/

//mayoria de edad

fechaNac = document.getElementById('fechaNacimiento');
fechaArray = fechaNac.split("/");
parseInt(document.getElementById('fechaNacimiento')[2].value);//lo que está en paréntesis es igual a decir 1998
//Luego quedaria hacer la cuenta


//funcion limpiar para vaciar formulario

function limpiarFormulario(){
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


//eventos
btnEnviar.addEventListener('click',validarFormularios);
btnLimpiar.addEventListener('click',limpiarFormulario);
/*cuando ocurre lo que yo quiero que suceda y llamo directo a una funcion se llama de call back*/

//llamada a funciones
cargarPaises();
cargarDocumento();
validarFormularios();
