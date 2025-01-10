// cypress/integration/bing_search_spec.js

describe('Bing Search with Category Filters - language: Polish', () => {
    beforeEach(() => {
        cy.visit('https://www.bing.com');
        cy.get('button').contains('Akceptuj').click({ force: true });
    });

    it('Searches for "semrush" without any category filter', () => {
        cy.get('[name="q"]').type('semrush{enter}');

        cy.url().should('include', 'q=semrush');
        cy.get('#b_results').should('exist');
        cy.get('li.b_algo').contains('semrush', { matchCase: false }).should('be.visible');
    });

    it('Searches for "semrush" filtered by "Videos"', () => {
        cy.get('[name="q"]').type('semrush{enter}');

        cy.url().should('include', 'q=semrush');
        cy.contains('Wideo').click();

        cy.url().should('include', 'video');
        cy.get('#b_content').should('exist');
        cy.get('#b_content').contains('semrush', { matchCase: false }).should('be.visible');
    });

    it('Searches for "semrush" filtered by "News"', () => {
        cy.get('[name="q"]').type('semrush{enter}');

        cy.url().should('include', 'q=semrush');
        cy.contains('Wiadomości').click();

        cy.url().should('include', 'news');
        cy.get('.news-card').should('exist');
        cy.get('.news-card').contains('semrush', { matchCase: false }).should('be.visible');
    });
});
