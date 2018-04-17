var mutante={
	'nombre':'Wolverine',
	'comic': 'X-Men',
	'editora':'Marvel'
}

var data = [mutante,'wolverine','rogue','ciclope'];

for(i=0;i<data.length;i++){
	console.log(data[i]);
}

/*forEach realiza una accion por elemento en los arrays*/

/***
* @params e | elementos del arreglo
* @params indice | inidce del elemento
* 
**/

data.forEach(function(e){
	console.log(e);
});

/*soporta parámetros de elementos, indice y array*/
data.forEach(function(e,indice){
	console.log("el elemento "+e+" esta en: "+indice);
});

data.forEach(function(e,indice,array){
	console.log("el elemento "+e+" esta en: "+indice);
	console.log(array); //trae el array entero.No es muy util
});

function mostrar(e){console.log(e);}
data.forEach(mostrar);

//quiero que me devuelva el nombre del mutante
data.forEach(function(e){
	console.log(e.nombre)
})

//funcion arrow
data.forEach(elem => /*este elem me reemplaza la funcion de callback*/{
	console.log(elem);
});


/**** LET Y VAR ****/

var valido = true; //Global

/**
* Verifica validez de valido global
*
**/

function validar(){
	if(valido){console.log("Todo piola");}
}

/**
* Verifica validez de valido local
*
**/

function validar2(){
	let valido; //declaro una variable local
	if (valido){console.log("Todo bien");}
}

//areglo de objetos que alguno de sus atributos sea un array
// y que muestre los datos del objeto que a su vez tiene un  array adentro

var mutant = {
	'nombre':'Wolverine',
	'comic': 'X-Men',
	'editora': 'marvel',
	'pelicula': ['X-Men','Logan']
},
{
	'nombre': 'Charles Xavier',
	'comic': 'X-Men',
	'editora': 'marvel',
	'pelicula': ['X-Men','Dias del futuro pasado']	
},
{
	'nombre':'Deadpool',
	'comic': 'Deadpool comic',
	'editora': 'marvel',
	'pelicula': ['Deadpool movie','Deadpool movie 2']	
}

mutant.forEach(function(e){
	console.log(e);
});