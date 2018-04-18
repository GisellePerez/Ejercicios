

function publicarTareas(){
    
    var lista = document.getElementById('lista');
    var tareas = document.getElementById('tarea');
    var muroTareas = document.getElementById('muroTareas');

    if(tarea.value){ //para que no publique con el input vacio, pero no funcionó

        var listItem = document.createElement('li');
        var itemText = document.getElementById('tarea').value;
        //var a = document.createElement('a'); 
        //a.textContent ='x';
        //var i = document.createElement('i'); // para intentar ponerle un icono de fontawesome

        var checkbox = document.createElement('input'); // Para poner checkbox junto a la task
        checkbox.type = "checkbox"; // Asigno type="checkbox"

        var borrar = document.createElement('input'); // Botón "Eliminar"
        borrar.type = "button"; // Asigno type="button"
        borrar.value = "x";
        borrar.classList.add('btnBorrar');
        
        var ul = document.createElement('ul');
        var divCheck = document.createElement('div'); //para CSS
        divCheck.classList.add('alignTask'); //para CSS


        listItem.textContent = itemText; //haba puesto itemText.value y no funcionaba. Corregido

        // appendeo 
        divCheck.appendChild(checkbox);
        divCheck.appendChild(listItem);        
        ul.appendChild(divCheck);
        //ul.appendChild(listItem);
        ul.appendChild(borrar);    
        muroTareas.appendChild(ul);

        document.getElementById('tarea').value = " "; //para limpiar
        //console.log(itemText);
    }
    
}



var btnAdd = document.getElementById('btn'); 
btnAdd.addEventListener('click',publicarTareas);