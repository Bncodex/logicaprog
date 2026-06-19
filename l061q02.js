//Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
//com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.
let sexo;
console.log ("M - Banheiro Masculino à direita")
console.log ("F - Banheiro Feminino à esquerda")

sexo = "f"

switch (sexo) {
    case "M":
    case "m":
        console.log("Você é homem, seu banheiro é à direita");
        break;
    case "F":
    case "f":
        console.log("Você é mulher, seu banheiro é à esquerda")
        break;

}