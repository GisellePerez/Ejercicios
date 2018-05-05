var docList = ['Documento Único','Libreta de Enrolamiento', 'Libreta Cívica'];

function loadDocType(){

    for(i=0;i<docList.length;i++){
        var option = $('<option></option>').text(docList[i]);
        $('#docType').append(option);
        //console.log(option);
    }
}

function requiredFields(){
    var required = $('.obligatorio');
    var obLabels =$('.obLabel');
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

    function validateName(){
        let name = $('#name').val();
        let surname = $('#surname').val();
        let error = $('.error');

        if(name != ' '){
            name.keyup(function(){

                var resultado = $( this ).val();
                var total = resultado.length;

                if(total < '50'){
                //$( "p" ).text("Hay un total de "+total+" carácteres ");
                    error.innerHTML('NOMBRE DEMASIADO LARGO');
                }
        } 
    }
}   
        


loadDocType();

$('#btn').on('click',requiredFields);