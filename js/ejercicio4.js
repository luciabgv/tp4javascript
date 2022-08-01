//  4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades 
// código, nombre y precio, además del método imprime datos, 
// el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla 
//los valores de los tres objetos instanciados.


class Producto{
    constructor(nombre,codigo,precio){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
    }
    productoInfo(){
        return `Producto ${this.nombre} de codigo ${this.codigo} de precio ${this.precio}`
    }
    mostrarDatos(){
        document.write(`<ul>
        <li>${this.nombre}</li>
        <li>${this.codigo}</li>
        <li>${this.precio}</li>
        </ul>`)
    }



}

let productos = ['leche, 101, $120', 'agua, 102, $80', 'galleta, 103, $150']

.mostrarDatos();

