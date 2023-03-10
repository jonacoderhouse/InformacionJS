
//############# METODOS PARA AGREGAR Y SACAR VALOR DEL ARRAY ###########
// ARRAY CON DATOS SIMILARES
/*const pelis =["uno","dos","tres"]; 
console.log(pelis);
//PUSHH AGREGA UN VALOR EN EL ULTIMO LUGAR
pelis.push("cuatro"); 
console.log(pelis);
//ELIMINA EL ULTIMO VALOR
pelis.pop();
console.log(pelis)
//AGREGA VALOR EN PRIMER LUGAR
pelis.unshift("cero");
console.log(pelis)
//ELIMINA VALOR DEL PRIMER LUGAR
pelis.shift();
console.log(pelis)*/




//@@@@@@@@@ COMO LLAMAR UN ARRAY @@@@@@@@@@@@@
/*const array = [1, 2, 3, 4, 5];
const arrayTexto = ["A", "B", "C", "D"];

console.log(array);
console.log(array[4]);
console.log(arrayTexto[2]);

*/


//@@@@@  FOR Arrays con BUCLE PARA RECORRER TODOS LOS VALORES DENTRO DEL ARRAY @@@
//creo una const dentro del ciclo como yo quiera llamarla Y me brinda todo el listado
/*
const generosMusicaless = ["Jazz", 'Rock', 'Pop', 'Blues'];
for (const genero of generosMusicaless) {
    console.log(`${genero}`);
    
    otroGnerneros = generosMusicaless
    console.log(otroGnerneros)


}*/
// ########################## LENTGH #############

// CUENTA LOS VALOR DENTRO DEL ARRAY O CUENTA LA CANTIDAD DE CARACTERES DEL VALOR DE UNA VARIABLE
/*
const texto = 'HOLA CODER HOUSE';
console.log(texto.length);// CUENTA 16 CARACTERES

//El lentgh lo puedo usar para validar tb ejp:
if (generosMusicaless.length > 0) { // Garantizo que haya elementos antes de ejecutar el código
    // aca pasa algo
  }*/

/*
//ejp del PUSH EN UNA APLICACION INTERACTIVA
const canasta = [];
const agregarProducto = (p) => {
    canasta.push(p);
}
let productos = prompt(`Ingrese producto`);
agregarProducto(productos);
console.log(canasta);
*/

//@@@@@@@@@@@@@@  ARRAY@@@@@@@@@@@@222
/*const frutas = ["manzana","peras","banana"]
const frutas1 =["kiwi","mandarina","naranja"]

*/
//@@@@@@@@@@@@@@@@ SPLICE @@@@@@@@@@@@@@@@@
/*
  para eliminar un elemento especifico
  1er arg = el indice
  2do arg = cuantos elementos a partir de ese índice*/
