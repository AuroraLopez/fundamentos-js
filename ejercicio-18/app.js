function palabraMasLarga(frase) {

    let arrayfrase = frase.split(" ");

    let palabraLarga = arrayfrase[0];

    for (let i = 1; i < arrayfrase.length; i++) {

        if (arrayfrase[i].length > palabraLarga.length) {
            palabraLarga = arrayfrase[i];
        }
    }

    return palabraLarga;
}

let frase = "Hola me llamo Aurora y vivo en la fuente";

let resultado = palabraMasLarga(frase);

console.log("La palabra más larga es: " + resultado);
console.log("Su longitud es: " + resultado.length);