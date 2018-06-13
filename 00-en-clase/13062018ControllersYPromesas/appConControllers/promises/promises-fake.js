//callback
$.get('/api/x', function (res) {
    superObjeto.resX = res;

    while(1){

    }


    $.get('/api/y', function (res){
        superObjeto.resY = res;

        for(;;){
            
        }

        $.get('/api/z', function (res){
            superObjeto.resZ = res;

            superFunction(superObjeto);
        }, function() {

        })
    })
}) // se empieza a ver ilegible

//promise

unaPromesa //si está todo bien, entra al .then - Sino entra al .catch
$.get('/api/x')
    .then(function (res) {
        //hago algo con el resultado
        superObjeto.resX = res;
        while(1){
        }

        return $.get('/api/y')
    })
    .then( function (res) {
        superObjeto.resY = res;
        for(;;){
        }

        return $.get('/api/z')
    })
    .then( function (res) {
        superObjeto.resZ = res;
        
        superFunction(superObjeto);
    })
    .catch(function (err) { //se usa para cuando sale un 500 por ejemplo
        //muestro error
    })