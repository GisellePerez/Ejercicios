//ip y puerto al que se le realizaran los pedidos
var servidor = 'http://localhost:8080';
$(document).ready(function() {
    $.getJSON(servidor + "/autos/", function (data) {
        data.autos.forEach(auto => $("#autos").append(`<p>${JSON.stringify(auto)}</p>`))
    })

    //se hace el pedido al backend de todos los generos para cargalos en el listado de géneros
    $.getJSON(servidor + "/marcas/", //va a responder solamente el controlador Buscar Marcas
        function(data) {
            for (i = 0; i < data.marcas.length; i++) { //ACA listo marcas!
                //se duplica una opcion de la lista de selección
                var opcion = $(".marca-select option[value='-1']").clone();
                //a esa opcion se le asigna como valor el id del genero, dato que luego va a servir para filtrar por id de genero.
                opcion.attr("value", data.marcas[i]);
                //se le pone el nombre del genero al texto de la opcion
                opcion.html((data.marcas)[i]);
                //se agrega la opcion a la lista de seleccion
                $(".marca-select").append(opcion);
            }
        });

    $("#nuevo").click(function () {
        $.ajax({
            method: 'post',
            url: `${servidor}/autos/nuevo`,
            data: {
                modelo: $("#modelo").val(),
                marca: $("#marca").val(),
                img: 'bmw'
            },
            success: function (data) {
                $("#autos").append(`<p>${JSON.stringify(data)}</p>`)
            },

            error: function () {
                console.log('aaaaaaa')
            }
        });
    })

});

var algoArrowFn = () => {

}

var algoVar = function (a) {

}

function algo (a) {

}

var mismaAlgo = algo;

algoArrowFn(1);
algoVar(2);
algo(3);
mismaAlgo(4);