Cypress.Commands.add('identify', () => {
  cy.get('#firstName').type('name');
  cy.get('#lastName').type('surname');
  cy.get('#email').type('otar@redberry.ge');
  cy.get('#navigation-next').click();
});

Cypress.Commands.add('start', () => {
  cy.visit('/');
  cy.get('#start-button').click();
});
