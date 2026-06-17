//Desenvolver um programa que permita ao aluno responder qual a capital do Brasil. O programa deverá exibir se
//a resposta está certa ou errada.

let capital;

console.log ("Responda qual a capital do Brasil: ")
capital = "Rio de janeiro"

if (capital == "Brasília"){
    console.log (`Correto ! A capital do Brasil é ${capital}`)
} else { 
    console.log (`Errado ! A capital do Brasil não é ${capital}. Tente novamente.`)
}