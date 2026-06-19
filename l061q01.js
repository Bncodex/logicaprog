/*
Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostre
como resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe no
menu de opções.
*/
let cod;

console.log ("\n Menu de opções: ")
console.log ("1 - incluir")
console.log ("2 - alterar ")
console.log ("3 - excluir ")
console.log ("4 - pesquisar ")
console.log ("5 - sair ")
console.log ("Informe o que deseja: ")

cod = 6;
console.log (`Código inserido: ${cod}`)

switch (cod) {
    case 1:
        console.log ("Você selecionou: 1 - Incluir");
        break;
    case 2:
        console.log ("Você selecion: 2 - alterar");
        break;
    case 3:
        console.log ("Você selecionou: 3 - excluir");
        break;
    case 4:
        console.log ("Você selecionou: 4 - pesquisar");
        break;
    case 5:
        console.log ("Você selecionou: 5 - sair");
        break;
    default:
        console.log ("Você inseriu um número inválido, adicione um número válido !");
        break;
}
