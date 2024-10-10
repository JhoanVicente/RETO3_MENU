// Obtener el elemento del ícono de menú hamburguesa
const hamburger = document.getElementById('hamburger');

// Obtener el menú de navegación
const menu = document.getElementById('menu');

// Agregar un evento de clic al ícono hamburguesa
hamburger.addEventListener('click', () => {
    // Alternar la clase 'show' en el menú
    // Esto permite mostrar u ocultar el menú en pantallas pequeñas
    menu.classList.toggle('show');
});