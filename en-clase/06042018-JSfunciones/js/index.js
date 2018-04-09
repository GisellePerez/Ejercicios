/*Generar una funcion de log in*/
/*Devuelva true en caso logeo y false en caso contrario*/
/*poner un array con varios usuarios y otro con varias contraseñas. buscar sobre esos array 
y devolver esto mismo*/

/*
array1 usuarios
array2 contraseñas
usuario
contraseña
for para buscar
*/

function validar(usuario,password){

	if (usuario == "pepe" && password == 1234){
		
		return true;

	}else{

		return false;

	}

}

/*if(login("fido",1234)) -> Aca estoy pasando valores a los parámetros a la función. 
Esto puede ser el input del usuario por ejemplo*/

if(validar("pepe",1234)){

	console.log("Bienvenido");

}else{

	console.log("Usuario incorrecto");

}


/*logeo y usuario bloqueado a los 3 intentos*/

function login(usuario,password) {

var cantidad = 0;
var valido = validar(usuario,password);

while(valido == false && cantidad < 3) {

	console.log("Usuario invalido");
	cantidad++;
	valido = validar(usuario,password); /*se pone para que al volver a preguntar tome estos valores en los parametros*/
	
}

if(valido){ console.log("Bienvenido");}
if(cantidad == 3 && valido == false) { console.log("Usuario bloqueado");}

}

login("pepe",1234); /*llamo a la función login que resuelve todo, a partir del input del usuario.*/
/*le estoy pasando los parámetros a la función login. Luego esa función login llama a la funcion validar y chequea los parametros*/



/*Funciones ejercicio 4*/