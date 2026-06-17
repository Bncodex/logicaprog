//Fazer um programa que pergunte o salário de um 
// funcionário e apresente este salário com um aumento de 15%.

let salario, acrescimo, resultado;

console.log ("Informe o seu salário: ")
salario = 4125.00;

acrescimo = salario * 15/100;

resultado = salario + acrescimo;

console.log (`O acrescimo do salário é: ${resultado.toFixed(1)}`);
