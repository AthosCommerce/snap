import { h } from 'preact';

import { render } from '@testing-library/preact';

import { ProductDetailTable } from './ProductDetailTable';

const mockResult = {
	mappings: {
		core: {
			name: 'Sample Product',
			price: 19.99,
			imageUrl: 'https://example.com/product.jpg',
		},
	},
	attributes: {
		brand: 'Acme',
		material: 'Cotton',
		colors: ['Red', 'Blue'],
		rating: 4.5,
		description: '<p>A <strong>fine</strong> product</p>',
	},
} as any;

describe('ProductDetailTable Component', () => {
	it('renders a row per detail that resolves to a value', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[{ field: 'brand' }, { field: 'material' }, { field: 'colors' }]} />);
		const table = rendered.container.querySelector('.ss__product-detail-table')!;
		expect(table).toBeInTheDocument();
		expect(table.querySelectorAll('tr')).toHaveLength(3);
	});

	it('uses the provided labels and falls back to the field key', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[{ field: 'brand', label: 'Brand' }, { field: 'material' }]} />);
		const headers = Array.from(rendered.container.querySelectorAll('th')).map((th) => th.textContent);
		expect(headers).toContain('Brand');
		expect(headers).toContain('material');
	});

	it('resolves explicit dot-path fields', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[{ field: 'mappings.core.name' }, { field: 'attributes.brand' }]} />);
		const table = rendered.container.querySelector('.ss__product-detail-table')!;
		expect(table).toHaveTextContent('Sample Product');
		expect(table).toHaveTextContent('Acme');
	});

	it('renders the resolved (comma-joined) values', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[{ field: 'colors' }]} />);
		const table = rendered.container.querySelector('.ss__product-detail-table')!;
		expect(table).toHaveTextContent('Red, Blue');
	});

	it('renders a price detail with the Price component', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[{ field: 'price', type: 'price' }]} />);
		const price = rendered.container.querySelector('td .ss__price');
		expect(price).toBeInTheDocument();
		expect(price).toHaveTextContent('19.99');
	});

	it('renders a rating detail with the Rating component', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[{ field: 'rating', type: 'rating' }]} />);
		expect(rendered.container.querySelector('td .ss__rating')).toBeInTheDocument();
	});

	it('renders an image detail with the Image component', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[{ field: 'imageUrl', type: 'image', label: 'Product Image' }]} />);
		const img = rendered.container.querySelector('td .ss__image img') as HTMLImageElement;
		expect(img).toBeInTheDocument();
		expect(img.getAttribute('src')).toBe('https://example.com/product.jpg');
		expect(img.getAttribute('alt')).toBe('Product Image');
	});

	it('renders an html detail as rich HTML', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[{ field: 'description', type: 'html' }]} />);
		expect(rendered.container.querySelector('td strong')).toHaveTextContent('fine');
	});

	it('falls back to text rendering when a typed value does not fit its type', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[{ field: 'brand', type: 'price' }]} />);
		const cell = rendered.container.querySelector('td')!;
		expect(cell.querySelector('.ss__price')).not.toBeInTheDocument();
		expect(cell).toHaveTextContent('Acme');
	});

	it('skips details with no value', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[{ field: 'brand' }, { field: 'missing' }]} />);
		expect(rendered.container.querySelectorAll('tr')).toHaveLength(1);
	});

	it('renders nothing when no details resolve', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[{ field: 'missing' }]} />);
		expect(rendered.container.querySelector('.ss__product-detail-table')).not.toBeInTheDocument();
	});

	it('renders nothing when details is empty', () => {
		const rendered = render(<ProductDetailTable result={mockResult} details={[]} />);
		expect(rendered.container.querySelector('.ss__product-detail-table')).not.toBeInTheDocument();
	});
});
