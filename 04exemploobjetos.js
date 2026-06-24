let aluno = {
    nome: "João",
    idade: 20, 
    ativo: true
};

console.log (`Nome do aluno: ${aluno.nome}`);
console.log (`Nome do aluno: ${aluno.idade}`);
//Outra forma de fazer seria if(aluno.ativo) console.log ... Funciona assim pois toda condição pergunta se é verdadeiro ou falso, não precisa perguntar se ele é true ou false.
// Outra forma seria também colocando if ( !aluno.ativo)... Pois a exclamação é negação podendo transformar o contexto da condicional como negativa.
if (aluno.ativo === true) { 
} else {
    console.log ("\n Situação: INATIVA");
}

let propriedade = "nome";

console.log (aluno[propriedade]); // João <= outra forma de chamar no objeto (inútil)

console.log (aluno["nome"]); // João <= outra forma de chamar no objeto (inútil)

let produto = {
    nome: "Notebook",
    preco: 9200
}
console.log ( produto)
// modicação do preço notebook como funciona

produto.preco = 8600
console.log ( produto)

// Adicionar uma nova propriedade ( chave )
produto.estoque = 15
console.log (produto)