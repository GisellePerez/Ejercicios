class Auto{ //primera letra mayúscula, por convención
	
	/**
	 *  Constructor
	 *  
	**/ 
	constructor (vehiculo="",patente=""){

		this._vehiculo = vehiculo;
		this._patente = patente; // _patente para que no sea igual al parámetro entre paréntesis
		//agregar marca, modelo,cantPuertas, color,.acelerar(),.frenar(),.doblar()
	}

	// setters y getters

	set vehiculo(value){

		this._vehiculo = value; //para pisar el valor de constructor, digamos. Sino va a quedar fijo siempre
	}

	get vehiculo(){
		return this._vehiculo;		
	}

	set patente(value){

		this._patente = value; //para pisar el valor de constructor, digamos. Sino va a quedar fijo siempre
	}

	get patente(){
		return this._patente;		
	}

	// metodo para recuperar la patente

	/*getPatente(){

		return this._patente;
	}*/

}







