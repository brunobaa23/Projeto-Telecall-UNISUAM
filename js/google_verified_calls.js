/* DARK MODE */

const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
const body = document.body;
const imagens = [
    document.getElementById('engrenagens') // Adicione os IDs das suas imagens aqui
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
            if (imagem.id === 'engrenagens') {
                imagem.src = 'img/engrenagens-mecanicas-branca.png';
            } 
        }
    });
}

function changeToLightImages() {
    // Altere as imagens para as versões claras
    imagens.forEach(imagem => {
        if (imagem) {
            // Aqui você substitui pelo caminho da sua imagem clara para cada ID
            if (imagem.id === 'engrenagens') {
                imagem.src = 'img/engrenagens-mecanicas.png';
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
