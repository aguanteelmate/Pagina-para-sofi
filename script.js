// script.js
function mostrarIndice() {
    document.getElementById('inicio').classList.remove('visible');
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('indice').classList.add('visible');
}

function mostrarSeccion(seccion) {
    const secciones = document.querySelectorAll('.pagina');
    secciones.forEach(sec => sec.classList.remove('visible'));
    document.getElementById(seccion).classList.add('visible');
}

function volverIndice() {
    const secciones = document.querySelectorAll('.pagina');
    secciones.forEach(sec => sec.classList.remove('visible'));
    document.getElementById('indice').classList.add('visible');
}
