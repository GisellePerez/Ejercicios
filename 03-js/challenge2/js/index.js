var btnEnviar = document.getElementById('btnEnviar');
var btnLimpiar = document.getElementById('btnClear');
var docType = ['DNI', 'LI', 'LC','LE', 'CI'];
var paises = ['Argentina','Bolivia','Brasil','Chile','Colombia ','Ecuador','Guyana','Paraguay','Perú','Surinam','Uruguay','Venezuela'];
var pcias = ["CABA","Buenos Aires","La Pampa"];
var listaPcias = document.getElementById('pciaList'); //global para poder llamar a las ciudades
var ciudades = [{
        "nombre":"Almagro", 
        "provincia": 'CABA'
    },     
    {
        "nombre":"Caballito", 
        "provincia":'CABA'
    },   
    {
        "nombre":"Palermo", 
        "provincia":'CABA'
    },       
    {
        "nombre":"Avellaneda", 
        "provincia":'Buenos Aires'
    },
    {
        "nombre":"Hurlingham", 
        "provincia":'Buenos Aires'
    },
    {
        "nombre":"Merlo", 
        "provincia":'Buenos Aires'
    },
    {
        "nombre":"Santa Rosa", 
        "provincia":'La Pampa'
    },
    {
        "nombre":"Gral. Acha", 
        "provincia":'La Pampa'
    },
    {
        "nombre":"Gral. Pico", 
        "provincia":'La Pampa'
    }]


//  CARGA DE DATOS

function cargarPaises(){
    var paisesLista = document.getElementById('paisesLista');

    for(var i = 0 ; i < paises.length ; i++){
        var optionPais = document.createElement('option');
        optionPais.textContent = paises[i];
        paisesLista.appendChild(optionPais);
    }
}

function cargarPcias(){
   
    for(var i = 0; i < pcias.length; i++){
        var optionPcia = document.createElement('option');
        
        optionPcia.textContent = pcias[i]; 
        listaPcias.appendChild(optionPcia);
    }
}

function cargarCiudades(){
    var pciaOp = listaPcias.value; // tomo el value de la lista de pcias
    var cityList = document.getElementById("cityList"); // llamo al select de las ciudades desde el HTML
    cityList.innerHTML = ""; //borra las opciones cuando elegimos una nueva
    
    for (i = 0; i < ciudades.length; i++) { //ahora necesito que recorra el arreglo de ciudades
		if (ciudades[i].provincia == pciaOp) { //cuando coinciden el value de la lista de pcias y el atributo pcia de las ciudades
			var optionCiudad = document.createElement("option") //crea opciones
			optionCiudad.value = i; // le asignamos el valor de i a la option de ciudades
			optionCiudad.innerHTML = ciudades[i].nombre; // le decimos que tome el valor del atributo nombre del objeto
			cityList.appendChild(optionCiudad); //appendeamos
		}
    }

}

function cargarDocType(){
    
    var docTypeList = document.getElementById('docList'); //llamar al select

    for(var i = 0 ;i < docType.length ; i++){ //parametro.length: el arreglo fuera de la funcion
        var options = document.createElement('option'); //creamos los elementos options        
        options.textContent = docType[i]; //el contenido de cada option va a ser el del array
        docTypeList.appendChild(options); // appendeamos los options al select
    }
    /* no funcionó. parametros mal?
    options.forEach(function(e) {
        e = optiones[e];
        docTypeList.appendChild(e);
        console.log(e);
        //creo que me falta vincular options a docType
    })
    */
}

//  VALIDACIONES

function validarMail(email){

    var mail = document.getElementById('email');
    var error = document.getElementsByClassName('error');

    if(!mail.value){
            return true
        }else{
            return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail.value));
            error.textContent = "NO VÁLIDO";
        } 
}

function validarForm(){
    var oblig = document.getElementsByClassName('obligatorio');
    var obLabels = document.getElementsByClassName('obLabel');
    console.log(oblig);

    for(var i = 0 ; i < oblig.length ; i++){

        if(oblig[i].value == 0 || oblig[i].value == "0"){
            obLabels[i].innerHTML = "Campo obligatorio";
            /*console.log(obLabels[i]);*/
            //Los radio button generan conflico al colocar class obligatorio y la etiqueta obLAbel
            //buscar otra solución y preguntar porqué sucede
        }else{
            obLabels[i].innerHTML = "";
        }
    }
    validarMail();
}

function limpiarCampos(){
    var inputs = Array.from(document.getElementsByClassName('clearInput'));

    for (var i = 0; i < inputs.length; i++){
        if (inputs[i].value !== " " || inputs[i].value !== 0){
            if(inputs[i].type === 'checkbox'){
                inputs[i].checked = false;
            }else if(inputs[i].type === 'radio'){
                inputs[i].checked = false;
            }else{
                inputs[i].value = " ";
            }
        }
    }

    var selects = Array.from(document.getElementsByTagName("select"));
	selects.forEach(function(e) {
		e.value = '-1'; 
    })

}

//Llamada a funciones

cargarPaises();
cargarPcias();
cargarDocType();

listaPcias.addEventListener('change',cargarCiudades);
btnEnviar.addEventListener('click', validarForm);
btnLimpiar.addEventListener('click',limpiarCampos);