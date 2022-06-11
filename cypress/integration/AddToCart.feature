Feature: Add Item to cart

  I want to add item to cart

  @smoke
  Scenario: Add Item to cart
    Given I want to add item to cart
    When I Click on Add to cart in product detail page
    Then product should be added to the cart