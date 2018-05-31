$('#ejes').hide();
$('#cantPuertas').hide();

$('#tipo').on('change',e=>{
	
	let option = $('#tipo').val();
	console.log(option)
	
	if(option == "2"){
		$('#ejes').show();
	}else if(option == "1"){
		$('#cantPuertas').show();
	}
});

$('#cargar').on('click',e=>{

	e.preventDefault();  // evita el envio del form por GET

	let patente = $('#patente').val(); // recupero patente del form
	let tipo = $('#tipo').val(); //el id del select	
	let marca = $('#marca').val();
	let modelo = $('#modelo').val();
	let color = $('#color').val();

	console.log(marca);
	console.log(modelo);
	console.log(color);

	switch(tipo){

		case '1': 
			let cantPuertas = $('#cantPuertas').val();
			vehiculo = new Auto(tipo,patente,cantPuertas);
			console.log(vehiculo);
		break;
		
		case '2':
			let ejes = $('#ejes').val();			
			vehiculo = new Camion(patente,ejes);
			console.log(vehiculo);
			vehiculo.acelerar(20);
		break;

		default:
			alert('Elija una opción válida');
		break;
	}

	


});