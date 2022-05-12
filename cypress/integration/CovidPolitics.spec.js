/// <reference types="cypress" />

describe('Covid politics page', () => {
  beforeEach(() => {
    cy.visit('/questionnaire/4');
  });

  it('User can not go to next page if info is invalid', () => {
    cy.get('#covid-politics-submit').click();
    cy.get('.text-error-red').should(
      'have.text',
      'რომელიმე პასუხი უნდა აირჩიორომელიმე პასუხი უნდა აირჩიო'
    );
  });

  it('User can submit the form', () => {
    cy.get('#nonFormalMeetings1').click();
    cy.get('#numberOfDaysFromOffice4').click();
    cy.get('#whatAboutMeetingsInLive').type('Meetings in live are great.');
    cy.get('#tellYourOpinion').type('Life is beautiful.');
    cy.get('#covid-politics-submit').click();
    cy.intercept('POST', 'https://covid19.devtest.ge/api/create', {
      statusCode: 201,
    }).as('req');
    cy.wait('@req');
    cy.url().should('not.include', 'questionnaire/4');
  });
});
