Feature: Search Product

  I want to Search product in E-commerce

  @smoke
  Scenario: Search Product
    Given I open product page
    When I type in
    | search | 
     | test |
    Then products by searched keyword should be shown
