Feature: Searching for the word "prowly" on google.com with date filters

  Background:
    Given I am on the Google homepage

  Scenario: Search for "prowly" without any date filter
    When I enter "prowly" in the search bar
    And I click the search button
    Then I should see search results related to "prowly"
    And no date filter should be applied

  Scenario: Search for "prowly" filtered by results from the past 24 hours
    When I enter "prowly" in the search bar
    And I open the "Tools" menu
    And I select the date filter "Past 24 hours"
    And I click the search button
    Then I should see search results for "prowly" updated within the last 24 hours
    And the date filter "Past 24 hours" should be active

  Scenario: Search for "prowly" filtered by results from the past week
    When I enter "prowly" in the search bar
    And I open the "Tools" menu
    And I select the date filter "Past week"
    And I click the search button
    Then I should see search results for "prowly" updated within the last week
    And the date filter "Past week" should be active
