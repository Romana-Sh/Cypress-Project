/// <reference types="cypress" />

describe('I request data from login API, it should display response', () => {
const flags = Cypress.env('flags');
const path = '/api/log/in';
it('request shipping calculator', () => {
cy.request({ method: "POST",
    url : path + flags,
  body: {
        "email" : "romana@mailinator.com",
        "password" : "test123"
     }


    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response));
      expect(response.body).to.not.be.null;
      expect(response.body.data.customer).has.property('email', 'romana@mailinator.com');
      expect(response.body.data.customer).has.property('password', '****UgM=');
      expect(response.body.data.customer.id.length).to.be.greaterThan(0);
    });
  });
});
