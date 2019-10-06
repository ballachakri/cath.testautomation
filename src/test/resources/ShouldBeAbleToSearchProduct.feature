@singlesearch
Feature: TA-101 - User should be able to search a product

As a end User
I will search for product
Then i should be able to view all the relavent pordoucts

Background:
Given I am on the home page

Scenario Outline: User should be able to search a product
When I search for a product "<product>"
Then i should be able to view all the relevant products
Examples:
| product |
| shirt |
| bag |
| skirt |


