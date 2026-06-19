//Desenvolver um programa que apresente os resultados de uma tabuada de um número n qualquer a ser
//perguntado ao usuário (n x 1, n x 2, n x 3, ... , n x 9, n x 10)

let i;
let cont = 0;
let mult;
console.log("Insira um número: ")

i = 4;

do {
    mult = i * cont;
    console.log(`${i} x ${cont} = ${mult}`)
    cont = cont + 1
} while ( cont <= 10);