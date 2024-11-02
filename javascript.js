// Pega os botões pelo ID
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Função para mover o botão "Sim" para uma posição aleatória
yesButton.addEventListener('mouseenter', () => {
    const container = document.querySelector('.container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Define a nova posição aleatória do botão
    const newX = Math.random() * (containerWidth - yesButton.offsetWidth);
    const newY = Math.random() * (containerHeight - yesButton.offsetHeight);

    yesButton.style.position = 'absolute';
    yesButton.style.left = `${newX}px`;
    yesButton.style.top = `${newY}px`;
});

// Função para exibir a mensagem ao clicar no botão "Não"
noButton.addEventListener('click', () => {
    const message = document.createElement('div');
    message.className = 'hidden-message';
    message.innerText = 'Recebemos a sua proposta';
    
    document.querySelector('.container').appendChild(message);
    message.style.display = 'block';
});