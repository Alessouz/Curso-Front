// 1 - movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes);

// 2 - selecionando por tag
const listItem = document.getElementsByTagName('li');

console.log(listItem);

// 3 - selecionando por id
const title = document.getElementById('title');

console.log(title);

// 4 - selecionando por classe
const products = document.getElementsByClassName('product');

console.log(products);

// 5 - selecionando por css
const productsQuery = document.querySelectorAll('.product');

console.log(productsQuery);

const mainContainer = document.querySelector('#main-container');

console.log(mainContainer);

// 6 alterando o html
const p = document.createElement('p');

const header = title.parentElement

// header.insertBefore(p, title);

// 7 - método appendChild
const navLinks = document.querySelector('nav ul');

const li = document.createElement('li');

navLinks.appendChild(li);

// 8 - método replaceChild
const h2 = document.createElement('h2');

h2.textContent = 'Meu novo titulo!';

header.replaceChild(h2, title);

// 9 - criando nós de texto
const myText = document.createTextNode("Agora vamos colocar mais um titulo");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector('a');

console.log(firstLink);

firstLink.setAttribute('href', 'https://www.google.com');

console.log(firstLink.getAttribute('href'));

firstLink.setAttribute('target', '_blank');

// 11 - altura e largura
const footer = document.querySelector('footer');

console.log(footer.offsetHeight);
console.log(footer.offsetWidth);

console.log(footer.clientHeight);
console.log(footer.clientWidth);

// 12 - posição do elemento
const product1 = products[0];

console.log(product1.getBoundingClientRect())

// 13 - alterando o estilo
mainContainer.style.color = 'red';
mainContainer.style.backgroundColor = '#ccc';

// 14 - estilizando varios estilos
for (const li of listItem) {
    li.style.backgroundColor = 'red';
}
