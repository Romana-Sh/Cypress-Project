Feature: Verify Homepage

  Background: Open homepage
    Given I visit "Home page"

  Scenario Outline: Verify HP > Search > Product > Cart for <dimension>
    When I set the viewport to "<dimension>"
    Then "Products" should be visible on homepage
    Then "Search field" should be visible on header
    When I type relevant keyword like "Women's T-shirt" on "<size>"
    When I click search button on "<size>"
    Then It should navigate search page
    Then "Results" should be visible on search page
    Examples:
      | dimension  | size    | be-not |
      | macbook-15 | desktop | be     |

  Scenario Outline: Verify HP > Search > Product > Cart for <dimension>
    When I set the viewport to "<dimension>"
    Then "Products" should be visible on homepage
    Then "Search field mobile" should be visible on header
    And I click "Search field mobile" on header
    Then "Search field" should be visible on header
    When I type relevant keyword like "Shirt" on "<size>"
    When I click search button on "<size>"
    Then It should navigate search page
    Then "Results" should be visible on search page
    And I type relevant keyword "on mobile"
    Then "Suggestion list" should "<be-not>" visible on "<size>"
    And "Products suggestion" should "<be-not>" visible on "<size>"
    Examples:
      | dimension | size   | be-not |
      | iphone-6  | mobile | not    |

  Scenario Outline: Verify HP > Cart for <dimension>
    When I set the viewport to "<dimension>"
    Then "Products" should be visible on homepage
    When I click "New Arrivals" on header
    Then "Breadcrumb" should be visible on search page
    When I click "second subcategory" on search page
    Then "product title" should be visible on search page
    Examples:
      | dimension  | size    |
      | macbook-15 | desktop |
