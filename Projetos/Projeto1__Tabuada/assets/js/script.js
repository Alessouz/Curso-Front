const multiplicationForm = document.querySelector('#multiplication-form');
const numberInput = document.querySelector('#number');
const multiplicationInput = document.querySelector('#multiplicator');
const multiplicationTable = document.querySelector('#multiplication-operations');

function createTable (number, multiplicatorNumber) {
    multiplicationTable.innerHTML = "";

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;
        
        const template = `<div class='row'>
            <div class='operation'>${number} x ${i} =</div>
            <div class='result'>${result}</div`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, 'text/html');

        const row = htmlTemplate.querySelector('.row');
        multiplicationTable.appendChild(row);
    }
};

multiplicationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatiorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatiorNumber) {
        alert('Um dos campos esta vazio');
        return
    };

    createTable(multiplicationNumber, multiplicatiorNumber);
});