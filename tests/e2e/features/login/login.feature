Feature: As a standard user I want to perform login

  @debug
  Scenario: Standard user should be able to perform login
    Given I open 'home' page

    When I provide 'standard' username
    And I provide default password
    And I perform login

    Then I should see shopping cart icon