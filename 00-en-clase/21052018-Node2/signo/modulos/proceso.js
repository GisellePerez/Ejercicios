exports.signo = function(m,d){

	let day = parseInt(d);

	if(isNaN(day)){ return 'Ingrese un dia válido';}

	switch(m){

		case '1': 
			if( day >= 20){

				return "Acuario";
			
			}else{

				return "Capricornio";
			}

		break;

		case '2': 
			if( day > 21){

				return "Piscis";
			
			}else{

				return "Aries";
			}

		break;

		case '3': 
			if( day > 21){

				return "Piscis";
			
			}else{

				return "Aries";
			}

		break;

		

	}

}