Feature: Edit Product

  I want to edit product

  @smoke
  Scenario: Edit product
    Given I want to edit product
    When I type in
      |  name  | 
      |  Nokia | 
    And I click on submit button
    Then Product should be updated