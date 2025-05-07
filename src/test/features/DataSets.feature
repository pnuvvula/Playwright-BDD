Feature: To validate login page with multiple test data

  @only
  Scenario Outline: validate valid and invalid data on login page
    Given I launch login application
    When I enter "<username>" and "<password>"
    And I click on login button
    Then I want to validate message on login page

    Examples:
      | username | password     |
      | student  | Password123  |
      | student1 | Password1234 |
      | pranitha | nuvvula      |