/*const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 1); // en este caso borraria pedro posicion 1 y a miguuel porq borro dos espacios
console.log(nombres);

//############ METODO JOIN #########
//agrega los espacio que yo desee 
frutasNuevas = frutas.join("|")
console.log(frutas.join("/"))

//@@@@@@@@@@ TOSTRIG @@@@@
// uno al lado del otro sin permitir espacios.
console.log(frutas.toString());

//############### CONCATENAR ###########
//crea un solo Array con los array que cancatenee puedo crear una varieable pra crear el nuevo array con ambos
console.log(frutas.concat(frutas1))
frutasTotales= frutas.concat(frutas1) //variable creadda para concatenar
console.log(frutasTotales)

//@@@@@@@@@@@@@@@@@@ INDEXOF  @@@@@@@@@@@@@@@@2

//INFORMA EL VALOR DEL ELEMENTO Y SI GUARDAMOS EN UNA VARIABLE PODEMOS CAMBIAR EL NOOMBRE DE ESE VALOR.
const datos=["nombre","apellido",] //ARRAY
let nomb = datos.indexOf(`nombre`)
console.log(nomb)
datos[nomb]="PAPIC"
console.log(datos)


//@@@@@@@@@@@@@ INCLUDE @@@@@@@@@@@@@@@@@@
// me infortma si exite o no un dato dentro del ARRAY
const datos1 = ["nombre","apellido"] //ARRAY
console.log(datos1.includes("nombre"))


//@@@@@@@@@@@  REVERS @@@@@@
// Invierte el orden del array
const datosp=["nombre","apellido"] //ARRAY
datos.reverse();
console.log(datos);


// @@@@@@@@@@@@ PRACTICA @@@@@@@@@

const ideas =["idea", "otra idea", "mas ideas"]
const otrasIdeas =[ "one","dos","tres"]

// ########### LENTGH ############
console.log(ideas.length)

//############### FOR ############
// recorre cada unos de los elementos del array
for(const propiedad of ideas){
  console.log(propiedad);
}


// REVERS
ideas.reverse();
console.log(ideas)


// INDEXOF me informa el numero de indice del elemento y permite cambiar nombre de ese valor
console.log(ideas.indexOf("idea"))
let declaro = ideas.indexOf(`idea`)
ideas[declaro]=`hola`
console.log(ideas)


// PUSH
ideas.push("multiples ideas")
console.log(ideas)


// SPLICE para elegir en que indice pararme y borrar el resto
ideas.splice(1,2);
console.log(ideas)


//CONCATENAR array crando una variable.
let consta;
consta = ideas.concat(otrasIdeas);
console.log(consta)


// INCLUDE, me dice verdad o mentira
console.log(otrasIdeas.includes(`one`))
let oro;
oro = otrasIdeas.includes(`one`)
console.log(oro)

*/
// METODO JOIN
/*
console.log(join.join(`||`))
let join1;
join1 = join.join("||")
console.log(join1)

// TOSTRING
 // mantiene uno al lado del otro
join.toString();
console.log(join)*/

// FUNCION PARA PODER CREAR UNA COPIA DE UN ARRYA Y DEJAR EL ORIGINAL
// OBJECTO.ASSIGN([];ARRAY A COPIAR)
const join = ["jony", "juan", "pedro"]
const nuevaJoin=[...join]
console.log(nuevaJoin);
nuevaJoin.reverse();
console.log(nuevaJoin);
nuevaJoin.push("Diego Armando");
console.log(nuevaJoin)
nuevaJoin.unshift("Messi");
console.log(nuevaJoin);
nuevaJoin.pop();
console.log(nuevaJoin)
let union = nuevaJoin.concat(join)
console.log(union);
console.log(union.indexOf("Messi"))
let nuevoNombre = union.indexOf("Messi");
union[nuevoNombre] = "Lione Messi"
console.log(union);
union.splice(1, 2);
console.log(union)
union.splice(3, 2);
console.log(union);
console.log(union.includes("Lione Messi"))
console.log(union.join(" | "))
const nuevaaa = union.includes("Lione Messi");
console.log(nuevaaa)
for (const xnueva of union) {
  console.log(xnueva)
}


//##################### EJERCICIO ############################


/*
// EJERCICIO EN CLASE
const elementosIniciales = [
  {nombre: "Daniel", edad: 32},
  {nombre: "Martina", edad: 7},
  {nombre: "Karen", edad: 23},
  {nombre: "Amelia", edad: 2}
]
const elementoAgregar = [
  {nombre: "Felipe", edad: 36},
  {nombre: "Julieta", edad: 7},
  {nombre: "Edgar", edad: 66}
]
let elementosFinales;*/
/*
    Utilizando los métodos de Array vistos en clase,
    imprimir en la variable elementosFinales el siguiente Array en el siguiente orden*/
/*    [
      {nombre: "Julieta", edad: 7},
      {nombre: "Felipe", edad: 36},
      {nombre: "Amelia", edad: 2},
      {nombre: "Karen", edad: 23},
      {nombre: "Martina", edad: 7}
    ]

elementoAgregar.pop();
console.log(elementoAgregar)
elementoAgregar.reverse();
console.log(elementoAgregar)

elementosIniciales.shift();
console.log(elementosIniciales)
elementosIniciales.reverse();
console.log(elementosIniciales)

elementosFinales= elementoAgregar.concat(elementosIniciales)
console.log(elementosFinales)

*/

