// material 07 pág 16 testes

let alunos = [
    { nome: "Ana", idade: 41, ativo: true},
    { nome: "Bernardo", idade: 22, ativo: false},
    { nome: "Nayra", idade: 19, ativo:false}
];

console.log (alunos);

// acessando pelo indice e propriedade

console.log (`Nome da primeira aluno é: ${alunos[0].nome}`)
console.log (`Todos os dados do primeiro aluno: ${alunos[0].nome} a sua idade é ${alunos[0].idade} e o sua matrícula é ${alunos[0].ativo}`)


// percorrendo com o for clássico

for ( let cont = 0; cont < alunos.length; cont++) {
    console.log (` Nome: ${alunos[cont].nome}`);
    console.log (` Nome: ${alunos[cont].idade}`);
    console.log (` Nome: ${alunos[cont].ativo} \n`);
};

for (let aluno of alunos) {
    console.log (`nome: ${aluno.nome}`);
    console.log (`idade: ${aluno.idade}`);
    console.log (`verificação de ativo no sistema: ${aluno.ativo} \n`);
}