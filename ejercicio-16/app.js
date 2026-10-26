const boton = document.getElementById("btnNumero");
const error = document.getElementById("error");

function CelsiusaFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5)+32
    return fahrenheit;
}

boton.addEventListener("click", function () {

    let celsius = document.getElementById("numero").value;

    let celsiusparseado = Number(celsius);

    if (
        celsius.trim() === "" ||
        Number.isNaN(celsiusparseado)
    ) {
        error.textContent = "Error: debes introducir un número.";
        error.style.color = "red";

        console.log("Error: debes introducir un número.");
    } else {

        error.textContent = "";

        console.log(celsius+"º son: "+CelsiusaFahrenheit(celsius)+" fahrenheit")
    }
});