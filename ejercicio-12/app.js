function filtradopares(array){
    const resultado= array.filter((elemento) => elemento%2==0);
    return resultado;
}

const array=[1,2,3,4,5,6]
console.log(array)
console.log(filtradopares(array));