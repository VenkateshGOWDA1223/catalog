// script.js
document.addEventListener('DOMContentLoaded', () => {
    showCategory('creams'); // Default view
});

function showCategory(category) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear view

    // Example data structure for multiple categories
    const products = {
        creams: [
            { name: 'Hydrating Cream', image: 'path/to/image1.jpg', description: 'Moisturizes for 24 hours.' },
            { name: 'Anti-Aging Cream', image: 'path/to/image2.jpg', description: 'Reduces fine lines.' },
        ],
        tablets: [
            { name: 'Pain Reliever', image: 'path/to/image3.jpg', description: 'Effective for headaches.' },
            { name: 'Vitamin D', image: 'path/to/image4.jpg', description: 'Supports bone health.' },
        ],
        sprays: [
            { name: 'Nasal Spray', image: 'path/to/image5.jpg', description: 'Relieves nasal congestion.' },
            { name: 'Throat Spray', image: 'path/to/image6.jpg', description: 'Soothes sore throats.' },
        ],
        // Add more categories and products as needed
    };

    products[category].forEach(product => {
        const productEl = document.createElement('div');
        productEl.classList.add('product');
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        productsContainer.appendChild(productEl);
    });
}
