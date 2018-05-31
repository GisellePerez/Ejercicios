var docList = ['Documento Único','Libreta de Enrolamiento', 'Libreta Cívica'];
var docNum = $('#docNum').val();

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

    // Versión con FOR
    for(var i = 0 ; i < required.length ; i++){

        if(required[i].value == 0 || required[i].value == '0'){
            obLabels[i].innerHTML = 'CAMPO OBLIGATORIO';
        }else{
            obLabels[i].innerHTML = ' ';
        }
    } 
}

function getAge(){
    let birthday=$('#birthday').val(); //lo toma así: aaaa-mm-dd 
    
    //valores del naimiento del usuario
    let values = birthday.split("-");
    let birthDay = values[2];
    let birthMonth = values[1];
    let birthYear = values[0]; //solo el año
   
    //Ahora los valores actuales
    let currentDate = new Date(); //fecha actual
    let currentYear = currentDate.getFullYear(); //año actual
   
    let age = currentYear - birthYear; //console.log('Tu edad es '+age);
    if(birthday){
        if(age <= 0){
            $('#errorNac').innerHTML='Edad inválida'; 
            console.log('Edad inválida');
        }else if (age < 18){
            $('#errorNac').innerHTML='Eres demasiado joven'; 
            console.log('Eres demasiado joven');
        }else{
            $('#errorNac').innerHTML= ' ';
            console.log('Edad correcta');
        }
    }else{
        return false;
    }
    //funciona pero no aparecen las labes otra vez. El console.log sí lo toma
}

function valDoc(docNum){

    if(/^[1-9][0-9]{8}$/.test(docNum)){ //siempre tira error
        console.log('documento válido')
        return true; 
    } else {
        console.log('documento NO válido')
       return false;  
    }    
}

function clearFields(){
    var inputsText = $('[type=text]').val();
    console.log(inputsText);
    if(inputsText != 0 || inputsText != ' '){
        inputs.val() = ' ';
    }
}


loadDocType();

/* no funciona :(
$(document).on("keypress", '#btn', function(e) {
    if (e.keyCode == 13) {
        requiredFields();
    }
  });
  */

$('#btn').click(function(){
    requiredFields();
    //validate();
    getAge();
    valDoc();
    clearFields();
}); 


