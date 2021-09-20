const navbarToggleButton = document.querySelector('.navbar-toggle-button');
const navbarMenu = document.querySelector('.navbar-menu');

// Handle Toggle Button
function handleToggleButton() {
  navbarMenu.classList.toggle('active-navbar-menu');
}

function allEventListeners() {
  // Toggle navbar button
  navbarToggleButton.addEventListener('click', handleToggleButton);
}

allEventListeners();