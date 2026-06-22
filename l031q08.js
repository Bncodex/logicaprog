//8) Fazer um programa que calcule e apresente a quantidade de litros que um automóvel gastará em uma viagem. O
//programa deve coletar as seguintes informações: Distância a percorrer na viagem, em quilômetros; qual é o
//valor do consumo médio do automóvel, em quilômetros por litro.

let dist, km, cons;

console.log ("Informe a distância percorrida na viagem (km): ")
dist = 400;
console.log(dist)

console.log ("Informe o consumo médio de gasolina (km/L): ")
km = 20;
console.log(km)


cons = dist / km

console.log(`Com a distância percorrida de ${dist}Km e o consumo de ${km}KM/L, o consumo média da viagem foi ${cons}Km/L.`)