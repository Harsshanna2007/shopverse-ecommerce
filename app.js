// ================= CART =================

let cartCount = 0;

const cartButtons = document.querySelectorAll(".add-button");

cartButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    button.textContent = "✓ Added";

    setTimeout(function() {

      button.textContent = "Add to Cart";

    }, 1000);

  });

});


// ================= SHOP NOW =================

function shopNow() {

  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });

}


// ================= CART BUTTON =================

function showCart() {

  if (cartCount === 0) {

    alert("Your cart is empty!");

  } else {

    alert(
      "You have " +
      cartCount +
      " product(s) in your cart!"
    );

  }

}
