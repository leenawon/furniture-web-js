const countCart = document.querySelector('.count-cart');
const cartList = document.querySelector('.cart-list');
const totalCartPrice = document.querySelector('.total-cart-price');

let CART_ITEM_ID = 1;

// Get Product Item (local Storage)
function getProductItem() {
  return localStorage.getItem('productItem') ? JSON.parse(localStorage.getItem('productItem')) : [];
}

// Load Product Item
function loadProductItem() {
  let productItem = getProductItem();
  if(productItem.length < 1) {
    CART_ITEM_ID = 1;
  } else {
    CART_ITEM_ID = productItem[productItem.length -1].id;
    CART_ITEM_ID++;
  }
  productItem.forEach((product) => addProductToCart(product));
}

// Save Product Item (local Storage)
function saveProductItem(item) {
  let productItem = getProductItem();
  productItem.push(item);
  localStorage.setItem('productItem', JSON.stringify(productItem));
}

// Add Product To Cart
function addProductToCart(productInfo) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.setAttribute('id', `${productInfo.id}`);
  cartItem.innerHTML = `
    <img src="${productInfo.image}" alt="${productInfo.name}"/>
    <!-- Cart Item Description -->
    <div class="cart-item-description">
      <!-- Cart Item Title -->
      <h3 class="cart-item-title">${productInfo.name}</h3>
      <span class="cart-item-category">${productInfo.category}</span>
      <span class="cart-item-price">${productInfo.price}</span>
    </div>
    <!-- Cart Item Delete Button -->
    <button type="button" class="cart-item-delete-button">
      <i class="fas fa-times"></i>
    </button>
  `;
  cartList.appendChild(cartItem);
}

// Get Product Information 
function getProductInfo(productItem) {
  let productInfo = {
    id: CART_ITEM_ID,
    image: productItem.querySelector('.product-image img').src,
    name: productItem.querySelector('.product-description h3').textContent,
    category: productItem.querySelector('.product-category').textContent,
    price: productItem.querySelector('.product-price').textContent
  }
  CART_ITEM_ID++;
  addProductToCart(productInfo);
  saveProductItem(productInfo);
}

// Buying Product (add Product Button)
function buyingProduct(e) {
  if(e.target.classList.contains('add-product-button')) {
    let productItem = e.target.parentElement.parentElement;
    getProductInfo(productItem);
  }
}

// Cart Event Listener
function cartEventListener() {
  // Buying Product
  productList.addEventListener('click', buyingProduct);
  // Load Product Item
  window.addEventListener('DOMContentLoaded', loadProductItem);
}

cartEventListener();