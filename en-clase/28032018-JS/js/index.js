/* Tomar dos variables, si ambas son mayores de 10 los sumo, sino los multiplico 

/* 1) Definimos las variables*/

x = 12;
y = 4;
z = 0;

/*Declaramos las operaciones en variables */

suma = 0;

/*Despues hacemos los if */

if(x>=10 && y>=10){

	z = x+y; /*Ejecuto la suma solo si ambas variables cumplen*/

}else{

	z = x*y; /*Ejecuto la multiplicación si al menos una es menor que 10 porque el && pide que las dos
	sean mayores a 10 para realizar una suma con ambas variables*/

}

console.log("El resultado es:"+z)

/*sumar dos variables si al menos una de ellas es mayor que 10*/

if(x>10 || y>10){

 	z = x+y;


/*si no le digo que haga nada cuando el if no se cumple, no hace falta poner un else, 
de lo contrario multiplicarlos*/

}else{

	z = x*y;

}

console.log("Resultado:"+z)



/* Strings = cádena de caracteres - 
MOSTRAR UN MENSAJE DE BIENVEVENIDA INCLUYENDO NOMBRE Y APELLIDO sólo si 
coinciden con los valores "Belen" y "Alegre"*/

nombre = "Belen";
apellido = "Alegre";
/*bienvenida = "Bienvenida"; 	no la establecemos como variable global por el scope*/
console.log(bienvenida);

if(nombre=="Belen" && apellido=="Alegre") {

	bienvenida = "Bienveida "+nombre+", "+apellido; /*la "," es para separar nombre y apellido con una coma*/
	console.log(bienvenida);
	/*declaraos la variable local, dentro del scope y dejamos nombre y apellido solas como globales*/
}

console.log(bienvenida);
bienvenida=" ";