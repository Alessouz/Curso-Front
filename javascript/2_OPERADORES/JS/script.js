// 1 - number
console.log(typeof(2));

console.log(typeof(-3));

console.log(typeof(5.7));

// 2 - aritmerica
console.log(2 + 3);

console.log(4 - 3);

console.log(4 * 3);

console.log(4 / 2);

console.log((4 / 2) + 5 *3);

// 3 - special number
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(typeof NaN);

console.log(12 * 'texto');

// 4 - string
console.log(typeof('example'));

console.log(typeof("exemplo"));

console.log(typeof(`exemplo`));
// pode ser usar aspas simples, aspas duplas e crase

// para pular uma linha usa o \n
// exemplo console.log("testando um \n texto com duas linhas")
console.log("testando um \ntexto com duas linhas");

// pode pular linha como tab tambem com \t
// exemplo console.log("pulando um \t texto com tab")
console.log("pulando um \t texto com tab");

// 5 - concatenar
console.log("test" + "ando" + " concatenar" + " um texto");

//6 - interpolação ou Template strings
// para usar tem que colocar entre crase
console.log(`a soma de 2 + 2 é igual a: ${2 + 2}`);

//7 - booleanos
console.log(true);

console.log(false);

//8 - comparações

// maior ou menor: > ou <
console.log(10 > 5);

console.log(10 < 5);
// maior ou igual e menor ou igual: >= e <=
console.log(10 >= 10);

console.log(10 <= 15);
// igual ==
console.log(10 == 10);

console.log(10 == 15);
//diferente !=
console.log(10 != 15);

console.log(10 != 10);

//9 - valor identico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

//10 - operadores logicos

//&& - and __ || - or __ ! - not
// && true apenas se os dois lados forem verdadeiros, || para ser true um lado como true é suficiente
// ! este operador inverte a comparação

// operadores logicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "matheus" === 1);

console.log(5 > 2 || "matheus" === 1);

console.log(5 < 2 || 5 > 100);

console.log(!true);

console.log(!5 > 2);

//11 - empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);


//12 - mudança de tipo
console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);