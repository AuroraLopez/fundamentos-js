const boton = document.getElementById("btn");

function invertirPalabra(palabra) {

    let arraypalabra = palabra.split("");
    let arrayinvertido = arraypalabra.reverse();
    let palabrainvertida = arrayinvertido.join("");

    return palabrainvertida;
}


boton.addEventListener("click", function () {

    let palabra = window.prompt("Elige una palabra", "hola");

    let palabrainvertida = invertirPalabra(palabra);

    console.log("La palabra original es: " + palabra);
    console.log(
        "La palabra invertida de " + palabra +
        " es: " + palabrainvertida
    );
});