// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. 
// Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. 
// Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, 
// sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, 
// indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

class Contacto {
    constructor(nombre, numeroTel){
        this.nombre = nombre
        this. numeroTel = numeroTel
        this.contacto = []


    }

//
//metodo

// aniadirContacto(Contacto): Añade un contacto a la agenda, 

aniadirContacto() {
    //push
this.contacto.push(this.nombre)
}

// existeContacto(Conctacto): indica si el contacto pasado existe o no.

existeContacto(){

}

// listarContactos(): Lista toda la agenda

listarContactos(){

}

// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.

buscarContacto(){

}

// eliminarContacto(Contacto c): elimina el contacto de la agenda 

eliminarContacto(){

}

// agendaLlena(): indica si la agenda está llena.

agendaLelna(){

}

// huecosLibres(): indica cuántos contactos más podemos ingresar.

huecoLibre(){

}

mostrarDatos(){
    document.write(`<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Numero de telefono: ${this.numeroTel} </li>
    </ul>`)
}

}

let contacto1 = new Contacto ('Lucia', '555555')

contacto1.mostrarDatos();
contacto1.aniadirContacto();