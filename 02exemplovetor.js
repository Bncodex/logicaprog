//vetores


let alunos = ["Ana", "Bruno", "Carlos", "Diana"];
console.log(alunos[3]); //Diana
console.log (alunos[2]); // Carlos

// Notas teste arrays
let notas = [10, 3, 5, 4];


// Vetor de números
let num = [25, 27, 36, 41, 25, 96, -63, -2, 12, -99]
console.log (num)

alunos[2] = "Antonio";
console.log (alunos[2]) // Vetor no indice 2 mas com a variiavel trocada para antonio.

for (let cont = 0; cont < 4; cont++) {
    console.log (`O aluno(a) ${cont + 1} com o nome: ${alunos[cont]}`);
}

// Exibir notas testes  

console.log (notas[2])

// For para percorrer índice de 2 vetores (arrays)

for (let cont = 0; cont < 4 ; cont ++) {
    console.log (`Nome: ${alunos[cont]} - Nota (${notas[cont]}) `)
}

console.log (alunos.length) // Tamanho dos vetores : 4
//Exemplo for clássico.
for (let cont = 0; cont < alunos.length; cont++) { // Pode usar o lenght dentro do FOR para que não precise se preocupar com alterações lá em cima na array.
    console.log (`Aluno(a): ${alunos[cont]} conseguiu a nota ${notas[cont]}`)
}

// Exemplo com For OF

for (let aluno of alunos) {
    console.log (`Alunos: ${aluno}`);
}


// Exemplo com ForEach

alunos.forEach(function(aluno, indice)
{console.log (indice + ": " + aluno)}
);

// Metodo push, unshift (inserção e remoção)

// Push() é usado para adicionar ao final e o unshift() usado para adicionar ao início.
// Pop() remova ao final da array e o shift() remove ao inicio.
alunos.push("Raimundo");
console.log (alunos);

alunos.pop();
console.log (alunos);

alunos.unshift("Raimundo");
console.log (alunos);

alunos.shift();
console.log (alunos);

// console log do vetores de numeros test
console.log (num)

num.sort((a , b) => a - b) // Ordem crescente a - b
console.log (num)

num.sort ((a, b) => b - a) // ordem decrescente b - a
console.log (num)