Feature: Accessibility testing

  Scenario Outline: ADA testing for <URL> - <page>
    Given I visit "<URL>"
    Then "<page>" should pass ada validation
    Examples:
      | URL         | page           |
      | homepage    | Page content   |
      | homepage    | MainNav        |
      | homepage    | SubNav         |
      | homepage    | hamburger-menu |

     
  Scenario Outline: ADA testing for product page - <component>
    When I visit "<URL>"
    Then "<component>" should pass ada validation
    Examples:
      | URL | component                       |
      | product  | filtering                  |
      | product  | sorting                    |
      | product  | metadata-title             |
      | product  | metadata-topDescription    |
      | product  | metadata-shelfNavigation   |
      | product  | metadata-bottomDescription |
      | product  | products images            |
      | product  | plp-results                |


  Scenario Outline: ADA testing for Search - <component>
    When I visit "<URL>"
    Then "<component>" should pass ada validation
    Examples:
      | URL         | component          |
      | Search page | search-searchForm  |
      | Search page | search-searchInput |
      | Search page | search-filters     |
      | Search page | search-results     |
      | Search page | search-sorting     |
      | Search page | search-pagination  |
      | Search page | search-product     |


  Scenario Outline: ADA testing for Footer - <component>
    When I visit "<URL>"
    Then "<component>" should pass ada validation
    Examples:
      | URL       | component               |
      | Home page | footer-logo             |
      | Home page | footer-newsletter       |
      | Home page | footer-music            |
      | Home page | footer-sell on amazon   |
      | Home page | footer-business         |
      | Home page | footer-trustBadges      |
      | Home page | footer-copyright        |
      | Home page | footer-bottomShelf      |

 