function mayoresQue(array, limite) {

    let arrayfiltrado = array.filter(numero => numero > limite);

    return arrayfiltrado;
}

let array = [2, 5, 8, 10, 15, 20];
let limite = 10;

let resultado = mayoresQue(array, limite);

console.log("Array original: " + array);
console.log("Valor límite: " + limite);
console.log("Números mayores que el límite: " + resultado);