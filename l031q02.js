// Elaborar um programa que pergunte o nome do usuário, quatro valores inteiros e apresente 2 resultados:
// a) Resultado de suas adições
// b) Resultado de suas multiplicações
// Exibir, ao início uma saudação para o usuário.

// entrada dos dados

let nome;
let num1, num2, num3, num4;
let soma, mult;

console.log("Digite o seu nome: ");
nome = "Be";

console.log ("Informe o primeiro valor: ");
num1 = 4;

console.log ("Informe o segundo valor: ");
num2 = 5;

console.log ("Informe o terceiro valor: ");
num3 = 2;

console.log ("Informe o quarto valor: ");
num4 = 6;

soma = num1 + num2 + num3 + num4;
console.log("A soma dos 4 valores inseridos é: "+soma);

mult = num1 * num2 * num3 * num4; 
console.log(`A multiplicação dos 4 valores inseridos é: ${mult}`);
console.log(`O valor da multiplicação dos 4 números é: ${num1} x ${num2} x ${num3} x ${num4} = ${mult}`)