import loginData from "../../fixtures/test-data/login.json";
import productData from "../../fixtures/test-data/product.json";

Given("I want to add product", () => {
  cy.visit("http://localhost:3000/login");
});

When("I type in", () => {
  cy.get("#email").type(loginData.email);
  cy.get("#password").type(loginData.password);
  cy.get("#loginButton").click();
  cy.contains("Product").click({ force: true });
  cy.get("#addProduct").click();
  cy.get("#name").type(productData.name);
  cy.get("#price").type(productData.price);
  cy.get("#brand")
    .parent()
    .click()
    .get(`ul > li[data-value=${productData.brand}]`)
    .click();
  cy.get("#color")
    .parent()
    .click()
    .get(`ul > li[data-value=${productData.color}]`)
    .click();
  cy.get("#countInStock").type(productData.countInStock);
  cy.get("#description").type(productData.description);
});

When("I click on submit button", () => {
  cy.get("#submitButton").click();
});

Then("Product should be created", (content) => {
  cy.contains("Products");
});
