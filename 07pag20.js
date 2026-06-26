//Criando e Percorrendo Listas de Objetos

//Tempo estimado: 15 minutos. Realize as tarefas progressivas abaixo no seu editor:

//Crie um array com 3 produtos
//Cada produto deve ter nome (string) e preco (number). Ex:
//Notebook, Mouse, Teclado.

//Acesse o primeiro e o último produto
//Use a notação de índice para exibir o nome de cada um no
//console.

//Percorra a lista com for...of
//Exiba o nome e o preço de cada produto no formato:
//"Produto: Notebook | Preço: R$ 3000"

//Modifique o preço do segundo produto
//Altere o preço usando o índice e exiba a lista novamente
//para confirmar a mudança.

let produtos =[
    { nome: "Notebook", preco: 2100},
    { nome: "Mouse", preco: 100},
    { nome: "Teclado", preco: 300}
];

console.log (produtos[0]);
console.log (produtos[2]);

for (let produto of produtos) {
    console.log (`\n O nome do produto é ${produto.nome} | Preço: R$ ${produto.preco}. `);
}

produtos[1].preco = 50;
console.log (produtos);