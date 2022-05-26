Feature: Brand Filter Product

  I want to Brand Filter product in E-commerce

  @smoke
  Scenario: Brand Filter Product
    Given I open product page
    When I select the brand
    | brand | 
     | samsung |
    Then products by brand should be shown
