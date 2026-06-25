//1 - Criar uma função calcularArea(base, altura) que
//retorne a área de um retângulo
//2 -  Criar uma função converterCelsius(temp) que converta
//Celsius para Fahrenheit: (temp * 9/5) + 32
//3 - Criar uma função saudacaoPersonalizada(nome) que
//retorne "Olá, [nome]! Seja bem-vindo."

// Primeira atividade
function calcularArea(base, altura) {
    let area = base * altura
    return area;
    
}
console.log (calcularArea(2, 3)); //Tem que por os valores para poder exibir dentro do calcularArea(Adicionar os valores referente a function).


// Segunda atividade

function converterCelsius(temp) {
    return (temp * 9/5) + 32
}
console.log(`Temperatura de 40 graus celsius convertida em fahrenheit é: ${converterCelsius(40)} Fahrenheit.`)

// Terceira atividade

function saudacaoPersonalizada(nome) {
    return `Olá ${nome}, seja bem vindo(a) !`
}

let nome = "Bernardo"
console.log (saudacaoPersonalizada(nome));// primeiro jeito
console.log (saudacaoPersonalizada("Bernardo")); // Segundo jeito

