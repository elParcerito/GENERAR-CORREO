function generarCorreo() {
  const nombre = limpiarTexto(document.getElementById("nombre").value.trim().toLowerCase());
  const apellido1 = limpiarTexto(document.getElementById("apellido1").value.trim().toLowerCase());
  const apellido2 = limpiarTexto(document.getElementById("apellido2").value.trim().toLowerCase());
  const resultado = document.getElementById("resultado");

  if (!nombre || !apellido1 || !apellido2) {
    resultado.innerHTML = "⚠️ Por favor, completa todos los campos.";
    resultado.style.color = "var(--error)";
    resultado.classList.add("fadeIn");
    return;
  }

  const correo = `${nombre.charAt(0)}.${apellido1}${apellido2}@liceorbl.cl`;
  resultado.innerHTML = `✅ <b>${correo}</b><br><small>(Copiado al portapapeles)</small>`;
  resultado.style.color = "var(--success)";
  resultado.classList.add("fadeIn");

  navigator.clipboard.writeText(correo);

  setTimeout(() => {
    resultado.innerHTML += "<br><i>La contraseña será entregada por el profesor.</i>";
  }, 800);
}

function limpiarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/g, "n");
}

function toggleModo() {
  const body = document.body;
  const btn = document.getElementById("modoBtn");

  body.classList.toggle("dark");
  btn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
}