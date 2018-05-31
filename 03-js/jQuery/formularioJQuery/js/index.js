function validar(e){

	e.preventDefault();

    var nombre = $('#name').val(); //.val me trae el value del input
    var apel = $('#surname').val();
    var email = $('#email').val();

    console.log(nombre);
    /*
    if(nombre.length != 0 && apel.length != 0 && email.length != 0){
        //indefinido porque me olvide de declararla o ponerle valor
        //null vacio a proposito
        return true;
    }
    */

    if(nombre.length == 0 || apel.length == 0 || email.length == 0){
    //si alguno no cumple el formulario no pasa pero no le estoy diciendo con un forEach cual es el que está vacio
      /*  let errores = $('.error');
        
        $.each(errores,function(indice,elemento){
            elemento.textContent = 'Campo obligatorio';
            console.log(elemento);
        });
        */
       let errores = $('#errores');
       errores.html('Hay campos sin completar');

       //Focus en el nombre
       $('#nombre').focus();
       //le pongo el borde rojo
       $('#nombre').css('border','red');
       //Le agrego una clase(error esta estilado en css)
       $('#nombre').addClass('error');
       $('#nombre').removeClass('error');

       //Alterna la clase(si está, la saca -- si no está la pone)
       $('#nombre').toggleClass('error');
        //return false; //El return retorna, entonces nunca llega abajo y por eso no llega a los checkbox
    }

    /* version 1 con js
    var pelis = Array.from($('.checkb'));
    // ($('.checkb')) arreglo de nodos
    // Array.from CONVIERTO EN array
    // los guardo en la variable pelos

    pelis.forEach(function(elemento, indice){
        //indice no hace falta preguntarlo
        //forEach resuelve sólo cuando detener el bucle. Con for y while yo le tengo que decis hasta donde cuenta
        if(elemento.checked){
            console.log("Elegiste esta opción");
        }
    });
    */
    
    /* version 2 con jquery */
    var pelis = $('.genero');

    $.each(pelis,function(indice,elemento){
        //.each es el forEach de jquery
        //parametros que pide: el arreglo y la funcion anonima
        //y dentro de la funcion anonima, el indice y el elemento
        console.log(elemento);

        if(elemento.checked){
            console.log("Elegiste esta peli");
        }
    });
    return true
}

$('#alquilar').on('click',function(e){
   
    if(validar(e)){
        $('#formulario').submit();
        console.log("El formulario se ha enviado. Gracias!");
        alert("El formulario se ha enviado. Gracias!");
    }
});

$('#limpiar').on('click',function(e){
    console.log('borré el formulario');
    $('#errores').html("");
})
/*
$('#alquilar').on('click',function(e){

    e.preventDefault(); //para que no me recargue cada vez que aprieto el button

    var pelis = $('.genero');

    $.each(pelis,function(indice,elemento){
        //.each es el forEach de jquery
        //parametros que pide: el arreglo y la funcion anonima

        console.log(elemento);
        
        if(elemento.checked == true){
            console.log("Elegiste esta peli");
        }

    });
});
*/
/*
$('#alquilar').on('click',function(e){
    //('#alquilar') -- llamo al btn por el id
    //.on -- es el eventListener
    //('click',function(e){  --  el evento y la funcion callback. Si no pongo nada en los parentesis es funcion anonima

    e.preventDefault(); //para que no me recargue cada vez que aprieto el button

    var nombre = $('#nombre').val();

    console.log(nombre);

})
*/