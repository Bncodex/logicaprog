//Desenvolver um programa que pergunte um número de 1 a 12, e responda o mês correspondente ao número,
//ou se o número não corresponde a nenhum dos 12 meses.

let num;

console.log ("\n Meses do ano: ")
console.log ("1 - Janeiro")
console.log ("2 - Fevereiro")
console.log ("3 - Março")
console.log ("4 - Abril")
console.log ("5 - Maio")
console.log ("6 - Junho")
console.log ("7 - Julho")
console.log ("8 - Agosto")
console.log ("9 - Setembro")
console.log ("10 - Outubro")
console.log ("11 - Novembro")
console.log ("12 - Dezembro")

num = 15;
console.log (`Mês escolhido: ${num}`)

switch (num) {
    default:
        console.log ("\n NÚMERO INVÁLIDO")
        break
    case 1:
        console.log ("Você selecionou JANEIRO");
        break
    case 2:
        console.log ("Você selecionou FEVEREIRO")
        break
    case 3:
        console.log ("Você selecionou MARÇO")
        break
    case 4:
        console.log ("Você selecionou ABRIL")
        break
    case 5:
        console.log ("Você selecionou MAIO")
        break
    case 6:
        console.log ("Você selecionou JUNHO")
        break
    case 7:
        console.log ("Você selecionou JULHO")
        break
    case 8:
        console.log ("Você selecionou AGOSTO")
        break
    case 9:
        console.log ("Você selecionou SETEMBRO")
        break
    case 10:
        console.log ("Você selecionou OUTUBRO")
        break
    case 11:
        console.log ("Você selecionou NOVEMBRO")
        break
    case 12:
        console.log ("Você selecionou DEZEMBRO")
        break
 
}

