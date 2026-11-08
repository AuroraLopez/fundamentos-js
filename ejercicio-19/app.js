function promedio(array) {
    if (array.length === 0) {
        return 0;
    }

    let suma = array.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);

    return suma / array.length;
}

const arrayVacio = [];
const array = [2, 4, 6, 8];

console.log("Promedio del array vacío: " + promedio(arrayVacio));
console.log(array);
console.log("El promedio de este array lleno es: " + promedio(array));