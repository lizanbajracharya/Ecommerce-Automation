Feature: Order Product

  I want to order item

  @smoke
  Scenario: Order Product
    Given I want to order item
    When I type in
      |  address  | country  | city | postalCode |
      |  test | test | test | test |
    And I click on order button
    Then Product should be ordered