/// <reference types="Cypress" />
import {
    Then,
    When,
  } from '@badeball/cypress-cucumber-preprocessor';
  import {
    ada,
  } from '../../locators/ada';
  import {
    breadcrumb,
    products,
    images,
    metadata,
    review,
  } from '../../locators/search';
  import {
    filtering,
    metadatas,
    products,
    results,
  } from '../../locators/header';
  import {
    footer,
  } from '../../locators/footer';
  
  function terminalLog(violations) {
    cy.task(
      'log',
      `${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
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
      
      case 'images':
        cy.checkA11y(images.gallery_Desktop, null, terminalLog);
        break;
      case 'product-metadata':
        cy.checkA11y(metadata.productDescription, null, terminalLog);
        cy.checkA11y(metadata.secondarySidebar, null, terminalLog);
        break;
      case 'product-review':
        cy.checkA11y(review.primaryReviews, null, terminalLog);
        break;
      case 'product-filtering':
        cy.checkA11y(filtering.filtering, null, terminalLog);
        break;
      case 'product-sorting':
        cy.checkA11y(filtering.sorting, null, terminalLog);
        break;
      case 'product-metadata-title':
        cy.checkA11y(metadatas.productTitle, null, terminalLog);
        break;
      case 'product-metadata-topDescription':
        cy.checkA11y(metadatas.topDescription, null, terminalLog);
        break;
      case 'product-metadata-shelfNavigation':
        cy.checkA11y(metadatas.shelfNavigation, null, terminalLog);
        break;
      case 'product-metadata-bottomDescription':
        cy.checkA11y(metadatas.bottomDescription, null, terminalLog);
        break;
      case 'products':
        cy.checkA11y(products.productList, null, terminalLog);
        break;
    default:
      break;
  }
});