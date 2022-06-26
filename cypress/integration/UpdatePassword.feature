Feature: Update password

  I want to Update password

  @smoke
  Scenario: Update password
    Given I want to Update password
    When I type in
      |  password  | confirmPassword  |
      |  123123 | 123123 |
    And I click on submit button
    Then password should be updated