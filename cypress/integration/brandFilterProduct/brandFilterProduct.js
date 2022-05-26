Given("I open product page", () => {
  cy.visit("http://localhost:3000/products");
});

When("I select the brand", () => {
  cy.get("#brand").select("Samsung");
});

Then("products by brand should be shown", (content) => {
  cy.contains("Products");
});
