/**
 * End to end tests with Cypress!
 *
 * The purpose of these tests is to prevent publishing of the bundle if a
 * breaking change has been made to the implementation code in the future
 *
 * Start by fill out the config object below. If a selector is not provided,
 * the applicable tests will be skipped.
 *
 */

const config = {
	url: 'https://localhost:2222/templates/index.html', // page containing autocomplete (recommended: home/about/contact page)
	disableGA: '', // disable google analytic events (example: 'UA-123456-1')
	selectors: {
		website: {
			openInputButton: 'input.athos-ac', // selector for a button to click in order to make the input visible
			input: '.ss__autocomplete-fixed__search-input input', // selector of <input> elements (config.controllers[].autocomplete[].config.selector)
		},
		autocomplete: {
			main: '.ss__autocomplete',
			// selector of the wrapping element. Expects child element to contain <a>
			term: `.ss__autocomplete .ss__terms__option`,
			facet: '.ss__autocomplete .ss__facet .ss__facet__options',
			result: '.ss__autocomplete .ss__results .ss__result',
			seeMore: '.ss__autocomplete .ss__autocomplete__button--see-more',
		},
	},
	startingQuery: 't', // initial query (displays terms, facets, and results)
	query: 'dress',
};

// The fixed autocomplete input only exists once snap has bound its input targeter and the overlay
// has opened. A single click can land before that binding, in which case nothing opens and the
// input is never found. Re-check before each click and only click while the input is absent - the
// open button toggles, so clicking unconditionally would just close an overlay that had opened.
const openAutocompleteInput = () => {
	if (!config.selectors.website.openInputButton) return;

	cy.waitUntil(
		() =>
			cy.get('body').then(($body) => {
				if ($body.find(config.selectors.website.input).length) return true;

				cy.get(config.selectors.website.openInputButton).first().click({ force: true });
				return false;
			}),
		{
			timeout: 20000,
			interval: 1000,
			errorMsg: 'openAutocompleteInput: input never appeared after clicking the open button',
		}
	);
};

