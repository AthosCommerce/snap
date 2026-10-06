import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

// Mock the heavy molecules the embedded QuickviewLayout renders — these tests assert the
// chat wrapper's composition (layout embedding, back banner, chat presentation), not the
// internals of the slideshow/variant atoms.
jest.mock('../../Molecules/Slideshow', () => ({
	Slideshow: () => <div className="ss__slideshow-mock" />,
}));

jest.mock('../../Molecules/VariantSelection', () => ({
	VariantSelection: ({ selection, type }: any) => <div className="ss__variant-selection-mock" data-field={selection?.field} data-type={type ?? ''} />,
}));

jest.mock('../../Molecules/OverlayBadge', () => ({
	OverlayBadge: ({ children }: any) => <div className="ss__overlay-badge-mock">{children}</div>,
}));

jest.mock('../../Molecules/CalloutBadge', () => ({
	CalloutBadge: () => <div className="ss__callout-badge-mock" />,
}));

import { ThemeProvider } from '../../../providers';
import { chatAccentThemeComponents } from '../../Organisms/Chat/components/chatAccentTheme';
import { ChatQuickview } from './ChatQuickview';

describe('ChatQuickview Component', () => {
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
		const rendered = render(<ChatQuickview chatItem={{ id: '1', messageType: 'general', sourceProduct: {} } as any} controller={controller} />);
		expect(rendered.container.querySelector('.ss__chat-quickview')).toBeNull();
	});

	it('renders nothing when the controller has no quickview manager', () => {
		const controller = makeController();
		controller.quickviewManager = undefined;
		const rendered = render(<ChatQuickview chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: {} } as any} controller={controller} />);
		expect(rendered.container.querySelector('.ss__chat-quickview')).toBeNull();
		expect(controller.log.warn).toHaveBeenCalled();
	});

	it('renders an inline QuickviewLayout from the quickview manager store', () => {
		const controller = makeController({ product: makeProduct() });
		const rendered = render(
			<ChatQuickview chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any} controller={controller} />
		);

		expect(rendered.container.querySelector('.ss__chat-quickview')).not.toBeNull();
		expect(rendered.container.querySelector('.ss__quickview')).not.toBeNull();
		expect(rendered.getByText('Wool Hat')).toBeInTheDocument();

		// inline mode: no dialog semantics, no close button (the chat window owns dismissal)
		expect(rendered.container.querySelector('[role="dialog"]')).toBeNull();
		expect(rendered.container.querySelector('.ss__quickview__close')).toBeNull();
	});

	it('renders the chat action modules in the default layout', () => {
		const controller = makeController({ product: makeProduct() });
		const rendered = render(
			<ChatQuickview chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any} controller={controller} />
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
			<ChatQuickview chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any} controller={controller} />
		);
		expect(rendered.container.querySelector('.ss__quickview__loading')).not.toBeNull();
	});

	it('renders a back banner when the message came from a comparison and backs out on click', () => {
		const sourceMessage = { id: 'source-1', messageType: 'productComparison' };
		const controller = makeController({ product: makeProduct() }, { chat: [sourceMessage] });
		const rendered = render(
			<ChatQuickview
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' }, sourceMessageId: 'source-1' } as any}
				controller={controller}
			/>
		);

		const back = rendered.container.querySelector('.ss__chat-quickview__header__back');
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
			<ChatQuickview
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' }, sourceMessageId: 'source-1' } as any}
				controller={controller}
			/>
		);

		expect(rendered.container.querySelector('.ss__chat-quickview__header__back')).toHaveTextContent('Back to inspiration');
	});

	it('renders non-swatch selections as tile lists under their selection labels', () => {
		const product = makeProduct({
			variants: {
				selections: [
					{ field: 'color', label: 'Color', type: 'swatches', values: [{ value: 'black' }, { value: 'brown' }], select: jest.fn() },
					{ field: 'size', label: 'Size', type: 'dropdown', values: [{ value: 'S' }, { value: 'M' }, { value: 'L' }], select: jest.fn() },
				],
			},
		});
		const controller = makeController({ product });
		const rendered = render(
			<ChatQuickview chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any} controller={controller} />
		);

		const titles = rendered.container.querySelectorAll('.ss__quickview__variant-title');
		expect(titles[0].textContent).toBe('Color');
		expect(titles[1].textContent).toBe('Size');

		const selections = rendered.container.querySelectorAll('.ss__variant-selection-mock');
		expect(selections[0].getAttribute('data-type')).toBe('swatches');
		expect(selections[1].getAttribute('data-type')).toBe('list');
	});

	it('gives the action buttons their icons through named theme selectors', () => {
		const controller = makeController({ product: makeProduct() });
		const rendered = render(
			<ThemeProvider theme={{ type: 'templates', components: {} } as any}>
				<ChatQuickview chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any} controller={controller} />
			</ThemeProvider>
		);

		expect(rendered.container.querySelector('.ss__quickview__add-to-cart .ss__icon--cart')).not.toBeNull();
		expect(rendered.container.querySelector('.ss__quickview__similar .ss__icon--search-thin')).not.toBeNull();
		expect(rendered.container.querySelector('.ss__quickview__discuss .ss__icon--chat')).not.toBeNull();
	});

	it('lets the Chat accent theme recolor the action buttons', () => {
		const controller = makeController({
			product: makeProduct({
				display: { mappings: { core: { name: 'Wool Hat', price: 25, url: '/wool-hat' } }, attributes: {} },
				mappings: { core: { name: 'Wool Hat', price: 25, url: '/wool-hat' } },
			}),
		});
		const theme = {
			components: chatAccentThemeComponents({
				primaryAccentColorBg: 'rgb(255, 0, 0)',
				primaryAccentColorFg: 'rgb(0, 0, 255)',
				secondaryAccentColorBg: 'rgb(0, 128, 0)',
				secondaryAccentColorFg: 'rgb(255, 255, 0)',
			}),
		};
		const rendered = render(
			<ChatQuickview
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any}
				controller={controller}
				theme={theme}
			/>
		);

		const addToCart = rendered.container.querySelector('.ss__quickview__add-to-cart')!;
		expect(getComputedStyle(addToCart).background).toBe('rgb(255, 0, 0)');
		expect(getComputedStyle(addToCart).color).toBe('rgb(0, 0, 255)');

		const discuss = rendered.container.querySelector('.ss__quickview__discuss')!;
		expect(getComputedStyle(discuss).background).toBe('rgb(0, 128, 0)');
		expect(getComputedStyle(discuss).color).toBe('rgb(255, 255, 0)');

		const moreInfo = rendered.container.querySelector('.ss__quickview__more-info')!;
		expect(getComputedStyle(moreInfo).background).toBe('rgb(0, 128, 0)');
		expect(getComputedStyle(moreInfo).color).toBe('rgb(255, 255, 0)');
	});

	it('renders More info beside add to cart and tracks a clickThrough before navigating to the product page', () => {
		const product = makeProduct({
			display: { mappings: { core: { name: 'Wool Hat', price: 25, url: '/wool-hat' } }, attributes: {} },
			mappings: { core: { name: 'Wool Hat', price: 25, url: '/wool-hat' } },
		});
		const controller = makeController({ product });
		const rendered = render(
			<ThemeProvider theme={{ type: 'templates', components: {} } as any}>
				<ChatQuickview chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any} controller={controller} />
			</ThemeProvider>
		);

		expect(rendered.container.querySelector('.ss__quickview__title')!.closest('a')).toBeNull();

		const moreInfo = rendered.container.querySelector('.ss__quickview__add-to-cart')!.nextElementSibling as HTMLElement;
		expect(moreInfo).toHaveClass('ss__quickview__more-info');
		expect(moreInfo).toHaveTextContent('More info');
		expect(moreInfo.querySelector('.ss__icon--info')).not.toBeNull();
		// same banner button treatment as Similar / Discuss
		expect(getComputedStyle(moreInfo).background).toBe('rgb(0, 0, 0)');
		expect(getComputedStyle(moreInfo).color).toBe('rgb(255, 255, 255)');

		const location = window.location;
		Object.defineProperty(window, 'location', { value: { href: location.href }, writable: true, configurable: true });
		moreInfo.click();
		expect(controller.quickviewManager.track.product.clickThrough).toHaveBeenCalledWith(expect.anything(), product);
		expect((window.location as any).href).toBe('/wool-hat');
		Object.defineProperty(window, 'location', { value: location, writable: true, configurable: true });
	});

	it('passes a custom layout through to the QuickviewLayout', () => {
		const controller = makeController({ product: makeProduct() });
		const rendered = render(
			<ChatQuickview
				chatItem={{ id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any}
				controller={controller}
				layout={[['productDetail.mappings.core.name']]}
			/>
		);

		expect(rendered.getByText('Wool Hat')).toBeInTheDocument();
		// custom layout omits the button modules
		expect(rendered.container.querySelector('.ss__quickview__add-to-cart')).toBeNull();
	});

	it('groups the detail rows into a scrolling column only for the default layout', () => {
		const controller = makeController({
			product: makeProduct({
				display: { mappings: { core: { name: 'Wool Hat', price: 25, url: '/wool-hat' } }, attributes: {} },
				mappings: { core: { name: 'Wool Hat', price: 25, url: '/wool-hat' } },
			}),
		});
		const chatItem = { id: '1', messageType: 'productQuery', sourceProduct: { id: 'prod1' } } as any;

		const withDefault = render(<ChatQuickview chatItem={chatItem} controller={controller} />);
		const defaultRoot = withDefault.container.querySelector('.ss__chat-quickview')!;
		expect(defaultRoot).toHaveClass('ss__chat-quickview--default-layout');
		expect(getComputedStyle(defaultRoot).height).toBe('100%');
		const detailsRow = withDefault.container.querySelector('.ss__quickview__content > .ss__quickview__row:first-of-type + .ss__quickview__row')!;
		expect(getComputedStyle(detailsRow).overflowY).toBe('auto');

		const withCustom = render(
			<ChatQuickview chatItem={chatItem} controller={controller} layout={[['productDetail.mappings.core.name'], ['productDetailTable']]} />
		);
		const customRoot = withCustom.container.querySelector('.ss__chat-quickview')!;
		expect(customRoot).not.toHaveClass('ss__chat-quickview--default-layout');
		expect(getComputedStyle(customRoot).height).not.toBe('100%');
		const customSecondRow = withCustom.container.querySelector('.ss__quickview__content > .ss__quickview__row:first-of-type + .ss__quickview__row')!;
		expect(getComputedStyle(customSecondRow).overflowY).not.toBe('auto');
	});
});
