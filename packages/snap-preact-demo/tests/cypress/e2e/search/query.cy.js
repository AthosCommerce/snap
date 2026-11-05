const query = 'dress';

describe('Query', () => {
	it('runs the query', () => {
		cy.visit(`https://localhost:2222/snap/?q=${query}`);

		cy.snapController().then(({ store, page }) => {
			expect(page.type).to.equal('search');
			expect(store.search.query.string).to.equal(query);
			expect(store).to.haveOwnProperty('pagination');
			expect(store.pagination.totalResults).to.be.greaterThan(0);
			expect(store.pagination.page).to.equal(1);
		});
	});

	it('synchronizes the query with the input by default', () => {
		cy.snapController('autocomplete').then((acController) => {
			// the input syncs from the url during render, so assert via .its() to let it retry
			const expected = acController.config.settings.initializeFromUrl ? query : '';
			cy.wrap(acController).its('store.state.input').should('equal', expected);
		});
	});

	it('does not synchronize the input when setting is disabled', () => {
		cy.on('window:before:load', (win) => {
			win.mergeSnapConfig = {
				controllers: {
					autocomplete: [
						{
							config: {
								settings: {
									initializeFromUrl: false,
								},
							},
						},
					],
				},
			};
		});

		cy.visit(`https://localhost:2222/snap/?q=${query}`);

		cy.snapController('autocomplete').then((acController) => {
			if (acController.config.settings.initializeFromUrl) {
				// the input syncs from the url during render, so assert via .its() to let it retry
				cy.wrap(acController).its('store.state.input').should('equal', query);
			} else {
				expect(acController.store.state.input).to.equal(undefined);
			}
		});
	});
});
