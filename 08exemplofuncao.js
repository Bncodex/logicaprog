function somar(a, b) {
    return a + b;

}
console.log (direcionador) 
console.log (somar(4, 7));

// Essa função pode ser chamada em qualquer lugar. O computador deixa guardado na memória e depois executa, ou seja, pode ser chamado em qualquer lugar.
function direcionador() {
    console.log ("Não desista siga em frente !");    
}

// Função sem return (Função Void)
let texto = direcionador();
console.log ( texto );

function mensagem() {
    return "Amem mais, briguem menos !";
}

//Chamandi a função mensagem

mensagem(); // Perdi o retorno da função
console.log(mensagem());

//Chamando função direcionador
direcionador();
direcionador();




let cont; //variavel global.

for (let cont = 0; cont < 3; cont++) {
   console.log(cont);
    
}
direcionador();
direcionador();


function tudao() {
    console.log ("Função Tudão");
    direcionador();
    calc = somar (5, 7);
    console.log (`resultado da soma ${calc}`)
    direcionador();
    mensagem();
    console.log ("Mensagem do Dia é: Dinheiro");
    console.log ("Fim da função tudão !");
}

tudao();