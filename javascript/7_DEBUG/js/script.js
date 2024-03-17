// 1 - strict mode
"use strict";

const opa = 'teste';

// no modo strict essas coisas não podem ser feitas
// opa = 'teste';
// const undefined = 10;
// delete [].length;

// 2 - console.log
// let a = 1;
// let b = 2;

// if (a == 1) {
//     a = b + 2;
// }

// console.log(a);

// for (let i = 0; i < b; i++) {
//     a = a + 2;
//     console.log(a);
// }

// if (a > 5) {
//     a = 25;
// }

// console.log(a);

// 3 - debugger
// let c = 3;
// let d = 5;

// if (c == 3) {
//     c = d + 1
// }

// debugger;

// for (let i = 0; i < d; i++) {
//     c = c + 2;
// }

// console.log('Executou o loop');

// debugger;

// if (c > 5) {
//     console.log('c maior');
// }

// debugger;

// 4 - tratamento de dados
// function checkNumber(number) {

//     const result = Number(number);

//     if (Number.isNaN(result)) {
//         console.log('Valor incorreto!');
//         return;
//     }

//     console.log('Valor correto!');
//     return result;
// }

// checkNumber(5);
// checkNumber('5');
// checkNumber({});
// checkNumber('nada haver');

// 5 - exception
// let x = 10;

// if (x != 11) {
//     throw new Error('O x não pode ser diferente de 11');
// }

// 6 -try catch
// try {
//     const soma = x + y;
// } catch (error) {
//     console.log(`Erro no programa ${error}`);
// }

// 7 - finally
// try {
//     const value = checkNumber('asd');

//     if (!value) {
//         throw new Error('Valores invalidos');
//     }
// } catch(error) {
//     console.log(`Opa, aconteceu um problema: ${error}`);
// } finally {
//     console.log('O codigo foi executado');
// }

// 8 - assertions
function checkArray(arr) {

    if (arr.length === 0) {
        throw new Error('O array não pode estar vazio');
    } else {
        console.log(`O array tem ${arr.length} elementos`)
    }
}

checkArray(['pedra', 'areia']);
// checkArray([]);
checkArray(['agua', 'pedra', 'areia']);