Feature: Product To Wishlist

  I want to add product to wishlist

  @smoke
  Scenario: Product To Wishlist
    Given I want to add product to wishlist
    When I go to the single product page and click on add to wishlist
    Then Product should be added to wishlist
