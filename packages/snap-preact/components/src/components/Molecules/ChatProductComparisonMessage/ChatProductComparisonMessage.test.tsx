import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ChatProductComparisonMessage } from './ChatProductComparisonMessage';

describe('ChatProductComparisonMessage Component', () => {
	const baseChatItem = {
		messageType: 'productComparison' as const,
		comparisonData: {
			summary: 'comparison summary',
			features: [
				{ featureName: 'Material', values: { p1: 'Wool', p2: 'Cotton' } },
				{ featureName: 'Price', values: { p1: '$50', p2: '$30' } },
			],
		},
		searchResults: [
			{ id: 'p1', display: { mappings: { core: { name: 'Product One' } } } },
			{ id: 'p2', display: { mappings: { core: { name: 'Product Two' } } } },
		],
	};

	it('renders nothing for non-productComparison messages', () => {
		const rendered = render(<ChatProductComparisonMessage chatItem={{ messageType: 'general' } as any} />);
		expect(rendered.container.querySelector('.ss__chat-product-comparison-message')).toBeNull();
	});

	it('renders feature rows and product columns', () => {
		const rendered = render(<ChatProductComparisonMessage chatItem={baseChatItem as any} />);
		expect(rendered.getByText('Product One')).toBeInTheDocument();
		expect(rendered.getByText('Product Two')).toBeInTheDocument();
		expect(rendered.getByText('Material')).toBeInTheDocument();
		expect(rendered.getByText('Wool')).toBeInTheDocument();
	});

	it('marks header cells with scope for accessibility', () => {
		const rendered = render(<ChatProductComparisonMessage chatItem={baseChatItem as any} />);
		const colHeaders = rendered.container.querySelectorAll('th[scope="col"]');
		const rowHeaders = rendered.container.querySelectorAll('th[scope="row"]');
		expect(colHeaders.length).toBeGreaterThan(0);
		expect(rowHeaders.length).toBe(2);
	});

	it('has an accessible label on the table', () => {
		const rendered = render(<ChatProductComparisonMessage chatItem={baseChatItem as any} />);
		const table = rendered.container.querySelector('table');
		expect(table).toHaveAttribute('aria-label', 'Product comparison');
	});
});
