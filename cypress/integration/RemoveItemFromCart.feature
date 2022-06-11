Feature: Remove Item to cart

  I want to remove item to cart

  @smoke
  Scenario: Remove Item to cart
    Given I want to remove item to cart
    When I Click on Remove icon in cart page
    Then product should be removed to the cart