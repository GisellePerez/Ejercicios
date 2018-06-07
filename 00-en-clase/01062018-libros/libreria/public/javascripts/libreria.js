
var agregar = $('#agregar');
var flag = true; 

$(document).on('click', '#agregar', function(e){
	e.preventDefault();
		console.log('hola entre');
		if($('#inputTitle') == ' '){
			$('#obTitle').text('Ingresar nombre') ;
			flag = false;
		}
});