function mayusculasyminusculas(frase){
    let frasemayuscula=frase.toUpperCase();
    let fraseminuscula=frase.toLowerCase();
    console.log("Frase en Mayúsculas");
    console.log(frasemayuscula);
    console.log("Frase en Minúsculas")
    console.log(fraseminuscula)
}

let frase = "Hola como estás";
let frasesinespacio = frase.trim();

console.log("Frase Original");
console.log(frasesinespacio);
mayusculasyminusculas(frasesinespacio);