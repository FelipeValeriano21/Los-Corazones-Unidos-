  const toggleButton = document.getElementById('toggleDarkMode');
  const body = document.body;

  if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️ Modo Claro';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');

    toggleButton.textContent = isDarkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro';
    localStorage.setItem('dark-mode', isDarkMode);
  });
