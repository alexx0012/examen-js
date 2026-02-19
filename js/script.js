// =======================
// Contador de caracteres
// =======================
function contador() {
    const mensaje = document.getElementById("mensaje");
    const contadorElem = document.getElementById("contador");
    contadorElem.textContent = mensaje.value.length;
}

document.getElementById("mensaje").addEventListener("input", contador);


// =======================
// Funciones de validación
// =======================
function mostrarError(input, idError, mensajeError) {
    const error = document.getElementById(idError);
    error.textContent = mensajeError;
    error.classList.add("show");
    input.setAttribute("aria-invalid", "true");
}

function limpiarError(input, idError) {
    const error = document.getElementById(idError);
    error.classList.remove("show");
    input.setAttribute("aria-invalid", "false");
}


// =======================
// Validación formulario
// =======================
function validarFormulario(event) {
    event.preventDefault();

    let valido = true;

    // Campos
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const mensaje = document.getElementById("mensaje");
    const status = document.getElementById("status");

    // Expresiones regulares
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const regexTelefono = /^[0-9]{9}$/;

    // ===== NOMBRE =====
    if (nombre.value.trim().length < 2) {
        mostrarError(nombre, "error-nombre", "O nome debe ter ao menos 2 caracteres");
        valido = false;
    } else if (!regexNombre.test(nombre.value.trim())) {
        mostrarError(nombre, "error-nombre", "O nome só pode conter letras");
        valido = false;
    } else {
        limpiarError(nombre, "error-nombre");
    }

    // ===== EMAIL =====
    if (!regexEmail.test(email.value.trim())) {
        mostrarError(email, "error-email", "Introduce un email válido (exemplo@dominio.com)");
        valido = false;
    } else {
        limpiarError(email, "error-email");
    }


    //====== TELEFONO ======
    if (telefono.value.trim().length < 9) {
        mostrarError(telefono, "error-telefono", "O teléfono debe ter ao menos 9 caracteres");
        valido = false;
    } else if (!regexTelefono.test(telefono.value.trim())) {
        mostrarError(telefono, "error-telefono", "O teléfono só pode conter números");
        valido = false;
    } else {
        limpiarError(telefono, "error-telefono");
    }

    // ===== MENSAJE =====
    if (mensaje.value.trim().length < 10) {
        mostrarError(mensaje, "error-mensaje", "O mensaxe debe ter ao menos 10 caracteres");
        valido = false;
    } else if (mensaje.value.trim().length > 200) {
        mostrarError(mensaje, "error-mensaje", "O mensaxe non pode superar os 200 caracteres");
        valido = false;
    } else {
        limpiarError(mensaje, "error-mensaje");
    }

    // ===== RESULTADO FINAL =====
    if (valido) {
        alert("Formulario enviado correctamente");
        status.className = "status show success";
        document.getElementById("form").reset();
        document.getElementById("contador").textContent = "0";

    } else {
        status.textContent = "✗ Corrixe os erros indicados";
        status.className = "status show error";

        const primerError = document.querySelector('[aria-invalid="true"]');
        if (primerError) primerError.focus();
    }
}

document.getElementById("form").addEventListener("submit", validarFormulario);


// =======================
// Limpiar errores al escribir
// =======================
function limpiarErrorNombre() {
    limpiarError(document.getElementById("nombre"), "error-nombre");
}


function limpiarErrorEmail() {
    limpiarError(document.getElementById("email"), "error-email");
}


function limpiarErrorMensaje() {
    limpiarError(document.getElementById("mensaje"), "error-mensaje");

}

document.getElementById("nombre").addEventListener("input", limpiarErrorNombre);
document.getElementById("email").addEventListener("input", limpiarErrorEmail);
document.getElementById("mensaje").addEventListener("input", limpiarErrorMensaje);


// =======================
// Contador de clics
// =======================
let clics = 0;

function contarClic() {
    clics++;
    document.getElementById("clics").textContent = clics;
}

document.getElementById("btn-contar").addEventListener("click", contarClic);


// =======================
// Color aleatorio
// =======================
function cambiarColorFondo() {
    const r = Math.floor(Math.random() * 156) + 100;
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

document.getElementById("btn-color").addEventListener("click", cambiarColorFondo);

//===================
// Pulsar tecla
//===================
function pulsarTecla(event) {
    const tecla = event.key;
    document.getElementById("tecla").textContent = tecla;
}

document.getElementById("teclado").addEventListener("keyup", pulsarTecla);


document.getElementById("teclado").addEventListener("keyup", contarTecla);

function contarTecla() {
    const tecla = document.getElementById("teclado").value;
    document.getElementById("contadorTecla").textContent = tecla.length;
}


// =======================
// Caixa interactiva
// =======================


document.getElementById("caixa").addEventListener("mouseover", pasarRato);

function pasarRato() {
    const caixa = document.getElementById("caixa");
    caixa.style.backgroundColor = "red";
}

document.getElementById("caixa").addEventListener("mouseout", sacarRato);

function sacarRato() {
    const caixa = document.getElementById("caixa");
    caixa.style.backgroundColor = "";
}


//============
//footer interactivo
//============

document.getElementById("footer-interactivo").innerHTML = "<p>" + "&copy; " + new Date().getFullYear() + "</p>"