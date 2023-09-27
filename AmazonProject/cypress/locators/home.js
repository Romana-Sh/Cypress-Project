



When('I type relevant keyword {string}', (string) => {
    switch (string) {
      case 'on mobile':
        cy.get(search.searchInput_mobile).type(`${searchKeyword}{enter}`, {timeout: 5000,
          force: true,
        });
        break;
      case 'on desktop':
        cy.get(search.searchInput_desktop).type(`${searchKeyword}{enter}`, {timeout: 5000,
          force: true,
        });
        break;
      default:
        break;
    }
  });
  