
/*//@@@@@@@@@@@@@ PROMTP @@@@@@@@@@
alert(`Hola como estas... completa los siguientes datos:`);
let NombreUno = prompt("Ingrese su nombre");
let NombreDos = prompt("Ingrese segundo nombre");
let apelli = prompt("Ingrese sus apellidos");
let dog = prompt("nombre de tu mascota")
alert(`su nombre es:${NombreUno} ${NombreDos} ${apelli} y tu mascosta se llama ${dog}`)
let Edades = Number(prompt("Ingrese su edad"));
const years = 2022;
alert(`hola ${NombreUno} ${NombreDos} ${apelli}, usted nacio en: ${years}-${Edades} `)


//calcularoda
let numeroUno = prompt("Ingrese primer numero");
let numeroDos = prompt("Ingrese numero dos");
let numeroTres = prompt("ingre numero tres");
alert(`Su numrero de la suerte es: ${numeroUno * numeroDos}`)





// @@@@@@@@@@ VARIABLES @@@@@@@@@@
//palabra reservada nombre = valor;
let edad = 35;
let apeyidos = "juarez";
let nombre = "jonathan";
const YEAR = new Date().getFullYear();
let estado; //declare una variable
console.log(YEAR)
//@@@@@@@@@@@@@@@ OPERANCION DE RESTA PARA LOGRAR FECHA NACIMIENTO @@@@@@@@@@@@@@@@@@@
let nacimiento = YEAR - edad;
console.log (nacimiento); //IMPRIMIR EN CONSOLE ESTE RESULTADO


//@@@@@@@@@@@@@@@@@@@@@@ CONCATENAR @@@@@@@@@@@@@@@@@@@@@@@@@@@

let nombreCompletos = nombre +" "+ apeyidos; // CON ESPACIO
console.log(nombreCompletos);  

let nombresCompletos = nombre+apeyidos; // SIN ESPACIO
console.log(nombresCompletos);

*/


//@@@@@@@@@@@@CONDICIONALES@@@@@@@@@

/*
if(true){
    // bloque de códigoaejecutar
    console.log("vas aver este mensaje");
    }
    if(false){
    console.log("no vasaver este mensaje");
    alert("fgdfssgsdfg");
    }
*/

//CONDICIONALES CON OPERADOR == y PROMPT
/*
let unNumero = Number(prompt("ingrese un numero"))

if(unNumero ===5){
    console.log("vasaver este mensaje porque el númeroe5");
}
if(unNumero ==6){
    console.log("no vasaver este mensaje porquer el número no es6");
}
console.log(unNumero ==5);

*/

//@@@@@@@@@ Un caso típico de uso de if...else es para verificar si 
//una entrada ingresada por el usuario está vacía:@@@@@@@@@@@@@@2
/*
let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario ===" ") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert(`Nombre de usuario ingresado ${nombreUsuario}`);
}

let apellidoUsuario = prompt("ingrese su apellido");

if (apellidoUsuario ==""){
    alert(`no ingresaste un apellidp`);
}else
    {
        alert(`ingreso su apellido ${apellidoUsuario}`);
    }
alert(`su nombre es ${nombreUsuario} ${apellidoUsuario}`);


// @@@@@@@@@@@@@ ESTRUCTURA If  IF-ELSE ELSE@@@@@@@@@@@@@

let precio = 51;
console.log(precio < 20,"mostrar este msj");

if (precio < 20) {
    alert("El precio es menor que 20");
}
else if (precio < 50) {
    alert("El precio es menor que 50");
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}


// @@@@@@@@@@@@@@@VARIABLE BOOLEANA CON CONDICIONALES Y ESTRUCUTUTA IF@@@@@@@@@@@@@@@@

let variableTexto = "Esto es un texto"; //variable STRING
let variableNumero = 200;//variable NUMERICA
let variableBooleano = 10 > 5;//variable BOOLEANA

let edads = prompt("Cuantos años tienes?");
let esMayorDeEdad = edads >= 18; // true o false VAIRABLE BOOLEANA

    if (esMayorDeEdad) {
    alert("Bienvenid@ a nuestra tienda");
    } else {
    alert("Aun no eres mayor de edad");
    }

    let nombres = prompt("Cual es tu nombre?");
    let seLlamaSantiago = nombres == "jonathan"; // true o false VARIABLE BOOLEANA

    if (seLlamaSantiago) {
    alert(`Hola jonathan como estás?`);a
    } else {
    alert("Hola desconocido");
    }


    //@@@@@@@@@@@@@@@@@@ IGUAL (==) VS ESTRICTAMENTE IGUAL (===)@@@@@@@@@@@@@@@@@@@@

let var1 = '5'; // Tipo string

console.log(var1 == 5); // Ignora el tipo de dato TRUE
console.log(var1 === 5); // FALSE => RECOMENDADO

console.log(var1 != 5); // Ignora el tipo de dato FALSO
console.log(var1 !== 5); // Toma en cuenta el tipo de dato TRUE


let var2 = 18;

console.log(var2 <= 20); //TRUE
console.log(var2 >= 18); //TRUE

console.log(var2 < 20); //FALSE
console.log(var2 > 20); //FALSE

*/
// @@@@@@@@@@@@@@@@@@@@ OPERADORES &&  O@@@@@@@@@@@@@@@@@@@@@@@@
             //&&&&&&&&&&
