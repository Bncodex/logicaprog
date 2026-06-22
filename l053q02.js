//Desenvolver um programa que apresente o total da soma de n números
//  inteiros do número 1 até n, onde n é um
//valor informado pelo usuário.
let acum= 0; // <-- Acumulador
n = 5; // <-- N é o número informado pelo usuário
for (let i = 1; i <= n ; i++ ) { // For informando o contador, até aonde o contador tem que ir (N) e a soma desse contador.
    acum = acum + i; // O acumulador usado para acumular os numeros do contador para que ele consiga para até aonde o usuário pediu (N).
    
    
}
console.log (`O valor das somas dos números inteiros é ${acum}`)