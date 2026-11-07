const boton = document.getElementById("btn");

boton.addEventListener("click", function () {

    let frase = window.prompt("Escribe una frase", "hola como estas");

    let frasesinespacio = frase.trim();

    let arrayfrase = frasesinespacio.split(" ");

    let contador = arrayfrase.length;

    console.log("Hay " + contador + " palabras en la frase: "+frase);
});