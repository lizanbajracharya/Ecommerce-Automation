Given("I open product page", () => {
  cy.visit("http://localhost:3000/products");
});

When("I want to sort product by previously added", () => {
  cy.get("#sort").select("Old");
});

Then("products that are previously added should be shown", (content) => {
  cy.contains("Products");
});
