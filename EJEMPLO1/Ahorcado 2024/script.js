palabrasOrdenar = ['computadora', 'html', 'javascript', 'json', 'escritorio', 'datos', ''];
const palabraSeleccionada = palabrasOrdenar[Math.floor(Math.random() * palabrasOrdenar.length)];
let letrasCorrectas = new Set();
let intentosFallidos = 0;

function dibujarAhorcado() {
    switch (intentosFallidos) {
        case 1:
            cabeza();
            break;
        case 2:
            cuerpo();
            break;
        case 3:
            brazo1();
            break;
        case 4:
            brazo2();
            break;
        case 5:
            pierna1();
            break;
        case 6:
            pierna2();
            break;
    }
}

function verificarLetra() {
    const letraInput = document.getElementById("letraInput").value.toLowerCase();
    document.getElementById("letraInput").value = ''; 

    if (palabraSeleccionada.includes(letraInput)) {
        letrasCorrectas.add(letraInput);
        if ([...palabraSeleccionada].every(letra => letrasCorrectas.has(letra))) {
            alert('¡Felicidades! Has adivinado la palabra correctamente.');
        }
    } else {
        intentosFallidos++;
        dibujarAhorcado();
        if (intentosFallidos === 6) {
            alert('¡Oh no! Te has quedado sin intentos. La palabra era: ' + palabraSeleccionada);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("verificarBtn").addEventListener('click', verificarLetra);
    const tecladoDiv = document.getElementById("teclado");
    for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
        const boton = document.createElement('button');
        boton.textContent = letra;
        boton.addEventListener('click', function() {
            if (!letrasCorrectas.has(letra)) {
                document.getElementById("letraInput").value = letra;
                verificarLetra();
            }
        });
        tecladoDiv.appendChild(boton);
    }
});

function cabeza() {
    const c = document.getElementById("panel");
    const ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(300, 150, 30, 0, 2 * Math.PI);
    ctx.stroke();
}

function cuerpo() {
    const c = document.getElementById("panel");
    const ctx = c.getContext("2d");
    ctx.moveTo(300, 180);
    ctx.lineTo(300, 280);
    ctx.stroke();
}

function brazo1() {
    const c = document.getElementById("panel");
    const ctx = c.getContext("2d");
    ctx.moveTo(300, 200);
    ctx.lineTo(250, 230);
    ctx.stroke();
}

function brazo2() {
    const c = document.getElementById("panel");
    const ctx = c.getContext("2d");
    ctx.moveTo(300, 200);
    ctx.lineTo(350, 230);
    ctx.stroke();
}

function pierna1() {
    const c = document.getElementById("panel");
    const ctx = c.getContext("2d");
    ctx.moveTo(300, 280);
    ctx.lineTo(250, 320);
    ctx.stroke();
}

function pierna2() {
    const c = document.getElementById("panel");
    const ctx = c.getContext("2d");
    ctx.moveTo(300, 280);
    ctx.lineTo(350, 320);
    ctx.stroke();
}