import loginData from "../../fixtures/test-data/user.json";

Given("I want to add product to wishlist", () => {
  cy.visit("http://localhost:3000/login");
});

When("I go to the single product page and click on add to wishlist", () => {
  cy.get("#email").type(loginData.email);
  cy.get("#password").type(loginData.password);
  cy.get("#loginButton").click();
  cy.contains("Buy");
  cy.get("#2").click();
  cy.wait(5000);
  cy.get("#0").click();
  cy.get("#addToWishlist").click();
});

Then("Product should be added to wishlist", (content) => {
  cy.contains("Succesfully Added Product To WishList").should("be.visible");
});
