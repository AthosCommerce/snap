import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

// Mock the heavy molecules the embedded QuickviewLayout renders — these tests assert the
// chat wrapper's composition (layout embedding, back banner, variant preselection), not the
// internals of the slideshow/variant atoms.
jest.mock('../../Molecules/Slideshow', () => {
	const { h: hh } = require('preact');
	return {
		Slideshow: ({ slides, className }: any) =>
			hh(
				'div',
				{ className: `ss__slideshow-mock ${className || ''}` },
				(slides || []).map((slide: any, i: number) => hh('img', { key: i, src: slide?.src, alt: slide?.alt }))
			),
	};
});

jest.mock('../../Molecules/VariantSelection', () => {
	const { h: hh } = require('preact');
	return {
		VariantSelection: ({ selection }: any) => hh('div', { className: 'ss__variant-selection-mock', 'data-field': selection?.field }),
	};
});

jest.mock('../../Molecules/OverlayBadge', () => {
	const { h: hh } = require('preact');
	return {
		OverlayBadge: ({ children }: any) => hh('div', { className: 'ss__overlay-badge-mock' }, children),
	};
});

jest.mock('../../Molecules/CalloutBadge', () => {
	const { h: hh } = require('preact');
	return {
		CalloutBadge: () => hh('div', { className: 'ss__callout-badge-mock' }),
	};
});

import { ChatProductQueryMessage } from './ChatProductQueryMessage';

