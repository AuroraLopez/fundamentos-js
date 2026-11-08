let array = [2, 10, 100, 5, 20];

console.log("Array antes de la ordenación")
console.log(array)

array.sort(function(a, b) {
    return a - b;
});

console.log("Array después de la ordenación")
console.log(array);