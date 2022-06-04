Feature: Add Admin

  I want to add admin

  @smoke
  Scenario: Add admin
    Given I want to add admin
    When I type in
      |  name  | email  |  password  | 
      |  test | admin@test152.com  | 123123 |
    And I click on submit button
    Then Admin should be created