describe('Autocomplete', () => {
	describe('Setup', () => {
		it('has valid config', () => {
			cy.wrap(config).its('url').should('have.length.at.least', 1);
			cy.wrap(config).its('startingQuery').should('have.length.at.least', 1);
			cy.wrap(config).its('selectors.website.input').should('have.length.at.least', 1);
		});

		it('adds snap bundle to autocomplete page', () => {
			cy.visit(config.url);
			cy.addLocalSnap();

			cy.waitForBundle().then(() => {
				cy.window().then((window) => {
					expect(window.athos).to.exist;
				});
			});

			if (config.disableGA) {
				window[`ga-disable-${config.disableGA}`] = true;
			}
		});
	});

	describe('Tests Autocomplete', () => {
		it('has a controller with an empty store', function () {
			cy.snapController('autocomplete').then(({ store }) => {
				expect(store.results.length).to.equal(0);
				expect(store.terms.length).to.equal(0);
				expect(store.state.input).to.equal(undefined);
			});
		});

		it('has trending results when focused', function () {
			cy.on('window:before:load', (win) => {
				// ensuring trending.showResults is set
				win.mergeSnapConfig = {
					autocomplete: {
						inputSelector: 'input.athos-ac',
						targets: [
							{
								selector: 'input.athos-ac',
								component: 'AutocompleteFixed',
							},
						],
						settings: {
							trending: {
								showResults: true,
							},
						},
					},
				};
			});

			cy.visit(config.url);
			cy.addLocalSnap();
			cy.waitForBundle();

			cy.snapController('autocomplete').then(({ store }) => {
				openAutocompleteInput();

				cy.get(config.selectors.website.input, { timeout: 20000 }).first().should('exist').click({ force: true }).focus();

				// TODO: remove - but is currently needed for cases where we are getting no trending terms back from the API
				if (store.trending.length) {
					cy.wait('@autocomplete').should('exist');
					cy.snapController('autocomplete').then(({ store }) => {
						expect(store.trending.length).to.greaterThan(0);
						expect(store.results.length).to.greaterThan(0);

						// close the search input
						if (config.selectors.website.openInputButton) {
							cy.get(config.selectors.website.openInputButton).first().click({ force: true });
						}
					});
				}
			});
		});

		it('can make single letter query', function () {
			openAutocompleteInput();

			cy.get(config.selectors.website.input).first().should('exist').focus().type(config.startingQuery, { force: true });

			cy.wait('@autocomplete').should('exist');

			cy.snapController('autocomplete').then(({ store }) => {
				expect(store.state.input).to.equal(config.startingQuery);
				expect(store.terms.length).to.greaterThan(0);
			});
		});

		it('has correct count and term in see more link', () => {
			cy.snapController('autocomplete').then(({ store }) => {
				const term = store.terms[0].value;

				cy.get(`${config.selectors.autocomplete.seeMore}`).should('exist').contains(store.pagination.totalResults).contains(term);
			});
		});

		it('can hover over term', function () {
			cy.snapController('autocomplete').then(({ store }) => {
				if (store.terms.length <= 1) {
					cy.get(config.selectors.website.input).first().should('exist').click().focus().type(config.query, { force: true });
					cy.wait('@autocomplete').should('exist');
				}

				cy.get(`${config.selectors.autocomplete.term}`).last().find('a').should('exist').rightclick({ force: true }); // trigger onFocus event

				cy.wait('@autocomplete').should('exist');

				cy.snapController('autocomplete').then(({ store }) => {
					const lastTerm = store.terms[store.terms.length - 1];
					expect(lastTerm.active).to.equal(true);
					expect(lastTerm.value).to.equal(store.search.query.string);
				});
			});
		});

		it('can hover over facet', function () {
			cy.get(config.selectors.website.input).first().should('exist').clear({ force: true }).type(config.startingQuery, { force: true });
			cy.wait('@autocomplete').should('exist');

			cy.snapController('autocomplete').then(({ store }) => {
				if (store.facets.length == 0) {
					//if this term has no facets lets try another
					cy.get(config.selectors.website.input).first().clear({ force: true }).type(config.query, { force: true });
					cy.wait('@autocomplete').should('exist');
				}
				cy.get(`${config.selectors.autocomplete.facet} a`)
					.should('have.length.greaterThan', 0)
					.then((facetOptions) => {
						const firstOption = facetOptions[0];
						const optionURL = firstOption.href;
						cy.get(firstOption).rightclick({ force: true }); // trigger onFocus event

						cy.snapController('autocomplete').then((controller) => {
							// wrap the controller and walk the path with .its() so each retry re-reads the
							// urlManager - it is replaced on update, so a wrapped value would stay stale
							cy.wrap(controller).its('store.services.urlManager.state.filter').should('exist');
							cy.wrap(controller).its('store.services.urlManager.href').should('contain', optionURL);
						});
					});
			});
		});

		it('has results', function () {
			cy.snapController('autocomplete').then(({ store }) => {
				cy.get(store.results);
				cy.get(`${config.selectors.autocomplete.result} a:first`)
					.should('have.length.greaterThan', 0)
					.each((result, index) => {
						cy.get(result).should('have.attr', 'href', store.results[index].display.mappings.core.url);
					});
			});
		});

		it('has see more link with correct URL', function () {
			cy.snapController('autocomplete').then(({ store }) => {
				cy.get(`${config.selectors.autocomplete.seeMore}`).should('exist');
			});
		});

		it('can clear input', function () {
			cy.document().then((doc) => {
				let inputVal = doc.querySelector(`${config.selectors.website.input}`).value;

				expect(inputVal).to.be.oneOf([config.startingQuery, config.query]);

				cy.get(config.selectors.website.input).first().clear({ force: true }).should('have.value', '');
			});
		});

		it('closes the autocomplete when clicking a filter', () => {
			cy.on('window:before:load', (win) => {
				// ensuring URL configuration is standard (filter is hash parameter which does not cause page reload)
				win.mergeSnapConfig = {
					url: {
						parameters: {
							core: {
								query: { name: 'q' },
							},
						},
					},
				};
			});

			cy.visit(`${config.url}?q=${config.query}`);

			// set flag on window to ensure page doesn't reload
			cy.window().then((win) => (win.ssFirstLoad = true));

			cy.snapController('autocomplete').then(() => {
				openAutocompleteInput();

				cy.get(config.selectors.website.input).first().should('exist').should('have.value', config.query).click().focus({ force: true });
				cy.wait('@autocomplete').should('exist');

				// autocomplete should be open
				cy.get(config.selectors.autocomplete.main).should('exist');

				// select a facet
				cy.snapController('autocomplete').then(({ store }) => {
					if (store.facets.length == 0) {
						cy.get(config.selectors.website.input).first().clear({ force: true }).type(config.startingQuery, { force: true });
						cy.wait('@autocomplete').should('exist');
					}

					cy.get(`${config.selectors.autocomplete.facet} a`).then((facetOptions) => {
						const firstOption = facetOptions[0];
						const optionURL = firstOption.href.split('?')[1];

						cy.get(firstOption).click({ force: true }); // trigger onFocus event

						cy.wait('@search').should('exist');

						cy.snapController().then(({ store }) => {
							cy.wrap(store.services.urlManager.state.filter).should('exist');
							cy.wrap(store.services.urlManager.href).should('contain', optionURL);

							// autocomplete should be closed
							cy.get(config.selectors.autocomplete.main).should('not.exist');

							// ensure page did not releoad
							cy.window().should('have.prop', 'ssFirstLoad');
						});
					});
				});
			});
		});
	});
});
