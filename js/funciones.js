
//-@@@@@@@@@@@@@@@@@@@@ FUNCIONES @@@@@@@@@@@@@@@@@@@@@@@22

/*function saludar () {
    console.log("¡Hola estudiantes!");
}
saludar();*/
/*
function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre");
    alert(`El nombre ingresado es ${nombreIngresado}`);
} 
solicitarNombre();/*


//////////EJP FUNCION

/*
//DECLARO CON FOR QUE QUIERO QUE PREGUNTE HASTA 3 VECES USANDO LA FUNCION DECLARADA
for (let i = 0; i < 3; i++) {
    solicitarNombre();
}*/


/* //----------EJP FUNCION

function nombre (){
    let ingreseNombre = prompt("ingrese su nombre");
    if(ingreseNombre !== ""){
        alert(`su nombre es ${ingreseNombre}`)
    }else if (ingreseNombre === ""){
        alert(`no ingresaste nada`)
    }else{
        alert(`saludos`)
    }
}
nombre();

*/


/*
//----FUNCION CON PARAMETRO------//

const conParametros = (nombre, apellido, edad = 0) => {
    alert(`hola ${nombre} ${apellido} tienes ${edad}`);
}


const ingresarDatos = () => {
let ingresarNombre = prompt("ingresar Nombre");
let ingresarApellido = prompt("ingresar Apellido");
let edads = Number(prompt("ingredad edad"));
conParametros( ingresarNombre,ingresarApellido,edads);
}
ingresarDatos();
*/

/*
//@@@@@@@@@COMBINACION DE DOS FUCNCIONES-@@@@@@@@@//
//              SIN RETURN

let resultado = 0;
const sumar = (primerNumero, segundoNumero) => {
    resultado = primerNumero + segundoNumero;
}

function sumarConUsuario() {
    let num1 = Number(prompt("ingrese un numero"));
    let num2 = Number(prompt("ingrese un numero"));
    sumar(num1,num2);
    alert( `su resultado es ${resultado}`)
}
sumarConUsuario();
*/
//@@@@@@@@@@@@MISMA OPERARCION DE ARRIBA PERO CON RETURN @@@@@@@@@@@@@@@@22 
/*
function sumarRetum (primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}

function sumarConUsuario(){
    let num1 = Number(prompt("ingrese un numero"));
    let num2 = Number(prompt("ingrese otro numero"));
    alert(`Su resultado es ${sumarRetum(num1,num2)}`);
}
sumarConUsuario();*/


//-----------CALCULADORA CON SWICH-------

/*function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return 0;
    }
}

function operacionUsuario (){
    let num1 = Number(prompt("ingrese un numero"));
    let num2 = Number(prompt("ingrese otro numero"));
    let operador = prompt("ingrese otro numero");
    alert(`el resultado es ${calculadora(num1, num2, operador)}`);
    
}
operacionUsuario();*/


//-----CALCULADORA CON EL IF ELSE IF ELSE---//
/*
    function calculadora (primerNumero, segundoNumero, operacion) {
    if(operacion === "+"){
        return primerNumero + segundoNumero;
    }else if(operacion ==="-"){
        return primerNumero - segundoNumero;
    }else if(operacion ==="/"){
        return primerNumero / segundoNumero;
    }else if(operacion ==="*"){
        return primerNumero * segundoNumero;
    }else{
        alert(`no ingresaste ningun valor`)
    }
} 
function operacionUsuario (){
    let num1 = Number(prompt("ingrese un numero"));
    let num2 = Number(prompt("ingrese otro numero"));
    let operador = prompt("Que operacion quieres ralizar");
    alert(`el resultado es ${calculadora(num1, num2, operador)}`);
    
}

operacionUsuario();
*/



/*
//------------FUNCIONS FLECHAS SIMPLIFICADAS-------//

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = (x) => x * 0.21;

let precioProducto  = 500; 
let descuento = 50;  

//Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento ); 
console.log(nuevoPrecio);*/



//@@@@@@@@@@@@@@@@@@ CARRITO DE COMPRA
/*
let opc;
let cantidad = 0;
let carrito = 0;
let billetera = 0;
let billeteraTotal =0;


const cargarDinero = () => {
    billetera = Number(prompt(`ingresar el monto de dinero
    desea.`))
    billeteraTotal = billeteraTotal + billetera;
    alert(`su saldo actual es${billeteraTotal}`)

}


const verProductos = () => {

    do{
    opc = Number(prompt(`Ingrese la opcione que mas le guste.
        1-nike air force $15000
        2-adidas stan smith $18000
        3-nike janosky $12000
        4-puma $13000`));
    if (opc === 1) {
        carrito = carrito + 15000;
        cantidad++;
        billeteraTotal = billeteraTotal - carrito;
        alert(`su saldo actual es ${billeteraTotal}`)
    } else if (opc === 2) {
        carrito = carrito + 18000
        cantidad++;
        billeteraTotal = billeteraTotal - carrito;
        alert(`su saldo actual es ${billeteraTotal}`)
    } else if (opc === 3) {
        carrito = carrito + 12000
        cantidad++;
        billeteraTotal = billeteraTotal - carrito;
        alert(`su saldo actual es ${billeteraTotal}`)
    } else if (opc === 4) {
        carrito = carrito + 13000
        cantidad++;
        billeteraTotal = billeteraTotal - carrito;
        alert(`su saldo actual es ${billeteraTotal}`)
    } else {
        alert(`no ingresaste un valor correcto`)
    }
}while(confirm("Desea seguir comprando"))
}

const verCant =()=>{
    alert(`tiene ${cantidad} compras en su carrito.
    Y su saldo actual es de ${billeteraTotal}`)
}


let elegirNumeroDeOpicion;
do {
    elegirNumeroDeOpicion = Number(prompt(`Ingresa que opcion quiere
Opcion 1 Cargar Dinero.
Opcion 2 Ver productos.
Opcion 3 Ver cantidad productos
Opcion 4 sailr` ));

    if (elegirNumeroDeOpicion === 1) {
        cargarDinero();
    } else if (elegirNumeroDeOpicion === 2) {
        verProductos();
    } else if (elegirNumeroDeOpicion === 3) {
        verCant();
    } else if(elegirNumeroDeOcpicion === 4) {
        alert(`Gracias por la compra`);
    }

} while(elegirNumeroDeOpicion !==4);

*/
/*comandas = comandas + " \n " + listapedido;*/






