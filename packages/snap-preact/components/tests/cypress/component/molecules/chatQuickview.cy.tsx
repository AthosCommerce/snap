import { h } from 'preact';
import { mount } from 'cypress/react';
import { ChatQuickview } from '../../../../src/components/Molecules/ChatQuickview';

const makeController = () => {
	const controller: any = {
		type: 'chat',
		store: {
			currentChat: { chat: [], popProductQueryMessage: () => undefined },
			features: { similarProducts: { enabled: true } },
		},
		log: { warn: () => undefined, error: () => undefined },
		track: { product: { click: () => undefined, addToCart: () => undefined, clickThrough: () => undefined, impression: () => undefined } },
		addToCart: () => undefined,
		productSimilar: () => undefined,
		productQuery: () => undefined,
		closeProductQuickview: () => undefined,
	};
	controller.quickviewManager = {
		type: 'quickview',
		store: {
			isOpen: true,
			loading: false,
			product: {
				id: 'hat',
				display: { mappings: { core: { name: 'Wool Hat', price: 25 } }, attributes: {} },
				mappings: { core: { name: 'Wool Hat', price: 25 } },
				attributes: {},
				variants: { selections: [] },
			},
			resolvedConfig: undefined,
			error: undefined,
		},
		open: () => undefined,
		close: () => undefined,
		addToCart: () => undefined,
		track: { product: { click: () => undefined, addToCart: () => undefined, clickThrough: () => undefined, impression: () => undefined } },
		sourceController: controller,
	};
	return controller;
};

describe('ChatQuickview Component', () => {
	// jsdom resolves styles by source order and ignores specificity, so the panel's override of
	// QuickviewLayout's modal content sizing can only be verified in a real browser
	it("overrides QuickviewLayout's modal content sizing for the inline chat panel", () => {
		cy.viewport(1280, 960);
		mount(
			<div style={{ width: '1000px' }}>
				<ChatQuickview chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'hat' } } as any} controller={makeController()} />
			</div>
		);

		cy.get('.ss__chat-quickview .ss__quickview__content').should(($content) => {
			const styles = getComputedStyle($content[0]);
			expect(styles.paddingTop).to.equal('0px');
			expect(styles.minWidth).to.equal('auto');
			expect(styles.maxWidth).to.equal('100%');
			// spans the panel rather than QuickviewLayout's 880px desktop cap
			expect($content[0].getBoundingClientRect().width).to.equal(1000);
		});
	});
});
