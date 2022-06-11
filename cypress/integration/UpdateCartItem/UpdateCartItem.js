Given("I want to Update item of cart", () => {
  cy.visit("http://localhost:3000/products");
});

When("I Click on plus or minus icon in cart page", () => {
  cy.get("#0").click();
  cy.get("#addToCart").click();
  cy.get("#cartIncrease").click();
  cy.get("#cartDecrease").click();
});

Then("cart product should be updated", (content) => {
  cy.contains("Home");
});
