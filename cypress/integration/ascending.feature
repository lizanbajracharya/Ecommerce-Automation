Feature: Sort Product By alphabetical ascending

  I want to sort product by alphabetical ascending

  @smoke
  Scenario: Sort Product By alphabetical ascending
    Given I open product page
    When I want to sort product by alphabetical ascending
    Then products should be shown by ascending alphabetical 
