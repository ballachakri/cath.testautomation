
Feature: TA-201 User should be able to login
    As a end user
    I enter user name and password
    I should be able view my account details

Scenario Outline: User should be able to login
    Given As a end user i will navigate to login page
    When I enter username "<username>" and password "<password>"
    Then I should be able view my account details
    Examples:
    | username | password |
    | ballachakri@yahoo.com | Khalifa123 |