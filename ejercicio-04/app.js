const boton = document.getElementById("btnSuma");
const error = document.getElementById("error");

boton.addEventListener("click", function () {

    let numero1 = window.prompt("Elige un número", 0);
    let numero2 = window.prompt("Elige otro número", 0);

    let num1parseado = Number(numero1);
    let num2parseado = Number(numero2);

    if (
        numero1.trim() === "" ||
        numero2.trim() === "" ||
        Number.isNaN(num1parseado) ||
        Number.isNaN(num2parseado)
    ) {
        error.textContent = "Error: debes introducir dos números.";
        console.log("Error: debes introducir dos números.");
    } else {
        error.textContent = "";
        console.log(
            "La suma entre " + num1parseado +
            " y " + num2parseado +
            " es: " + (num1parseado + num2parseado)
        );
    }
});