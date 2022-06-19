import registerData from "../../fixtures/test-data/register.json";

Given("I open Ecommerce register page", () => {
  cy.visit("http://localhost:3000/register");
});

When("I type in", () => {
  var uuid = () => Cypress._.random(0, 1e6);
  var id = uuid();

  var testname = `${id}@yopmail.com`;
  cy.get("#name").type(registerData.name);
  cy.get("#email").type(testname);
  cy.get("#password").type(registerData.password);
  cy.get("#confirmPassword").type(registerData.confirmPassword);
});

When("I click on submit button", () => {
  cy.get("#submitButton").click();
});

Then("Should be registerd succesfully", (content) => {
  cy.contains("Register Successfully").should("be.visible");
});
