// 1 - criando uma função
function criandoFuncao() {
    console.log("minha primeira função em vanilla js");
}

criandoFuncao();

const minhaFuncaoEmVariavel = function() {
    console.log("Função em variavel");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`${txt}`);
}

funcaoComParametro('Imprimindo com parametro');

// 2 - return
const a = 10;
const b = 20;
const c = 45;
const d = 8;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, c);
console.log(resultado);

console.log(soma(b, d));

// 3 - escopo das funções
let y = 10;

function escopoFuncao() {
    let y = 25;
    console.log(`o y dentro da função e ${y}`);
}

console.log(`o y fora da função é ${y}`);
escopoFuncao();

// 4 - escopo aninhado
let m = 10;

function escopoAninhado() {
    if (true) {
        let m = 20;

        if (true) {
            let m = 30;

            if (true) {
                let m = 40;

                console.log(m);
            }

            console.log(m);
        }

        console.log(m);
    }
}

escopoAninhado();
console.log(m);

// 5 - arrow function
const testeArrow = () => {
    console.log("Esta é uma arrow function");
}

const parImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par");
        return;
    }

    console.log("Impar");
}

parImpar(5);

parImpar(10);

// 6 - mais sobre arrowFunction
const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));

console.log(raizQuadrada2(12));

const helloWorld = () => console.log("Hello World");

helloWorld();

// 7 - parametro opcional
const multiplicacao = function(m, n) {
    if (n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
};

console.log(multiplicacao(5));

console.log(multiplicacao(4, 2));

const greeting = (name) => {
    if (!name) {
        console.log("Olá");
        return;
    }

    console.log(`Olá, ${name}`);
}

greeting();

greeting('Alessandro');

greeting("Thamara");

// 8 - valor default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}`;
}

console.log(customGreeting("Matheus"));

console.log(customGreeting("Alessandro", "Bom dia"));

// 9 - closure

function someFunction() {
    let txt = "Todo mundo tem...";

    function display() {
        console.log(txt);
    }

    display();
}

someFunction();

// 10 - mais sobre closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);

console.log(c2);

console.log(c2(5));

console.log(c2(10));

// 11 - recursão
const untilTen = (n, m) => {
    if (n < 10) {
        console.log("A função parou de executar!");
    } else {
        const x = n - m;

        console.log(x);
        untilTen(x, m)
    }
};

untilTen(1000, 7)

//infinite recursion
// function run() {
//     console.log("Executando...");
//     run();
// }

function fatorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * fatorial(x - 1);
    }
}

const num = 6;

const result = fatorial(num);

console.log(`O fatorial do número ${num} é ${result}`)