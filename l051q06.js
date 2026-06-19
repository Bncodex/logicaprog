//Desenvolver um programa que leia um número n qualquer, menor ou igual a 50 e apresente o valor obtido da
//multiplicação sucessiva de n por 3 enquanto o produto for menor que 250. (n x 3; n x 3 x 3; n x 3 x 3 x 3 etc...).

let n = 10;
let acum = 0;

while (n < 250) {
    console.log(`Os valores da multiplicação sucessiva são: ${n}`)
    n = n * 3

}
