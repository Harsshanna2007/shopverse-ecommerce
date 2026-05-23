const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    alert("Product Added To Cart!");

  });

});
