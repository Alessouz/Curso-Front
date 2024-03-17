// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {

    console.log("Clicou no botão");

})

// 2 - removendo eventos
const secondBtn = document.querySelector('#btn');

function imprimirMensagem() {
    console.log('testando eventos');
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector('#other-btn');

thirdBtn.addEventListener("click", () => {

    console.log('removendo o evento do botão');
    secondBtn.removeEventListener("click", imprimirMensagem);
})

// 3 - argumento do evento
const myTittle = document.querySelector('#my-tittle');

myTittle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

// 4 - propagação
const containerBtn = document.querySelector('#btn-container');
const btnInsiderContainer = document.querySelector('#div-btn');

containerBtn.addEventListener('click', () => {
    console.log('evento 1');
})

btnInsiderContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('evento 2');
})

// 5 - remove evento padrão
const link = document.querySelector(".botao");

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('não alterou a pagina');
});

// 6 - evento de tecla
document.addEventListener('keyup', (e) => {
    console.log(`voce apertou a tecla ${e.key}`);
})

document.addEventListener('keydown', (e) => {
    console.log(`voce soltou a tecla ${e.key}`);
})

// 7 - evento com o mouse
const mouse = document.querySelector('#mouse');

mouse.addEventListener('mousedown', () => {
    console.log('Pressionou o botao')
});

mouse.addEventListener('mouseup', () => {
    console.log('Soltou o botao')
});

mouse.addEventListener('dblclick', () => {
    console.log('Clique duplo')
});

// 8 - movimento do mouse
document.addEventListener('mousemove', (e) => {
    // console.log(`No eixo x: ${e.x}`);
    // console.log(`No eixo y: ${e.y}`);
});

// 9 - evento com scroll
// window.addEventListener('scroll', (e) => {
//     if(window.pageYOffset > 200) {
//         console.log('Passamos de 200px')
//     }
// });

// 10 - evento de focus
const input = document.querySelector('#my-input');

input.addEventListener('focus', () => {
    console.log('Focou no input');
});

input.addEventListener('blur', () => {
    console.log('Saiu do input');
});

// 11- carregamento de pagina
window.addEventListener('load', () => {
    console.log('A pagina carregou!');
});

// window.addEventListener('beforeunload', (e) => {
//     e.preventDefault();
//     e.returnValue = "teste";
// });

// 12 - debounce
const debounce = (f, delay) => {

    let timeout

    return (...arguments) => {
        if(timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay);
    };
};

window.addEventListener('mousemove', debounce(() => {
    console.log('movendo mouse a cada 400ms')
}, 400));