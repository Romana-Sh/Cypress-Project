import 'cypress-iframe';
import {
  topShelf,
} from '../locators/homepage';
import {
  signIn,
} from '../locators/accessibility';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add('login', (element) => {
  cy.fixture(element).as('user');
  if (element !== 'newUser') {
    cy.get('@user').then((user) => {
      cy.get(signIn.emailInputCheckout).clear()
        .type(user.email).then(() => {
          cy.get(signIn.passwordInputCheckout).clear().type(user.password);
        });
      cy.get(signIn.signInButton).click();
    });
  }
  else {
    cy.get('@user').then((user) => {
      cy.get(signIn.signInEmail).clear({ force: true })
        .type(user.email, { force: true }).then(() => {
          cy.get(signIn.passwordInput).clear().type(user.password);
          cy.wait(500);
        });
       cy.get(signIn.signInButtonCheckout).click();
       cy.wait(3000);

  });
  }
});

Cypress.Commands.add('failedLogin', (element) => {
  cy.fixture(element).as('user');
  cy.get('@user').then((user) => {
    cy.get(signIn.emailInput).clear()
      .type(user.wrongEmail).then(() => {
        cy.get(signIn.passwordInput).type(user.password);
      });
    cy.get(signIn.signInButton).click();
  });
});

Cypress.Commands.add('logoutDesktop', () => {
  cy.get(header.desktopSignOut).click();
});

Cypress.Commands.add('popupClose', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.gm-close').length > 0) {
      cy.get('.gm-close').then(($button) => {
        if ($button.is(':visible')) {
          cy.get('.gm-close').click({
            force: true,
          });
        }
      });
    }
    if ($body.find('.dytmpl-popup-close').length > 0) {
      cy.get('.dytmpl-popup-close').then(($button) => {
        if ($button.is(':visible')) {
          cy.get('.dytmpl-popup-close').click({
            force: true,
          });
        }
      });
    }
  });
});

