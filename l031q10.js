//Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, utilizando a fórmula prestação =
//valor + (valor x (taxa : 100) x tempo em dias).

let valor, taxa, tempo, cal;

console.log ("Digite o valor da prestação atrasada: ")
valor = 225
console.log (valor)

console.log ("Digite a porcentagem da taxa: ")
taxa = 13
console.log (taxa)

console.log ("Digite quantos dias em atraso: ")
tempo = 20;
console.log (tempo)


cal = valor + (taxa * (taxa/100) * tempo)

console.log (`O cálculo do valor da prestação em atraso fica em ${cal.toFixed(2)} R$`)