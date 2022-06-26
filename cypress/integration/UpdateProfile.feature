Feature: Update Profile

  I want to Update profile

  @smoke
  Scenario: Update Profile
    Given I want to Update profile
    When I type in
      |  name  | email  |
      |  testing | testing@test.com |
    And I click on submit button
    Then Profile should be updated