Given("I open product page", () => {
  cy.visit("http://localhost:3000/products");
});

When("I want to sort product by alphabetical ascending", () => {
  cy.get("#sort").select("Name (A - Z)");
});

Then("products should be shown by ascending alphabetical", (content) => {
  cy.contains("Products");
});
