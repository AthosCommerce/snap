const query = 'dress';
const pageUrl = `https://localhost:2222/templates/?q=${query}`;

const selectors = {
	tabSelection: '.ss__tab-selection',
	tab: (id) => `.ss__tab-selection__button--${id}`,
	activeTab: (id) => `.ss__tab-selection__button--${id}.ss__tab-selection__button--active`,
	input: 'input.athos-ac',
	renderedInput: 'input.ss__search-input__input',
	form: '.ss__demo__search__form',
};

const catalogs = {
	atkzs2: { param: 'prod' },
	atv4sc: { param: 'macd' },
};

const searchTabs = [
	{ id: 'Products', siteId: 'atkzs2', label: 'Products', default: true },
	{ id: 'MacDuggal', siteId: 'atv4sc', label: 'MacDuggal' },
];

const autocompleteTabs = [
	{ id: 'ACProducts', siteId: 'atkzs2', label: 'Products', default: true },
	{ id: 'ACMacDuggal', siteId: 'atv4sc', label: 'MacDuggal' },
];

// the demo page ships without tabs, so every test opts in through the config merge hook
const useTabs = ({ extraSearchTargets = [] } = {}) => {
	cy.on('window:before:load', (win) => {
		win.mergeSnapConfig = {
			tabsConfig: { catalogs },
			search: {
				tabs: searchTabs,
				// merged by index, so the leading empty object leaves the demo target untouched
				...(extraSearchTargets.length ? { targets: [{}, ...extraSearchTargets] } : {}),
			},
			autocomplete: { tabs: autocompleteTabs },
			theme: {
				overrides: {
					default: {
						// a catalog with no results for the query would otherwise render its tab disabled
						tabSelection: { enableEmptyTabs: true },
					},
				},
			},
		};
	});
};

// the modal only opens once snap has bound its input targeter, so re-check before each click and
// only click while it is closed - clicking unconditionally would toggle an overlay that had opened
const openAutocomplete = () => {
	cy.waitUntil(
		() =>
			cy.get('body').then(($body) => {
				if ($body.find(selectors.renderedInput).length) return true;

				cy.get(selectors.input).first().click({ force: true });
				return false;
			}),
		{
			timeout: 20000,
			interval: 1000,
			errorMsg: 'openAutocomplete: the autocomplete input never appeared after clicking the page input',
		}
	);
};

describe('Tabbed search', () => {
	describe('tab switching', () => {
		it('renders a tab per config with the default tab active', () => {
			useTabs();
			cy.visit(pageUrl);

			cy.snapController('Products').then((controller) => {
				expect(controller.store.search.query.string).to.equal(query);
			});

			cy.get(`${selectors.tabSelection} [role="tab"]`).should('have.length', searchTabs.length);
			cy.get(selectors.tab('Products')).should('have.class', 'ss__tab-selection__button--active');
			cy.get(selectors.tab('MacDuggal')).should('not.have.class', 'ss__tab-selection__button--active');
		});

		it('activates the clicked tab, writes it to the url and renders its results', () => {
			useTabs();
			cy.visit(pageUrl);
			cy.snapController('Products');

			cy.get(selectors.tab('MacDuggal')).click();

			cy.get(selectors.activeTab('MacDuggal')).should('exist');
			cy.location('search').should('contain', `view=${catalogs.atv4sc.param}`);

			cy.snapController('MacDuggal').then((controller) => {
				expect(controller.store.search.query.string).to.equal(query);
				cy.get('.ss__result').should('have.length', controller.store.results.length);
			});
		});

		it('returns to the previous tab on browser back', () => {
			useTabs();
			cy.visit(pageUrl);
			cy.snapController('Products');

			cy.get(selectors.tab('MacDuggal')).click();
			cy.get(selectors.activeTab('MacDuggal')).should('exist');

			cy.go('back');

			cy.get(selectors.activeTab('Products')).should('exist');
			cy.location('search').should('not.contain', 'view=');
		});

		it('keeps each tab own refinements when switching away and back', () => {
			useTabs();
			cy.visit(pageUrl);

			let applied;

			cy.snapController('Products').then((controller) => {
				controller.store.facets[0].values[0].url.go();
			});

			// each catalog namespaces its own params, so the refinement is stored under the products prefix
			cy.location('hash').should('contain', `${catalogs.atkzs2.param}filter`);
			cy.snapController('Products')
				.its('urlManager.state.filter')
				.should('exist')
				.then((filter) => {
					applied = JSON.stringify(filter);
				});

			cy.get(selectors.tab('MacDuggal')).click();
			cy.get(selectors.activeTab('MacDuggal')).should('exist');
			cy.snapController('MacDuggal').its('urlManager.state.filter').should('not.exist');

			cy.get(selectors.tab('Products')).click();
			cy.get(selectors.activeTab('Products')).should('exist');
			cy.snapController('Products')
				.its('urlManager.state.filter')
				.should((filter) => expect(JSON.stringify(filter)).to.equal(applied));
		});
	});

	describe('multiple targets', () => {
		it('keeps every target on the same tab', () => {
			useTabs({ extraSearchTargets: [{ selector: '#athos-content', component: 'Search' }] });
			cy.visit(pageUrl);
			cy.snapController('Products');

			cy.get(selectors.tabSelection).should('have.length', 2);

			// switching in one target must move the other - both render from a single tab store
			cy.get(selectors.tab('MacDuggal')).first().click();

			cy.get(selectors.activeTab('MacDuggal')).should('have.length', 2);
			cy.get(selectors.activeTab('Products')).should('not.exist');
		});
	});

	describe('autocomplete tabs', () => {
		it('carries the active autocomplete tab through to the results page', () => {
			useTabs();
			cy.visit('https://localhost:2222/templates/');

			openAutocomplete();
			cy.get(selectors.renderedInput).first().type(query, { force: true });
			cy.snapController('ACProducts');

			cy.get(selectors.tab('ACMacDuggal')).click();
			cy.get(selectors.activeTab('ACMacDuggal')).should('exist');

			cy.get(selectors.form).submit();

			cy.location('search').should('contain', `view=${catalogs.atv4sc.param}`);
			cy.get(selectors.activeTab('MacDuggal')).should('exist');
		});
	});
});
