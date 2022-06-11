Feature: Update Item of cart

  I want to Update item of cart

  @smoke
  Scenario: Update Item of cart
    Given I want to Update item of cart
    When I Click on plus or minus icon in cart page
    Then cart product should be updated