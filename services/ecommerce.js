const products = [
    {
        name: "Laptop",
        price: 15000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    },
    {
        name: "Headphones",
        price: 1200,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
        name: "Smart Watch",
        price: 2500,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400"
    },
    {
        name: "Phone",
        price: 10000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    }
];
let cart = [];
const productsContainer = document.getElementById("products-container");

function displayProducts() {

    productsContainer.innerHTML = "";

    products.forEach((product) => {

        productsContainer.innerHTML += `
            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>${product.price} EGP</p>

                <button onclick="addToCart('${product.name}')">
                            Add To Cart
                 </button>

            </div>
        `;

    });

}
function addToCart(productName) {

    cart.push(productName);

    document.getElementById("cart-count").textContent = cart.length;

    alert(`${productName} added to cart successfully!`);

}

displayProducts();