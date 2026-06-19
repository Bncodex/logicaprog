//Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
//qualquer, ou seja, de Be
//onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().


let b, e;
let acum = 1;
console.log ("O valor da base é 5");
b = 5;

console.log ("O valor do expoente é 3");
e = 3;


for (let cont = 1; cont <= e; cont ++) {
    acum = acum * b
}

console.log (`o resultado de ${b} elevado a ${e} é: ${acum}`)