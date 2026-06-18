//Desenvolver um programa que apresente o valor da soma dos cem primeiros números inteiros (1 + 2 + 3 + 4 + ...
//+ 97 + 98 + 99 + 100)

let i = 1;
let acum = 0; // <-- acumulador começa como 0 pra contas de soma e subtração


while (i <=100) { // While é baseado no contador
    acum = acum + i;
    i= i+1;

}

console.log (`A soma dos valores da ${acum}`);