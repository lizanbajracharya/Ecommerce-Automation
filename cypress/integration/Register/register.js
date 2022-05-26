import registerData from "../../fixtures/test-data/register.json";

Given("I open Ecommerce register page", () => {
  cy.visit("http://localhost:3000/register");
});

When("I type in", () => {
  cy.get("#name").type(registerData.name);
  cy.get("#email").type(registerData.email);
  cy.get("#password").type(registerData.password);
});

When("I click on submit button", () => {
  cy.get("#submitButton").click();
});

Then("Should be registerd succesfully", (content) => {
  cy.contains("Register Successful").should("be.visible");
});
