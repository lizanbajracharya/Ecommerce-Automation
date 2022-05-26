Feature: Add Product

  I want to add product

  @smoke
  Scenario: Add product
    Given I want to add product
    When I type in
      |  name  | price  |  countInStock  | description | color  |  brand  | image  | 
      |  Nokia | 21  | 1 | asd | red | samsung | asd.jpg | 
    And I click on submit button
    Then Product should be created