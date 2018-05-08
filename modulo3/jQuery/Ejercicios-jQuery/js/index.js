var docList = ['Documento Único','Libreta de Enrolamiento', 'Libreta Cívica'];

function loadDocType(){

    for(i=0;i<docList.length;i++){
        var option = $('<option></option>').text(docList[i]);
        $('#docType').append(option);
        //console.log(option);
    }
}

function requiredFields(){
    let required = $('.obligatorio');
    let obLabels =$('.obLabel');
    //console.log(required); 

    for(var i = 0 ; i < required.length ; i++){

        if(required[i].value == 0 || required[i].value == '0'){
            obLabels[i].innerHTML = 'CAMPO OBLIGATORIO';
        }else{
            obLabels[i].innerHTML = ' ';
        }
    }

}

function validate(){

    console.log('hola');

   // function validateName(){

        var name = $('#name').val();
        var surname = $('#lastName').val();
        let error = $('.error');
        console.log(name);
        console.log(surname);

        /*
        if(name != ' '){
            name.keyup(function(){

                var resultado = $( this ).val();
                var total = resultado.length;

                if(total < '50'){
                //$( "p" ).text("Hay un total de "+total+" carácteres ");
                    error.innerHTML('NOMBRE DEMASIADO LARGO');
                }
        } */
  //  }
}   
        


loadDocType();


$('#btn').click(function(){
    requiredFields();
    validate();
}); 

