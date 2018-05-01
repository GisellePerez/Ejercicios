var btnConfirmar = document.getElementById('btnConfirmar');
var principalLista = ['Tarta de jamón y queso','Ensalada caprese','Milanesa','1/4 de pollo'];
var guarnicionLista = ['Ensalada mixta','Papas fritas','Puré de zapallo'];
var postreLista = ['Flan con crema','Queso y dulce','Mousse de chocolate'];

var principal = document.getElementById('principal');    
var guarnicion = document.getElementById('guarnicion');    
var postre = document.getElementById('postre');

function cagarOpciones(){

    for(var i = 0; i < principalLista.length; i++){
        var optionsPrincipal = document.createElement('option');
        optionsPrincipal.textContent = principalLista[i];        
        principal.appendChild(optionsPrincipal);
    }

    for(var j = 0; j < guarnicionLista.length; j++){
        var optionsGuarnicion = document.createElement('option');
        optionsGuarnicion.textContent = guarnicionLista[j];        
        guarnicion.appendChild(optionsGuarnicion);
    }
    
    for(var k = 0; k < postreLista.length; k++){
        var optionsPostre = document.createElement('option');
        optionsPostre.textContent = postreLista[k];        
        postre.appendChild(optionsPostre);
    }
}

function mostrarMenu(){
    var menuElegido = document.getElementById('menuElegido'); 
      
    var seleccionTotal = [principal, guarnicion, postre];
    console.log(seleccionTotal);
    
    for(var i = 0; i < seleccionTotal.length; i++){

        /*//necesito crear una orden que tome el texto de los select y no los selects enteros
        Esta opcion no funcionó
        var selectedValue = seleccionTotal[i].options[seleccionTotal[i].selectedIndex].value;
        //Creamos un nodo de texto que agregaremos al div.
        var selectedValueNode = document.createTextNode(selectedValue);
        */
        
        menuElegido.appendChild(seleccionTotal[i]);
    }
    
}

cagarOpciones();
btnConfirmar.addEventListener('click',mostrarMenu);