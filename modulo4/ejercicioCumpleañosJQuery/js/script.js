var container = $('.container');
var btnGuardar = $('#btnGuardar');
//json
var jsonDatos; //la declaramos y nada más
var cumples = [];

var datosGuardados = localStorage.getItem('cumples');
console.log(datosGuardados);

//que lo que estamos guardando quede en un objeto literal nombre, fechaNac e img
//si no me animo que quede en un array por ahora
//function enterBirthday(e){
    

    //para guardar como objeto las cosas
    $('#btnGuardar').on('click', function(e){
        //nombre del objet y luego pares atributo-valor
        //a mano armo el atributo y llamo al valor
        e.preventDefault(e)

        var Datos = {
            name: $("#name").val(),
            birthday: $("#birthday").val(),
            img: $("#imgSelected").val()
        };

        console.log(Datos);
        //vamos a crear el objeo json con dos attr
        //uno con los datos de cumples y otro con un arreglo de los datos

        cumples.push(Datos);
        //jsonDatos.valores = {
            //valores es una cosa elegida por nosotros random. Es un atributo
            //dentro de ese attributo despliego

        //console.log(cumples);
        console.log(cumples);

        jsonDatos = {
                        'cumples': cumples,
                        'total': cumples.lenght
                    }
        
        console.log(jsonDatos);
        let data = JSON.stringify(jsonDatos);
        localStorage.setItem('cumples',data);
        

        var input = $('input');
        $.each(input, function(indice, elemento){
            if (elemento.type != 'button'){
                $(elemento).val('');
            } 
        })
    })


    /* COSAS QUE NO FUNCIONARON
    var name = $('#name');
    var birthday = $('#birthday');
    var imgSelected = $('#imgSelected');
    */
   //var imgSelected = $('#imgSelected');

    //function listenImg(e){
        //voy a intentar decirle que al clickar una foto el nombre de la footo entre en el input
        //   $('#imgClick').data('name') = imgSelected.value;
    
    //}

    /*
    $('.imgClick').on('click',listenImg);

    function validateName(e){
        if(name == "" || name == null){
            console.log('Ingresa tu nombre, por favor');
        }
    }
    */

//}


/* la img va a tener evento de click
y luego cuando clickeo cada img me trigo el nombre 
Va por fuera del click de guardar */

$('.imgClick').on('click',function(e){
    var imgSelected = $(this).data('name');
    $('#imgSelected').val(imgSelected);

    //otra version $('#imgSelected').val($(this).data('name'));
});
        


//$('#btnGuardar').on('click',enterBirthday);

/*
//json cosas

$('#g').on('click',function(e){

    //crear el objeto con los datos del cumple (Datos)
    var Datos = {
        name: $("#name").val(),
        birthday: $("#birthday").val(),
        img: $("#imgSelected").val()
    };

});
*/
    