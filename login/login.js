// Obtener referencias a los elementos de formulario
const formulario = document.getElementById('login');
const correoInput = document.getElementById('correo');
const contraseñaInput = document.getElementById('password');
const botonInicioSesion = document.getElementById('button');

// Agregar un evento de escucha al botón de iniciar sesión
botonInicioSesion.addEventListener('click', function(evento) {
    evento.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Realizar las validaciones
    if (!validarCorreo(correoInput.value)) {
        mostrarError(correoInput, 'Por favor ingrese un correo válido');
    } else if (contraseñaInput.value === '') {
        mostrarError(contraseñaInput, 'Por favor ingrese una contraseña válida');
    } else {
        // Si todas las validaciones son exitosas, se puede continuar con el envío de datos
        formulario.submit();
    }
});

// Función para validar formato de correo electrónico
function validarCorreo(correo) {
    const regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return regexCorreo.test(correo);
}

// Función para mostrar error
function mostrarError(input, mensaje) {
    const errorMensaje = document.createElement('p');
    errorMensaje.className = 'error-mensaje';
    errorMensaje.textContent = mensaje;

    const contenedorInput = input.parentElement;
    contenedorInput.appendChild(errorMensaje);

    // Agregar una clase de estilo para resaltar el campo con error
    contenedorInput.classList.add('error');
}

// Limpiar los mensajes de error al escribir en los campos 
correoInput.addEventListener('input', limpiarError);
contraseñaInput.addEventListener('input', limpiarError);

function limpiarError() {
    const contenedorInput = this.parentElement;
    const errorMensaje = contenedorInput.querySelector('.error-mensaje');

    if (errorMensaje) {
        contenedorInput.removeChild(errorMensaje);
        contenedorInput.classList.remove('error');
    }
}