// Hacemos el array con números aleatorios
let array100 = [];
for (i = 0; i < 100; i++) {
    array100.push(Math.floor(Math.random() * (100 - 1) + 1));
}
console.log("-------------------------------")
console.log("Array de 100 valores aleatorios")
console.log("-------------------------------")
console.table(array100);

// Creamos en el Array Filtrado
const limitemenor = 10;
const limitemayor = 20;

let arrayfiltrado = array100.filter(a => a >= limitemenor && a <=limitemayor);
console.log("-------------------------------")
console.log(" Array de valores entre 10 y 20")
console.log("-------------------------------")
console.table(arrayfiltrado);