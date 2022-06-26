Given("I want to Update password", () => {
  cy.visit("http://localhost:3000/login");
});

When("I type in", () => {
  cy.get("#email").type("testing@test.com");
  cy.get("#password").type("123123");
  cy.get("#loginButton").click();
  cy.get("#avatar").click();
  cy.get("#profile").click();
  cy.get("#editPassword").click();
  cy.get("#password").clear();
  cy.get("#password").type("123123");
  cy.get("#confirmPassword").clear();
  cy.get("#confirmPassword").type("123123");
});

When("I click on submit button", () => {
  cy.get("#submitButton").click();
});

Then("password should be updated", (content) => {
  cy.contains("Succesfully Updated User").should("be.visible");
});
