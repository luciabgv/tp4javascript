//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. 
//Crea los métodos necesarios para permitir encender y apagar el auto.

class Auto{

    constructor(color, marca, modelo, estado, encendido, apagado){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.estado = estado;
        
    }
encendido(){

}
apagado(){

}
mostrarDatos(){
    document.write(`
    <ul>
    <li>Color ${this.color}</li>
    <li>Marca ${this.marca}</li>
    <li>Modelo ${this.modelo}</li>
    <li>Estado ${this.estado}</li>
    </ul>
    `)
}
}

let auto1 = new Auto('Negro','Peugeot','208','Nuevo');
let auto2 = new Auto('Gris','Fiat','Toro','Nuevo');
let auto3 = new Auto('Negro','Renault','Fluence','Usado');
let auto4 = new Auto('Blanco','Peugeot','2008','Usado');

auto1.mostrarDatos();
auto2.mostrarDatos();
auto3.mostrarDatos();
auto4.mostrarDatos();



