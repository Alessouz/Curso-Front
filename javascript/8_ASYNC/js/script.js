// 1 - setTimeout
// console.log('Ainda não executou');

// setTimeout(function () {
//     console.log('Requisiçao assincrona');
// }, 2000);

// console.log('Ainda não executou 2');

// 2 - setInterval
// console.log('Ainda não começou');

// setInterval(function () {
//     console.log('Intervalo assincrona');
// }, 3000);

// console.log('Ainda não começou 2');

// 3 - promises
// const promessa = Promise.resolve(5 + 5);

// console.log('Algum codigo');

// promessa.then(value => {
//     console.log(`A soma é ${value}`);
//     return value;
// })
//     .then((value) => value - 1)
//     .then((value) => console.log(`Agora é ${value}`));

// console.log('Outro codigo');

// 4 - falha na promise
// Promise.resolve(4 * 'asd')
// .then((number) => {
//     if(Number.isNaN(number)) {
//         throw new Error ('Valores invalidos');
//     }
// })
// .catch((error) => console.log(`Ocorreu um ${error}`));

// 5 - rejeitando promises
// function checkNumber(number) {
//     return new Promise((resolve, reject) => {

//         if (number > 10) {
//             resolve('O numero é maior que 10');
//         } else {
//             reject(new Error('O numero muito baixo'));
//         }
//     })
// }

// const number1 = checkNumber(20);
// const number2 = checkNumber(10);

// number1.then((v) => console.log(`O resultado é ${v}`)).cacth((error) =>
//     console.log(`Um erro ocorreu ${error}`));

// 6 - resolvendo várias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 2000)
})

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject('Error!');
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - async functions
async function somaDelay(a, b) {
    return a + b;
}

somaDelay(5, 3).then((value) => {
    console.log(`O valor da soma é ${value}`);
})

// 8 - await
function resolveDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolveu a Promise')
        }, 2000);
    })
}

async function chamadaAsync() {
    console.log('Chamando a Promise, e esperando o resultado')
    const result = await resolveDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// 9 - generators
function* generator() {
    yield 1;
    yield 2;
    yield 'pode isso?';
}

const gen = generator()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);