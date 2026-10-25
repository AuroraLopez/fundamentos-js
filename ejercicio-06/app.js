const boton = document.getElementById("btnNumero");
const error = document.getElementById("error");

function determinarparoimpar(numero) {
    if (numero % 2 == 0) {
        console.log("Es un número par")
        return;
    }
    return console.log("Es un número impar")
}

boton.addEventListener("click", function () {

    let numero = document.getElementById("numero").value;

    let num1parseado = Number(numero);

    if (
        numero.trim() === "" ||
        Number.isNaN(num1parseado)
    ) {
        error.textContent = "Error: debes introducir un número.";
        error.style.color = "red";

        console.log("Error: debes introducir un número.");
    } else {

        error.textContent = "";

        determinarparoimpar(num1parseado);
    }
});