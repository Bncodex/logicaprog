// Desenvolver um programa que apresente os resultados de uma 
// tabuada de um número qualquer informado
//pelo usuário.

let acum = 0;
let n = 8;
let mult;
console.log(`O número escolhido foi: ${n}`)
for (n; acum <= 10 ; acum++) {
    mult = n * acum
    console.log (`A tabuada de ${n} x ${acum} é: ${mult}`)
}
