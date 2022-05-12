/// <reference types="cypress" />

describe('Covid status page', () => {
  it('User can not go to next page if info is invalid', () => {
    cy.visit('/questionnaire/2');
    cy.get('#navigation-next').should('have.class', 'opacity-50');

    cy.get('#hadCovid1').click();
    cy.get('#navigation-next').should('have.class', 'opacity-50');
    cy.get('#hadAntibodyTest1').click();
    cy.get('#navigation-next').should('not.have.class', 'opacity-50');
    cy.get('#antibodyTestDate').type('2021-05-30');
    cy.get('#hadAntibodyTest2').click();
    cy.get('#navigation-next').should('not.have.class', 'opacity-50');

    cy.get('#hadCovid2').click();
    cy.get('#navigation-next').should('not.have.class', 'opacity-50');

    cy.get('#hadCovid3').click();
    cy.get('#navigation-next').should('not.have.class', 'opacity-50');
  });

  it('User can go to the next page', () => {
    cy.visit('/questionnaire/2');
    cy.get('#hadCovid3').click();
    cy.get('#navigation-next').click();
    cy.url().should('not.include', 'questionnaire/2');
  });
});
