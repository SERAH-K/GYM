

document.addEventListener("DOMContentLoaded", function() {
  const icon = document.getElementById('menu-button');
  const menu = document.getElementById('nav-links');

  // Toggle menu on icon click
  menu-button.addEventListener('click', function() {
    nav-links.classList.toggle('active');
  });

  // Close menu when clicking outside the menu
  document.addEventListener('click', function(event) {
    if (!nav-links.contains(event.target) && !menu-button.contains(event.target)) {
      nav-links.classList.remove('active');
    }
  }); 
});
