/*DARK MODE*/


const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
const body = document.body;

// Recupere o estado do modo escuro do armazenamento local
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    enableDarkMode();
}

darkModeToggleBtn.addEventListener('click', function() {
    // Inverta o estado do modo escuro
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
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

function validateForm() {
    // Adicione validações para os campos adicionais conforme necessário

    var nomeInput = document.getElementById('nome');
    var nomeRegex = /^[A-Za-z\u00C0-\u017F\s]+$/;
    if (!nomeRegex.test(nomeInput.value)) {
        alert('Por favor, insira um nome válido (sem números ou caracteres especiais).');
        return false;
    }

    var dataNascimentoInput = document.getElementById('dataNascimento');
    if (!dataNascimentoInput.value) {
        alert('Por favor, insira a data de nascimento.');
        return false;
    }

    var sexoInput = document.getElementById('sexo');
    if (sexoInput.value === "") {
        alert('Por favor, selecione o sexo.');
        return false;
    }

    var nomeMaeInput = document.getElementById('nomeMae');
    if (!nomeRegex.test(nomeMaeInput.value)) {
        alert('Por favor, insira um nome válido para a mãe (sem números ou caracteres especiais).');
        return false;
    }

    var cpfInput = document.getElementById('cpf');
    var cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpfInput.value)) {
        alert('Por favor, insira um CPF válido no formato xxx.xxx.xxx-xx.');
        return false;
    }

    var telefoneCelularInput = document.getElementById('telefoneCelular');
    var celularRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!celularRegex.test(telefoneCelularInput.value)) {
        alert('Por favor, insira um número de celular válido no formato (xx) xxxxx-xxxx.');
        return false;
    }

    var telefoneFixoInput = document.getElementById('telefoneFixo');
    var telefoneFixoRegex = /^\(\d{2}\) \d{4}-\d{4}$/;
    if (!telefoneFixoRegex.test(telefoneFixoInput.value)) {
        alert('Por favor, insira um número de telefone fixo válido no formato (xx) xxxx-xxxx.');
        return false;
    }

    var enderecoInput = document.getElementById('endereco');
    if (!enderecoInput.value) {
        alert('Por favor, insira o endereço completo.');
        return false;
    }

    var loginInput = document.getElementById('login');
    if (!loginInput.value) {
        alert('Por favor, insira o login.');
        return false;
    }

    var senhaInput = document.getElementById('senha');
    if (!senhaInput.value) {
        alert('Por favor, insira a senha.');
        return false;
    }

    var confirmaSenhaInput = document.getElementById('confirmaSenha');
    if (confirmaSenhaInput.value !== senhaInput.value) {
        alert('As senhas não coincidem.');
        return false;
    }

    alert('');
    window.location.href = 'login.html';

    return false;
}

    function removerCaracteresEspeciais(inputId) {
        const inputElement = document.getElementById(inputId);
    
        inputElement.addEventListener('input', function (event) {
          const valorInput = event.target.value;
    
          // Verificando se há caracteres especiais
          if (/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/u.test(valorInput)) {
            // Se houver caracteres especiais, limpar o valor do campo
            event.target.value = valorInput.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/ug, '');
          }
        });
      }
    
      // Adicionando a verificação para cada campo de entrada
      removerCaracteresEspeciais('nome');
      removerCaracteresEspeciais('sobrenome');
      removerCaracteresEspeciais('nomeMae');


    

      function validateForm() {
        // Validação do formulário (seu código existente)...

        // Após a validação bem-sucedida, salvar os dados no localStorage
        var loginInput = document.getElementById('login').value;
        var senhaInput = document.getElementById('senha').value;

        // Salvar no localStorage
        localStorage.setItem('login', loginInput);
        localStorage.setItem('senha', senhaInput);

        alert('Cadastrado com sucesso!');

        // Redirecionar para outra página
        window.location.href = 'login.html';

        return false;
    }

    // Verificar se existem credenciais salvas no localStorage ao carregar a página
    window.onload = function() {
        var storedLogin = localStorage.getItem('login');
        var storedSenha = localStorage.getItem('senha');

    
    };




    //FUNÇÃO MOSTRAR SENHAS


function toggleSenha() {
    var senhaInput = document.getElementById("senha");
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
    } else {
      senhaInput.type = "password";
    }
  }




