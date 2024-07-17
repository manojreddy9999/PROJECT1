document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');
    const loginForm = document.getElementById('login-form');
    const dashboardContainer = document.getElementById('dashboard-container');
    const productList = document.getElementById('product-list');
    const cartContainer = document.getElementById('cart-container');
    const cartList = document.getElementById('cart-list');

    let currentUser = null;
    let cart = [];

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Dummy authentication, replace with real authentication logic
        if (username === 'user' && password === 'pass') {
            currentUser = username;
            showDashboard();
        } else {
            alert('Invalid username or password');
        }
    });

    // function showDashboard() {
    //     loginContainer.style.display = 'none';
    //     dashboardContainer.style.display = 'block';
    //     renderProductList();
    // }

    // function renderProductList() {
    //     const products = [
    //         { id: 1, name: 'Product 1', price: 20 },
    //         { id: 2, name: 'Product 2', price: 30 },
    //         { id: 3, name: 'Product 3', price: 25 },
    //     ];

    //     products.forEach(product => {
    //         const productItem = document.createElement('div');
    //         productItem.innerHTML = `
    //             <p>${product.name} - $${product.price}</p>
    //             <button onclick="addToCart(${product.id})">Add to Cart</button>
    //         `;
    //         productList.appendChild(productItem);
    //     });
    // }

    function addToCart(productId) {
        const product = getProductById(productId);
        cart.push(product);
        updateCartCount();
    }

    function updateCartCount() {
        const cartCount = cart.length;
        const cartButton = document.getElementById('cart-button');
        if (cartButton) {
            cartButton.innerHTML = `Cart (${cartCount})`;
        }
    }

    function getProductById(productId) {
        // Dummy product data, replace with real product retrieval logic
        const products = [
            { id: 1, name: 'Product 1', price: 20 },
            { id: 2, name: 'Product 2', price: 30 },
            { id: 3, name: 'Product 3', price: 25 },
        ];

        return products.find(product => product.id === productId);
    }

    function showCart() {
        dashboardContainer.style.display = 'none';
        cartContainer.style.display = 'block';
        renderCart();
    }

    function renderCart() {
        cartList.innerHTML = '';
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `<p>${product.name} - $${product.price}</p>`;
            cartList.appendChild(cartItem);
        });
    }

    function placeOrder() {
        // Dummy order placement logic, replace with real order processing logic
        alert('Order placed successfully!');
        cart = [];
        updateCartCount();
        showDashboard();
    }
});
