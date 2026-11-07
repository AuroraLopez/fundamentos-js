function normalizarPalabra(palabra) {
    return palabra.trim().toLowerCase()
        .replaceAll("á", "a")
        .replaceAll("é", "e")
        .replaceAll("í", "i")
        .replaceAll("ó", "o")
        .replaceAll("ú", "u");
}

function invertirPalabra(palabra) {
    return palabra.split("").reverse().join("");
}

const boton = document.getElementById("btn");

boton.addEventListener("click", function () {

    let palabra = window.prompt("Elige una palabra", "hola");

    let resultado = normalizarPalabra(palabra);
    let palabrainvertida = invertirPalabra(palabra);

    if (resultado == palabrainvertida) {
        console.log("La palabra " + palabra + " es palíndroma.");
    } else {
        console.log("La palabra " + palabra + " no es palíndroma.");
    }
});