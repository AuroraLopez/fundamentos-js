const boton = document.getElementById("btnNumero");
const error = document.getElementById("error");

function esPrimo(num){
    if (num <= 1) return false;

    for (let i = 2; i < num; i++){
        if(num%i===0) return false;       
    }
    return true;
}

let numerospares=[];

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
        error.textContent = ""
        for (let i = 1; i < num1parseado; i++){
            if(esPrimo(i)==true){
                numerospares.push(i);
            }
        }
        console.table(numerospares);
    }
})