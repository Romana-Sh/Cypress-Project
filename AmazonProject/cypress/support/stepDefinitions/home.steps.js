/// <reference types="Cypress" />

import {
    Then,
    When,
  } from '@badeball/cypress-cucumber-preprocessor';
  import {
    homePage,
  } from '../../../utils/locators/pages/homePage';
  import {
    checkout,
  } from '../../../utils/locators/pages/checkout';
  
  const footerRandomEmail = Math.ceil(Math.random() * 20000)
  const homeRandomEmail = Math.ceil(Math.random() * 10000)
  const newRandomEmail = Math.ceil(Math.random() * 15000)
  const promoRandomEmail = Math.ceil(Math.random() * 5000)
  
  
  Then('{string} should be visible on homepage', (string) => {
    switch (string) {
    case 'Products':
        cy.get(homePage.products).should('be.visible');
        break;
      case 'Search field':
        cy.get(homePage.searchField).should('be.visible');
        break;
      case 'Search field mobile':
        cy.get(homePage.searchMobile).first().should('be.visible');
        break;
      case 'Suggestion list':
        cy.get(homePage.suggestionList).should('be.visible');
        break;
      case 'Failed message':
        cy.get(homePage.failedPopupWindow).contains('Sorry, page not found!').should('be.visible');
        break;
      default:
        break;
    }
  });
  
Then('Free shipping banner and popup cookies should display', () => {
    if (Cypress.$('.dytmpl-popup').length > 0) {
      cy.getCookie('freeship_hidden').should('be.null')
      cy.getCookie('freeship_success').should('be.null')
      cy.get(homePage.startingBlockContent).should('be.visible')
      cy.get(homePage.freeShippingPopup).should('be.visible')
    }
  });
  
  