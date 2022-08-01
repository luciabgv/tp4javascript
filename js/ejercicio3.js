// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
// con las propiedades de alto y ancho, mas los métodos necesarios para modificar 
// y mostrar sus propiedades, calcular el perímetro y el área


class Rectangulos{
    constructor(alto,ancho){
    this.alto = alto;
    this.ancho = ancho;
    }
calcularArea(){
     document.write( `<br>El resultado del area: ${this.alto*this.ancho}`)
        
    }
calcularPerimetro(){
     document.write (`<br>El resultado del perimetro:
     ${this.alto*2+this.ancho*2}
     `)

}
mostrarDatos(){
    document.write(`
    <ul>
    <li>Alto ${this.alto}</li>
    <li>Alto ${this.ancho}</li>
    </ul>`)
}
}
let rectangulo1 = new Rectangulos('5','2')
let rectangulo2 = new Rectangulos('10','12')
rectangulo1.mostrarDatos();
rectangulo1.calcularArea();
rectangulo1.calcularPerimetro();
rectangulo2.mostrarDatos();
rectangulo2.calcularPerimetro();
rectangulo2.calcularArea();
