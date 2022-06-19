import loginData from "../../fixtures/test-data/login.json";
import productData from "../../fixtures/test-data/editProduct.json";

Given("I want to edit product", () => {
  cy.visit("http://localhost:3000/login");
});

When("I type in", () => {
  cy.get("#email").type(loginData.email);
  cy.get("#password").type(loginData.password);
  cy.get("#loginButton").click();
  cy.contains("Product").click({ force: true });
  cy.get("#editProduct").click();
  cy.get("#name").clear();
  cy.get("#name").type(productData.name);
});

When("I click on submit button", () => {
  cy.get("#submitButton").click();
});

Then("Product should be updated", (content) => {
  cy.contains("Succesfully updated product").should("be.visible");
});
