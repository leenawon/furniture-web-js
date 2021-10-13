const navbarToggleButton = document.querySelector('.navbar-toggle-button');
const navbarMenu = document.querySelector('.navbar-menu');
const cartButton = document.querySelector('.cart-button');
const cartWrapper = document.querySelector('.cart-wrapper');
const productList = document.querySelector('.product-list');

// Product Item Load
function loadProductItem() {
  fetch('furnitureList.json')
  .then(response => response.json())
  .then(data => {
    let listItemHtml = '';
    data.forEach(product => {
      listItemHtml += `
        <li class="product-item">
          <!-- Product Image -->
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <button type="button" class="add-product-button">
              <i class="fas fa-shopping-cart"></i>
              장바구니에 추가
            </button>
          </div>
          <!-- Product Description -->
          <div class="product-description">
            <h3>${product.name}</h3>
            <span class="product-category">${product.category}</span>
            <p class="product-price">${product.price}</p>
          </div>
        </li>
      `;
    });
    productList.innerHTML = listItemHtml;
  })
  .catch(error => {
    alert('live server or local server');
  })
}

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
  // Product List
  window.addEventListener('DOMContentLoaded', loadProductItem);
}

allEventListeners();