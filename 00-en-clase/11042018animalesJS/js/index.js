var animales = [
{
	nombre: "elefante",
	cantPatas: 4,
	alimentacion: "herbívoro",
	saludar:function(){
		console.log("Hola soy "+this.nombre);
	},
	vuela: false
},
{
	nombre: "leon",
	cantPatas: 4,
	alimentacion: "carnívoro",
	saludar:function(){
		console.log("Hola soy "+this.nombre);
	},
	vuela: false
},
{
	nombre: "gorrion",
	cantPatas: 2,
	alimentacion: "herbívoro",
	saludar:function(){
		console.log("Hola soy "+this.nombre);
	},
	vuela: true
},
{
	nombre: "cebra",
	cantPatas: 4,
	alimentacion: "herbívoro",
	saludar:function(){
		console.log("Hola soy "+this.nombre);
	},
	vuela: false
},
{
	nombre: "tiburón",
	cantPatas: 0,
	alimentacion: "carnívoro",
	saludar:function(){
		console.log("Hola soy "+this.nombre);
	},
	vuela: false
}
]

/*los animales de 2 o más patas y hervívoros suben al arca de noe
y los demás se ahogan */

for(var i=0;i < animales.length; i++) {

	if (animales[i].cantPatas >= 2 && animales[i].alimentacion == "herbívoro") {

	console.log(animales[i].nombre+" sube al arca de Noé");

	}else{
	console.log(animales[i].nombre+" muere en el mar");

	}
}
