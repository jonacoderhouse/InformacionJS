
//-----------------BUCLES-------------------//

/*for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let i = 0; i < 10; i=i+3) { //para sumar de dos en dos o cada cuanto quiera yo. ejp i=i+3  3 en 3
    console.log(i);
}*/



/*

const MAX_TURNO =100 // SE PUEDE USAR LA CONSTANTE O BIEN EL NUMERO 20 O MAX_TURNO

for (let i = 1; i <=MAX_TURNO; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert( `Turno  N°  ${i}  \nNombre: ${ingresarNombre}`);
}
*/



/*
 //tabla multiplicar
let multiplicador = Number(prompt("ingrese que tabla quiere aprender"));//5
for ( let i=0;i<=10;i++){
    let valor = multiplicador * i; 
    console.log(` ${multiplicador} * ${i} = ${valor}`);
    
}*/
/*
for( let i=1; i<=10 ; i++){
console.log(i)
}

*/

//BREAK
/*let contrasena = ' amor ';

for (let i = 1; i <= 10; i++) {
    let respuesta = prompt("Ingrese contraseña");
    if (respuesta === contrasena) {
        break;
    }
    alert("Contraseña errada");
}*/

//CONTINUE
/*for (let i = 1; i <= 10; i++) {

    if(i == 5){
    continue;
    }
    console.log(i);
    }*/



//JUEGO ADIVINA EL NUMERO

/*let ganador = 7;

for (i = 1; i <= 10; i++) {

    let ingreseNumero = Number(prompt("Ingrese un numero"));

    if (!parseInt(ingreseNumero)) {

        alert(`DALE INGRESA EL NUMERO`)

        continue;
    } else if (ingreseNumero === ganador) {

        alert(`ganaste con el Numero ${ganador}`)

        break;
    } else {
        alert(`perdiste`)
    }
}*/


// ---------------- WHILE --------//

//Repetimos con While hasta que el usuario ingresa "ESC"

/*let entrada = prompt("Ingresar otro dato")
while(entrada !== "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}*/




//----------------DO WHILE
/*
let billetera = 1000;

do {
let compra = Number(prompt("Cuanto quieres comprar?"));
billetera = billetera - compra;
alert(`Tienes ${billetera} en tu billetera`);
} while(billetera > 0)
alert("Te quedaste sin dinero");*/



/*let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
numero = prompt("Ingresar Número");
console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero))
*/





