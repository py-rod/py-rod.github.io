function mostrarDiv(numero) {
    var divs = document.querySelectorAll('#view-project div');
    divs.forEach(function (div) {
        div.style.display = 'none';
    });

    var h1Seleccionado = document.getElementById('view-project-' + numero);
    h1Seleccionado.style.display = 'block';

    var buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.classList.remove('active-button');
    });

    var buttonSeleccionado = document.getElementById('button-' + numero);
    buttonSeleccionado.classList.add('active-button');
}