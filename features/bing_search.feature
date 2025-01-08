Feature: Searching for the word "semrush" on bing.com with category filters

  Background:
    Given I am on the Bing homepage

  Scenario: Search for "semrush" in "Everything" category
    When I enter "semrush" in the search bar
    And I click the search button
    Then I should see search results related to "semrush"
    And the category filter "Everything" should be active

  Scenario: Search for "semrush" in "Video" category
    When I enter "semrush" in the search bar
    And I select the "Video" category filter
    And I click the search button
    Then I should see video results related to "semrush"
    And the category filter "Video" should be active

  Scenario: Search for "semrush" in "News" category
    When I enter "semrush" in the search bar
    And I select the "News" category filter
    And I click the search button
    Then I should see news articles related to "semrush"
    And the category filter "News" should be active
