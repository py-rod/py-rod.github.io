let email = document.getElementById("emailInput")



email.addEventListener("invalid", function (event) {
    email.setCustomValidity("Introduce una dirección de correo electrónico válida (por ejemplo, correo@dominio.com)")
})


email.addEventListener("input", function () {
    email.setCustomValidity("")
})