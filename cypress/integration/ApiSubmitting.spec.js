/// <reference types="cypress" />

it('User can send data to api', () => {
  cy.start();
  cy.identify();
  cy.get('#hadCovid1').click();
  cy.get('#hadAntibodyTest1').click();
  cy.get('#antibodyTestDate').type('2021-05-30');
  cy.get('#antibodyNumber').type('99');
  cy.get('#navigation-next').click();
  cy.get('#hadVaccine1').click();
  cy.get('#vaccinationStage1').click();
  cy.get('#navigation-next').click();
  cy.get('#nonFormalMeetings1').click();
  cy.get('#numberOfDaysFromOffice4').click();
  cy.get('#covid-politics-submit').click();
  cy.intercept('POST', 'https://covid19.devtest.ge/api/create', {
    statusCode: 201,
  }).as('req');
  cy.wait('@req');
});
