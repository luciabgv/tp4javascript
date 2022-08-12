class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamanio = 10) {
    this.contactos = [];
    this.tamanio = tamanio;
  }
  agregarContacto(contacto) {
    // console.log("estoy en agregar contacto");
    //verificar si el contacto existe
    if(this.existeContacto(contacto.nombre) === false){
    //al retornar verdadero o falso, puedo usar una pregunta en la cual este almacenada esa informacion
    //verificar q la agenda tenfa espacio disponible
    this.contactos.push(contacto);
  }
  console.log(this.contactos);

  existeContacto(nombre) {
    //buscar el contacto
    const contactoBuscado = this.contactos.find((itemContacto) => {
      return itemContacto.nombre === nombre;
    });
    // console.log(contactoBuscado);
    if(contactoBuscado){
      console.log('El nombre ya existe en la agenda')
      return true; // si encontre el contacto
    }else{
      console.log('El nombre no existe en la agenda')
      return false; // no encontre el contacto
    }

  }
}

const agendaPrueba = new Agenda(); //si agrego otro valor al parametro tamanio
console.log(agendaPrueba);
do {
  let opcion = parseInt(
    prompt(`Ingrese la opcion deseada:
1- Agregar contacto
2-Existe contacto
3- Lista contacto
4- Buscar contacto
5- Eliminar contacto
6-Verificar si la agenda esta llena
7- verificar espacios libres`)
  );
  switch (opcion) {
    case 1:
      //agregar contacto
      //crear el contacto
      let nombreNuevo = prompt("Ingrese un nombre").toLowerCase();
      let telefonoNuevo = prompt("Ingrese un telefono");
      let contactoNuevo = new Contacto(nombreNuevo, telefonoNuevo);
      console.log(contactoNuevo);
      //enviar el contacto al metodo agregarContacto

      agendaPrueba.agregarContacto(contactoNuevo);
      break;

    case 2:
      //Existe contacto
      let nombreBuscar = prompt("Ingrese un nombre").toLowerCase();
      agendaPrueba.existeContacto(nombreBuscar);
      break;
    case 3:
      //Lista contacto
      break;
    case 4:
      //Buscar contacto
      break;
    case 5:
      //Eliminar contacto
      break;
    case 6:
      //verificar si la agenda esta llena
      agendaPrueba.agendaLlena();
      
      break;
    case 7:
      //verificar espacio libre
      break;
    default:
      alert("Ingresaste una opcion erronea");
  }
} while (confirm("¿Desea realizar otra operacion?"));
