// Theme Switcher Logic
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const themeModeText = document.getElementById('theme-mode-text');
  themeModeText.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}

document.addEventListener('DOMContentLoaded', toggleDarkMode);