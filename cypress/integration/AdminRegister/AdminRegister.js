import loginData from "../../fixtures/test-data/login.json";
import adminData from "../../fixtures/test-data/adminRegister.json";

Given("I want to add admin", () => {
  cy.visit("http://localhost:3000/login");
});

When("I type in", () => {
  var uuid = () => Cypress._.random(0, 1e6);
  var id = uuid();

  var testname = `${id}@yopmail.com`;
  cy.get("#email").type(loginData.email);
  cy.get("#password").type(loginData.password);
  cy.get("#loginButton").click();
  cy.get("#userMenu").click({ force: true });
  cy.get("#addAdmin").click();
  cy.get("#name").type(adminData.name);
  cy.get("#email").type(testname);
  cy.get("#password").type(adminData.password);
});

When("I click on submit button", () => {
  cy.get("#submitButton").click();
});

Then("Admin should be created", (content) => {
  cy.contains("Dashboard");
});
