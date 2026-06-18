//Desenvolver um programa que apresente no final a soma dos valores pares existentes 
// na faixa de 0 até 500.
//Utilize um laço que varie de 2 em 2.

let i = 0;
let acum = 0;

do {
    acum += i; // acum = acum + i;
    i += 2;  // cont = cont + 2;

} while (i <= 500);

console.log(`O valor da soma dos valores pares de 0 a 500 é: ${acum}`)
