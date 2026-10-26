function numeromaximo (array){
    let numeromax = Math.max(...array)
    return numeromax
}

let array = [1,2,3,4,5]

console.log("El número máximo del array es: "+numeromaximo(array))

let arrayNegativos = [-10, -5, -20, -3, -8];

console.log(
    "El número máximo del array de negativos es: " +
    numeromaximo(arrayNegativos)
);