Feature: To test validation in login page

  Scenario: To verify user login to application with valid credentials
    Given user launch test application in chrome
    When user enter username in the text box
    And user enter password in the text box
    And user click on login button
    Then user is able to display message as 'Congratulations student. You successfully logged in!'

  Scenario: To verify user is not able to login with invalid credentials
    Given user enter invalid username in the text box
    And user enter invalid password in the text box
    When user click on login button
    Then user is able to display error message as 'Your username is invalid!'
