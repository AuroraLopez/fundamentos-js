function promedio(array) {

    if (array.length === 0) {
        return 0;
    }

    let suma = array.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);

    return suma / array.length;
}

let array = [2, 4, 6, 8];

console.log("El promedio es: " + promedio(array));