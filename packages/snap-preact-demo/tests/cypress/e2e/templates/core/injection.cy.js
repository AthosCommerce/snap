describe('Injection', () => {
	beforeEach(() => {
		cy.visit('https://localhost:2222/templates/');
	});

	it('replaces the placeholder in the main container with the search components', () => {
		// the placeholder stays until the search components render, then nothing else is left in the target
		cy.get('#athos-layout .ss__template-select').should('exist');
		cy.get('#athos-layout').children().should('have.length', 1).and('not.have.class', 'ss__demo__placeholder');
	});
});
