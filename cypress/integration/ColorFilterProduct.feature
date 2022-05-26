Feature: Color Filter Product

  I want to Color Filter product in E-commerce

  @smoke
  Scenario: Color Filter Product
    Given I open product page
    When I select the color
    | brand | 
     | samsung |
    Then products by color should be shown
