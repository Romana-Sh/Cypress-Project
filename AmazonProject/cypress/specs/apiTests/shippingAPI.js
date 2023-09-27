/// <reference types="cypress" />


describe('I request data from shipping calculator API, it should display response', () => {
  const flags = Cypress.env('flags');
  const path = '/api/shipping';
  const requestBody = {
    "shipments": [{ "address": { "postalCode": "98144-4441", "city": "Seattle", "state": "WA", "phone": "7183454567", "key": "shipment-1", "name": "ROMANA", "street1": "Auth", "street2": "1912 S State St", "residential": true, "country": "US" }, "key": "shipment-1", "lines": [{ "id": "40641fbf-2220-4c6b-ba31-b75d3cc32ebd", "quantity": 1, "sku": "8170-01" }], "shipmentValue": { "type": "centPrecision", "fractionDigits": 2, "currencyCode": "USD", "centAmount": 699 } }], "discountCodes": [], "allowBlueStreak": true, "allowCdl": true, "allowGrandHusky": true, "allowLasership": true, "allowOntrac": true, "allowOntracSaturdayForNonResidential": true, "allowTforce": true, "allowUds": true, "deliveryDateCalendar": false
  };

  it('request shipping calculator', () => {
    cy.request({
      method: "POST",
      url: path + flags,
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response));
      expect(response.body).to.not.be.null;
      expect(response.body.data.offerSets[0].shippingOffers.length).to.be.greaterThan(0);
      expect(response.body.data.offerSets[0].shippingOffers[0].price).has.property('currencyCode', 'USD');
    });


  });

  it('request shipping calculator with future delivery dates', () => {
    cy.request({
      method: "POST",
      url: path + flags,
      body: {
        ...requestBody, "deliveryDateCalendar": true
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response));
      expect(response.body).to.not.be.null;
      expect(response.body.data.offerSets[0].shippingOffers.length).to.be.greaterThan(0);
      expect(response.body.data.offerSets[0].shippingOffers[0].price).has.property('currencyCode', 'USD');
      expect(response.body.data.futureDeliveryDates.dates.length).to.be.greaterThan(0);

    });
  });
});
