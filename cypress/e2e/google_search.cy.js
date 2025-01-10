/// <reference types="cypress" />

describe('Google Search with Date Filters - language: Polish', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com');
    cy.get('button').contains('Zaakceptuj wszystko').click({ force: true });
  });

  it('Searches for "prowly" without any date filter', () => {
    cy.get('[name="q"]')
      .type('prowly{enter}');

    cy.url().should('include', 'search');
    cy.get('#search').should('exist');
    cy.get('h3').contains('prowly', { matchCase: false }).should('be.visible');
  });

  it('Searches for "prowly" filtered by results from the past 24 hours', () => {
    cy.get('[name="q"]')
      .type('prowly{enter}');

    cy.url().should('include', 'search');
    cy.get('div').contains('Narzędzia').click();
    cy.get('span').contains('Kiedykolwiek').click({ force: true });
    cy.get('span').contains('Ostatnie 24 godziny').click({ force: true });

    cy.get('#search').should('exist');
    cy.get('h3').contains('prowly', { matchCase: false }).should('be.visible');
  });

  it('Searches for "prowly" filtered by results from the past week', () => {
    cy.get('[name="q"]')
      .type('prowly{enter}');

    cy.url().should('include', 'search');
    cy.get('div').contains('Narzędzia').click();
    cy.get('span').contains('Kiedykolwiek').click({ force: true });
    cy.get('span').contains('Ostatni tydzień').click({ force: true });

    cy.get('#search').should('exist');
    cy.get('h3').contains('prowly', { matchCase: false }).should('be.visible');
  });
});
