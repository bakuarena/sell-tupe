// Product Data (Edit this array to add your products)
const products = [
    {
        id: 1,
        title: "DeepHat Ban Analyzer",
        category: "script",
        price: 49.99,
        desc: "The forensic simulator we built earlier. Analyze any account for ban risk.",
        icon: "🛡️"
    },
    {
        id: 2,
        title: "Phishing Kit Pro",
        category: "tool",
        price: 129.99,
        desc: "Automated phishing simulation suite for enterprise security training.",
        icon: "🎣"
    },
    {
        id: 3,
        title: "NetFlow Sentinel",
        category: "script",
        price: 89.99,
        desc: "Real-time network traffic analyzer with anomaly detection.",
        icon: "📡"
    },
    {
        id: 4,
        title: "Crypto Tracker X",
        category: "tool",
        price: 29.99,
        desc: "Monitor 50+ exchanges for arbitrage opportunities and price alerts.",
        icon: "📈"
    }
];

let cart = [];

// Initialize the store
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    updateCartUI();
});

// Render Products
function renderProducts(filter) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-icon">${product.icon}</div>
            <h3>${product.title}</h3>
            <p>${product.desc}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button type="button" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return;
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    const count = document.getElementById('cart-count');
    const items = document.getElementById('cart-items');
    const total = document.getElementById('cart-total');

    if (count) count.textContent = cart.length;
    if (items) items.innerHTML = cart.map(item => `<li>${item.title} — $${item.price.toFixed(2)}</li>`).join('');
    if (total) total.textContent = `$${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}`;
}