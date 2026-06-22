// Desenvolver um programa que apresente o total da soma dos cinco primeiros números inteiros.

let i = 1; // <-- Contador
let acum = 0; // <-- Acumulador (função dele é acumular o contador para saber em qual contagem está para que ele não se perca)

do {

    acum = acum + i
    i++

} while ( i <= 5);

console.log (`A soma dos valores dos 5 primeiros números inteiros são: ${acum}.`)