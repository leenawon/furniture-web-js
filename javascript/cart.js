const countCart = document.querySelector('.count-cart');
const cartList = document.querySelector('.cart-list');
const totalCartPrice = document.querySelector('.total-cart-price');

let CART_ITEM_ID = 1;

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
}

cartEventListener();