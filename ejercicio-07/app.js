const boton = document.getElementById("btn");
const error = document.getElementById("error");


boton.addEventListener("click", function () {

    let palabra = window.prompt("Elige una pregunta", "hola");

    let resultado = palabra.trim().toLowerCase()
            .replaceAll("á", "a")
            .replaceAll("é", "e")
            .replaceAll("í", "i")
            .replaceAll("ó", "o")
            .replaceAll("ú", "u");

    let arraypalabra= resultado.split("");

    let contador = 0;
    for (let i = 0; i < arraypalabra.length; i++) {
        if(arraypalabra[i].includes("a") ||
       arraypalabra[i].includes("e") ||
       arraypalabra[i].includes("i") ||
       arraypalabra[i].includes("o") ||
       arraypalabra[i].includes("u")){
        contador++
    }
    }
    console.log("La palabra "+palabra+" contiene "+contador+" vocales")
});