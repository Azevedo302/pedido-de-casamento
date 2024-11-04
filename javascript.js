// Pega os botões pelo ID
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Função para mover o botão "Não" para uma posição aleatória
noButton.addEventListener('mouseenter', () => {
    const container = document.querySelector('.container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Define a nova posição aleatória do botão
    const newX = Math.random() * (containerWidth - noButton.offsetWidth);
    const newY = Math.random() * (containerHeight - noButton.offsetHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});

// Função para exibir a mensagem ao clicar no botão "Sim"
yesButton.addEventListener('click', () => {
    // Verifica se a mensagem já foi exibida
    if (!document.querySelector('.hidden-message')) {
        const message = document.createElement('div');
        message.className = 'hidden-message';
        message.innerText = 'Recebemos a sua proposta!';

        document.querySelector('.container').appendChild(message);
        message.style.display = 'block';

        // Desativa o botão "Sim" para impedir novos cliques
        yesButton.disabled = true;
    }
});
