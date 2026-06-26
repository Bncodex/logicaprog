// Desenvolver um programa que pergunte cinco elementos de um vetor a. 
// No final, apresente a soma de todos os
//elementos deste vetor.

let a = [3, 5, 6, 1, 9];

console.log ("Os 5 valores do vetores são", a);

let acum = 0;

for (let cont = 0; cont < 5; cont++) {
    soma = a[cont]
    acum = acum + soma;
    
}

console.log (`A soma dos valores é ${acum} `);