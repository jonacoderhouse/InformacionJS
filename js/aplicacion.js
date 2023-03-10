
//@@@@@@ OBJETO LITERAL @@@@@@@@@@@@@@@

// const restoBar = {
//     nombreFantasia: "RestoCAn",
//     razonSocial: "BONNIE UMA MARGOT",
//     cuit: "20 - 32891150 - 9",
//     domicilio: "OTAMENDI 386",
//     cantidadEmpleados: 10,
//     habilitado: "GBA habilitacion numero 000000000",
//     socios: [
//         {
//             nombre: "Jonathan Giano",
//             idSocio: 34567
//         },
//         {
//             nombre: "Bonnie Margot Giano",
//             idSocio: 34456
//         },
//         {
//             nombre: "Uma Rius",
//             idSocio: 34456
//         }
//     ]
// }
// //------------------- Class contructora
// class Empleado {
//     constructor(nombre, apellido, idEmpleando) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.idEmpleando = idEmpleando
//     }
//     mostrarInfoEmpleadoLoggeado() {
//         const msj = document.querySelector('#textofinal')
//         msj.innerHTML = `<p> Bienvenido al servicio ${this.nombre} ${this.apellido} \n Tu id es: ${this.idEmpleando} 
//         @@@@@@@ VAMOS A COMENZAR @@@@@@@@ </p>`;

//     }
// }

// class Comanda {
//     constructor(parametromenu) {
//         this.menu = parametromenu.menu;
//         this.bebida = parametromenu.bebida;
//         this.precio = parametromenu.precio;
//     }
// }

// //@@@@@@@@@@@@@@@@@@@ FUNCION FLECHA PARA SOLICITAR DATOS @@@@@@@@@@@@@@@@@@
// datosEmpleados = [];

// const loggearEmpleado = (nombre, apellido, id) => {
//     const mozo = new Empleado(nombre, apellido, id) // const mozo es el objeto creado
//     datosEmpleados.push(mozo);
//     mozo.mostrarInfoEmpleadoLoggeado();
// }

// const boton = document.querySelector("#btn__javas");
// boton.onclick = () => { altaMozo() };  //EVENTO

// const altaMozo = () => {
//     let nombreMozo = prompt("ingresar nombre mozo");
//     if (nombreMozo === "") {
//         alert(`No ingresaste ningun nombre`);
//         nombreMozo = prompt("ingresar nombre correcto")
//     }
//     let apellidoMozo = prompt("ingresar apellido")
//     if (apellidoMozo === "") {
//         alert(`No ingresaste ningun nombre`);
//         apellidoMozo = prompt("ingresar nombre correcto")
//     }
//     let idMozo = Number(prompt("Ingrese su id"))
//     if (idMozo === "" || idMozo !== (idMozo)) {
//         alert(`ingresar id`)
//         idMozo = Number(prompt("Ingrese su id"))
//     }
//     loggearEmpleado(nombreMozo, apellidoMozo, idMozo);
//     console.log('array de empleados', datosEmpleados)

// }

// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ FUNCION PARA REGISTRO DE COMANDAS@@@@@@@@@@@@@@@@@@@@@@@@
// let cantidadComandas = 0;
// const comandasArray = [];
// let ingresaMenu;
// let nuevaComanda;
// const fecha = new Date;

// const menuDelDia = [
//     {
//         id: 1,
//         menu: 'Milanesa con Pure',
//         bebida: `coca cola`,
//         precio: 1000
//     },

//     {
//         id: 2,
//         menu: 'Mila napo con fritas',
//         bebida: `coca cola`,
//         precio: 1200
//     },

//     {
//         id: 3,
//         menu: 'bife de chorizo con papas epanola',
//         bebida: `coca cola`,
//         precio: 1120
//     },

//     {
//         id: 4,
//         menu: `Ravioles con salsa rosa`,
//         bebida: `coca cola`,
//         precio: 800

//     },

//     {
//         id: 5,
//         menu: 'Tallarines con salsa portugueza',
//         bebida: `coca cola`,
//         precio: 900
//     },

//     {
//         id: 6,
//         menu: `Sorretinos salsa mixta`,
//         bebida: `coca cola`,
//         precio: 950
//     },

//     {
//         id: 7,
//         menu: `Matambre a la pizza`,
//         bebida: `coca cola`,
//         precio: 1250
//     }
// ]

// const boton1 = document.querySelector("#btn__java");
// boton1.onclick = () => { registroComanda() } //EVENTO

// const registroComanda = () => {
//     do {
//         ingresaMenu = Number(prompt(`Ingresar opciones de menu
//         1-Milanesa con pure
//         2-MIlanesa Napo con fritas
//         3-Bife de chorizo con papas espanolas
//         4-Ravioles con salsa rosa
//         5-Tallarines con salsa portugueza
//         6-Sorretinos salsa mixta
//         7-Matambre a la pizza
//         `))
//         nuevaComanda = menuDelDia.find(e => e.id === Number(ingresaMenu))
//         console.log(nuevaComanda)
//         comandasArray.push(new Comanda(nuevaComanda))
//         console.log(comandasArray)

//     } while (confirm("Desea continuar"));
//     cantidadComandas++

    

// }

// //@@@@@@@@@@@@@@@@@@@@@@@@@@@ FUNCION PARA SABER CANTIDAD COMANDAS @@@@@@@@@@@@@@@@@@@@@@
// const boton4 = document.querySelector("#btn__javasc")
// textoFinal = document.querySelector("#textofinal2")

// boton4.onclick = () => { mostrarTotalComandas() }

// const mostrarTotalComandas = () => {
//     textoFinal2.innerHTML = (`${datosEmpleados[0].nombre} usted ingreso un total de ${cantidadComandas} comandas`);
// }





// /*
// const botonOcultar = document.querySelector("#btn__oculto")
// const cajaOcultar = document.querySelector("#formulario")

// botonOcultar.onclick = () => {
//     cajaOcultar.classList.toggle("oculto")
// }
// */




// /*
// //BOTON OCULTAR
// const botonOcultar = document.querySelector("#btn__oculto")
// const cajaOcultar = document.querySelector("#formulario")

// botonOcultar.onclick = () => {
//     cajaOcultar.classList.toggle("oculto")
// }*/

// /*
// textoFinal = document.getElementById("textofinal")
// mensajeFinal= `Terminaste el dia con ${cantidadComandas} comandas.
// Gracias por tu servicio ${datosEmpleados[0].nombre} 
// \n @@@@${restoBar.nombreFantasia}@@@@`
// textos = document.createTextNode(mensajeFinal)
// textoFinal.appendChild(textos)
// */

