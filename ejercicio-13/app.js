const boton = document.getElementById("btn");

boton.addEventListener("click", function () {

    let frase = window.prompt("Escribe una frase", "hola como estas");

    let frasesinespaciodelantero = frase.trim();

    let arrayfrase = frasesinespaciodelantero.split(" ");

    let contador = arrayfrase.length;

    console.log("Hay " + contador + " palabras en esta frase");
});