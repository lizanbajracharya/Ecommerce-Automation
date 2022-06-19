Feature: Remove Product

  I want to remove product

  @smoke
  Scenario: Remove product
    Given I want to remove product
    And I click on remove button
    Then Product should be remove