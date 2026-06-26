class Carro {
    marca;
    modelo;
    ano;


    constructor (marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibrDetalhes() {
        console.log ("\n Detalhes do carro ")
        console.log (`Marca: ${this.marca}. `)
        console.log (`Modelo: ${this.modelo}. `)
        console.log (`Ano: ${this.ano}. `)

    }

}

let carro1 = new Carro ("Fiat", "Argo", 2021);
let carro2 = new Carro ("Ferrari", "Puro Sangue", 2025);
let carro3 = new Carro ("Fox", "Polo", 2014);

carro1.exibrDetalhes();
carro2.exibrDetalhes();


