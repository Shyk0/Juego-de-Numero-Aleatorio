let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
        asignarTextoElemento("p", `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    //No acerto
    else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
    }
    clearBox();
    intentos++;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles.")

    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

function clearBox() {
    document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    condicionesIniciales();
    clearBox();
    document.querySelector("#reiniciar").setAttribute("disabled", "true")
}

function intentosMaximo(){
    if(intentos == 10){
        alert("Haz alcanzado el numero maximo de intentos.")
        reiniciarJuego();
    }
}   

condicionesIniciales();