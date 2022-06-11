Given("I want to remove item to cart", () => {
  cy.visit("http://localhost:3000/products");
});

When("I Click on Remove icon in cart page", () => {
  cy.get("#0").click();
  cy.get("#addToCart").click();
  cy.get("#removeCartItem0").click();
});

Then("product should be removed to the cart", (content) => {
  cy.contains("Your cart is empty");
});
