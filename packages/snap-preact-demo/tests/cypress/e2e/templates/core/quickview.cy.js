const query = 'dress';

const config = {
	url: `https://localhost:2222/templates/?q=${query}`,
	selectors: {
		search: '.ss__search',
		result: '.ss__result',
		quickviewButton: '.ss__result__button--quickview',
		quickview: '.ss__product-quickview',
		modal: '.ss__product-quickview .ss__modal',
		modalOpen: '.ss__product-quickview .ss__modal--open',
		modalContent: '.ss__product-quickview .ss__modal__content',
		closeButton: '.ss__product-quickview__close',
		attributes: '.ss__product-quickview__attributes',
		variants: '.ss__variant-selection',
	},
};

describe('ProductQuickview', () => {
	before(() => {
		cy.visit(config.url);

		cy.snapController().then(({ store, page }) => {
			expect(page.type).to.equal('search');
			expect(store.search.query.string).to.equal(query);
			expect(store.pagination.totalResults).to.be.greaterThan(0);
		});
	});

	it('renders a Quick View button on each result tile', () => {
		cy.get(config.selectors.search).should('exist');
		cy.get(config.selectors.result).should('have.length.greaterThan', 0);
		cy.get(config.selectors.quickviewButton).should('have.length.greaterThan', 0);
	});

	it('opens the single shared modal when the Quick View button is clicked', () => {
		cy.get(config.selectors.quickviewButton).first().click({ force: true });

		// A single shared ProductQuickview is injected at body > #athos-quickview,
		// so exactly one modal instance should exist regardless of result count.
		cy.get('body > #athos-quickview').should('exist');
		cy.get(config.selectors.quickview).should('have.length', 1);
		cy.get(config.selectors.modalOpen).should('exist');
		cy.get(config.selectors.modalContent).should('be.visible');
	});

	it('renders the attributes table inside the modal', () => {
		cy.get(config.selectors.attributes).should('exist');
	});

	it('renders variant selectors when the product has variants', () => {
		// Defensive: only some demo products carry variants. If they do, the modal
		// should render at least one VariantSelection; otherwise we skip this assertion.
		cy.snapController().then(({ store }) => {
			const product = store.quickview && store.quickview.product;
			const selections = product && product.variants && product.variants.selections;
			if (selections && selections.length > 0) {
				cy.get(config.selectors.variants).should('have.length.greaterThan', 0);
			}
		});
	});

	it('closes the modal when the close button is clicked', () => {
		cy.get(config.selectors.closeButton).first().click({ force: true });

		cy.get(config.selectors.modalOpen).should('not.exist');
	});
});
