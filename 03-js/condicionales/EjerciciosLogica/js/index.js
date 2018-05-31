/* Ejercicio 1: Modelar con pseudocódigo o js, la lógica de un sistema de semáforos en una esquina
que consta de 2 semáforos para vehículos y dos semáforos peatonales*/

var semaforoX = 'verde';
var semaforoY;
var semaforoPeatonX;
var semaforoPeatonY;


if(semaforoX === 'verde'){
    semaforoY = 'rojo';
    semaforoPeatonX = 'verde';
    semaforoPeatonY = 'rojo';
    console.log('Los autos y peatones que se mueven en el eje X pueden cruzar. Semaforo eje Y: '+semaforoY);
}else{
    semaforoY = 'verde';
    semaforoPeatonX = 'rojo';
    semaforoPeatonY = 'verde';
    console.log('Los autos y peatones que se mueven en el eje Y pueden cruzar. Semaforo eje X: '+semaforoX);
}


/* Ejercicio 2: Incorporar al ejercicio anterior un semáforo para ciegos,
esto implica la posibilidad de tener modificar el estado de los semáforos en un momento dado. */

var semaforoX = 'verde';
var semaforoY;
var semaforoPeatonX;
var semaforoPeatonY;
var ciego = true;

if(semaforoX === 'verde'){
    if (ciego === false){
        semaforoY = 'rojo';
        semaforoPeatonX = 'verde';
        semaforoPeatonY = 'rojo';
        console.log('Los autos y peatones que se mueven en el eje X pueden cruzar. Semaforo eje Y: '+semaforoY);
    }else{
        semaforoX = 'rojo';
        semaforoY = 'verde';
        semaforoPeatonX = 'rojo';
        semaforoPeatonY = 'verde';
        console.log('El semaforo para no videntes se activa. El semaforo del Eje X pasa a: '+semaforoX);
        console.log('Se habilitan los semáforos del eje Y');
    }

}else{
    if(ciego === true){
        semaforoY = 'verde';
        semaforoPeatonX = 'rojo';
        semaforoPeatonY = 'verde';
        console.log('Los autos y peatones que se mueven en el eje Y pueden cruzar. Semaforo eje X: '+semaforoX);
    }else{
        semaforoX = 'verde';
        semaforoY = 'rojo';
        semaforoPeatonX = 'verde';
        semaforoPeatonY = 'rojo';
        console.log('El semaforo para no videntes se activa. El semaforo del Eje Y pasa a: '+semaforoY);
        console.log('Se habilitan los semáforos del eje X');
    }

}

/*Ejercicio 3: Modelar con lógica y estructuras conocidas un juego de preguntas y respuestas, que conste de:
- 3 rondas de 5 preguntas cada una.
- Para pasar de ronda deben responderse correctamente 3 preguntas por ronda */


var rondas = 0;
var respuestasCorrectas = 3;

if (respuestasCorrectas >= 3) {

    while (rondas < 3) {  

        console.log('¡Muy bien! Has pasado a la siguiente ronda'); 
        rondas++;
        
        if (rondas == 3){
            console.log('¡Felicidades! Has ganado el juego!');
        }
    }

}else{
    console.log ('Lo sentimos! Has perdido :(');
}      


