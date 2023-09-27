/// <reference types="Cypress" />
import {
    Then,
    When,
  } from '@badeball/cypress-cucumber-preprocessor';
  import {
    ada,
  } from '../../utils/locators/accessibility/openCart';
  import {
    admin,
    dashboard,
    images,
    metadata,
    user management,
    multi store,
    } from '../../utils/locators/pages/test';

  function terminalLog(violations) {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )

    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length
      })
    )

    cy.task('table', violationData)
  };

  Then('{string} should pass ada validation', (string) => {
    cy.injectAxe();
    cy.popupClose();
    switch (string) {
      case 'Home page':
        cy.checkA11y(ada.homePage, null, terminalLog);
        break;
      case 'Page content':
        cy.wait(3000);
        cy.checkA11y(ada.pageContent, null, terminalLog);
        break;
      case 'Alert flash':
        cy.wait(1000);
        cy.checkA11y('.alert.flash', null, terminalLog);
        break;
      case 'Check out page':
        cy.checkA11y('.checkout.page', null, terminalLog);
        break;
      case 'admin':
        cy.checkA11y(mainNav.admin, null, terminalLog);
        break;
      case 'dashboard ':
        cy.checkA11y(mainNav.dashboard , {
          rules: {
            'duplicate-id': { enabled: false },
          },
        }, terminalLog);
        break;
      case 'images':
        cy.checkA11y(images.gallery_Desktop, null, terminalLog);
        break;
      case 'user management':
        cy.checkA11y(metadata.productDescription, null, terminalLog);
        cy.checkA11y(metadata.secondarySidebar, null, terminalLog);
        break;
      case 'multi store ':
        cy.checkA11y(admin.multiStore , null, terminalLog);
        break;

    }
});
