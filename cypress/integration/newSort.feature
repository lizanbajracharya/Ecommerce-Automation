Feature: Sort Product By Newly Added

  I want to sort product by newly added

  @smoke
  Scenario: Sort Product By Newly Added
    Given I open product page
    When I want to sort product by newly added
    Then products that are newly added should be shown
