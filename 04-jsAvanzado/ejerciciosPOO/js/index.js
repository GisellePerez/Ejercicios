let prod = new Producto("NombreUsuario","1500","10");

let cuotas="6"; //cuando lo traiga de un JSON va a ser un string

let descuento = Checkout.calcularDescuento(1000,20);
let recargo = Checkout.calcularRecargo(1000,parseInt(cuotas));

