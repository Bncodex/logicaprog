//Reescreva as funções A e B em
//TypeScript, adicionando a anotação
//de tipo : void no retorno. Observe a
//diferença sintática.



function apresentar(): void {
    console.log ("Bem vindo ao curso de Javascript !")
}
apresentar ();


function exibirData(): void {
    console.log (new Date().toLocaleDateString('pt-BR'));
    
}
exibirData();