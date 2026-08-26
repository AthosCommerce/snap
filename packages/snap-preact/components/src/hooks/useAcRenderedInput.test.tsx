import { h } from 'preact';
import { useRef } from 'preact/hooks';
import { render, waitFor } from '@testing-library/preact';
import { useAcRenderedInput } from './useAcRenderedInput';

/**
 * Minimal wrapper component that exercises the hook the same way AutocompleteFixed /
 * AutocompleteSlideout / AutocompleteModal do.  The `.autocomplete__search-input`
 * class name is required by the hook's selector literal.
 */
function TestComponent({
	input,
	controller,
	renderInput,
	buttonSelector,
	setActive,
}: {
	input: Element;
	controller: any;
	renderInput: boolean;
	buttonSelector?: string;
	setActive?: (active: boolean) => void;
}) {
	const renderedInputRef = useRef<HTMLInputElement | null>(null);
	useAcRenderedInput({ input, controllers: [controller], renderInput, buttonSelector, renderedInputRef, setActive });
	return (
		<div className="autocomplete__search-input">
			<input ref={renderedInputRef} type="text" />
		</div>
	);
}

describe('useAcRenderedInput', () => {
	let nativeInput: HTMLInputElement;
	let button: HTMLButtonElement;

	beforeEach(() => {
		nativeInput = document.createElement('input');
		nativeInput.id = 'search-input';
		nativeInput.type = 'text';
		document.body.appendChild(nativeInput);

		button = document.createElement('button');
		button.className = 'search-button';
		document.body.appendChild(button);
	});

	afterEach(() => {
		document.body.innerHTML = '';
	});

	describe('selector preservation when using syncInputs', () => {
		it('appends the rendered input selector to the original config.selector instead of replacing it', async () => {
			const originalSelector = '#search-input';
			const mockController = {
				config: { selector: originalSelector, settings: { syncInputs: true } },
				bind: jest.fn().mockResolvedValue(undefined),
			};

			render(<TestComponent input={nativeInput} controller={mockController as any} renderInput={true} buttonSelector=".search-button" />);

			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));

			await waitFor(() => {
				expect(mockController.bind).toHaveBeenCalled();
			});

			// The original selector must be preserved — not overwritten
			expect(mockController.config.selector).toContain(originalSelector);
			// The rendered input selector should be added alongside it
			expect(mockController.config.selector).toContain('.autocomplete__search-input input');
			// Regression check: selector must NOT have become only the rendered-input selector
			expect(mockController.config.selector).not.toBe('.autocomplete__search-input input');
		});

		it('does not call bind or modify the selector before the button is clicked', () => {
			const originalSelector = '#search-input';
			const mockController = {
				config: { selector: originalSelector, settings: { syncInputs: true } },
				bind: jest.fn().mockResolvedValue(undefined),
			};

			render(<TestComponent input={nativeInput} controller={mockController as any} renderInput={true} buttonSelector=".search-button" />);

			// No interaction — selector and bind should be untouched
			expect(mockController.config.selector).toBe(originalSelector);
			expect(mockController.bind).not.toHaveBeenCalled();
		});

		it('does not run the rendered input initialization a second time if already initialized', async () => {
			const originalSelector = '#search-input';
			const mockController = {
				config: { selector: originalSelector, settings: { syncInputs: true } },
				bind: jest.fn().mockResolvedValue(undefined),
			};

			render(<TestComponent input={nativeInput} controller={mockController as any} renderInput={true} buttonSelector=".search-button" />);

			// First click — initializes the rendered input
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			await waitFor(() => expect(mockController.bind).toHaveBeenCalledTimes(1));

			const selectorAfterFirstClick = mockController.config.selector;

			// Second click — should NOT re-append or re-bind
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			await waitFor(() => {
				// brief wait to let any erroneous async work settle
				expect(mockController.bind).toHaveBeenCalledTimes(1);
			});

			expect(mockController.config.selector).toBe(selectorAfterFirstClick);
		});
	});

	describe('syncInputs compatibility with renderInput', () => {
		it('results in a selector that matches both the native input and the rendered input', async () => {
			const originalSelector = '#search-input';
			const mockController = {
				config: { selector: originalSelector, settings: { syncInputs: true } },
				bind: jest.fn().mockResolvedValue(undefined),
			};

			render(<TestComponent input={nativeInput} controller={mockController as any} renderInput={true} buttonSelector=".search-button" />);

			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			await waitFor(() => expect(mockController.bind).toHaveBeenCalled());

			// The combined selector must find both inputs — this is what the controller's
			// syncInputs loop (querySelectorAll(config.selector)) operates on.
			const matched = Array.from(document.querySelectorAll(mockController.config.selector));

			const renderedInput = document.querySelector('.autocomplete__search-input input');
			expect(renderedInput).not.toBeNull();

			// Both the original native input and the rendered input must be in the result set
			expect(matched).toContain(nativeInput);
			expect(matched).toContain(renderedInput);
		});

		it('syncInputs can update the native input value when value is set on all selector matches', async () => {
			const originalSelector = '#search-input';
			const mockController = {
				config: { selector: originalSelector, settings: { syncInputs: true } },
				bind: jest.fn().mockResolvedValue(undefined),
			};

			render(<TestComponent input={nativeInput} controller={mockController as any} renderInput={true} buttonSelector=".search-button" />);

			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			await waitFor(() => expect(mockController.bind).toHaveBeenCalled());

			// Simulate the syncInputs forEach that runs inside the controller's input handler
			const testQuery = 'red shoes';
			document.querySelectorAll(mockController.config.selector).forEach((el) => {
				(el as HTMLInputElement).value = testQuery;
			});

			// The native input on the page (the one users see) must be updated
			expect(nativeInput.value).toBe(testQuery);
		});
	});
});