/*let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

/*if (nombreIngresado !== '' && apellidoIngresado === '') 
{  alert("Te falto el apellido");
} else if (nombreIngresado === '' && apellidoIngresado !== '') {
alert("Te falto el nombre");
} else if (nombreIngresado !== '' && apellidoIngresado !== '') {
alert(`Nombre: ${nombreIngresado}\nApellido: ${apellidoIngresado}`); 
} else {  alert("Error: Ingresar nombre y apellido"); }
*/
//     @@@@@@@@@@@@@@@@@@@@@ OR @@@@@@@@@@@@@@@@@@

/*if( nombreIngresado === "ANA" || nombreIngresado =="ana" || nombreIngresado == "Ana"){
    alert("El nombre ingresado es Ana"); 
    }else{
        alert("El nombre ingresado NO ES Ana"); 
        }
        */

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EJERCICIO @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*Propuesta de ejercicio
- Preguntar al usuario el año de nacimiento
- Calcular la edad
- Según la edad del usuario imprimir los siguientes mensajes:
· Menor o igual a 18 años: tienes toda una vida por delante. 
-Mayor de 18 y menor o igual a 35: que grande que estás.
· Mayor a 35 y menor o igual a 65: estás muy grande para andar con jueguitos.
· En cualquier otro caso: que bueno que puedas dedicar tiempo a jugar.*/


/*const YEAR = 2022
let edad = Number(prompt("ingresa anio nacimiento"));
let edadCliente = YEAR - edad;

if(edadCliente <= 18){
    alert(`tienes toda una vida por delante`);
}else if(edadCliente > 18 && edadCliente <=35){
    alert(`que grande que estas`);
}else if(edadCliente > 35 && edadCliente <=60){
    alert(`estas muy grande para estar con jueguitos`);
}else{
    alert(`que bueno que puedad dedicar tiempo a jugar`)
}*/






//-@@@@@@@@@@@@@@@@@@@@@@SWICH OPEARDOR OR@@@@@@@@@@@@@@//

// let entrada = prompt("Ingresar un nombre");
// //Repetimos hasta que se ingresa "ESC"

// if (entrada === "ANA" || entrada === "ana" || entrada === "Ana") {
//   alert("HOLA ANA");
// } else if (entrada === "JUAN") {
//   alert("HOLA JUAN");
// } else if (entrada === "PEDRO") {

// } else {
//   alert("¿QUIÉN SOS?")
// }

//------------SWICH CON OPERADOR OR 
// switch (entrada) {
//   case "ANA":
//   case "ana":
//   case "Ana":
//     alert("HOLA ANA");
//     break;
//   case "JUAN":
//     alert("HOLA JUAN");
//     break;
//   default:
//     alert("¿QUIÉN SOS?")
//     break;
// }
//  entrada = prompt("Ingresar un nombre");


//@@@@@@@@@@@@@@@ SWICH CON OPERADRO AND && @@@@@@@@@@
/*   const CURRENT_YEAR = 2022;

   let nacimientoUsuario = Number(prompt("Ingresa tu año de nacimiento!!"));
   let edadUsuario = CURRENT_YEAR - nacimientoUsuario;
   let prefijo = `Tienes ${edadUsuario} años,`;

   if (edadUsuario <= 18) {
   alert(prefijo + ' tienes toda una vida por delante');
   } else if (edadUsuario > 18 && edadUsuario <= 35) {
   alert(prefijo + ' que grande que estás');
   } else if (edadUsuario > 35 && edadUsuario <= 65) {
   alert(prefijo + ' estás muy grande para andar con jueguitos.');
   } else {
   alert(prefijo + ' que bueno que puedas dedicar tiempo a jugar');
   }
*/

