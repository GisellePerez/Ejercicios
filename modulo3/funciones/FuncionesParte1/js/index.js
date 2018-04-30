/* Ejercicio 1: Escribir una función que dado un número X (base) y un número N (potencia), 
devuelva el resultado de realizar XN  */

function potencia(base,potencia){
    var base;
    var potencia;
    var resultado;

    resultado = Math.pow(base, potencia);
    console.log(resultado);
}

//pasando parametros
potencia(9,3);

/* Ejercicio 2: Escribir una función que, dado un número pasado como parámetro, determine si es primo. */

function primo(){
    var num = 7;
    if(num / num === 1 && num / 1){
        console.log('El numero '+num+' es primo');
    }else{
        console.log('El numero '+num+' NO es primo');
    }
}

primo();