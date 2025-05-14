Feature: to test api get post and put calls

 @sanity
  Scenario: To test get call function
    Given user is able to launch end point url
    When user submits get call request
    Then response status should display with status code 200
