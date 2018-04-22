/* Ejercicio 1: Modelar con pseudocódigo o js, la lógica de un sistema de semáforos en una esquina 
que consta de 2 semáforos para vehículos y dos semáforos peatonales*/


// semaforoX corresponde al eje X - semaforoY corresponde al eje Y
/*
var rojo = 'rojo';
var verde = 'verde';
var amarillo = 'amarillo';
var parpadeo = 'parpadeo';
*/

var semaforoX = 'amarillo';
var semaforoY;
var semaforoPeatonX;
var semaforoPeatonY;


if(semaforoX === 'verde'){
    semaforoY = 'rojo';
    semaforoPeatonX = 'verde';
    semaforoPeatonY = 'rojo';
    console.log('Los autos y peatones que se mueven en el eje X pueden cruzar. Semaforo eje Y: '+semaforoY);
}else if (semaforoX === 'amarillo'){
    semaforoY = 'amarillo';
    semaforoPeatonX = 'parpadeo';
    semaforoPeatonY = 'parpadeo';
    console.log('Los autos en ambos ejes se encuentran en un período de espera. Los semaforos peatonales parpadean');
    console.log('Semaforo eje Y: '+semaforoY);
    console.log('Semaforo peatonal X: '+semaforoPeatonX+'/ Semaforo peatonal Y: '+semaforoPeatonY);
}else{
    semaforoY = 'verde';
    semaforoPeatonX = 'rojo';
    semaforoPeatonY = 'verde';
    console.log('Los autos y peatones que se mueven en el eje Y pueden cruzar. Semaforo eje X: '+semaforoX);
}

//hacer una version con switch

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
    
}else if (semaforoX === 'amarillo'){
    if (ciego === false){
        semaforoY = 'amarillo';
        semaforoPeatonX = 'parpadeo';
        semaforoPeatonY = 'parpadeo';
        console.log('Los autos en ambos ejes se encuentran en un período de espera. Los semaforos peatonales parpadean');
        console.log('Semaforo eje Y: '+semaforoY);
        console.log('Semaforo peatonal X: '+semaforoPeatonX+'/ Semaforo peatonal Y: '+semaforoPeatonY);
    }else{
        semaforoX = 'rojo';
        semaforoY = 'verde';
        semaforoPeatonX = 'rojo';
        semaforoPeatonY = 'verde';
        console.log('El semaforo para no videntes se activa. El semaforo del Eje X pasa a: '+semaforoX);
        console.log('Se habilitan los semáforos del eje Y'); 
    }
    //agregar las posibilidades del eje Y en amarillo    
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
//faltan detalles


/*Ejercicio 3: Modelar con lógica y estructuras conocidas un juego de preguntas y respuestas, que conste de: 
- 3 rondas de 5 preguntas cada una.
- Para pasar de ronda deben responderse correctamente 3 preguntas por ronda */