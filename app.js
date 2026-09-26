// Add to Cart buttons
const buttons = document.querySelectorAll(".card button");

buttons.forEach(function(button) {

  button.addEventListener("click", function() {

    alert("Product Added To Cart!");

  });

});


// Shop Now button
const shopButton = document.querySelector(".hero button");

shopButton.addEventListener("click", function() {

  document.querySelector(".products").scrollIntoView({
    behavior: "smooth"
  });

});
