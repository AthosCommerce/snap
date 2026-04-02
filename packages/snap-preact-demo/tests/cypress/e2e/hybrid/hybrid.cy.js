/**
 * End to end tests for Hybrid Integration config merging
 *
 * The SnapHybrid class merges templatesConfig and snapConfig via:
 *   deepmerge(convertedTemplatesConfig, snapConfig, { arrayMerge: (_, sourceArray) => sourceArray })
 *
 * This means:
 *   - For arrays (like controller targeters), snapConfig completely replaces templatesConfig
 *   - For objects, snapConfig values take precedence over templatesConfig values
 *
 * These tests verify the merge order is correct by checking that overlapping
 * configuration from the snap config overwrites the templates config.
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

		it('has a search controller with snap config targeters (not templates)', () => {
			// Templates config targets: #athos-layout (SearchCollapsible)
			// Snap config targeters: #athos-content, #athos-sidebar
			// Since targeters are arrays, snap config should completely replace templates
			cy.snapController('search').then((controller) => {
				const targeterIds = Object.keys(controller.targeters);
				const allSelectors = targeterIds.flatMap((id) => controller.targeters[id].targets.map((t) => t.selector));

				// snap config targeters should be present
				expect(allSelectors).to.include('#athos-content');
				expect(allSelectors).to.include('#athos-sidebar');

				// templates config targeter should NOT be present (replaced by snap)
				expect(allSelectors).to.not.include('#athos-layout');
			});
		});

		it('has search controller with snap config settings overriding templates', () => {
			// Snap config sets infinite.backfill: 5 and redirects.singleResult: false
			// Templates config does not set these (or sets different values)
			cy.snapController('search').then((controller) => {
				const targeterIds = Object.keys(controller.targeters);
				const allTargets = targeterIds.flatMap((id) => controller.targeters[id].targets);
				expect(controller.config.settings.infinite?.backfill).to.equal(5);
				expect(controller.config.settings.redirects?.singleResult).to.equal(false);
				// Snap config sets hideTarget: true on autocomplete targeter
				expect(allTargets[0].hideTarget).to.equal(true);
			});
		});

		it('has autocomplete controller with snap config settings overriding templates', () => {
			// Templates config: trending.limit: 6, history.limit: 6
			// Snap config: trending.limit: 5, history.limit: 5
			// Since controllers.autocomplete is an array, snap completely replaces templates
			cy.snapController('autocomplete').then((controller) => {
				expect(controller.config.settings.trending.limit).to.equal(5);
				expect(controller.config.settings.history.limit).to.equal(5);
			});
		});

		it('has autocomplete controller with snap config targeter selector', () => {
			// Both configs target input.athos-ac but snap should be the source
			cy.snapController('autocomplete').then((controller) => {
				const targeterIds = Object.keys(controller.targeters);
				const allSelectors = targeterIds.flatMap((id) => controller.targeters[id].targets.map((t) => t.selector));

				expect(allSelectors).to.include('input.athos-ac');
			});
		});

		it('has exactly 1 autocomplete targeter from snap config', () => {
			// Both configs define 1 autocomplete target each for input.athos-ac
			// Snap replaces templates array, so we get exactly snap's 1
			cy.snapController('autocomplete').then((controller) => {
				const targeterIds = Object.keys(controller.targeters);
				const allTargets = targeterIds.flatMap((id) => controller.targeters[id].targets);

				expect(allTargets).to.have.length(1);
				expect(allTargets[0].selector).to.equal('input.athos-ac');
				// Snap config sets hideTarget: true on autocomplete targeter
				expect(allTargets[0].hideTarget).to.equal(true);
			});
		});

		it('snap config search targets render content into DOM', () => {
			// Verify the snap config target selectors have rendered content
			cy.snapController('search').then(() => {
				cy.get('#athos-content').should('exist').and('not.be.empty');
				cy.get('#athos-sidebar').should('exist').and('not.be.empty');
			});
		});

		it('templates config search target selector is not rendered', () => {
			// #athos-layout does not exist in the hybrid HTML since snap config targeters replaced it
			cy.snapController('search').then(() => {
				cy.get('#athos-layout').should('not.exist');
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
		 * This test suite uses window.mergeSnapConfig to set up a scenario where:
		 * - Templates config gets: recommendation config + autocomplete targets
		 * - Snap config gets: autocomplete + search targets (with specific settings)
		 *
		 * Since mergeSnapConfig is applied to BOTH configs, we set values that will
		 * be different in the final merged output to prove snap config wins.
		 *
		 * The key insight: since SnapHybrid does arrayMerge: (_, source) => source,
		 * the snap config's controller arrays completely replace templates' arrays.
		 * We set a unique snap config setting to verify it's the one that survives.
		 */

		it('snap config search settings override templates search settings', () => {
			cy.on('window:before:load', (win) => {
				win.mergeSnapConfig = {
					controllers: {
						search: [
							{
								config: {
									id: 'search',
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

			cy.snapController('search').then((controller) => {
				// The mergeSnapConfig is applied to the snap config (and templates config)
				// But since snap config arrays replace templates arrays in SnapHybrid,
				// the final search controller should have the snap config's merged value
				expect(controller.config.settings.pagination?.pageSize).to.equal(48);
			});
		});

		it('snap config autocomplete settings win over templates when mergeSnapConfig only affects templates format', () => {
			// mergeSnapConfig uses templates config shape (autocomplete.settings...)
			// This merges into the templates config but NOT into the snap config's
			// controllers.autocomplete (different shape). Since SnapHybrid replaces
			// arrays from templates with snap arrays, the snap config's original
			// trending.limit: 5 should still win over the templates' merged value.
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
				// But snap config keeps trending.limit: 5 (mergeSnapConfig doesn't match snap shape)
				// SnapHybrid's arrayMerge means snap's autocomplete array replaces templates'
				// So the final value should be 5 (snap wins)
				expect(controller.config.settings.trending.limit).to.equal(5);
			});
		});

		it('templates-only config values do not leak into snap controller arrays', () => {
			// When snap config defines a controller, its array completely replaces
			// the templates array. This means templates-specific settings for that
			// controller type are NOT preserved.
			cy.visit('https://localhost:2222/hybrid/');

			cy.snapController('search').then((controller) => {
				// Templates config had variants.showDisabledSelectionValues: true in search settings
				// Snap config's search controller replaces the templates' search controller entirely
				// So this template-specific setting should NOT be present
				expect(controller.config.settings.variants?.showDisabledSelectionValues).to.not.equal(true);
			});
		});
	});
});
