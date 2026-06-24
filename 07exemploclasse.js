
class Pessoa {
    nome; // <-- Objetos
    idade;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    
} // Fim classe pessoa

// Instanciando a classe usando o construtor
let pessoa1 = new Pessoa("Roberto", 52);

console.log (pessoa1);
