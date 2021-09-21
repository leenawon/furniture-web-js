const navbarToggleButton = document.querySelector('.navbar-toggle-button');
const navbarMenu = document.querySelector('.navbar-menu');
const cartButton = document.querySelector('.cart-button');
const cartWrapper = document.querySelector('.cart-wrapper');
const productList = document.querySelector('.product-list');

// Handle Cart Button
function handleCartButton() {
  cartWrapper.classList.toggle('active-cart-wrapper');
}

// Handle Toggle Button
function handleToggleButton() {
  navbarMenu.classList.toggle('active-navbar-menu');
}

function allEventListeners() {
  // Toggle navbar button
  navbarToggleButton.addEventListener('click', handleToggleButton);
  // Cart Button
  cartButton.addEventListener('click', handleCartButton);
}

allEventListeners();