// Product catalog
const products = [
    { id: 1, name: 'Wireless Mouse', price: 29.99, image: '🖱️' },
    { id: 2, name: 'USB-C Cable', price: 12.99, image: '🔌' },
    { id: 3, name: 'Keyboard', price: 79.99, image: '⌨️' },
    { id: 4, name: 'Monitor Stand', price: 49.99, image: '🖥️' },
    { id: 5, name: 'Desk Lamp', price: 34.99, image: '💡' },
    { id: 6, name: 'Phone Charger', price: 19.99, image: '🔋' },
    { id: 7, name: 'Webcam', price: 89.99, image: '📷' },
    { id: 8, name: 'Headphones', price: 99.99, image: '🎧' },
];

// Cart array to store items
let cart = [];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const cartItems = document.getElementById('cartItems');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutMessage = document.getElementById('checkoutMessage');

// Initialize the app
function init() {
    displayProducts();
    loadCartFromStorage();
    updateCart();
    checkoutBtn.addEventListener('click', checkout);
}

// Display all products
function displayProducts() {
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 10px;">${product.image}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCart();
}

// Increase quantity
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity++;
        saveCartToStorage();
        updateCart();
    }
}

// Decrease quantity
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        saveCartToStorage();
        updateCart();
    }
}

// Update cart display
function updateCart() {
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="item-controls">
                    <button class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
                    <div class="qty-display">${item.quantity}</div>
                    <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    // Calculate and update totals
    const subtotal = calculateSubtotal();
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;

    // Enable/disable checkout button
    checkoutBtn.disabled = cart.length === 0;
}

// Calculate subtotal
function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = calculateSubtotal() + (calculateSubtotal() * 0.1);
    const message = `
        Order Confirmed!
        Total Items: ${cart.length}
        Total Amount: $${total.toFixed(2)}
        Thank you for your purchase!
    `;

    checkoutMessage.textContent = message;
    checkoutMessage.classList.add('success');
    
    // Clear cart after checkout
    setTimeout(() => {
        cart = [];
        saveCartToStorage();
        updateCart();
        checkoutMessage.classList.remove('success');
    }, 2000);
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
