/* DARK MODE */

const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
const body = document.body;
const imagens = [
    document.getElementById('cubo'), // Adicione os IDs das suas imagens aqui
    document.getElementById('carrinho'),
    document.getElementById('atendente'),
    document.getElementById('saude')
];

// Recupere o estado do modo escuro do armazenamento local
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    enableDarkMode();
}

darkModeToggleBtn.addEventListener('click', function() {
    // Inverta o estado do modo escuro
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
        changeToLightImages(); // Ao desativar o modo escuro, trocar para as imagens claras
    } else {
        enableDarkMode();
        changeToDarkImages(); // Ao ativar o modo escuro, trocar para as imagens escuras
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    darkModeToggleBtn.classList.add('dark-mode-on');
    // Salve o estado do modo escuro no armazenamento local
    localStorage.setItem('darkMode', 'true');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    darkModeToggleBtn.classList.remove('dark-mode-on');
    // Salve o estado do modo escuro no armazenamento local
    localStorage.setItem('darkMode', 'false');
}

function changeToDarkImages() {
    // Altere as imagens para as versões escuras
    imagens.forEach(imagem => {
        if (imagem) {
            // Aqui você substitui pelo caminho da sua imagem escura para cada ID
            if (imagem.id === 'cubo') {
                imagem.src = 'img/cubo-branco.png';
            } else if (imagem.id === 'carrinho') {
                imagem.src = 'img/carrinho-branco.png';
            } else if (imagem.id === 'atendente') {
                imagem.src = 'img/atendente-branco.png';
            } else if (imagem.id === 'saude') {
                imagem.src = 'img/saude-branco.png';
            }
        }
    });
}

function changeToLightImages() {
    // Altere as imagens para as versões claras
    imagens.forEach(imagem => {
        if (imagem) {
            // Aqui você substitui pelo caminho da sua imagem clara para cada ID
            if (imagem.id === 'cubo') {
                imagem.src = 'img/cubo.png';
            } else if (imagem.id === 'carrinho') {
                imagem.src = 'img/carrinho.png';
            } else if (imagem.id === 'atendente') {
                imagem.src = 'img/atendente.png';
            } else if (imagem.id === 'saude') {
                imagem.src = 'img/saude.png';
            }
        }
    });
}
