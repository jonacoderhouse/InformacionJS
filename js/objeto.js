//@@@@@@@@ OBEJETO @@@@@@@//
/*
const persona1 = { 
    nombre: "Homero", 
    edad: 39, 
    calle: "Av. Siempreviva 742" 
}
//LLAMAMOS AL OBJETO CON.
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.calle);

//OTRA FORMA DE LLAMAR AL[]
console.log(persona1["nombre"]);
console.log(persona1["edad"]);
console.log(persona1["calle"]);


const usuario = {
    nombre: "Daniel",
    apellido: "Turriago",
    edad: 32,
    esMayorDeEdad: true,
    esNuevo: false,
    direccion: { //puedo tener otro objeto dentro del mismo objeto.
        calle: "123",
        codigoPostal: "456",
        id: 2
    }
};

console.log(usuario.direccion.calle)




//@@@@@@@@@EJEMPLO DE COMO SE USAN EL LLAMADO DEL OBJETO CON []@@@@@@@@@@@@

let propiedadConsultar = prompt("Consultar propiedad");
alert(`El valor de ${propiedadConsultar} es ${usuario[propiedadConsultar]}`);

*/

// --- CONSTRUCCIÓN DE OBJETOS
/*
class Persona{
    constructor(nombre, edad, calle){
        this.nombre=nombre
        this.edad=edad
        this.calle=calle
    }
}

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742"); // PUEDO USAR VARIAS VECES LA MISMA FUNCION PARA CREAR OBJETOS

console.log(persona1);
console.log(persona2);


*/
//@@@@@@@ Creando un objeto a partir de otro objeto @@@@@@@@@@
/*
Por qué yo creo un objeto a partir de otro objeto: 
  Para complementar información que necesite dentro de mi aplicación */

//@@@@@@@@@@@ OBJETO CREADO POR OTRO OBJETO @@@@@@@@@@
/*
class Persona2 {
    constructor (literal) {
        this.nombre = literal.nombre
        this.edad = literal.edad
        this.calle = literal.calle
        this.esUnNuevoJugador = true;
    this.nivel = 1;
    }
}

const literales = new Persona2(
    { nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" }
);
console.log(literales);




class Producto{
    constructor(producto){
        this.nomrbre=producto.nombre;
        this.precio = producto.precio;
    this.agregadoEnCanasta = 0;
    }
}
const producto5 = new Producto({ nombre: "Jonathan", precio: 1000 });
console.log(producto5);
*/


/*
//@@@@@@@ LAS FUNCIONES LAS PODEMOS REUTILIZAR PARA CREAR OBJETOS. EJP NEW PERONSA
class Persona{
    constructor(nombre, edad, calle){
        this.nombre=nombre
        this.edad=edad    // FUNCION CONTRUCTORA YA CREADA QUE REUTILIZO PARA VOOLVER A CREAR OBJETO
        this.calle=calle
    }
}
let nombrePromp = prompt("Nombre");
let edad = Number(prompt("Edad"));
let domicilio = prompt("ingrese domicilio");

const usuarioNuevo = new Persona(nombrePromp, edad, domicilio );
console.log(usuarioNuevo);

*/

//@@@@@@@@@@ FUNCION Y METODO FORMA VIEJA DE LLAMAR @@@@@@@@@@@@
/*
class Carta {
    constructor(item){
    this.item = item;
    this.visible = true;
    this.seleccionado = false;}
    esSeleccionado  () {
        this.seleccionado = !this.seleccionado;
    }
    borrarCarta  () {
        this.visible = false
    }
}

const carta1 = new Carta('💩');

console.log(carta1);
carta1.esSeleccionado();
carta1.borrarCarta();
console.log(carta1)
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
class Producto{
    constructor(producto){
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.agregadoEnCanasta = 0;//propiedad y valor que le creo yo en una funcion contructora
    }agrergarCanaste(){
        alert(`agregaste el ${this.nombre} a la canasta`)
    }
}

const producto = new Producto({ nombre: "Leche", precio: 1000 });
producto.agregarACanasta();//llamo al producto y al metodo agregarCanasta
console.log(producto);

*/
//@@@@@@@@@ NUEVA FORMA DE LLAMAR A LA FUNCION Y AL METODO ES6
/*
class CartaClass {
    // Dentro del constructor solo van propiedades
    constructor(item) {
        this.item = item;
        this.visible = true;
        this.seleccionado = false;
    }

    esSeleccionado() { // METODO NUEVA FORMA DE LLAMAR
        alert("La carta ha sido seleccionada");
        this.seleccionado = !this.seleccionado;
    }

    borrarCarta() {
        this.visible = false;
    }
}

const itenNuevo2 = new CartaClass('👻');
console.log(itenNuevo2);

itenNuevo2.esSeleccionado();
itenNuevo2.borrarCarta()


//@@@@@@@@@@@@@@@@@@@@@@@@@ EJERCICIO  OBJETO METODO @@@@@@@@@@@@@@@@@@@@@@@@@


    Crear una Clase Pelicula que contenga la siguiente información
    En su constructor asignar
        - nombre
        - director
        - Año de lanzamiento
        - Id del episodio
    /*
    Agregar un método que imprima en consola o con un alert el siguiente mensaje: 
    "Star Wars Episodio ${4}: ${A New Hope}, fue estrenada en ${1977-05-25} y dirigida por ${George Lucas}."

    Asignar la clase a uno de los siguientes objetos y aplicar el método creado
*/
/*
class Pelicula{
    constructor(nombre, director, lanzamiento, id){
        this.nombre = nombre
        this.director = director
        this.lanzamiento = lanzamiento
        this.id = id
    }metodo(){
    alert(`Star Wars Episodio ${this.id}: ${this.nombre} , 
    fue estrenada en ${this.lanzamiento} y dirigida por ${this.director}.`)
    }
}

const pelicula = new Pelicula("Star Wars", "George Lucas", "1977-05-25", "EpisodioIV");

console.log(pelicula);
pelicula.metodo();

*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222222

//    CODIGO PROFE


// const usuario = {
//     nombre: "Daniel",
//     apellido: "Turriago",
//     edad: 32,
//     esMayorDeEdad: true,
//     esNuevo: false,
//     direccion: {
//         calle: "123",
//         codigoPostal: "456",
//         id: 2
//     }
// };

// console.log(usuario);
// console.log(typeof (usuario));

// // Como llamar propiedades de un objeto

// // Con notación .
// console.log(usuario.nombre);
// console.log(usuario.edad);
// console.log(usuario.esMayorDeEdad);

// console.log(usuario.direccion.calle)


// // con corchetes
// console.log(usuario["nombre"]);
// console.log(usuario["edad"]);
// console.log(usuario["esMayorDeEdad"]);

// // let propiedadConsultar = prompt("Consultar propiedad");

// // alert(`El valor de ${propiedadConsultar} es ${usuario[propiedadConsultar]}`);


// // --- CONSTRUCCIÓN DE OBJETOS

// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

// console.log(persona1);
// console.log(persona2);

// // Creando un objeto a partir de otro objeto
// /* 
// Por qué yo creo un objeto a partir de otro objeto: 
//   Para complementar información que necesite dentro de mi aplicación */


