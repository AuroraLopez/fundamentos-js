const boton = document.getElementById("btn");

function invertirPalabra(palabra) {

    let resultado = palabra.trim().toLowerCase()
        .replaceAll("á", "a")
        .replaceAll("é", "e")
        .replaceAll("í", "i")
        .replaceAll("ó", "o")
        .replaceAll("ú", "u");

    let arraypalabra = resultado.split("");
    let arrayinvertido = arraypalabra.reverse();
    let palabrainvertida = arrayinvertido.join("");

    return palabrainvertida;
}


boton.addEventListener("click", function () {

    let palabra = window.prompt("Elige una palabra", "hola");

    let palabrainvertida = invertirPalabra(palabra);

    console.log(
        "La palabra invertida de " + palabra +
        " es: " + palabrainvertida
    );
});