// 1 - metodos
// const animal = {
//     nome: "Thor",
//     latir: function() {
//         console.log("au au");
//     }
// }

// console.log(animal.nome);
// animal.latir();

// 2 - aprofundando em métodos
// const pessoa = {
//     nome: "Alessandro",
//     nome2: "Laudo",

//     getNome: function() {
//         return this.nome;
//     },

//     getNome2: function() {
//         return this.nome2;
//     },

//     setNome: function(Novonome) {
//         this.nome2 = Novonome;
//     }
// }

// console.log(pessoa.nome);
// console.log(pessoa.getNome());
// console.log(pessoa.nome2);

// pessoa.setNome("Matheus");
// console.log(pessoa.getNome2());

// 3 - prototypes
// const text = "qualquer";
// console.log(Object.getPrototypeOf(text));

// const bool = false;
// console.log(Object.getPrototypeOf(bool));

// const arr = [];
// console.log(Object.getPrototypeOf(arr));

// const number = 12;
// console.log(Object.getPrototypeOf(number));

// 4 - mais sobre prototype
// const object = {
//     a: "b",
// }

// console.log(Object.getPrototypeOf(object));

// console.log(Object.getPrototypeOf(object) === Object.prototype);

// const secondObject = Object.create(object);

// console.log(secondObject.a);

// 5 - classes basicas
// const cachorro = {
//     raca: null,
//     patas: 4,
// }

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);
// console.log(pastorAlemao.patas);

// const bulldog = Object.create(cachorro);

// bulldog.raca = "Bulldog";

// console.log(bulldog);
// console.log(bulldog.patas);

// 6 - funções construtoras
// function criarCachorro(nome, raca) {
//     const cachorro = Object.create({});

//     cachorro.nome = nome;
//     cachorro.raca = raca;

//     return cachorro;
// }

// const marlon = criarCachorro("marlon", "Golden Retrieves");

// const bob = criarCachorro("bob", "Vira-Lata Caramelo");

// console.log(marlon);
// console.log(bob);

// console.log(Object.getPrototypeOf(marlon));

// 7 - funções como classe
// function Cachorro(nome, raca) {
//     this.nome = nome;
//     this.raca = raca;
// }

// const husky = new Cachorro("Ozzy", "Husky");
// console.log(husky);

// // 8 - metodos na função construtora
// Cachorro.prototype.uivar = function() {
//     console.log("Auuuu!");
// }

// husky.uivar();

// console.log(Cachorro.prototype);

// 9 - classes ES6
class Cachorro {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new Cachorro("Jeff", "Labrador");

console.log(jeff);

// 10 - mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhao tem ${this.eixos} e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, 'Amarelo');

console.log(scania);

scania.descreverCaminhao();

// 11 - override
class Humano {
    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apressentar() {
        console.log(`Meu nome é ${this.nome}, e tenho ${this.idade} anos`);
    }
}

const rafael = new Humano('Rafael', 23);
console.log(rafael);

Humano.prototype.idade = "Não definida";

console.log(rafael.idade);
console.log(Humano.prototype.idade);

rafael.apressentar();

// 12 - symbol
// class Aviao {
//     constructor(marca, turbinas) {
//         this.marca = marca
//         this.turbinas = turbinas
//     }
// }

// const asas = Symbol()

// Aviao.prototype[asas] = 2

// const boeing = new Aviao("Boeing", 2);

// console.log(boeing);
// console.log(boeing[asas]);

// 12 - getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return `Voce está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArrays = tags.split(", ")
        this.tags = tagsArrays
    }
}

const myPost = new Post('Programar com PHP', 'O inicio da programação pode ser...');

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = 'Programação, PHP, JavaScript'

console.log(myPost);

// 13 - herança
class Mamiferos {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamiferos {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const norm = new Lobo(4, 'Norm');

console.log(norm);

// 14 - instanceof
console.log(norm instanceof Lobo);

console.log(Lobo instanceof Mamiferos);