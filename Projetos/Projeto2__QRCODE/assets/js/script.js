const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');
const qrCodeInput = document.querySelector('#qr-form input');
const qrCode = document.querySelector('#qr-code img');

function generateQrCode() {
    const qrCodeValue = qrCodeInput.value;

    if (!qrCodeValue) return;

    qrCodeBtn.innerText = 'Gerando QRCode...';

    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeValue}`;

    qrCode.addEventListener('load', () => {
        container.classList.add('active');
        qrCodeBtn.innerText = 'QRCode criado!';
    });
}

qrCodeBtn.addEventListener('click', () => {
    generateQrCode();
});

qrCodeInput.addEventListener('keydown', (e) => {
    if(e.code === 'Enter') {
        generateQrCode();
    }
});

qrCodeInput.addEventListener('keyup', () => {
    if(!qrCodeInput.value) {
        container.classList.remove('active');
        qrCodeBtn.innerText = 'Gerar QRCode';
    }
})