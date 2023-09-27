Feature: Accessibility testing

  Scenario Outline: Accessibility testing for <URL> - <page>
    Given I visit "<URL>"
    Then "<page>" should pass ada validation
    Examples:
      | URL                | page         |
      | main-navigation    | Page content |
      | sub-navigation     | Page content |


  Scenario Outline: Accessibilty testing for Sub-Nav Admin - <component>
    When I visit "<URL>"
    Then "<component>" should pass ada validation
    Examples:
      | URL   | component          |
      | admin | dashboard          |
      | admin | user management    |
      | admin | multi store        |
      | admin | attributes         |

Scenario Outline: ADA testing for your account - <URL>
    Given I visit "Home page"
    Then I visit "Sign in page"
    When I sign in with "Romana"
    Then "Your Account" should be visible on account page
    When I visit "<URL>"
    Then "<page>" should pass ada validation
    Examples:
      | URL                  | page         |
      | Email communications | Page content |
      | Address book         | Page content |
      | Wallet               | Page content |
