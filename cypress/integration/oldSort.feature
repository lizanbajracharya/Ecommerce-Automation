Feature: Sort Product By Previously Added

  I want to sort product by previously added

  @smoke
  Scenario: Sort Product By Previously Added
    Given I open product page
    When I want to sort product by previously added
    Then products that are previously added should be shown
