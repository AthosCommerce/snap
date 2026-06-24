import { h } from 'preact';

import { render } from '@testing-library/preact';

import { ProductDetailTable } from './ProductDetailTable';

const mockResult = {
	mappings: {
		core: {
			name: 'Sample Product',
		},
	},
	attributes: {
		brand: 'Acme',
		material: 'Cotton',
		colors: ['Red', 'Blue'],
	},
} as any;

describe('ProductDetailTable Component', () => {
	it('renders a row per field that resolves to a value', () => {
		const rendered = render(<ProductDetailTable result={mockResult} fields={['brand', 'material', 'colors']} />);
		const table = rendered.container.querySelector('.ss__product-detail-table')!;
		expect(table).toBeInTheDocument();
		expect(table.querySelectorAll('tr')).toHaveLength(3);
	});

	it('uses the provided labels and falls back to the field key', () => {
		const rendered = render(<ProductDetailTable result={mockResult} fields={['brand', 'material']} labels={{ brand: 'Brand' }} />);
		const headers = Array.from(rendered.container.querySelectorAll('th')).map((th) => th.textContent);
		expect(headers).toContain('Brand');
		expect(headers).toContain('material');
	});

	it('resolves explicit dot-path fields', () => {
		const rendered = render(<ProductDetailTable result={mockResult} fields={['mappings.core.name', 'attributes.brand']} />);
		const table = rendered.container.querySelector('.ss__product-detail-table')!;
		expect(table).toHaveTextContent('Sample Product');
		expect(table).toHaveTextContent('Acme');
	});

	it('renders the resolved (comma-joined) values', () => {
		const rendered = render(<ProductDetailTable result={mockResult} fields={['colors']} />);
		const table = rendered.container.querySelector('.ss__product-detail-table')!;
		expect(table).toHaveTextContent('Red, Blue');
	});

	it('skips fields with no value', () => {
		const rendered = render(<ProductDetailTable result={mockResult} fields={['brand', 'missing']} />);
		expect(rendered.container.querySelectorAll('tr')).toHaveLength(1);
	});

	it('renders nothing when no fields resolve', () => {
		const rendered = render(<ProductDetailTable result={mockResult} fields={['missing']} />);
		expect(rendered.container.querySelector('.ss__product-detail-table')).not.toBeInTheDocument();
	});

	it('renders nothing when fields is empty', () => {
		const rendered = render(<ProductDetailTable result={mockResult} fields={[]} />);
		expect(rendered.container.querySelector('.ss__product-detail-table')).not.toBeInTheDocument();
	});
});
