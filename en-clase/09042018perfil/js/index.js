var datosPersonales = ["Pepa","Holandesa","Me gustan los muffins"]

function cargarDatosPersonales (datosPersonales) {
	var nombre = document.createElement('h1');
	nombre.textContent = datosPersonales[0];

	var nacionalidad = document.createElement('h2');
	nacionalidad.textContent = datosPersonales[1];

	var resumen = document.createElement('p');
	resumen.textContent = datosPersonales[2];

	var dpDiv = document.getElementById('infoPersonal'); /*creo una variable para meterle adentro lo del div 
															que yo tenia creado*/
	dpDiv.appendChild(nombre);
	dpDiv.appendChild(nacionalidad);
	dpDiv.appendChild(resumen);
}


cargarDatosPersonales(datosPersonales);

// ------


var amigo1 = ["Lala", "img/amigo1.jpg"];
var amigo2 = ["Toga", "img/amigo2.jpg", "Ovillos"];
var amigo3 = ["Coni", "img/amigo3.jpg", "Zanahorias"];
var amigo4 = ["Fanti", "img/amigo4.jpg", "Maní"];

var amiDiv = document.getElementById("panelAmigos");
var amigos = [amigo1,amigo2,amigo3,amigo4];

console.log("Nombre del gato: "+amigos[1][0]);

var i,j;

for(i=0;i<amigos.length;i++){
	//console.log(amigos[i]);
	for(j=0;j<amigos[i].length;j++){
		console.log(amigos[i][j]+",");
	}
}

/**
* muestra en el HTML una lista de imagenes (funcion que me carga imagenes y las guarda en divs)
* @params lista | array, padre | es un nodo HTML
* void (lo que devuelve, como no devuelve nada se pone void)
**/

function cargarListaImagenes(lista,padre){
	/*creo que lista y padre tambien son genéricos*/
	/*lista: lista de amigos | padre: donde voy a hacer el append*/
	var i;

	for(i=0;i<lista.length;i++){
		var img = document.createElement('img');
		img.src = lista[i][1]; /*le estoy diciendo que guarde la img de cada array (que esta en pos 1) 
								en el src de cada img*/
		padre.appendChild(img); /*aca le estoy diciendo que me haga un append por cada caso*/
	}
	
}

cargarListaImagenes(amigos,panelAmigos);


/*cada elemento del muro es un div con una imagen y texto.
Vamos a appendear elementos en una lista. Misma img y mismo texto*/
/*
var muroDiv = document.getElementById("muro");
var arrayMuro = ["img/amigo2.jpg","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, blanditiis."];

function cargarListaMuro(arrayMuro){

		var imgMuro = document.createElement('img');
		imgMuro.src = arrayMuro[0];

		var textMuro = document.createElement('p');
		textMuro.textContent = arrayMuro[1];

		muroDiv.appendChild(imgMuro);
		muroDiv.appendChild(textMuro);
		
		muro.appendChild(arrayMuro);

}

cargarListaMuro(arrayMuro); 
*/


var muro = document.getElementById('muro'); /*parte de la estrutura del html*/

function cargarMuro(m)/*llenamos con cualquier como poner x, cuando llamo SI pongo la var muro*/{

	var ul = document.createElement('ul'); /*la estoy creando yo. 
											Va fuera del for porque solo necesito una lista*/
	/*cada li va a contener una im y un texto*/

	for(i=0; i < 3; i++){

		var div = document.createElement('div')
		var li = document.createElement('li');
		var img = document.createElement('img');

		img.src = "img/amigo3.jpg";
		img.classList.add('thumb');/*permite agregarle una clase al nodo que creé
									entonces en el css le doy tamaño*/

		div.classList.add('muroPosteos');
		
		li.appendChild(img);
		var texto = document.createElement('p');
		texto.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consectetur adipisicing doloribus!";

		li.appendChild(texto);
		div.appendChild(li);
		ul.appendChild(div);

	}

	m.appendChild(ul);
}

cargarMuro(muro);

//---- formulario

var formDiv = document.getElementById('formulario')

function cargarFormulario (f) {
	
	var form = document.createElement('form');
	form.classList.add('formStyle')
	var formInput = document.createElement('textarea');
	formInput.type = "text";
	formInput.placeholder = "¿Qué onda?";
	var botonDiv = document.createElement('div');
	botonDiv.classList.add('botonStyle');
	var boton = document.createElement('input');
	boton.type = "submit";
	boton.value = "Publicar";


	form.appendChild(formInput);
	botonDiv.appendChild(boton)
	formDiv.appendChild(form);
	formDiv.appendChild(botonDiv);
}

cargarFormulario(formDiv);