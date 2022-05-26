Given("I open product page", () => {
  cy.visit("http://localhost:3000/products");
});

When("I type in", () => {
  cy.get("#search").type("test");
});

Then("products by searched keyword should be shown", (content) => {
  cy.contains("test");
});
