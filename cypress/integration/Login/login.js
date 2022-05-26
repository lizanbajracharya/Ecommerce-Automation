import loginData from "../../fixtures/test-data/login.json";

Given("I open Ecommerce login page", () => {
  cy.visit("http://localhost:3000/login");
});

When("I type in", () => {
  cy.get("#email").type(loginData.email);
  cy.get("#password").type(loginData.password);
});

When("I click on Login button", () => {
  cy.get("#loginButton").click();
});

Then("Dashboard should be shown", (content) => {
  cy.contains("Dashboard");
});
