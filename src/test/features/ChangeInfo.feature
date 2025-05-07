Feature: to verify user details are edited

  
  Scenario: Verify user information details are edited
    Given I logged into application successfully
    And I click on edit account information link
    When I change firstname and lastname
    And I click on continue button
    Then I should verify my account information is updated
