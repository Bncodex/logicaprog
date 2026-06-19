//Desenvolver um programa que pergunte um valor numérico inteiro e faça a exibição desse valor caso seja
//divisível por 4 e 5. Não sendo divisível por 4 e 5, o programa deverá exibir a mensagem “Valor não é divisível por
//4 e 5”.

let numint, resto4, resto5;

console.log ("Insira um número inteiro: ")
numint = 40

resto4 = numint % 4;
resto5 = numint % 5;

if (resto4 === 0 && resto5 === 0) {
    console.log(`O valor ${numint} é divisível por 4 e 5 !`)

} else {
    console.log ("O valor não é divisível por 4 e 5 !")
}


