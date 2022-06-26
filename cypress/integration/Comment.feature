Feature: Comment Product

  I want to comment on product

  @smoke
  Scenario: Comment Product
    Given I want to comment on product
    When I select the product and click on add comment and type in
    | comment | 
     | test |
    Then comment should be added
