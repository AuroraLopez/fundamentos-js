const boton = document.getElementById("btnNumero");
const error = document.getElementById("error");

function determinarparoimpar(numero){
    if(numero%2==0){
        console.log(numero+": Es un número par");
        return;
    }
    return console.log(numero+": Es un número impar");
}

boton.addEventListener("click", function () {

    let numero = window.prompt("Elige un número", 0);

    let num1parseado = Number(numero);

    // Condiciones para la validación de datos o resultado.
    if (
        numero.trim() === "" ||
        Number.isNaN(num1parseado) ||
        numero < 0
    ) {
        error.textContent = "Error: debes introducir números positivos.";
        console.log("Error: debes introducir números positivos.");
    } else {
        error.textContent = "";
        determinarparoimpar(num1parseado);
    }
});