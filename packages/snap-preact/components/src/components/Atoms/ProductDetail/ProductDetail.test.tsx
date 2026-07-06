import { h } from 'preact';

import { render } from '@testing-library/preact';

import { ThemeProvider } from '../../../providers';
import { ProductDetail, getProductFieldValue, renderDetailValue, isCorePriceField } from './ProductDetail';

const mockResult = {
	mappings: {
		core: {
			name: 'Sample Product',
			description: '<p>A <strong>rich</strong> description.</p>',
			price: 19.99,
			msrp: 29.99,
		},
	},
	attributes: {
		brand: 'Acme',
		colors: ['Red', 'Blue'],
		price: 5,
	},
} as any;

describe('ProductDetail Component', () => {
	it('renders a core mapping field as text', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'mappings.core.name'} />);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el).toBeInTheDocument();
		expect(el).toHaveTextContent('Sample Product');
	});

	it('resolves a field from attributes when the path points there', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'attributes.brand'} />);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el).toHaveTextContent('Acme');
	});

	it('comma-joins array values', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'attributes.colors'} />);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el).toHaveTextContent('Red, Blue');
	});

	it('renders raw HTML when html is true', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'mappings.core.description'} html={true} />);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el.querySelector('strong')).toBeInTheDocument();
	});

	it('applies the name modifier classname', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'mappings.core.name'} name={'title'} />);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el).toHaveClass('ss__product-detail--title');
	});

	it('derives its name from the field final segment so named theme selectors apply', () => {
		const globalTheme = {
			type: 'templates',
			components: {
				['productDetail.brand' as 'productDetail']: {
					className: 'named-classy',
				},
			},
		} as any;
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<ProductDetail result={mockResult} field={'attributes.brand'} />
			</ThemeProvider>
		);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el).toHaveClass('named-classy');
	});

	it('falls back to the path final segment for the modifier classname', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'mappings.core.name'} />);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el).toHaveClass('ss__product-detail--name');
	});

	it('renders nothing when the resolved value is empty', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'mappings.core.missing'} />);
		expect(rendered.container.querySelector('.ss__product-detail')).not.toBeInTheDocument();
	});

	it('renders a core price field using the Price component', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'mappings.core.price'} />);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el.querySelector('.ss__price')).toBeInTheDocument();
		expect(el).toHaveTextContent('$19.99');
	});

	it('renders a bare core price key using the Price component', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'price'} />);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el.querySelector('.ss__price')).toBeInTheDocument();
		expect(el).toHaveTextContent('$19.99');
	});

	it('renders a core msrp field using the Price component', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'mappings.core.msrp'} />);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el.querySelector('.ss__price')).toBeInTheDocument();
		expect(el).toHaveTextContent('$29.99');
	});

	it('does not use the Price component for a non-core price field', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'attributes.price'} />);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el.querySelector('.ss__price')).not.toBeInTheDocument();
		expect(el).toHaveTextContent('5');
	});

	it('passes through an external className', () => {
		const rendered = render(<ProductDetail result={mockResult} field={'mappings.core.name'} className={'ss__product-quickview__title'} />);
		const el = rendered.container.querySelector('.ss__product-detail')!;
		expect(el).toHaveClass('ss__product-quickview__title');
	});
});

describe('ProductDetail helpers', () => {
	it('getProductFieldValue resolves an explicit core path', () => {
		const result = { mappings: { core: { color: 'core-red' } }, attributes: { color: 'attr-red' } } as any;
		expect(getProductFieldValue(result, 'mappings.core.color')).toBe('core-red');
		expect(getProductFieldValue(result, 'attributes.color')).toBe('attr-red');
	});

	it('getProductFieldValue falls back to core-then-attributes for a bare key', () => {
		const result = { mappings: { core: { color: 'core-red' } }, attributes: { brand: 'Acme' } } as any;
		expect(getProductFieldValue(result, 'color')).toBe('core-red');
		expect(getProductFieldValue(result, 'brand')).toBe('Acme');
	});

	it('getProductFieldValue prefers the display view', () => {
		const result = { display: { mappings: { core: { name: 'variant' } } }, mappings: { core: { name: 'base' } } } as any;
		expect(getProductFieldValue(result, 'mappings.core.name')).toBe('variant');
	});

	it('renderDetailValue formats arrays and objects', () => {
		expect(renderDetailValue(['a', 'b'])).toBe('a, b');
		expect(renderDetailValue({ a: 1 })).toBe('{"a":1}');
		expect(renderDetailValue(undefined)).toBe('');
	});

	it('isCorePriceField detects bare and explicit core price paths', () => {
		expect(isCorePriceField('price')).toBe(true);
		expect(isCorePriceField('msrp')).toBe(true);
		expect(isCorePriceField('mappings.core.price')).toBe(true);
		expect(isCorePriceField('display.mappings.core.msrp')).toBe(true);
	});

	it('isCorePriceField excludes non-core and non-price fields', () => {
		expect(isCorePriceField('attributes.price')).toBe(false);
		expect(isCorePriceField('mappings.core.name')).toBe(false);
		expect(isCorePriceField('name')).toBe(false);
		expect(isCorePriceField('')).toBe(false);
	});
});
