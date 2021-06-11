const formulario = document.getElementById('formulario');
const nombreusu = document.getElementById('nombreu');
const correo = document.getElementById('correo');
const contra = document.getElementById('contrasena');
const contra2 = document.getElementById('contrasena2');



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    verificar();

});

function verificar() {
    const valornombreu = nombreusu.value.trim();
    const valorcorreo = correo.value.trim();
    const valorcontra = contra.value.trim();
    const valorcontra2 = contra2.value.trim();

    if (valornombreu === '') {
        datosErroneos(nombreusu, 'Ingresa tus datos');
    } else {
        datosCorrectos(nombreusu);
    }

    if (valorcorreo === '') {
        datosErroneos(correo, 'Ingresa tus datos');
    } else if (!datosCorreo(valorcorreo)) {
        datosErroneos(correo, 'Correo Mal');
    } else {
        datosCorrectos(correo);
    }

    if (valorcontra === '') {
        datosErroneos(contra, 'Ingresa tus datos');
    } else {
        datosCorrectos(contra);
    }

    if (valorcontra2 === '') {
        datosErroneos(contra2, 'Ingresa tus datos');
    } else if (valorcontra2 !== valorcontra) {
        datosErroneos(contra2, 'Contraseña Diferente');
    } else {
        datosCorrectos(contra2);
    }

}



function datosErroneos(dato, mensaje) {
    const formularioControl = dato.parentElement;
    const small = formularioControl.querySelector('small');
    formularioControl.className = 'seccionformulario error';
    small.innerText = mensaje;
}


function datosCorrectos(dato) {
    const formularioControl = dato.parentElement;
    formularioControl.className = 'seccionformulario correcto';

}

function datosCorreo(correo) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);

}




