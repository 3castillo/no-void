// ABOTON CONTINUAR
// Obtener los jumbotrons
var jumbotron = document.getElementById("jumbotron"); // Busca el primer jumbotron

// Al hacer clic en el botón de "Continuar" en la parte superior
document.getElementById("btn-continue").addEventListener("click", function() {
    jumbotron.style.display = "block"; // Muestra el primer jumbotron
});
// ----------------------------------------------------------------------------------------------------

// ABOTON GO BACK
// Al hacer clic en el botón "Go Back" en el primer jumbotron
document.getElementById("btn-jumb-ocultar").addEventListener("click", function() {
    jumbotron.style.display = "none"; // Oculta el primer jumbotron
});

// BOTON RULES ON
// ----------------------------------------------------------------------------------------------------
var jumbotronRules = document.getElementById("jumbotron-rules");// Busca el jumbotron rules
// Al hacer clic en el botón "Rules on"
document.getElementById("btn-jumb-ocultar-dos").addEventListener("click", function() {
    jumbotron.style.display = "none"; // Oculta el primer jumbotron
    jumbotronRules.style.display = "block"; // Muestra el segundo jumbotron
});

// BOTON NO / I DON'T
// ----------------------------------------------------------------------------------------------------
// Al hacer clic en el botón "No/I don't", redirige a la página index.html
// Busca los elementos del DOM
var jumbotron = document.getElementById("jumbotron"); // Asume que este es el primer jumbotron
var jumbotronRules = document.getElementById("jumbotron-rules"); // Segundo jumbotron

// Al hacer clic en el botón "No/I don't"
document.getElementById("btn-i-dont").addEventListener("click", function() {
    // Oculta ambos jumbotrons
    if (jumbotron) jumbotron.style.display = "none"; // Oculta el primer jumbotron si existe
    if (jumbotronRules) jumbotronRules.style.display = "none"; // Oculta el segundo jumbotron si existe
});

// BOTON YES / I ACCEPT 
// ----------------------------------------------------------------------------------------------------
// Al hacer clic en el botón "Yes/ I Accept"
document.getElementById("btn-yes-accept").addEventListener("click", function() {
    // Redirige a blog.html
    window.location.href = "blog.html"; // Cambia "blog.html" si la ruta es diferente
});
