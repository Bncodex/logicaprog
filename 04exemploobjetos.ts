let aluno: {nome: string; idade: number; ativo: boolean} = {
    nome: "João",
    idade: 20, 
    ativo: true
};

console.log (`Nome do aluno: ${aluno.nome}`);
console.log (`Nome do aluno: ${aluno.idade}`);
//Outra forma de fazer seria if(aluno.ativo) console.log ... Funciona assim pois toda condição pergunta se é verdadeiro ou falso, não precisa perguntar se ele é true ou false.
// Outra forma seria também colocando if ( !aluno.ativo)... Pois a exclamação é negação podendo transformar o contexto da condicional como negativa.
if (aluno.ativo) { 
    console.log (`\n situação: ATIVA`)
} else {
    console.log ("\n Situação: INATIVA");
}