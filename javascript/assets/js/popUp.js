// Função para abrir o modal e preencher com conteúdo do card clicado
function openModal(title, text, imagePath) {
    var modal = document.getElementById('myModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalText = document.getElementById('modalText');
    var modalImage = document.getElementById('modalImage');

    // Preencha os valores conforme o card clicado
    modalTitle.textContent = title;
    modalText.textContent = text;
    modalImage.src = imagePath;

    modal.style.display = 'block';

    // Adiciona um ouvinte de evento de clique para fechar o modal ao clicar fora dele
    modal.addEventListener('click', closeModalOverlayClick);
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';

    // Remove o ouvinte de evento após fechar o modal
    document.removeEventListener('click', closeModalOverlayClick);
}

// Função para fechar o modal ao clicar fora do conteúdo
function closeModalOverlayClick(event) {
    var modalContent = document.querySelector('.modali-content');

    // Verifica se o clique foi fora do modal content
    if (!modalContent.contains(event.target)) {
        closeModal();
    }
}
