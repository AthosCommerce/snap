describe('Injection', () => {
	beforeEach(() => {
		cy.visit('https://localhost:2222/templates/');
	});

	it('injects into main containers', () => {
		cy.get('#athos-layout').should('not.be.empty');
	});
});
