// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
// Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece 
// la persona creada y cual es el rasgo característico de esta generación.

class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento= anioNacimiento;
        
    }
    mostrarGeneracion(){

        if (this.anioNacimiento >= 1994 && this.anioNacimiento <=2010){
            
            document.write( `<br>${this.nombre} nacido/a en ${this.anioNacimiento} pertenece a la generacion Z, y su rasgo caracteristico es la irreverencia.`);
        
        }else if(this.anioNacimiento >=1981 && this.anioNacimiento<=1993){

            document.write( `<br>${this.nombre} nacido/a en ${this.anioNacimiento} pertenece a la generacion Y, y su rasgo caracteristico es la frustracion.`);

        }else if(this.anioNacimiento >=1969 && this.anioNacimiento <=1980){

            document.write( `<br>${this.nombre} nacido/a en ${this.anioNacimiento} pertenece a la generacion X, y su rasgo caracteristico es la obsesion por el exito.`);
   
        }else if(this.anioNacimiento >=1949 && this.anioNacimiento <=1968){

            document.write( `<br>${this.nombre} nacido/a en ${this.anioNacimiento} pertenece a la generacion Babyboom, y su rasgo caracteristico es la ambicion.`);

        } else{ 
        (this.anioNacimiento >=1930 && this.anioNacimiento <=1948) 
         document.write( `<br>${this.nombre} nacido/a en ${this.anioNacimiento} pertenece a la generacion Silent Generation, y su rasgo caracteristico es la austeridad.`);
        }

        }

    esMayorDeEdad(){
    if(this.edad >=18){
    document.write(`<br> ${this.nombre} de edad ${this.edad} es mayor de edad`)
    }else{
    document.write(`<br> ${this.nombre} de edad ${this.edad} es menor de edad`)

    }
}
    //((Math.random()*6)+1);
    // generarDni(){

    //     for (let i = 0; i>7 ; i++){

    //     (this.dni) = (Math.floor(Math.random(0 - 10)*7 + 1))

    //     this.dni.push(this.dni)
    //     document.write(`<br>${this.dni.push}`)
    //     }
    // }

    mostrarDatos(){

        document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>Dni: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de nacimiento: ${this.anioNacimiento}</li>
        </ul>`);
    }
    
}    

let persona1 = new Persona ('Lucia', '24', '', 'M', '70kg', '158cm','1997');
let persona2 = new Persona ('Pablo', '50', '40984755', 'M', '70kg', '158cm','1990');
let persona3 = new Persona ('Jorge', '55', '40984755', 'M', '70kg', '158cm','1969');
let persona4 = new Persona ('Carmen', '40', '40984755', 'M', '70kg', '158cm','1974');
let persona5 = new Persona ('Juan', '30', '40984755', 'M', '70kg', '158cm','1950');
let persona6 = new Persona ('Manuel', '90', '40984755', 'M', '70kg', '158cm','1935');
let persona7 = new Persona ('Martin', '11', '40984755', 'M', '70kg', '158cm','2010');

persona1.mostrarDatos();
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
//persona1.generarDni();

persona2.mostrarDatos();
persona2.mostrarGeneracion();
persona2.esMayorDeEdad();


persona3.mostrarDatos();
persona3.mostrarGeneracion();
persona3.esMayorDeEdad();


persona4.mostrarDatos();
persona4.mostrarGeneracion();
persona4.esMayorDeEdad();


persona5.mostrarDatos();
persona5.mostrarGeneracion();
persona5.esMayorDeEdad();


persona6.mostrarDatos();
persona6.mostrarGeneracion();
persona6.esMayorDeEdad();


persona7.mostrarDatos();
persona7.mostrarGeneracion();
persona7.esMayorDeEdad();
