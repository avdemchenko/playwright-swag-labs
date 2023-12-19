Feature: I want different types of users to have an ability to perform login

  @regression
  Scenario: Standard user should be able to perform login
    Given I open 'home' page

    When I provide 'standard' username
    And I provide default password
    And I perform login

    Then I should see shopping cart icon

  @regression
  Scenario: Locked user should not be able to perform login
    Given I open 'home' page

    When I provide 'locked' username
    And I provide default password
    And I perform login

    Then I should see user locked out error message