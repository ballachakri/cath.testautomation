@endtoend
    
Feature: TA-102 User shoild be able search product randomly and addd to basket
    As a end user
    i will search a product randomly and add to basket
    then i should be a to see the product in the basket

Scenario Outline:  User shoild be able search product randomly and addd to basket
    Given As a end user
    When i search a product "<product>" randomly and add to basket
    Then i should be able to view the selected product in the shopping basket
    Examples:
    |product|
    |shrit|
