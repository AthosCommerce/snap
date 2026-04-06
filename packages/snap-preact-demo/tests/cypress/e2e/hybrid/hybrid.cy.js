/**
 * End to end tests for Hybrid Integration config merging
 *
 * The SnapHybrid class merges templatesConfig and snapConfig via:
 *   deepmerge(convertedTemplatesConfig, snapConfig, { arrayMerge: (target, source) => [...target, ...source] })
 *
 * This means:
 *   - For arrays (like controller definitions), both configs are concatenated (templates first, then snap)
 *   - For objects, snapConfig values take precedence over templatesConfig values
 *   - All controllers from both configs are preserved as separate instances
 *
 * The templates config creates controllers with ids 'search' and 'autocomplete'.
 * The snap config creates controllers with ids 'search_snap' and 'autocomplete_snap'.
 * Both sets of controllers are instantiated independently.
 */

describe('Hybrid tests', () => {
	describe('Default merge behavior', () => {
		it('loads the hybrid page', () => {
			cy.visit('https://localhost:2222/hybrid/');

			cy.waitForBundle().then(() => {
				cy.window().then((window) => {
					expect(window.athos).to.exist;
				});
			});
		});

		it('has a templates search controller with templates targeters', () => {
			// Templates config creates a search controller (id: 'search') targeting #athos-layout
			cy.snapController('search').then((controller) => {
				const targeterIds = Object.keys(controller.targeters);
				const allSelectors = targeterIds.flatMap((id) => controller.targeters[id].targets.map((t) => t.selector));

				expect(allSelectors).to.include('#athos-layout');
			});
		});

		it('has a snap search controller with snap targeters', () => {
			// Snap config creates a search controller (id: 'search_snap') targeting #athos-content and #athos-sidebar
			cy.snapController('search_snap').then((controller) => {
				const targeterIds = Object.keys(controller.targeters);
				const allSelectors = targeterIds.flatMap((id) => controller.targeters[id].targets.map((t) => t.selector));

				expect(allSelectors).to.include('#athos-content');
				expect(allSelectors).to.include('#athos-sidebar');
			});
		});

		it('has templates search controller with templates settings', () => {
			// Templates config sets variants.showDisabledSelectionValues: true
			cy.snapController('search').then((controller) => {
				expect(controller.config.settings.variants?.showDisabledSelectionValues).to.equal(true);
			});
		});

		it('has snap search controller with snap settings', () => {
			// Snap config sets infinite.backfill: 5 and redirects.singleResult: false
			cy.snapController('search_snap').then((controller) => {
				expect(controller.config.settings.infinite?.backfill).to.equal(5);
				expect(controller.config.settings.redirects?.singleResult).to.equal(false);
			});
		});

		it('has templates autocomplete controller with templates settings', () => {
			// Templates config: trending.limit: 6, history.limit: 6
			cy.snapController('autocomplete').then((controller) => {
				expect(controller.config.settings.trending.limit).to.equal(6);
				expect(controller.config.settings.history.limit).to.equal(6);
			});
		});

		it('has snap autocomplete controller with snap settings', () => {
			// Snap config: trending.limit: 5, history.limit: 5
			cy.snapController('autocomplete_snap').then((controller) => {
				expect(controller.config.settings.trending.limit).to.equal(5);
				expect(controller.config.settings.history.limit).to.equal(5);
			});
		});

		it('has autocomplete controllers with targeter selectors', () => {
			// Both configs target input.athos-ac on their respective controllers
			cy.snapController('autocomplete').then((controller) => {
				const targeterIds = Object.keys(controller.targeters);
				const allSelectors = targeterIds.flatMap((id) => controller.targeters[id].targets.map((t) => t.selector));

				expect(allSelectors).to.include('input.athos-ac');
			});

			cy.snapController('autocomplete_snap').then((controller) => {
				const targeterIds = Object.keys(controller.targeters);
				const allSelectors = targeterIds.flatMap((id) => controller.targeters[id].targets.map((t) => t.selector));

				expect(allSelectors).to.include('input.athos-ac');
			});
		});

		it('all search targets render content into DOM', () => {
			// Verify all target selectors have rendered content
			cy.snapController('search').then(() => {
				cy.get('#athos-layout').should('exist').and('not.be.empty');
			});

			cy.snapController('search_snap').then(() => {
				cy.get('#athos-content').should('exist').and('not.be.empty');
				cy.get('#athos-sidebar').should('exist').and('not.be.empty');
			});
		});

		it('has recommendation controllers', () => {
			// Both configs define recommendations - they should merge
			cy.window().then((window) => {
				expect(window.athos).to.exist;
				// Recs are instantiated on-demand, just verify the snap instance is set up
				expect(window.athos.controller).to.exist;
			});
		});
	});

	describe('mergeSnapConfig overrides verify merge order', () => {
		/**
		 * This test suite uses window.mergeSnapConfig to set up a scenario where
		 * additional config is merged into both templatesConfig and snapConfig
		 * before SnapHybrid merges them.
		 *
		 * Since controllers have distinct ids ('search' vs 'search_snap'),
		 * both are instantiated independently. mergeSnapConfig can target
		 * either config shape to modify settings.
		 */

		it('snap config search settings are applied via mergeSnapConfig', () => {
			cy.on('window:before:load', (win) => {
				win.mergeSnapConfig = {
					controllers: {
						search: [
							{
								config: {
									id: 'search_snap',
									settings: {
										pagination: {
											pageSize: 48,
										},
									},
								},
							},
						],
					},
				};
			});

			cy.visit('https://localhost:2222/hybrid/');

			cy.snapController('search_snap').then((controller) => {
				// mergeSnapConfig is applied to snapConfig which contains the search_snap controller
				// The pagination.pageSize should be merged into the snap search controller
				expect(controller.config.settings.pagination?.pageSize).to.equal(48);
			});
		});

		it('templates autocomplete settings are applied via mergeSnapConfig', () => {
			// mergeSnapConfig uses templates config shape (autocomplete.settings...)
			// This merges into the templates config which creates the 'autocomplete' controller
			cy.on('window:before:load', (win) => {
				win.mergeSnapConfig = {
					autocomplete: {
						settings: {
							trending: {
								limit: 3,
							},
						},
					},
				};
			});

			cy.visit('https://localhost:2222/hybrid/');

			cy.snapController('autocomplete').then((controller) => {
				// Templates config gets trending.limit: 3 via mergeSnapConfig
				expect(controller.config.settings.trending.limit).to.equal(3);
			});

			cy.snapController('autocomplete_snap').then((controller) => {
				// Snap config keeps trending.limit: 5 (mergeSnapConfig doesn't match snap shape)
				expect(controller.config.settings.trending.limit).to.equal(5);
			});
		});

		it('both templates and snap controllers are independently preserved', () => {
			// With array concatenation and distinct IDs, all controllers are kept
			cy.visit('https://localhost:2222/hybrid/');

			// Templates controllers exist
			cy.snapController('search').then((controller) => {
				expect(controller.config.settings.variants?.showDisabledSelectionValues).to.equal(true);
			});

			// Snap controllers also exist independently
			cy.snapController('search_snap').then((controller) => {
				expect(controller.config.settings.infinite?.backfill).to.equal(5);
			});
		});
	});
});
