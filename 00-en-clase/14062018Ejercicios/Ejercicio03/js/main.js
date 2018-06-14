var input = 'ababaa';
input.slice(1,-1);

function similaritiesSum(input){
    //retorna array of numbers sumando las coincidencias de las 3 primeras letras de cada string
    for(var i=0; i<input.length ;i++){

        var inputNuevo = input.slice(-1);      
        console.log(inputNuevo)
    }
}

similaritiesSum(input);