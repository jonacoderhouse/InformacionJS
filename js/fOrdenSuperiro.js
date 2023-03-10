

// //  MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN

// const generosMusicales = ["Jazz", "Rock", "Pop", "Blues"];
// const otrosGeneros = ["Reggaeton", "Merengue", "Salsa"];
// const listaReproduccion = [];

// const canciones = [
//     { nombre: "Welcome to the Jungle", genero: "Rock", artista: "Guns N' Roses", precio: 100 },
//     { nombre: "Highway to Hell", genero: "Rock", artista: "AC/DC", precio: 150 },
//     { nombre: "We will rock you", genero: "PopRock", artista: "Queen", precio: 110 },
//     { nombre: "I'm still standing", genero: "Pop", artista: "Elton John", precio: 190 }
// ]

// console.log(canciones)

// // ################# FIND ######################
// /*Encuentra  el primero que cumpla ese valor de la condicion Devuelve un objeto*/
// console.log(canciones.find(cancion => cancion.genero === 'PopRock'));
// console.log(canciones.find(cancion => cancion.genero === 'Rock'));
// const elementoRock = canciones.find((cancion) => cancion.genero === 'Rock');
// console.log(elementoRock);


// //################## FILTER ################### 
// /*Encuentra todos los que correspondan dentro de la condicion - Devuelve un Array de objetos*/
// console.log(canciones.filter(cancion => cancion.genero === 'Rock'));
// console.log(canciones.filter(cancion => cancion.genero === 'PopRock'));
// console.log(canciones.filter(cancion => cancion.genero === "Pop"));
// const nuevoArray = canciones.filter(cancion => cancion.genero === "Pop")
// console.log(nuevoArray)
// console.log(canciones.filter(valor => valor.precio < 150))


// // // SOME -- Retorna true o false
// console.log(canciones.some(cancion => cancion.genero === 'Rock'));
// console.log(canciones.some(cancion => cancion.genero === 'Bachata'));
// const nuevaCancion = canciones.some(cancion => cancion.genero === "Rock")
// console.log(nuevaCancion)
// const otraCancion = canciones.some(cancion => cancion.genero === " TANGO")
// console.log(otraCancion)


// //############################# MAP ##############
// //---------------Método transformador
// //  Me permite transformar un ARRAY en otro ARRAY dependiendo el valor que me interece.
// // ejp nombre o precio y crear un array de nombres o precios
// const cursos = [
//     { nombre: 'Javascript', precio: 15000 },
//     { nombre: 'ReactJS', precio: 22000 },
//     { nombre: 'AngularJS', precio: 22000 },
//     { nombre: 'Desarrollo Web', precio: 16000 },
// ]
// //Nuevo array con valor de numerico porque seleccione el precio.
// const precios = cursos.map(el => el.precio)
// console.log(precios)

// //AGREGO CON MAPAS OTRA PROPIEDAD A LOS OBJETOS DENTRO DEL ARRAY RECORRIDO
// const cursosPlus = cursos.map(el => ({
//     ...el,
//     categoria: 'Plus'
// }))
// console.log(cursosPlus);

// //CREO UN ARRAY CON MAP 

// const pedidos = [
//     { nombre: "Welcome to the Jungle", genero: "Rock", artista: "Guns N' Roses", precio: 100 },
//     { nombre: "Highway to Hell", genero: "Rock", artista: "AC/DC", precio: 150 },
//     { nombre: "We will rock you", genero: "PopRock", artista: "Queen", precio: 110 },
//     { nombre: "I'm still standing", genero: "Pop", artista: "Elton John", precio: 190 }
// ]


// class Cancion {
//     constructor(cancion) {
//         this.nombre = cancion.nombre;
//         this.genero = cancion.genero;
//         this.artista = cancion.artista;
//     }

//     reproducir() {
//         console.log(`Se está reproduciendo ${this.nombre} - ${this.artista}`);
//     }
// }
// listaReproduccionDos = pedidos.map(cancion => new Cancion(cancion));
// console.log(listaReproduccionDos);


// // // REDUCE -- Resume los elementos en uno solo ejp la suma para un carrito

// const numerosASumar = [1, 2, 3, 4, 5, 6];
// const totalNumeros = numerosASumar.reduce(
//     (acc, ele) => acc + ele,
//     0
// );

// console.log(totalNumeros) // 

// const carritoDeCompras = [
//     { nombre: 'Desarrollo Web', precio: 20000 },
//     { nombre: 'Javascript', precio: 18750 },
//     { nombre: 'ReactJS', precio: 27500 }
// ]

// const totalAPagar = carritoDeCompras.reduce((acc, el) =>
//     acc + el.precio,
//     0)
// console.log(totalAPagar)



// // // SORT
// /*El método sort() nos permite reordenar un array según un criterio que 
// definamos. Recibe una función de comparación por parámetro que, 
// a la vez, recibe dos elementos del array. La función retorna un valor numérico (1, -1, 0) 
// que indica qué elemento se posiciona antes o después. */
// const numeros = [40, 1, 5, 200];
// console.log(numeros.sort((a, b) => b - a));
// console.log(numeros.sort((a, b) => b - a));


