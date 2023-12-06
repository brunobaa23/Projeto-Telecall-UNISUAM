/* DARK MODE */

const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
const body = document.body;
const imagens = [
    document.getElementById('financas'), // Adicione os IDs das suas imagens aqui
    document.getElementById('saude'),
    document.getElementById('aviao'),
    document.getElementById('carrinho'),
    document.getElementById('governo')
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
            if (imagem.id === 'financas') {
                imagem.src = 'img/financas-branco.png';
            } else if (imagem.id === 'saude') {
                imagem.src = 'img/saude-branco.png';
            }else if (imagem.id === 'aviao') {
                imagem.src = 'img/aviao-branco.png';
            } else if (imagem.id === 'carrinho') {
                imagem.src = 'img/carrinho-branco.png';
            } else if (imagem.id === 'governo') {
                imagem.src = 'img/governo-branco.png';
            }
        }
    });
}

function changeToLightImages() {
    // Altere as imagens para as versões claras
    imagens.forEach(imagem => {
        if (imagem) {
            // Aqui você substitui pelo caminho da sua imagem clara para cada ID
            if (imagem.id === 'financas') {
                imagem.src = 'img/financas.png';
            } else if (imagem.id === 'saude') {
                imagem.src = 'img/saude.png';
            } else if (imagem.id === 'aviao') {
                imagem.src = 'img/aviao.png';
            } else if (imagem.id === 'carrinho') {
                imagem.src = 'img/carrinho.png';
            } else if (imagem.id === 'governo') {
                imagem.src = 'img/governo.png';
            }
        }
    });
}



//FUNÇÃO AUMENTAR FONTE

document.getElementById('increaseFontBtn').addEventListener('click', function() {
    changeFontSize(5); // Aumenta a fonte em 5 pixels
});

document.getElementById('decreaseFontBtn').addEventListener('click', function() {
    changeFontSize(-5); // Diminui a fonte em 5 pixels
});

function changeFontSize(delta) {
    const currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    body.style.fontSize = (currentSize + delta) + 'px';
}