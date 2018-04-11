var entradas = []; /*acá se cargan las entradas*/
var datosPersonales = ["Pepa","Holandesa","Me gustan los muffins"];

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

function cargarMuro(m){ /*llenamos con cualquier cosa como poner x, cuando llamo SI pongo la var muro*/

	/*para que no me quede una lista vacía, necesito un condicional
	que me diga que si tengo ntradas cargo la lista y si no entradas no haga nada*/
	var ul = document.createElement('ul'); 
		ul.setAttribute('id','posts');

	if(entradas.length > 0){

		m.innerHTML="";

			for(i=0; i < entradas.length ; i++){

			var div = document.createElement('div');
			var li = document.createElement('li');
			var img = document.createElement('img');

			img.src = "img/amigo3.jpg";
			img.classList.add('thumb');
			div.classList.add('muroPosteos');
			
			li.appendChild(img);
			var texto = document.createElement('p');
			texto.textContent = entradas[i];

			li.appendChild(texto);
			div.appendChild(li);
			ul.appendChild(div);

		}

	}
	m.appendChild(ul);
}


/**
* Cargar entradas desde el formulario
* @params no params
* void
**/




function publicar(){ 

	/*tengo que traer el valor del formulario con esta funcion*/
	var lista = document.getElementById('posts');
	var entrada = document.getElementById('entrada'); /*me traigo el nodo*/
	var texto = entrada.value; /*una vez que me traigo el nodo, me trae el texto*/
	entradas.push(texto);

	/*voy a cargar las entradas dentro de la funcion publicar*/

			var div = document.createElement('div');
			var li = document.createElement('li');
			var img = document.createElement('img');

			img.src = "img/amigo3.jpg";
			img.classList.add('thumb');
			div.classList.add('muroPosteos');
			
			li.appendChild(img);
			var t = document.createElement('p');
			t.textContent = texto[entradas.length-1];

			li.appendChild(t);
			div.appendChild(li);
	 
	console.log(texto);
	//cargarMuro(muro);

	/*hasta acá agregué a entradas mi texto del input.
	Tenemos que arreglar la funcion cargar muro para que se publiquen las cosas
	hay que VINCULAR el EVENTO DE BOTON al momento de hacer click y que publique*/

}

cargarDatosPersonales(datosPersonales);
cargarListaImagenes(amigos,panelAmigos);
cargarMuro(muro);

var btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click',publicar);
