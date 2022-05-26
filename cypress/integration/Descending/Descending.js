Given("I open product page", () => {
  cy.visit("http://localhost:3000/products");
});

When("I want to sort product by alphabetical descending", () => {
  cy.get("#sort").select("Name (Z - A)");
});

Then("products should be shown by descending alphabetical", (content) => {
  cy.contains("Products");
});
