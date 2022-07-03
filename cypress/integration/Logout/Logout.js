import loginData from "../../fixtures/test-data/logout.json";

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

Then("User will be logged into", () => {
  cy.get("#avatar").click();
});

Then("User click on Logout button and user is logged out", () => {
  cy.get("#logoutButton").click();
});
