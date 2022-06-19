import loginData from "../../fixtures/test-data/user.json";

Given("I want to remove product to wishlist", () => {
  cy.visit("http://localhost:3000/login");
});

When("I go to the wishlist product and click on remove from wishlist", () => {
  cy.get("#email").type(loginData.email);
  cy.get("#password").type(loginData.password);
  cy.get("#loginButton").click();
  cy.contains("Buy");
  cy.get("#2").click();
  cy.wait(5000);
  cy.get("#0").click();
  cy.get("#addToWishlist").then((btn) => {
    if (btn[0].innerText === "Already Added To WishList") {
      cy.get("#avatar").click();
      cy.get("#wishList").click();
      cy.get("#removeWishlist").click();
    } else {
      cy.get("#addToWishlist").click();
      cy.get("#avatar").click();
      cy.get("#wishList").click();
      cy.get("#removeWishlist").click();
    }
  });
});

Then("Product should be removed from wishlist", (content) => {
  cy.contains("Succesfully Removed Product From WishList").should("be.visible");
});
