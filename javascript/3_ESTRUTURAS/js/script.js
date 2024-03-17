// 1 - variaveis
// let nome = "Alessandro";

// console.log(nome);

// nome = "Alessandro de Souza";

// console.log(nome);

const idade = 22;

console.log(idade);
// const = uma variavel que não muda
// let = uma variavel que muda

// 2 - mais variaveis

// let 2teste = 'invalido';
// let @teste = 'invalido';

let a = 10,
    b = 20,
    c = 30;

console.log(a, b, c);

const nomeCompleto = "Alessandro de Souza";

const nomecompleto = "Thamara de Fatima";

console.log(nomeCompleto);
console.log(nomecompleto);

let _teste = 'ok';

let $teste = 'ok';

console.log(_teste, $teste)

// 3 - prompt
// const age = prompt('Digite sua idade');

// console.log(`sua idade é ${age}`);

// 4 - alert
// alert(`seu nome é ${nomecompleto}`);

// 5 - Math
console.log(Math.max(5, 2, 6, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - console
console.log("testando!");

console.error("testando!");

console.warn("testando!");

// Estrutura de controle

// 7 - If
const number = 25;

if(number >= 21) {
    console.log(`${number} é maior que 21.`)
}

const user = "Alessandro";

if(user === 'Alessandro') {
    console.log(`Bem vindo ${user}`);
}

// 8 - Else
if(number <= 21) {
    console.log(`${number} é menor que 21.`)
} else {
    
    console.log(`${number} é maior que 21.`)
}

// 9 - Else if
if (1 > 2) {
    console.log('teste 1');
} else if (2 > 3) {
    console.log('teste 2');
} else if (5 > 1) {
    console.log('agora sim foi');
}

// 10 - while
let p = 0

while(p <= 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// loop infinito
// let p = 0
// while(p <= 5) {
//     console.log(`Repetindo ${p}`);
// }

// 11 - do while
let o = 10;

do {
    console.log(`Valor de o: ${o}`);
    o--;
} while (o >= 1);

// 12 - for
for(let t = 0; t < 10; t++) {
    console.log("Repetindo algo...");
}

// 13 - break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é : ${g}`);
    if(g === 15) {
        console.log("O g é 15");
        break;
    }
}

// 14 - continue
for (let s = 0; s <= 10; s = s + 1) {
    // operador resto %
    if (s % 2 === 0) {
        console.log("Numero par!");
        continue;
    }

    console.log(s);
}

// 15 - switch
const job = "Programador";

switch(job) {
    case "Programador":
        console.log("Voce é um Programador");
        break;
    case "Advogado":
        console.log("Voce é um Advogado");
        break;
    case "Engenheiro":
        console.log("Voce é um Engenheiro");
        break;
    default:
        console.log("Profissão não encontrada");
}