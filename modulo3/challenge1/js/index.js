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
    //var selected = seleccionTotal[i].options[seleccionTotal[i].selectedIndex].text;
    //console.log(seleccionTotal);    
    
        for(var i = 0; i < seleccionTotal.length; i++){

            var selects = document.getElementsByTagName('select');
            var selected = seleccionTotal[i].options[seleccionTotal[i].selectedIndex].text;

            if (selected != 'Selecciona una opción'){ //buscar método menos duro

                var selectedValueNode = document.createTextNode(selected);
                var div = document.createElement('div');
                div.classList.add('foodDiv');
                //No toma las clases :(
                //selectedValueNode.classList.add("selectedFoodClass");
                //selected.classList.add("food");
                
                div.appendChild(selectedValueNode)
                menuElegido.appendChild(div);
                console.log(selectedValueNode);
                
            }
                
        }
 
}

cagarOpciones();
btnConfirmar.addEventListener('click',mostrarMenu);