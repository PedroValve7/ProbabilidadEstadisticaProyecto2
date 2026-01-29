function ocultarTodo() {
    document.querySelectorAll('.pagina').forEach(p => p.style.display = 'none');
    document.getElementById('menu').style.display = 'none';
}

function mostrar(id) {
    ocultarTodo();
    let pagina = document.getElementById(id);
    pagina.style.display = 'block';
}

function volver() {
    ocultarTodo();
    document.getElementById('menu').style.display = 'block';
}

// PROBABILIDAD SIMPLE
function probabilidad() {
    let f = Number(document.getElementById('fav').value);
    let p = Number(document.getElementById('pos').value);
    document.getElementById('resProb').innerText =
        "Probabilidad = " + (f / p);
}

// ESTADÍSTICA
function estadistica() {
    let datos = document.getElementById('datos').value.split(' ').map(Number);
    let media = datos.reduce((a,b)=>a+b,0)/datos.length;
    let mediana = datos.sort((a,b)=>a-b)[Math.floor(datos.length/2)];
    document.getElementById('resEst').innerText =
        "Media: " + media + " | Mediana: " + mediana;
}

// COMBINATORIA
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function combinatoria() {
    let n = Number(document.getElementById('n').value);
    let r = Number(document.getElementById('r').value);
    let perm = factorial(n) / factorial(n - r);
    let comb = factorial(n) / (factorial(r) * factorial(n - r));
    document.getElementById('resComb').innerText =
        "Permutaciones: " + perm + " | Combinaciones: " + comb;
}

function ejercicio1() {
    document.getElementById("resEj1").innerText =
        "Respuesta: Es una variable aleatoria DISCRETA, porque solo puede tomar valores enteros como 1, 2, 3, 4, 5 o 6.";
}

function ejercicio2() {
    document.getElementById("resEj2").innerText =
        "Respuesta: Es una variable aleatoria CONTINUA, porque el tiempo puede tomar infinitos valores dentro de un intervalo.";
}



// ===== VALIDACIONES EJERCICIOS =====

function validarEj1() {
    let r = document.getElementById("resp1").value;
    let res = document.getElementById("resEj1");

    if (r === "discreta") {
        res.innerText = "✅ Correcto. Es una variable aleatoria discreta.";
        res.style.color = "green";
    } else {
        res.innerText = "❌ Incorrecto. La respuesta correcta es DISCRETA.";
        res.style.color = "red";
    }
}

function validarEj2() {
    let r = document.getElementById("resp2").value;
    let res = document.getElementById("resEj2");

    if (r === "continua") {
        res.innerText = "✅ Correcto. Es una variable aleatoria continua.";
        res.style.color = "green";
    } else {
        res.innerText = "❌ Incorrecto. La respuesta correcta es CONTINUA.";
        res.style.color = "red";
    }
}

let grafica = null;

function generarGrafica() {
    const ctx = document.getElementById('graficaDado').getContext('2d');

    if (grafica) {
        grafica.destroy();
    }

    grafica = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                label: 'Probabilidad',
                data: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6],
                backgroundColor: '#2a9d8f'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 0.2
                }
            }
        }
    });
}



let graficaEditable = null;

function generarGraficaEditable() {

    let valores = [
        Number(p1.value),
        Number(p2.value),
        Number(p3.value),
        Number(p4.value),
        Number(p5.value),
        Number(p6.value)
    ];

    let suma = valores.reduce((a, b) => a + b, 0);
    let mensaje = document.getElementById("msgGrafica");

    if (Math.abs(suma - 1) > 0.01) {
        mensaje.innerText = "❌ La suma de las probabilidades debe ser 1.";
        mensaje.style.color = "red";
        return;
    }

    mensaje.innerText = "✅ Distribución válida. Gráfica generada.";
    mensaje.style.color = "green";

    const ctx = document.getElementById('graficaDado').getContext('2d');

    if (graficaEditable) {
        graficaEditable.destroy();
    }

    graficaEditable = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                label: 'Probabilidad',
                data: valores,
                backgroundColor: '#e76f51'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1
                }
            }
        }
    });
}

