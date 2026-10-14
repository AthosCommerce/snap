describe('Category', () => {
	beforeEach(() => {
		cy.clearAllSessionStorage();
	});

	it('runs the category search', () => {
		cy.on('window:before:load', (win) => {
			win.mergeSnapConfig = {
				config: {
					platform: 'shopify',
				},
			};
		});

		cy.visit(`https://localhost:2222/templates/category.html`);

		cy.snapController().then(({ store, page }) => {
			expect(page.type).to.equal('category');
			expect(store).to.haveOwnProperty('pagination');
			expect(store.pagination.totalResults).to.be.greaterThan(0);
			expect(store.pagination.page).to.equal(1);
		});
	});

	it('sends a background filter for collection_handle in the category request', () => {
		cy.on('window:before:load', (win) => {
			win.mergeSnapConfig = {
				config: {
					platform: 'shopify',
				},
			};
		});

		cy.visit(`https://localhost:2222/templates/category.html`);

		cy.wait('@category').then((interception) => {
			const url = new URL(interception.request.url);
			// background filter should be present with the correct field (collection_handle)
			expect(url.searchParams.has('bgfilter.collection_handle')).to.be.true;
			// value should match the collection handle set in the page context
			expect(url.searchParams.get('bgfilter.collection_handle')).to.equal('hers');
		});
	});
});
