function validateData(){
    console.log('lalalalalalalalal')
    if ($('#name').val() == '' ){
        console.log('complete todos los campos');
    }
}

$('#btn').on('click', function(){
    validateData();
    console.log('hola')
});   