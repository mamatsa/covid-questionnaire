/// <reference types="cypress" />

describe('Identification page', () => {
  beforeEach(() => {
    cy.visit('/questionnaire/1');
  });

  it('User can not go to next page if info is invalid', () => {
    cy.get('#navigation-next').click();
    cy.get('.text-error-red').should(
      'have.text',
      'გთხოვთ შეავსოთ ეს ველიგთხოვთ შეავსოთ ეს ველიგთხოვთ შეავსოთ ეს ველი'
    );
    cy.get('#firstName').type('n');
    cy.get('#firstNameInputError').should(
      'have.text',
      'უნდა შეიყვანოთ მინიმუმ 2 სიმბოლო'
    );
    cy.get('#lastName').type('s');
    cy.get('#lastNameInputError').should(
      'have.text',
      'უნდა შეიყვანოთ მინიმუმ 2 სიმბოლო'
    );
    cy.get('#email').type('o');
    cy.get('#emailInputError').should(
      'have.text',
      'გთხოვთ მიუთითეთ Redberry-ის მეილი (yourname.@redberry.ge)'
    );
    cy.url().should('include', 'questionnaire/1');
  });

  it('User can go to the next page', () => {
    cy.identify();
    cy.url().should('not.include', 'questionnaire/1');
  });
});