//@@@@@@@@@@@@@@@@ CON SWICH SERIA ASI OPERADOR AND&& @@@@@@@@@@@@@@
/*  const CURRENT_YEAR = 2022;
    let nacimientoUsuario = Number(prompt("Ingresa tu año de nacimiento!!"));
    let edadUsuario = CURRENT_YEAR - nacimientoUsuario;
    let prefijo = `Tienes ${edadUsuario} años,`;

    switch (true) {
    case edadUsuario <= 18:  //     true === edadUsuario <= 18
    alert(prefijo + ' tienes toda una vida por delante');
    break;
    case edadUsuario > 18 && edadUsuario <= 35:
    alert(prefijo + ' que grande que estás');
    break;
    case edadUsuario > 35 && edadUsuario <= 65:
    alert(prefijo + ' estás muy grande para andar con jueguitos.');
    break;
    default:
    alert(prefijo + ' que bueno que puedas dedicar tiempo a jugar');
    break;
}*/


//@@@@@@@@@@@@@@@@@@@@@@@@EJERCICIO@@@@@@@@@@@
/*- Calcular el promedio de un estudiante
        1. Usar un ciclo para recibir 5 números y dar una respuesta según el valor dado.
        0 = Muy Malo
        1 - 4 = Malo
        5 - 7 = Aceptable
        8 - 9 = Bueno
        10 = Excelente
        Otro Valor = No has ingresado un valor válido
        2. Se deben sumar los valores y al final calcular el promedio*/

/*    
let sumar =0;

    for(i=0;i<5;i++){
        let num = Number(prompt("Ingrese una nota"));

        if(num ===0){
            sumar = sumar + num;
            alert(`muy malo`);
        }else if(num >=1 && num <=4){
            sumar = sumar + num;
            alert(`malo`);
        }else if(num >=5 && num <=7){
            sumar= sumar + num;
            alert(`aceptable`);
        }else if(num >=8 && num <=9){
            sumar = sumar + num;
            alert(`muy bueno`)
        }else if(num >=10){
            sumar= sumar + num;
            alert(`excelente`);
        }else{
            alert(`no ingresarte nada`)
        }
    }
    promedio = sumar /5;
    alert(`su promedio fue de ${promedio}`)
*/
/*
let sumatoria = 0;
for (let i = 1; i <= 5; i++) {
    let num = Number(prompt("Ingrese una nota"));
    switch (true) {
    case num === 0:  
        alert(num + ' Muy Malo');
        sumatoria = sumatoria + num;
        break;
        case num >= 1 && num <= 4:
        alert(num + ' Malo');
        sumatoria = sumatoria + num;
        break;
        case num >= 5 && num <= 7:
        alert(num + ' Aceptable');
        sumatoria = sumatoria + num;
        break;
        case num >= 8 && num <= 9:
        alert(num + ' Bueno');
        sumatoria = sumatoria + num;
        break;
        case num === 10:
        alert(num + ' Excelente');
        sumatoria = sumatoria + num;
        break;
        default:
        alert(num + ' No has ingresado un valor válido');
        break;
    }
}

let promedio = sumatoria /5;

console.log(sumatoria);
alert("El promedio es = " + promedio);
*/



//@@@@@@@@@@@@@@@@@ EJERCICIO @@@@@@@@@@@@//

/*
crear un programa, donde el usuario indique las notas de las materias que cursó este año y le devuelva el promedio, 
y la cantidad de materias que cursó:
-se permite ingresar solo valores entre 1 y 10.-
-la carga debe finalizar cuando el usuario ingrese un dato vacío.-
-indicar si el alumno aprobó el año o lo desaprobó. se aprueba con un promedio gral de 7 (siete).*/


/*
let materias = 0;
let sumaNotas = 0;
let nota;

do {
    nota = Number(prompt("Ingrese una nota: "))
    if (nota >= 1 && nota <= 10) {
        materias++;
        sumaNotas = sumaNotas + nota;
        alert(`La suma de sus notas hasta ahora es ${sumaNotas}`)
    }
    else {
        alert("Ingresó un valor incorrecto");
    }
} while (parseInt(nota));

let promediando = sumaNotas / materias;
alert(`Usted curso ${materias} materias y su promedio es de ${promediando}`);

if (promediando >= 7) {
    alert("Aprobaste...Felices Vacaciones")
}
else if (promediando < 7 && promediando > 3) {
    alert(`Lo siento tendras que recursar`)
} else {
    alert(`ALTO BURRO`)
}*/



















