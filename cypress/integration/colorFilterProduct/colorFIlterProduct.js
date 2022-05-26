Given("I open product page", () => {
  cy.visit("http://localhost:3000/products");
});

When("I select the color", () => {
  cy.get("#color").select("Red");
});

Then("products by color should be shown", (content) => {
  cy.contains("Products");
});
