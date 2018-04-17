
function publicarTareas(){

	
		var listItem = document.createElement('li');
		var textoTareas = document.getElementById('tarea').value;
		listItem.textContent = textoTareas; //tambien se puede usar .innerHTML(agrega contenido con etiq html) y .createTextNode
		var list = document.getElementById(lasTareas);
		var ul = document.createElement('ul');

		ul.appendChild(listItem);
		lasTareas.appendChild(ul);

		//textoTareas.value =""; pierde la referencia asi  hay que escribir asi:
		document.getElementById('tarea').value = "";


}


var btnEnviar = document.getElementById('boton');
btnEnviar.addEventListener('click',publicarTareas);
