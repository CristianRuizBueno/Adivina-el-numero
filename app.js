
let listagenerica = [];

let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
lenguagesDeProgramacion.push( 'Java', 'Ruby','GoLang');

function mostrarLenguajes () {
    console.log(lenguagesDeProgramacion)

}

function mostrarLenguajesInverso () {
    console.log(lenguagesDeProgramacion.reverse())

}

function calcularPromedio(lista) {
    // Verificar si la lista está vacía
    if (lista.length === 0) {
        return 0; // Retornar 0 si la lista está vacía para evitar división por cero
    }

    // Calcular la suma de los elementos en la lista
    let suma = lista.reduce((total, num) => total + num, 0);

    // Calcular el promedio dividiendo la suma entre la cantidad de elementos
    let promedio = suma / lista.length;

    return promedio;
}

// Ejemplo de uso:
let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(numeros);
console.log("El promedio de la lista es:", promedio);

function encontrarMayor(arr) {
    // Usar Math.max con el spread operator para encontrar el número mayor en el array
    return Math.max(...arr);
}

// Ejemplo de uso:

let numeroMayor = encontrarMayor(numeros);
console.log("El número mayor en el array es:", numeroMayor);

mostrarLenguajes();
mostrarLenguajesInverso();
calcularPromedio(lenguagesDeProgramacion);



    /*
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
*/