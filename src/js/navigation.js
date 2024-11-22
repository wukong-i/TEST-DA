function updateActiveLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  const themeIcon = document.querySelector('.theme-toggle .material-symbols-outlined');
  themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.querySelector('.theme-toggle .material-symbols-outlined').textContent = 'light_mode';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateActiveLink();
  loadTheme();
});