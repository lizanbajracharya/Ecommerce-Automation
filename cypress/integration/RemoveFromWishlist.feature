Feature: Product remove from Wishlist

  I want to remove product to wishlist

  @smoke
  Scenario: Product remove from Wishlist
    Given I want to remove product to wishlist
    When I go to the wishlist product and click on remove from wishlist
    Then Product should be removed from wishlist
