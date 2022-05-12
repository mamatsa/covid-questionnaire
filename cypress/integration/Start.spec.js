/// <reference types="cypress" />

describe('Start page', () => {
  it('User can start questionnaire', () => {
    cy.start();
    cy.url().should('include', 'questionnaire/1');
  });
});
