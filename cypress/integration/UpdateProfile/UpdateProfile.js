import loginData from "../../fixtures/test-data/user.json";
import updateUserData from "../../fixtures/test-data/updateUser.json";

Given("I want to Update profile", () => {
  cy.visit("http://localhost:3000/login");
});

When("I type in", () => {
  cy.get("#email").type("testing@test.com");
  cy.get("#password").type("123123");
  cy.get("#loginButton").click();
  cy.get("#avatar").click();
  cy.get("#profile").click();
  cy.get("#editButton").click();
  cy.get("#name").clear();
  cy.get("#name").type(updateUserData.name);
  cy.get("#email").clear();
  cy.get("#email").type(updateUserData.email);
});

When("I click on submit button", () => {
  cy.get("#updateButton").click();
});

Then("Profile should be updated", (content) => {
  cy.contains("Succesfully Updated User").should("be.visible");
});
