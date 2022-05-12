/// <reference types="cypress" />

describe('Vaccination page', () => {
  it('User can not go to next page if info is invalid', () => {
    cy.visit('/questionnaire/3');
    cy.get('#navigation-next').should('have.class', 'opacity-50');

    cy.get('#hadVaccine1').click();
    cy.get('#navigation-next').should('have.class', 'opacity-50');
    cy.get('#vaccinationStage1').click();
    cy.get('#navigation-next').should('not.have.class', 'opacity-50');
    cy.get('#vaccinationStage2').click();
    cy.get('#navigation-next').should('not.have.class', 'opacity-50');
    cy.get('#vaccinationStage3').click();
    cy.contains('რომ არ გადადო').should('be.visible');
    cy.get('#navigation-next').should('not.have.class', 'opacity-50');

    cy.get('#hadVaccine2').click();
    cy.get('#navigation-next').should('have.class', 'opacity-50');
    cy.get('#waiting').click();
    cy.get('#navigation-next').should('not.have.class', 'opacity-50');
    cy.get('#waiting2').click();
    cy.get('#navigation-next').should('not.have.class', 'opacity-50');
    cy.get('#waiting3').click();
    cy.contains('ახალი პროტოკოლით').should('be.visible');
    cy.get('#navigation-next').should('not.have.class', 'opacity-50');

    cy.get('#navigation-next').click();
    cy.url().should('not.include', 'questionnaire/3');
  });
});
