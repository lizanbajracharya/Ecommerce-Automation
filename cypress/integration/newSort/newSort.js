Given("I open product page", () => {
  cy.visit("http://localhost:3000/products");
});

When("I want to sort product by newly added", () => {
  cy.get("#sort").select("New");
});

Then("products that are newly added should be shown", (content) => {
  cy.contains("Products");
});
