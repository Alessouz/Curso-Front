// // 1 - arrays
// const fruta = ['abacaxi', 'banana', 'caqui', 'uva', 'maça'];
// const list = [1, 2, 3, 4, 5];

// console.log(fruta);

// console.log(list);

// console.log(typeof(list));

// // 2 - propriedades
// const numbers = [1, 2, 3, 4, 5];
// const name = "Alessandro";

// console.log(numbers.length);

// console.log(numbers["length"]);

// console.log(name.length);

// console.log(numbers[3]);

// // 3 - metodos
// const otherNumbers = [6, 7, 8, 9, 10];
// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "texto aleatorio";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("x"));

// // 4 - objetos
// const person = {
//     name: "Alessandro",
//     age: 22,
//     job: "Programador"
// };

// console.log(person);

// console.log(person.job);

// console.log(person.job.length);

// console.log(typeof person);

// 5 - Criando e deletando propriedades
// const carro = {
//     motor: 1.0,
//     modelo: "celta",
//     km: 10000,
//     marcha: "manual"
// }

// console.log(carro);

// carro.portas = 4; // adicionar

// console.log(carro);

// delete carro.portas; // deletar

// console.log(carro);

// //6 - mais sobre objeto
// const object = {
//     a: "teste",
//     b: true,
// };

// console.log(object instanceof Object);

// const object2 = {
//     c: [],
// };

// Object.assign(object2, object); // serve mais ou menos para copiar de um objeto e colocar em outro

// console.log(object2);

// // 7- conhecendo melhor os objetos
// console.log(Object.keys(object));
// console.log(Object.entries(object));

// console.log(Object.keys(carro));
// console.log(Object.entries(carro));

// 8 - mutação
// const a = {
//     nome: "Alessando"
// }

// const b = a;

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 22;

// console.log(b);
// console.log(a);

// delete b.age;

// console.log(b);
// console.log(a);

// 9 -loop em arrays
// const users = ["Alessandro", "Thamara", "Pedro", "Matheus"];

// for (let i = 0; i < users.length; i++) {
//     console.log(`Listando o usuário: ${users[i]}`)
// }

// 10 - push e pop
// const array = ['a', 'b', 'c'];

// array.push('d');
// console.log(array);

// console.log(array.length);

// array.pop();

// console.log(array);

// const itemRemovido = array.pop();

// console.log(itemRemovido);
// console.log(array);

// array.push('v', 'x', 'z');
// console.log(array);

// 11 - shift e unshift
// const letters = ['a', 'b', 'c'];

// const letter = letters.shift();

// console.log(letter);

// console.log(letters);

// letters.unshift('d', 'e', 'f');

// letters.unshift('z');

// console.log(letters);

// 12 - indexOF e lastIndexOF
// const fruits = ['Morango', 'Maçã', 'Pera', 'Abacaxi', 'Uva'];

// console.log(fruits.indexOf('Uva'));

// console.log(fruits[3]);
// console.log(fruits[fruits.indexOf('Abacaxi')]);

// console.log(fruits.lastIndexOf('Maçã'));

// console.log(fruits.indexOf('Mamão'));

// 13 - slice
// const testSlice = ['a', 'b', 'c', 'd', 'e', 'f'];

// const subArray = testSlice.slice(2, 4);

// console.log(subArray);

// console.log(testSlice);

// const subArray2 = testSlice.slice(2, 4 + 1);
// console.log(subArray2);

// const subArray3 = testSlice.slice(2);
// console.log(subArray3);

// 14 - foreach
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// nums.forEach((numero) => {
//     console.log(`O numero é ${numero}`);
// });

// const posts = [
//     {title: "Primeiro post", category: "PHP"},
//     {title: "Segundo post", category: "JavaScript"},
//     {title: "Terceiro post", category: "React"},
// ];

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`);
// });

// 15 - includes
// const brands = ['Fiat', 'BMW', 'Chevrolet'];

// console.log(brands.includes('Fiat'));
// console.log(brands.includes('VW'));

// if (brands.includes("Fiat")) {
//     console.log('Existem carros da Fiat no estoque!');
// }

// 16 - reverse
// const reverseTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// reverseTest.reverse();

// console.log(reverseTest);

// 17 - trim
// const trimTest = " testando \n  ";
// console.log(trimTest);

// console.log(trimTest.trim());

// console.log(trimTest.length);

// console.log(trimTest.trim().length);

// 18 - padstart
// const testePadStart = "1";

// const newNumber = testePadStart.padStart(4, "0");

// console.log(testePadStart);
// console.log(newNumber);

// const testePadEnd = "1";

// const newNumber2 = testePadEnd.padEnd(4, "0");

// console.log(testePadEnd);
// console.log(newNumber2);

// 19 - split
// const frase = "O rato roeu a roupa do rei de Roma";

// const arrayFrase = frase.split(" ");

// console.log(arrayFrase);

// 20 - join
// const fraseDeNovo = arrayFrase.join(" ");
// console.log(fraseDeNovo);

// const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

// const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;
// console.log(fraseDeCompra);

// 21 - repeat
// const repeat = "PHP ";

// console.log(repeat.repeat(5));

// 22- rest operator
// const somaInfinita = (...args) => {

//     let total = 0;

//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }

//     return total;
// }

// console.log(somaInfinita(1, 2, 3, 4));

// console.log(somaInfinita(10, 50, 140, 3));

// 23 estrutura for of
// const somaInfinita2 = (...args) => {

//     let total = 0;

//     for(num of args) {
//         total += num
//     }

//     return total;
// }

// console.log(somaInfinita2(1, 2, 3, 4));

// console.log(somaInfinita2(10, 50, 140, 3));

// 24 - destructuring em objetos
// const personDetails = {
//     name: "Alessandro",
//     age: 22,
//     job: "Programador"
// };

// const {name, age, job} = personDetails;

// console.log(name, age, job);

// // renomear variaveis
// const {name: nome} = personDetails;

// console.log(nome);

// 25 - Destructuring em arrays
// const myList = ["aviao", "carro", "submario", "caminhão"];

// const [veiculoA, veiculoB, veiculoC, veiculoD] = myList;

// console.log(veiculoA, veiculoB, veiculoD)

// 26 - conhecendo o JSON
// const Json = '{"name": "Alessandro", "age": 22, "skills": ["PHP", "Javascript", "React", "Python"]}';

// console.log(Json);
// console.log(typeof Json);

// // 27 - conversão de JSON
// const myObject = JSON.parse(Json);

// console.log(myObject);
// console.log(typeof myObject);

// // Json invalido
// const badJson = '{"name": Alessandro, "age": 31';

// const myBadJson = JSON.parse(badJson);

// myObject.isOpenToWork = true;

// console.log(myObject);

// const myNewJson = JSON.stringify(myObject);
// console.log(myNewJson);