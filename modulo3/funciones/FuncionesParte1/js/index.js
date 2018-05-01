/* Ejercicio 1: Escribir una función que dado un número X (base) y un número N (potencia), 
devuelva el resultado de realizar XN  */

function potencia(base,potencia){
    
    var base;
    var potencia;
    var resultado;

    resultado = Math.pow(base, potencia);
    
    return resultado;
}

//pasando parametros
console.log(potencia(9,3));
console.log(potencia(12,2));
console.log(potencia(20,4));

/* Ejercicio 2: Escribir una función que, dado un número pasado como parámetro, determine si es primo. */

function primo(num){
    var num;
    if(num > 1){

        for (var i = 2; i < num; i++) {

            if (num % i === 0) {
                console.log(num+' no es primo');
                return false;
            } 
            console.log(num+' es primo');
            return true;
        }       
        
    }else{
        console.log(num+' no es primo');
        return false;
    }
}

console.log(primo(1));
console.log(primo(7));
console.log(primo(14));

/*Ejercicio 3: Escribir una función que dada una palabra 
pasada por parámetro determine si es aguda, grave o esdrújula.  */

function acentuacion(palabra){

    var palabra;
    var ultimaLetra = palabra; // n, s o vocales
    //var vocales = ['a','e','i','o','u'];
    var tilde = ['á','é','í','ó','ú'];
/*
    if(ultimaLetra == 'n' || ultimaLetra == 's' || ultimaLetra == 'a' || ultimaLetra == 'e' || ultimaLetra == 'i' || ultimaLetra == 'o' || ultimaLetra == 'u'){
        //si hay tilde
        
        //poner un for para recorrer tilde
        //poner un for para recorrer el string introducido
        //machear
        console.log('la palabra '+palabra+' es aguda');

    }else if (ultimaLetra != 'n' || ultimaLetra != 's' || ultimaLetra != 'a' || ultimaLetra != 'e' || ultimaLetra != 'i' || ultimaLetra != 'o' || ultimaLetra != 'u'){
        console.log('la palabra '+palabra+' es grave');
    }else{
        console.log('la palabra '+palabra+' es esdrújula');
    }
*/
}

//acentuación('canción');

/* Ejercicio 4: Escribir una función que dado un arreglo con los siguientes datos:  
Corredor = { “Nombre”,”Apellido”,edad,”genero” } retorne la categoría a la cual estará anotado por ejemplo: 
F 18 – 25, M 18 – 25  */

//var corredor = ['Agostina','Barello',22,'femenino'];
var corredor = ['Cristian','Perez',20,'masculino'];
function asignarCategoria(){
      
    if(corredor[2] >= 18 && corredor[2] <=25){
        var categoriaEdad = '18 - 25';

        if(corredor[3]=='femenino'){
            categoriaGenero = 'F';
        }else{
            categoriaGenero = 'M';
        }
    }
   console.log('Categoría asignada: '+categoriaGenero+' '+categoriaEdad);
}

asignarCategoria(corredor);

/* después probar con objetos
    var corredor = {
        nombre:'Agostina',
        apellido:'Barello',
        edad:22,
        genero:'femenino'
    }
    */