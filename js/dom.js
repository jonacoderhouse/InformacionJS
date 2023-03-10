

 // POR ID
/*const titulo = document.getElementById('titulo'); // un elemento
console.log(titulo);
console.log(titulo.innerHTML);
console.log(titulo.innerText);

titulo.innerHTML = '<h1>DOM en Coder</h1>';
// titulo.innerText = '<h1>Jugando con el DOM</h1>';


// 2. Por Clases
const productos = document.getElementsByClassName('producto'); // Esto es un array
console.log(productos);

for (const producto of productos) {
    console.log(producto);
    // producto.innerHTML = 'Hola';
}

// 3. Por Etiqueta
const elementoTag = document.getElementsByTagName('div'); // Esto es un array
console.log(elementoTag);
console.log(elementoTag[0].innerHTML);

// 4. Query Selector
let elementByQueryId = document.querySelector('#buscador-producto');
let elementByQueryClass = document.querySelector('.producto');
let elementsByQueryClass = document.querySelectorAll('.producto');
let imagenProducto = document.querySelectorAll('.producto .precio');


console.log(elementByQueryId);
console.log(elementByQueryClass);
console.log(elementsByQueryClass);
console.log(imagenProducto);
*/
// CRER Y ELIMINAR NODOS

// APEND
// const productosSugeridos = ['Celular', 'Airpods', 'Televisor', 'Dron'];

// const sugeridos = document.getElementById('sugeridos');

// for (susgerida of productosSugeridos) {
//     const li = document.createElement('li'); // Solo existe dentro de JS
//     li.innerHTML = `<a href='/producto'>${susgerida}</a>`;
//     sugeridos.append(li); // Inyectarlo a nuestro HTML, en la etiquta definida
// }

// // PREPEND
// const precios = document.querySelectorAll('.precio');

// for (const precio of precios) {
//     const element = document.createElement('span');
//     element.innerHTML = '$';
//     precio.prepend(element);
// }

// // REMOVE
// const textoRemover = document.querySelector('h3.texto');
// textoRemover.remove();

// const nombresProductos = document.querySelectorAll('.nombre'); //  Esto es un Array
// nombresProductos[0].remove(); // borro el primer elemento del array

// for (const nombre of nombresProductos) {
// nombre.remove();
// }



// const canasta = [
//     {
//         id: 1,
//         nombre: 'Televisor Samsung 65" 4K UHD Smart TV 2021 Crystal UN65AU7000KXZL',
//         imagen: 'https://images-v2.rappi.com/products/1630515385638.jpg?d=240x240&?d=640xundefined&e=webp',
//         precio: '$3,185,941'
//     },
//     {
//         id: 2,
//         nombre: 'Motorola Celular 4G Moto One Fusion 128 GB Verde',
//         imagen: 'https://images-v2.rappi.com/products/2092745348-1604933025553.png?d=240x240&?d=640xundefined&e=webp',
//         precio: '$704,953'
//     },
//     {
//         id: 3,
//         nombre: 'iPhone 12 Pro Pacific Blue 256GbLae',
//         imagen: 'https://images-v2.rappi.com/products/2092713114-1604081074541.png?d=240x240&?d=640xundefined&e=webp',
//         precio: '$5,949,000'
//     },
//     {
//         id: 4,
//         nombre: 'Apple Watch S6 44 SG AL Black SP Gps Bes',
//         imagen: 'https://images-v2.rappi.com/products/2092745752-1604937889381.png?d=240x240&?d=640xundefined&e=webp',
//         precio: '$2,199,000'
//     }
// ];

// const contenedorCanasta = document.getElementById('canasta');

// for (const producto of canasta) {
//     const contenedor = document.createElement('div');
//     // Manipular clases
//     contenedor.className = 'producto-canasta';
//     contenedor.id = `producto-canasta-${producto.id}`;
//     // contenedor.classList.add('producto-canasta');
//     contenedor.innerHTML = `
//     <img src="${producto.imagen}">
    
//     <p>  Producto: ${producto.nombre}</p>
//     <b> $ ${producto.precio}</b>
//     </div>`; // template string
//     contenedorCanasta.append(contenedor);
// }


// // INPUTS
// const inputBuscador = document.querySelector('#buscador-producto');

// inputBuscador.value = 'Escoge algún producto de la lista';
// console.log(inputBuscador.value);


// // Imprimir Nombre

// const nombre = prompt('Nombre');

// titulo.innerHTML = `Bienvenid@ ${nombre}`;