const respuesta = document.querySelector('#respuesta');
const botonUno = document.getElementById('boton-1');
const botonDos = document.getElementById('boton-2');

const respuestaClick = (numero) => {//funcion flecha
    const elemento = document.createElement('p');
    elemento.innerHTML = `Respuesta botón ${numero}`;
    respuesta.append(elemento);
}

botonUno.addEventListener('click', () => { respuestaClick(1); });

botonDos.onclick = () => { respuestaClick(2); }


// EVENTOS DEL MOUSE
const plano = document.getElementById('plano'); //DIV CON ESTILO APLICADO
const circulo = document.getElementById('circulo'); //CIRCULO CREADO DENTRO DEL DIV

plano.onmousedown= () => {
    plano.style.backgroundColor = 'orange';
    plano.classList.add('hola');
}

plano.onmouseup = () => {
    plano.style.backgroundColor = 'cadetblue';
    plano.classList.remove('hola');
}

plano.addEventListener('mouseover', () => {
    plano.style.backgroundColor = 'black';
});

plano.onmouseout = () => {
    plano.style.backgroundColor = 'green';
}


// EVENTOS DEL TECLADO
const keyUp = 38;
const keyDown = 40;
const keyLeft = 37;
const keyRight = 39;

const juego = document.querySelector('.juego');
const cuadro = document.querySelector('.cuadro');
cuadro.style.top = 0;
cuadro.style.left = 0;

juego.onkeydown = (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case (keyDown):
            e.preventDefault();
            cuadro.style.top = parseInt(cuadro.style.top) + 40 + 'px';
            console.log(cuadro.style.top);
            break;
        case (keyUp):
            e.preventDefault();
            cuadro.style.top = parseInt(cuadro.style.top) - 40 + 'px';
            console.log(cuadro.style.top);
            break;
        case (keyLeft):
            e.preventDefault();
            cuadro.style.left = parseInt(cuadro.style.left) - 40 + 'px';
            console.log(cuadro.style.left);
            break;
        case (keyRight):
            e.preventDefault();
            cuadro.style.left = parseInt(cuadro.style.left) + 40 + 'px';
            console.log(cuadro.style.left);
            break;
    }


// EVENTOS INPUTS

const nombre = document.getElementById('nombre');//INPUT
const apellido = document.getElementById('apellido');//INPUT
const escribiendo = document.getElementById('escribiendo');
const respuestaNombre = document.getElementById('respuesta-nombre');
const respuestaApellido = document.getElementById('respuesta-apellido');
const respuestaFormulario = document.querySelector('#respuesta-formulario');
const formulario = document.getElementById('formulario');

nombre.addEventListener('change', (e) => {
    respuestaNombre.innerHTML = e.target.value;
})
//CODIGO PARA EVITAR SOBRE CARGA DE LETRAS
apellido.addEventListener('input', (e) => {
    if (e.target.value.length > 10) {
        escribiendo.style.display = 'block';
        escribiendo.innerHTML = 'Número máximo de caracteres';
    } else {
        escribiendo.style.display = 'none';
    }   
    respuestaApellido.innerHTML = nombre.value;
})

formulario.onsubmit = (e) => {
    e.preventDefault();
    respuestaFormulario.innerHTML = `Bienvenid@ ${nombre.value} ${apellido.value}`;
}}