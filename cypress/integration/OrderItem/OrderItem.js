import loginData from "../../fixtures/test-data/user.json";
import addressData from "../../fixtures/test-data/address.json";

Given("I want to order item", () => {
  cy.visit("http://localhost:3000/login");
});

When("I type in", () => {
  cy.get("#email").type(loginData.email);
  cy.get("#password").type(loginData.password);
  cy.get("#loginButton").click();
  cy.wait(3000);
  cy.get("#2").click({ force: true });
  cy.get("#0").click();
  cy.get("#addToCart").click();
  cy.get("#shippingButton").click();
  cy.get("#address").type(addressData.address);
  cy.get("#postalCode").type(addressData.postalCode);
  cy.get("#city").type(addressData.city);
  cy.get("#country").type(addressData.country);
  cy.get("#shippingPage").click();
  cy.get("#paymentButton").click();
});

When("I click on order button", () => {
  cy.get("#orderItems").click();
});

Then("Product should be ordered", (content) => {
  cy.contains("Successfully order products").should("be.visible");
});
