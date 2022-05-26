Feature: Login

  I want to log into E-commerce

  @smoke
  Scenario: Ecommerce Login
    Given I open Ecommerce login page
    When I type in
      |  username  | password  |
      |  test@test.com | 123123  |
    And I click on Login button
    Then Dashboard should be shown
