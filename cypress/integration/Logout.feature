Feature: Logout

  I want to log out E-commerce

  @smoke
  Scenario: Ecommerce Logout
    Given I open Ecommerce login page
    When I type in
      |  username  | password  |
      |  test@test.com | 123123  |
    And I click on Login button
    Then User will be logged into
    Then User click on Logout button and user is logged out
