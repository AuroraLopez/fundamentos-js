const boton = document.getElementById("btnNumero");
const error = document.getElementById("error");

function determinarparoimpar(numero){
    if(numero%2==0){
        console.log("Es un número par")
        return;
    }
    return console.log("Es un número impar")
}

boton.addEventListener("click", function () {

    let numero = window.prompt("Elige un número", 0);

    let num1parseado = Number(numero);


    if (
        numero.trim() === "" ||
        Number.isNaN(num1parseado) ||
        numero < 0
    ) {
        error.textContent = "Error: debes introducir números positivos.";
        console.log("Error: debes introducir números positivos.");
    } else {
        determinarparoimpar(num1parseado)
    }
});