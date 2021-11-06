const countCart = document.querySelector('.count-cart');
const cartList = document.querySelector('.cart-list');
const totalCartPrice = document.querySelector('.total-cart-price');

let CART_ITEM_ID = 1;

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
}

cartEventListener();