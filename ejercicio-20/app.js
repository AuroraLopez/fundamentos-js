function mayusculasyminusculas(frase){
    let frasemayuscula=frase.toUpperCase();
    let fraseminuscula=frase.toLowerCase();
    console.log("----------------------");
    console.log("| Frase en Mayúsculas |");
    console.log("----------------------");
    console.log(frasemayuscula);
    console.log("----------------------");
    console.log("| Frase en Minúsculas |")
    console.log("----------------------");
    console.log(fraseminuscula)
}

let frase = "Hola como estás";
let frasesinespacio = frase.trim();

console.log("----------------------");
console.log("|   Frase Original   |");
console.log("----------------------");
console.log(frasesinespacio);

mayusculasyminusculas(frasesinespacio);