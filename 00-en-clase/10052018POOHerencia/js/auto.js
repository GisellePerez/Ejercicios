class Auto extends Vehiculo{ //primera letra mayúscula, por convención
	
	/**
	 *  Constructor
	 *  
	**/ 
	constructor(vehiculo="",patente="",marca="",modelo="",color="",cantPuertas=""){


		this._cantPuertas = cantPuertas;
		//agregar marca, modelo,cantPuertas, color,.acelerar(),.frenar(),.doblar()
	}

	// setters y getters

	set cantPuertas(value){

		this._cantPuertas = value; //para pisar el valor de constructor, digamos. Sino va a quedar fijo siempre
	}

	get cantPuertas(){
		
		return this._cantPuertas;		
	}
	
}







