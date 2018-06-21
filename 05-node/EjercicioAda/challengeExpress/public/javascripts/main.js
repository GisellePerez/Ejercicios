function validateData(e){
    e.preventDefault();
    if ($('#name').val() == '' ){
        console.log('complete todos los campos');
    }
}

$('#btn').on('click', function(){
    validateData();
    console.log('hola')
});   