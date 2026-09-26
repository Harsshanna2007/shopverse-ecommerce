const products = [
  {
    name: "Nike Shoes",
    category: "Footwear",
    price: 4999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Smart Watch",
    category: "Accessories",
    price: 7999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Smartphone",
    category: "Electronics",
    price: 89999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: 3499,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Denim Jacket",
    category: "Fashion",
    price: 2499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Leather Backpack",
    category: "Accessories",
    price: 1899,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Running Shoes",
    category: "Footwear",
    price: 3299,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },

  {
    name: "Gaming Keyboard",
    category: "Electronics",
    price: 2999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
  }
];

let cartCount = 0;
let selectedCategory = "All";


function displayProducts(productList) {

  const container = document.getElementById("productContainer");

  container.innerHTML = "";

  productList.forEach(function(product) {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
      <div class="image-box">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

      </div>

      <div class="card-content">

        <p class="category">
          ${product.category}
        </p>

        <h3>
          ${product.name}
        </h3>

        <div class="rating">
          ⭐ ${product.rating}
        </div>

        <div class="price">
          ₹${product.price.toLocaleString("en-IN")}
        </div>

        <button class="add-button">
          Add to Cart
        </button>

      </div>
    `;

    const button = card.querySelector(".add-button");

    button.addEventListener("click", function() {

      cartCount++;

      document.getElementById("cart-count").textContent = cartCount;

      alert("Product added to cart!");

    });

    container.appendChild(card);

  });

  document.getElementById("result-count").textContent =
    productList.length + " Products";

}


function searchProducts() {

  const searchText =
    document.getElementById("searchInput")
      .value
      .toLowerCase();

  const filtered = products.filter(function(product) {

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;

  });

  displayProducts(filtered);

}


function filterCategory(category, button) {

  selectedCategory = category;

  document.querySelectorAll(".filter").forEach(function(btn) {

    btn.classList.remove("active");

  });

  button.classList.add("active");

  searchProducts();

}


function sortProducts() {

  const value =
    document.getElementById("sortSelect").value;

  let sorted = [...products];

  if (selectedCategory !== "All") {

    sorted = sorted.filter(function(product) {

      return product.category === selectedCategory;

    });

  }

  const searchText =
    document.getElementById("searchInput").value.toLowerCase();

  if (searchText) {

    sorted = sorted.filter(function(product) {

      return product.name.toLowerCase().includes(searchText) ||
             product.category.toLowerCase().includes(searchText);

    });

  }

  if (value === "low") {

    sorted.sort(function(a, b) {

      return a.price - b.price;

    });

  }

  if (value === "high") {

    sorted.sort(function(a, b) {

      return b.price - a.price;

    });

  }

  if (value === "rating") {

    sorted.sort(function(a, b) {

      return b.rating - a.rating;

    });

  }

  displayProducts(sorted);

}


function shopNow() {

  document.getElementById("products")
    .scrollIntoView({
      behavior: "smooth"
    });

}


function showCart() {

  if (cartCount === 0) {

    alert("Your cart is empty!");

  } else {

    alert(
      "You have " +
      cartCount +
      " product(s) in your cart."
    );

  }

}


/* Load products when page opens */

displayProducts(products);
