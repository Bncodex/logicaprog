//Elaborar um programa que apresente no final a soma dos valores pares existentes na faixa de 0 até 500. Utilize
//um laço que efetue a variação de 2 em 2.

let i = 0; // contador --> Já que a questão pede começando do zero
let acum = 0; // acumuladir --> vai acumular os valores do contador.

while ( i <= 500) {
    acum = acum + i; // acumulador no processamento de dados > Usado para fazer o acumulo do contador
    i = i + 2; // O cálculo do contador depois de ser processado no acumulador, para a soma dos números pares e o cálculo ficar correto.
}
console.log (`A soma dos número pares de 0 a 500 é: ${acum}`);