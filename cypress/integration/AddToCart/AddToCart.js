import loginData from "../../fixtures/test-data/login.json";

Given("I want to add item to cart", () => {
  cy.visit("http://localhost:3000/products");
});

When("I Click on Add to cart in product detail page", () => {
  cy.get("#0").click();
  cy.get("#addToCart").click();
});

Then("product should be added to the cart", (content) => {
  cy.contains("Home");
});
