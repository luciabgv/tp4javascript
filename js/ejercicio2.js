//2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// Rectángulos

let cuenta ={
    titular: 'Alex',
    saldo: 0,
    ingresar(montoIngresar){
        //toda la logica para agregar dinero en la cuenta
        this.saldo += montoIngresar; // this.saldo = this.saldo+montoIngresar
   
    },
    extraer(monto){
        //toda la logica para extraer dinero dela cuenta
        if(this.saldo >= monto){
            this.saldo -= monto;
        }else{
            alert('Saldo insuficiente');
        }
    },
    informar(){
        console.log(this)
        document.write(`<p>Cuenta del titular: ${this.titular}, tienen un saldo de $ ${this.saldo}</p>`)
    }
}

cuenta.informar();

let montoIngresar = parseFloat(prompt('Ingrese un monto de dinero'));
cuenta.ingresar(montoIngresar);

cuenta.informar();

let montoExtraer = parseFloat(prompt('Ingrese monto a extraer'));
cuenta.extraer(montoExtraer);
cuenta.informar();