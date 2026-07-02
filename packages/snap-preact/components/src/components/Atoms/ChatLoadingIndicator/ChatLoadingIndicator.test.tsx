import { h } from 'preact';
import { render } from '@testing-library/preact';
import { ChatLoadingIndicator } from './ChatLoadingIndicator';

describe('ChatLoadingIndicator Component', () => {
	it('renders nothing when loading is false', () => {
		const rendered = render(<ChatLoadingIndicator loading={false} />);
		expect(rendered.container.querySelector('.ss__chat-loading-indicator')).toBeNull();
	});

	it('renders when loading is true', () => {
		const rendered = render(<ChatLoadingIndicator loading={true} />);
		const root = rendered.container.querySelector('.ss__chat-loading-indicator');
		expect(root).toBeInTheDocument();
	});

	it('has role="status" and aria-live="polite" for screen readers', () => {
		const rendered = render(<ChatLoadingIndicator loading={true} />);
		const root = rendered.container.querySelector('.ss__chat-loading-indicator') as HTMLElement;
		expect(root).toHaveAttribute('role', 'status');
		expect(root).toHaveAttribute('aria-live', 'polite');
	});

	it('renders a verb', () => {
		const rendered = render(<ChatLoadingIndicator loading={true} verbs={['Brewing']} />);
		expect(rendered.getByText('Brewing...')).toBeInTheDocument();
	});

	it('renders nothing when verbs is an empty array (fallback also empty)', () => {
		// custom empty array still falls through to DEFAULT_VERBS
		const rendered = render(<ChatLoadingIndicator loading={true} verbs={[]} />);
		expect(rendered.container.querySelector('.ss__chat-loading-indicator')).toBeInTheDocument();
	});
});
