function generarCorreo() {
    let nombre = document.getElementById("nombre").value.trim().toLowerCase();
    let apellido1 = document.getElementById("apellido1").value.trim().toLowerCase();
    let apellido2 = document.getElementById("apellido2").value.trim().toLowerCase();

    if (nombre === "" || apellido1 === "" || apellido2 === "") {
        document.getElementById("resultado").innerHTML = "Por favor, complete todos los campos.";
        return;
    }

    // Limpiar caracteres especiales
    nombre = limpiarTexto(nombre);
    apellido1 = limpiarTexto(apellido1);
    apellido2 = limpiarTexto(apellido2);

    let inicialNombre = nombre.charAt(0);
    let correo = `${inicialNombre}.${apellido1}${apellido2}@liceorbl.cl`;

    document.getElementById("resultado").innerHTML = `Correo generado: <strong>${correo}</strong><br><span id="mensaje-personalizado"></span>`;

    document.getElementById("mensaje-personalizado").innerText = "La contraseña debera ser dicha por el profesor";

    setTimeout(() => document.getElementById("resultado").style.opacity = 1, 100);


    // Copiar correo al portapapeles
    navigator.clipboard.writeText(correo);
}

// Función para eliminar tildes y reemplazar "ñ" por "n"
function limpiarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ñ/g, "n");
}