describe('ChatProductQueryMessage Component', () => {
	const makeController = (storeOverrides: any = {}, chatOverrides: any = {}) => {
		const quickviewStore = {
			isOpen: true,
			loading: false,
			product: undefined,
			resolvedConfig: undefined,
			error: undefined,
			...storeOverrides,
		};
		const quickviewManager: any = {
			type: 'quickview',
			store: quickviewStore,
			open: jest.fn(),
			close: jest.fn(),
			addToCart: jest.fn(),
			track: { product: { clickThrough: jest.fn(), click: jest.fn(), impression: jest.fn(), addToCart: jest.fn() } },
		};
		const controller: any = {
			type: 'chat',
			store: {
				currentChat: { chat: [], popProductQueryMessage: jest.fn(), ...chatOverrides },
				features: { similarProducts: { enabled: true } },
			},
			log: { warn: jest.fn(), error: jest.fn() },
			track: { product: { click: jest.fn(), addToCart: jest.fn(), impression: jest.fn(), clickThrough: jest.fn() } },
			addToCart: jest.fn(),
			productSimilar: jest.fn(),
			productQuery: jest.fn(),
			closeProductQuickview: jest.fn(),
			quickviewManager,
		};
		quickviewManager.sourceController = controller;
		return controller;
	};

	const makeProduct = (overrides: any = {}) => ({
		id: 'prod1',
		display: { mappings: { core: { name: 'Wool Hat', price: 25 } }, attributes: {} },
		mappings: { core: { name: 'Wool Hat', price: 25 } },
		attributes: {},
		variants: { selections: [] },
		...overrides,
	});

	it('renders nothing for non-productQuery messages', () => {
		const controller = makeController();
		const rendered = render(
			<ChatProductQueryMessage chatItem={{ id: '1', messageType: 'general', sourceProduct: {} } as any} controller={controller} />
		);
		expect(rendered.container.querySelector('.ss__chat-product-query-message')).toBeNull();
	});

	it('renders nothing when the controller has no quickview manager', () => {
		const controller = makeController();
		controller.quickviewManager = undefined;
		const rendered = render(
			<ChatProductQueryMessage chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: {} } as any} controller={controller} />
		);
		expect(rendered.container.querySelector('.ss__chat-product-query-message')).toBeNull();
		expect(controller.log.warn).toHaveBeenCalled();
	});

	it('renders an inline QuickviewLayout from the quickview manager store', () => {
		const controller = makeController({ product: makeProduct() });
		const rendered = render(
			<ChatProductQueryMessage chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any} controller={controller} />
		);

		expect(rendered.container.querySelector('.ss__chat-product-query-message')).not.toBeNull();
		expect(rendered.container.querySelector('.ss__quickview-layout')).not.toBeNull();
		expect(rendered.getByText('Wool Hat')).toBeInTheDocument();

		// inline mode: no dialog semantics, no close button (the chat window owns dismissal)
		expect(rendered.container.querySelector('[role="dialog"]')).toBeNull();
		expect(rendered.container.querySelector('.ss__quickview__close')).toBeNull();
	});

	it('renders the chat action modules in the default layout', () => {
		const controller = makeController({ product: makeProduct() });
		const rendered = render(
			<ChatProductQueryMessage chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any} controller={controller} />
		);

		expect(rendered.container.querySelector('.ss__quickview__add-to-cart')).not.toBeNull();
		expect(rendered.container.querySelector('.ss__quickview__similar')).not.toBeNull();
		expect(rendered.container.querySelector('.ss__quickview__discuss')).not.toBeNull();

		fireEvent.click(rendered.container.querySelector('.ss__quickview__similar')!);
		expect(controller.productSimilar).toHaveBeenCalled();

		fireEvent.click(rendered.container.querySelector('.ss__quickview__discuss')!);
		expect(controller.productQuery).toHaveBeenCalled();
	});

	it('renders the quickview loading state while the product loads', () => {
		const controller = makeController({ loading: true, product: undefined });
		const rendered = render(
			<ChatProductQueryMessage chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any} controller={controller} />
		);
		expect(rendered.container.querySelector('.ss__quickview__loading')).not.toBeNull();
	});

	it('renders a back banner when the message came from a comparison and backs out on click', () => {
		const sourceMessage = { id: 'source-1', messageType: 'productComparison' };
		const controller = makeController({ product: makeProduct() }, { chat: [sourceMessage] });
		const rendered = render(
			<ChatProductQueryMessage
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' }, sourceMessageId: 'source-1' } as any}
				controller={controller}
			/>
		);

		const back = rendered.container.querySelector('.ss__chat-product-query-message__header__back');
		expect(back).not.toBeNull();
		expect(back).toHaveTextContent('Back to comparison');

		fireEvent.click(back!);
		expect(controller.store.currentChat.popProductQueryMessage).toHaveBeenCalledWith('source-1');
		expect(controller.closeProductQuickview).toHaveBeenCalled();
	});

	it('renders a back banner when the message came from inspiration', () => {
		const sourceMessage = { id: 'source-1', messageType: 'inspirationResult' };
		const controller = makeController({ product: makeProduct() }, { chat: [sourceMessage] });
		const rendered = render(
			<ChatProductQueryMessage
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' }, sourceMessageId: 'source-1' } as any}
				controller={controller}
			/>
		);

		expect(rendered.container.querySelector('.ss__chat-product-query-message__header__back')).toHaveTextContent('Back to inspiration');
	});

	it('auto-selects the variant whose uid matches the clicked result id', () => {
		const select = jest.fn();
		const product = makeProduct({
			variants: {
				data: [
					{ available: true, mappings: { core: { uid: 'variant-black' } }, options: { color: { value: 'black' } } },
					{ available: true, mappings: { core: { uid: 'variant-brown' } }, options: { color: { value: 'brown' } } },
				],
				selections: [
					{
						field: 'color',
						values: [
							{ value: 'black', available: true },
							{ value: 'brown', available: true },
						],
						selected: undefined,
						select,
					},
				],
			},
		});
		const controller = makeController({ product });
		render(
			<ChatProductQueryMessage
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'variant-brown' } } as any}
				controller={controller}
			/>
		);
		expect(select).toHaveBeenCalledWith('brown');
	});

	it('falls back to the first available value when no variant uid matches', () => {
		const select = jest.fn();
		const product = makeProduct({
			variants: {
				data: [
					{ available: false, mappings: { core: { uid: 'variant-black' } }, options: { color: { value: 'black' } } },
					{ available: true, mappings: { core: { uid: 'variant-brown' } }, options: { color: { value: 'brown' } } },
				],
				selections: [
					{
						field: 'color',
						values: [
							{ value: 'black', available: false },
							{ value: 'brown', available: true },
						],
						selected: undefined,
						select,
					},
				],
			},
		});
		const controller = makeController({ product });
		render(
			<ChatProductQueryMessage
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'no-such-variant' } } as any}
				controller={controller}
			/>
		);
		expect(select).toHaveBeenCalledWith('brown');
	});

	it('does not reselect when a selection already has a value', () => {
		const select = jest.fn();
		const product = makeProduct({
			variants: {
				data: [{ available: true, mappings: { core: { uid: 'variant-black' } }, options: { color: { value: 'black' } } }],
				selections: [
					{
						field: 'color',
						values: [{ value: 'black', available: true }],
						selected: { value: 'black' },
						select,
					},
				],
			},
		});
		const controller = makeController({ product });
		render(
			<ChatProductQueryMessage
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'variant-black' } } as any}
				controller={controller}
			/>
		);
		expect(select).not.toHaveBeenCalled();
	});

	it('passes a custom layout through to the QuickviewLayout', () => {
		const controller = makeController({ product: makeProduct() });
		const rendered = render(
			<ChatProductQueryMessage
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any}
				controller={controller}
				layout={[['productDetail.mappings.core.name']]}
			/>
		);

		expect(rendered.getByText('Wool Hat')).toBeInTheDocument();
		// custom layout omits the button modules
		expect(rendered.container.querySelector('.ss__quickview__add-to-cart')).toBeNull();
	});
});
