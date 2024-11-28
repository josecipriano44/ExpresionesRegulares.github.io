document.getElementById("validador-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Obtener valores de los campos
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Expresiones regulares
    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i; // Valida correos
    const telefonoRegex = /^\d{9}$/; // Números exactos de 10 dígitos
    const passwordRegex = /^.{8,}$/; // Mínimo 8 caracteres
  
    // Validar campos
    let emailValido = emailRegex.test(email);
    let telefonoValido = telefonoRegex.test(telefono);
    let passwordValida = passwordRegex.test(password);
  
    // Mensajes de error
    document.getElementById("email-error").textContent = emailValido ? "" : "Correo inválido.";
    document.getElementById("telefono-error").textContent = telefonoValido ? "" : "Número debe tener 10 dígitos.";
    document.getElementById("password-error").textContent = passwordValida ? "" : "Contraseña debe tener al menos 8 caracteres.";
  
    // Mostrar resultado final
    if (emailValido && telefonoValido && passwordValida) {
      document.getElementById("result").textContent = "¡Todos los datos son válidos!";
    } else {
      document.getElementById("result").textContent = "";
    }
  });
  