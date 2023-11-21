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