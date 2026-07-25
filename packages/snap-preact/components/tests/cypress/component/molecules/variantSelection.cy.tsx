import { VariantSelection } from '../../../../src/components/Molecules/VariantSelection';
import { mount } from 'cypress/react';
import { RecommendationStore, RecommendationStoreConfig, VariantSelection as VariantSelectionType } from '@athoscommerce/snap-store-mobx';
import { UrlManager, QueryStringTranslator, reactLinker } from '@athoscommerce/snap-url-manager';
import { Tracker } from '@athoscommerce/snap-tracker';
import { EventManager } from '@athoscommerce/snap-event-manager';
import { Profiler } from '@athoscommerce/snap-profiler';
import { Logger } from '@athoscommerce/snap-logger';
import { Client } from '@athoscommerce/snap-client';
import { RecommendationController } from '@athoscommerce/snap-controller';
import meta from '../../fixtures/meta.json';
import json from '../../fixtures/results-bundle.json';
import profile from '../../fixtures/profile-bundle.json';

const globals = { siteId: '8uyt2m' };

const recommendConfig: RecommendationStoreConfig = {
	id: 'search',
	tag: 'bundley',
	globals: {
		products: ['C-AD-W1-1869P'],
	},
};

const urlManager = new UrlManager(new QueryStringTranslator(), reactLinker);
const services = {
	urlManager,
};

const client = new Client(globals, {});

const controller = new RecommendationController(recommendConfig, {
	client: client,
	store: new RecommendationStore(recommendConfig, services),
	urlManager,
	eventManager: new EventManager(),
	profiler: new Profiler(),
	logger: new Logger(),
	tracker: new Tracker(globals, { mode: 'development' }),
});

let selection: VariantSelectionType;

describe('VariantSelection Component', async () => {
	before(() => {
		cy.intercept('*recommend*', json);
		cy.intercept('*profile*', profile);
		cy.intercept('*meta*', meta);
	});

	before(async () => {
		await controller.search();

		selection = controller.store.results[0].variants?.selections[1]!;
	});

	describe('Dropdown VariantSelection', () => {
		it('renders as dropdown by default', () => {
			mount(<VariantSelection selection={selection} />);
			cy.get('.ss__variant-selection').should('exist');
			cy.get('.ss__variant-selection--dropdown').should('exist');
		});

		it('renders as dropdown with type', () => {
			mount(<VariantSelection selection={selection} type={'dropdown'} />);
			cy.get('.ss__variant-selection').should('exist');
			cy.get('.ss__variant-selection--dropdown').should('exist');

			cy.get('.ss__variant-selection__option').should('not.have.length');

			cy.get('.ss__dropdown__button-wrapper').click();

			cy.get('.ss__variant-selection__option').should('have.length', selection.values.length);
		});
	});

	describe('List VariantSelection', () => {
		it('renders as list with type', () => {
			mount(<VariantSelection selection={selection} type={'list'} />);
			cy.get('.ss__variant-selection__list').should('exist');
			cy.get('.ss__list__option').should('have.length', selection.values.length);
		});
	});

	describe('swatches VariantSelection', () => {
		it('renders as swatch with type', () => {
			selection = controller.store.results[0].variants?.selections[0]!;
			mount(<VariantSelection selection={selection} type={'swatches'} />);
			cy.get('.ss__variant-selection__swatches').should('exist');
			cy.get('.ss__swatches__slideshow__swatch').should('have.length', selection.values.length);
		});
	});
});