// // parámetro   
// function Persona2(literal) { // literal es un parametro = {nombre, edad, calle}
//     this.nombre = literal.nombre;
//     this.edad = literal.edad;
//     this.calle = literal.calle;

//     this.esUnNuevoJugador = true;
//     this.nivel = 1;
// }

// const persona3 = new Persona2(
//     { nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" }
// );

// console.log(persona3);
// console.log(persona3.nombre);

// // function Producto(producto) {
// //   this.nombre = producto.nombre;
// //   this.precio = producto.precio;
// //   this.agregadoEnCanasta = 0;
// // }

// // const producto = new Producto({nombre: "Leche", precio: 1000});

// // let nombrePromp = prompt("Nombre");
// // let edad = Number(prompt("Edad"));

// // const usuarioNuevo = new Persona(nombrePromp, edad, '123');

// // console.log(usuarioNuevo);


// // ------ MÉTODOS

// let cadena = "HOLA CODER";
// //Propiedad de objeto String: Largo de la cadena.
// console.log(cadena.length);

// if (cadena.toUpperCase() === 'ANA') {

// }

// function Producto(producto) {
//     this.nombre = producto.nombre;
//     this.precio = producto.precio;
//     this.agregadoEnCanasta = 0;
//     this.agregarACanasta = function () {
//         this.agregadoEnCanasta++;
//         alert(`Agregaste el ${this.nombre} a canasta`);
//     }
// }

// const producto = new Producto({ nombre: "Leche", precio: 1000 });

// console.log(producto);

// producto.agregarACanasta();

// console.log(producto);



// function Carta(item) {
//     this.item = item;
//     this.visible = true;
//     this.seleccionado = false;
//     this.esSeleccionado = function () {
//         this.seleccionado = !this.seleccionado;
//     }
//     this.borrarCarta = function () {
//         this.visible = false
//     }
// }

// const carta1 = new Carta('💩');

// console.log(carta1);

// carta1.esSeleccionado();
// carta1.borrarCarta();

// console.log(carta1);


// const toggleMenu = () => {

// }

// function Header() {
//     this.showMenu = false;
//     this.toggleMenu = function () {
//     this.showMenu = !this.showMenu;
//     }
// }

// const header = new Header();
// header.toggleMenu();


// const personaNuevo = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" };
// //devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log("apellido" in personaNuevo); // true o false
// if ("apellido" in personaNuevo) {
//     alert(personaNuevo.apellido);
// } else {

// }

// //devuelve false porque la clave "origen" no existe en el objeto personaNuevo
// console.log("origen" in personaNuevo);
// //recorremos todas las propiedades del objeto con el ciclo for...in
// for (const propiedad in personaNuevo) {
//     console.log(propiedad);
// }



// class CartaClass {
//     // Dentro del constructor solo van propiedades
//     constructor(item) {
//         this.item = item;
//         this.visible = true;
//         this.seleccionado = false;
//     }

//     esSeleccionado() {
//         alert("La carta ha sido seleccionada");
//         this.seleccionado = !this.seleccionado;
//     }

//     borrarCarta() {
//         this.visible = false;
//     }
// }

// const itenNuevo2 = new CartaClass('👻');
// console.log(itenNuevo2);

// itenNuevo2.esSeleccionado();
// console.log(itenNuevo2);