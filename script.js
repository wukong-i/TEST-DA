document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const themeToggles = document.querySelectorAll('.theme-toggle');
    
    // Handle search overlay
    if (searchBtn && searchOverlay) {
      searchBtn.addEventListener('click', () => {
        searchOverlay.classList.toggle('hidden');
      });
    }
    
    // Handle mobile menu
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
      });
    }
    
    // Handle theme toggle
    themeToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        document.querySelectorAll('.sun, .moon').forEach(icon => {
          icon.classList.toggle('hidden');
        });
      });
    });
  
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenu && !menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  });
