import loginData from "../../fixtures/test-data/login.json";
import productData from "../../fixtures/test-data/product.json";

Given("I want to remove product", () => {
  cy.visit("http://localhost:3000/login");
});

When("I click on remove button", () => {
  cy.get("#email").type(loginData.email);
  cy.get("#password").type(loginData.password);
  cy.get("#loginButton").click();
  cy.contains("Product").click({ force: true });
  //   cy.get("#addProduct").click();
  //   cy.get("#name").type(productData.name);
  //   cy.get("#price").type(productData.price);
  //   cy.get("#brand")
  //     .parent()
  //     .click()
  //     .get(`ul > li[data-value=${productData.brand}]`)
  //     .click();
  //   cy.get("#demo-multiple-name")
  //     .parent()
  //     .click()
  //     .get(`ul > li[data-value=${productData.color}]`)
  //     .click();
  //   cy.contains("Add Product").click({ force: true });
  //   cy.get("#countInStock").click().type(productData.countInStock);
  //   cy.get("#description").type(productData.description);
  //   cy.get("#submitButton").click();
  cy.get("#deleteProduct").click();
  cy.get("#yes").click();
});

Then("Product should be remove", (content) => {
  cy.contains("Products");
});
