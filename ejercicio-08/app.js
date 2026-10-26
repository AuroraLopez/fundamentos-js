const boton = document.getElementById("btn");
const error = document.getElementById("error");

function azar(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

boton.addEventListener("click", function () {

    let min = window.prompt("Elige un mínimo", 0);
    let max = window.prompt("Elige un máximo", 0);

    let minparseado = Number(min);
    let maxparseado = Number(max);

    if (
        min.trim() === "" ||
        max.trim() === "" ||
        Number.isNaN(minparseado) ||
        Number.isNaN(maxparseado)
    ) {
        error.textContent = "Error: debes introducir dos números.";
        console.log("Error: debes introducir dos números.");
    } else {
        error.textContent = "";
        console.log(
            "Número aleatorio entre "+ min + " y "+max+ " es: "+azar(minparseado, maxparseado)
        );
    }
   });