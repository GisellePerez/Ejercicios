function publicarTareas(){

    var lista = document.getElementById('lista');
    var tareas = document.getElementById('tarea');
    var muroTareas = document.getElementById('muroTareas');

    var listItem = document.createElement('li');
    var itemText = document.getElementById('tarea').value;
    listItem.textContent = itemText; //haba puesto itemText.value y no funcionaba. Corregido

    var ul = document.createElement('ul');

    ul.appendChild(listItem);
    muroTareas.appendChild(ul);

    document.getElementById('tarea').value = " "; //para limpiar
    //console.log(itemText);

}

var btnAdd = document.getElementById('btn');
btnAdd.addEventListener('click',publicarTareas);