// const pokemon = [
//     { name: 'Pikachu', price: 21, id: 25 },
//     { name: 'Charmander', price: 37, id: 5 },
//     { name: 'Pidgey', price: 45, id: 14 },
//     { name: 'Squirtle', price: 60, id: 7 }
// ]

// pokemon.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     // a es igual a b
//     return 0;
// })
// console.log(pokemon)


//  let propiedad = prompt('Ordenar por');

// pokemon.sort((a, b) => {
//     if (a[propiedad] > b[propiedad]) {
//         return 1;
//     }
//     if (a[propiedad] < b[propiedad]) {
//         return -1;
//     }
//     // a es igual a b
//     return 0;
// })

// //union de FILTER CON SORT

// /*
// console.log(pokemon);

// const productos = [
//     { id: 1, nombre: 'Apple Audífonos Airpods Pro', categoria: 'celulares', precio: 1000 },
//     { id: 2, nombre: 'Iphone Smartphone 8 - 64Gb Plata', categoria: 'celulares', precio: 2000 },
//     { id: 3, nombre: 'Samsung Barra de Sonido - T450', categoria: 'sonido', precio: 500 },
//     { id: 4, nombre: 'HiSense Televisor Led 43 Pulgadas Uhd Smart', categoria: 'televisores', precio: 1500 },
//     { id: 5, nombre: 'Televisor Samsung 65" 4K UHD Smart TV 2021 Crystal UN65AU7000KXZL', categoria: 'televisores', precio: 3000 },
//     { id: 6, nombre: 'Motorola Celular 4G Moto One Fusion 128 GB Verde', categoria: 'celulares', precio: 700 },
//     { id: 7, nombre: 'iPhone 12 Pro Pacific Blue 256GbLae', categoria: 'celulares', precio: 6000 },
//     { id: 8, nombre: 'Apple Watch S6 44 SG AL Black SP Gps Bes', categoria: 'relojes', precio: 2300 }
// ];

// const productosAMostrar = productos.filter(producto => producto.categoria === 'celulares')
//         productosAMostrar.sort((a, b) => {
//         if (a.precio > b.precio) {
//             return 1;
//         }
//         if (a.precio < b.precio) {
//             return -1;
//         }
//         return 0;
//     });

// console.log(productosAMostrar);



// // // MATH

//  console.log( Math.max(55, 13, 0, -25, 93, 4, 100, 234, 46) ) // 93 NOTA MAYOR
//  console.log( Math.min(55, 13, 0, -25, 93, 4, 45, 34436, 66) ) // -25 NOTA MENOR


//  const pi = Math.PI // 3.141592653589793

// // // CEIL: devuelve el entero mayor o igual más próximo
//  console.log( Math.ceil(pi) ) // 4

// // // FLOOR: devuelve el entero más cercano redondeado hacia abajo
//  console.log( Math.floor(pi) ) // 3

// // // ROUND: retorna el valor de un número redondeado al entero más cercano
//  console.log( Math.round(pi) ) // 3

// // // RANDOM genera numero aleatorio en 0 y 1
//  const indexRandom = Math.round(Math.random() * 2);

// //alert(`La computadora ha escogido ${opciones[indexRandom]}`);


// @@@@@@@@@@@@@@@@@ DATE @@@@@@@@@@@@@@@@@@

// const fecha = new Date().getFullYear();
// console.log(fecha)

// // Ingresando a partir de parámetros de tipo Number
// const casiNavidad = new Date(2021, 11, 25, 23, 59, 59);
// console.log(casiNavidad);

// // Fecha a partir de un string
// const ejemploFecha1 = new Date().toLocaleString()
// const ejemploFecha2 = new Date("01 Jan 2021");
// const ejemploFecha3 = new Date("January 01 2021");
// const ejemploFecha4 = new Date("JAN 01, 2021");
// console.log(ejemploFecha1)


// const date = new Date();//imprime la fecha si no le cargo nada en el parametro
// console.log(date);

// const YEAR = date.getFullYear();//me informa todo el tiempo el YEAR DEL MOMENTO
// const MES = date.getMonth();//me informa el mes actual todo el tiempo
// const DIA = date.getDate() // Dia calendario todo el

// console.log(YEAR);
// console.log(MES);
// console.log(DIA);

// //@@@@@@@@ DISTINTA FORMAS DE IMPRIMIR LAS FECHAS @@@@@@@@22
// const hoy = new Date();

// console.log( hoy.toDateString() ) 
// console.log( hoy.toLocaleString() ) 
// console.log( hoy.toTimeString() ) 


// /*
// //PARA HACER CACLCULOS DE CUANTOS DIAS FALTA
// const hoyz = new Date("December 17, 2021");
// const navidad = new Date("December 25, 2021");
// console.log( navidad - hoyz ) 
// const milisegundosPorDia = 86400000// cantidad real de milisegundos
// console.log( (navidad - hoyz ) / milisegundosPorDia) 


// // COMO SUMAR DIAS
// const newDate = new Date("06/10/2022");
// console.log(newDate);
// newDate.setDate(newDate.getDate() + 10);
// console.log(newDate);

// // SUMAR MESES
// const newDate2 = new Date("2022-02-02");
// console.log(newDate2);
// newDate2.setMonth(newDate2.getMonth() + 1);
// console.log(newDate2);
// */









