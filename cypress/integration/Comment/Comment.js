import loginData from "../../fixtures/test-data/user.json";
import commentData from "../../fixtures/test-data/comment.json";

Given("I want to comment on product", () => {
  cy.visit("http://localhost:3000/login");
});

When("I select the product and click on add comment and type in", () => {
  cy.get("#email").type(loginData.email);
  cy.get("#password").type(loginData.password);
  cy.get("#loginButton").click();
  cy.wait(3000);
  cy.get("#2").click({ force: true });
  cy.get("#0").click();
  cy.get("#addComment").then((btn) => {
    if (btn[0].innerText === "Already Commented") {
      cy.get("#long-button").click();
      cy.get("#deleteComment").click();
      cy.get("#yes").click();
      cy.get("#addComment").click();
      cy.get("#comment").clear().type(commentData.comment);
      cy.get("#rating").click({ force: true });
      cy.get("#submitButtonComment").click();
    } else {
      cy.get("#addComment").click();
      cy.get("#comment").clear().type(commentData.comment);
      cy.get("#rating").click({ force: true });
      cy.get("#submitButtonComment").click();
    }
  });
});

Then("comment should be added", (content) => {
  cy.contains("Succesfully Added A Comment").should("be.visible");
});
