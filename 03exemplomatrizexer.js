let numeros = [10, 25, 37, 42, 58];

for (let num = 0; num < numeros.length; num++) {
    console.log (numeros [num]);
}

for (let num of numeros) {
    console.log (num);
}

numeros.forEach((num, i) => {
    console.log (`Posição ${i}: ${num}`);
});