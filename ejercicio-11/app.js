function azar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let frecuencias = [];

for (let i = 0; i < 100; i++) {

    let numero = azar(1, 20);

    if (frecuencias[numero] === undefined) {
        frecuencias[numero] = 1;
    } else {
        frecuencias[numero]++;
    }
}

// Mostrar únicamente los números que han aparecido
for (let i = 1; i <= 20; i++) {

    if (frecuencias[i] !== undefined) {
        console.log(
            "El número " + i +
            " ha aparecido " + frecuencias[i] + " veces"
        );
    }
}