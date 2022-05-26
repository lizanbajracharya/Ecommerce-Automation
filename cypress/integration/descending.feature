Feature: Sort Product By alphabetical descending

  I want to sort product by alphabetical descending

  @smoke
  Scenario: Sort Product By alphabetical descending
    Given I open product page
    When I want to sort product by alphabetical descending
    Then products should be shown by descending alphabetical 
