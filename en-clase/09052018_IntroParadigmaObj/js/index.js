$('#ejes').hide();

$('#tipo').on('change',e=>{
	
	let option = $('#tipo').val();
	console.log(option)
	
	if(option == "2"){
		$('#ejes').show();
	}
});

$('#cargar').on('click',e=>{

	e.preventDefault();  // evita el envio del form por GET

	let patente = $('#patente').val(); // recupero patente del form
	let tipo = $('#tipo').val(); //el id del select
	//let ejes = $('#ejes').val();
	//console.log(ejes);

	switch(tipo){

		case '1': 
			vehiculo = new Auto(tipo,patente);
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

	//let auto = new Auto($('#tipo').val(), patente); // creo un objeto auto 
								//el new me está invocando el constructor del obj Auto
	
	/* tambien puedo decirle let auto2 = new Auto(); porque en el objeto auto pusimos constructor (patente="")
	por lo tanto me crea un auto pero sin patente, porque le estamos diciendo que string vacio sirve. 
	Si dijera constructor (patente) no genera nad porque ahi si o si hay que pasar un valor*/

	//console.log(auto); // muestro el objeto completo

	//console.log(vehiculo); // muestro el atributo patente (lo que pasamos por el input del formulario)

	//let camion = new Camion(patente,ejes);

	//console.log(camion);



});

//cuando se hace el click, trae el valor de la patente y se lo manda a auto