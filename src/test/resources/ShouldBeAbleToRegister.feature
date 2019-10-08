@sanity
Feature: TA-202 User should be able to register

As a end user i will navigate login page
i will enter my registration deatils
then i should be able register


Scenario Outline: User should be able to register
    Given As a user i will navigate to login page
    When i enter my details "<emailid>" "<title>" "<firstname>" "<lastname>" "<phonenumber>" "<password>" "<confirmpassword>"
    Then i should be able to register
    Examples:
    |emailid|title|firstname|lastname|phonenumber|password|confirmpassword|
    |sballachakri@yahoo.com|Mr|chakra|balla|07730679707|Khalifa123|Khalifa123|



