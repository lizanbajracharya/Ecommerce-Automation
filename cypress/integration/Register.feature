Feature: Register

  I want to Register into E-commerce

  @smoke
  Scenario: Ecommerce Register
    Given I open Ecommerce register page
    When I type in
    | name |  email  | password  |
     | test |  test1@test1.com | 123123  |
    And I click on submit button
    Then Should be registerd succesfully
