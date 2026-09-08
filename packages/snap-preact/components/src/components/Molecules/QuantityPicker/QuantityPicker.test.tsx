import { h } from 'preact';

import { render, waitFor } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import { QuantityPicker } from './QuantityPicker';
import { ThemeProvider } from '../../../providers';

const globalTheme = {
	components: {
		quantityPicker: {
			className: 'global-theme-class',
		},
	},
};

const propTheme = {
	components: {
		quantityPicker: {
			className: 'props-theme-class',
		},
	},
};

describe('QuantityPicker Component', () => {
	it('renders an input with increment and decrement buttons', () => {
		const rendered = render(<QuantityPicker />);
		const pickerElement = rendered.container.querySelector('.ss__quantity-picker');
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input');
		const decrementButton = rendered.container.querySelector('.ss__quantity-picker__button--decrement');
		const incrementButton = rendered.container.querySelector('.ss__quantity-picker__button--increment');

		expect(pickerElement).toBeInTheDocument();
		expect(inputElement).toBeInTheDocument();
		expect(inputElement?.type).toBe('number');
		expect(decrementButton).toBeInTheDocument();
		expect(incrementButton).toBeInTheDocument();
	});

	it('defaults to a minimum of 1 and starts at the minimum', () => {
		const rendered = render(<QuantityPicker />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;

		expect(inputElement.value).toBe('1');
		expect(inputElement).toHaveAttribute('min', '1');
		expect(inputElement).toHaveAttribute('step', '1');
	});

	it('can use startValue to set the initial value', () => {
		const rendered = render(<QuantityPicker startValue={5} />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;

		expect(inputElement.value).toBe('5');
	});

	it('increments and decrements the value with the buttons', async () => {
		const rendered = render(<QuantityPicker startValue={2} />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;
		const decrementButton = rendered.container.querySelector('.ss__quantity-picker__button--decrement')!;
		const incrementButton = rendered.container.querySelector('.ss__quantity-picker__button--increment')!;

		await userEvent.click(incrementButton);
		await waitFor(() => expect(inputElement.value).toBe('3'));

		await userEvent.click(decrementButton);
		await userEvent.click(decrementButton);
		await waitFor(() => expect(inputElement.value).toBe('1'));
	});

	it('does not decrement below the minimum', async () => {
		const rendered = render(<QuantityPicker />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;
		const decrementButton = rendered.container.querySelector('.ss__quantity-picker__button--decrement')!;

		expect(decrementButton).toHaveClass('ss__button--disabled');
		await userEvent.click(decrementButton);
		expect(inputElement.value).toBe('1');
	});

	it('does not increment above the maximum', async () => {
		const rendered = render(<QuantityPicker startValue={9} max={9} />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;
		const incrementButton = rendered.container.querySelector('.ss__quantity-picker__button--increment')!;

		expect(inputElement).toHaveAttribute('max', '9');
		expect(incrementButton).toHaveClass('ss__button--disabled');
		await userEvent.click(incrementButton);
		expect(inputElement.value).toBe('9');
	});

	it('respects a custom min', () => {
		const rendered = render(<QuantityPicker min={3} />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;

		expect(inputElement.value).toBe('3');
		expect(inputElement).toHaveAttribute('min', '3');
	});

	it('respects a custom step', async () => {
		const rendered = render(<QuantityPicker step={5} />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;
		const incrementButton = rendered.container.querySelector('.ss__quantity-picker__button--increment')!;

		await userEvent.click(incrementButton);
		await waitFor(() => expect(inputElement.value).toBe('6'));
	});

	it('clamps typed values below the minimum on blur', async () => {
		const rendered = render(<QuantityPicker />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;

		await userEvent.clear(inputElement);
		await userEvent.type(inputElement, '-4');
		await userEvent.tab();

		await waitFor(() => expect(inputElement.value).toBe('1'));
	});

	it('truncates typed decimal values to whole numbers on blur', async () => {
		const rendered = render(<QuantityPicker />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;

		await userEvent.clear(inputElement);
		await userEvent.type(inputElement, '3.7');
		await userEvent.tab();

		await waitFor(() => expect(inputElement.value).toBe('3'));
	});

	it('resets to the previous value when the input is left empty', async () => {
		const rendered = render(<QuantityPicker startValue={4} />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;

		await userEvent.clear(inputElement);
		await userEvent.tab();

		await waitFor(() => expect(inputElement.value).toBe('4'));
	});

	it('fires the onChange prop with the new value', async () => {
		const changeFn = jest.fn();
		const rendered = render(<QuantityPicker onChange={changeFn} />);
		const incrementButton = rendered.container.querySelector('.ss__quantity-picker__button--increment')!;

		await userEvent.click(incrementButton);
		expect(changeFn).toHaveBeenCalledWith(expect.anything(), 2);
	});

	it('supports externally managed state via the value prop', async () => {
		const rendered = render(<QuantityPicker value={7} />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;
		const incrementButton = rendered.container.querySelector('.ss__quantity-picker__button--increment')!;

		expect(inputElement.value).toBe('7');

		// value is externally managed - clicking does not change the displayed value
		await userEvent.click(incrementButton);
		expect(inputElement.value).toBe('7');

		rendered.rerender(<QuantityPicker value={9} />);
		await waitFor(() => expect(inputElement.value).toBe('9'));
	});

	it('has a small default input width', () => {
		const rendered = render(<QuantityPicker />);
		const inputElement = rendered.container.querySelector('.ss__quantity-picker__input')!;
		const styles = getComputedStyle(inputElement);

		expect(styles.width).toBe('60px');
	});

	it('does not render a label by default', () => {
		const rendered = render(<QuantityPicker />);
		const labelElement = rendered.container.querySelector('.ss__quantity-picker__label');

		expect(labelElement).not.toBeInTheDocument();
	});

	it('renders the label prop in a span inline with the buttons and input', () => {
		const rendered = render(<QuantityPicker label="Quantity" />);
		const pickerElement = rendered.container.querySelector('.ss__quantity-picker')!;
		const labelWrapperElement = rendered.container.querySelector('.ss__quantity-picker__label-wrapper')!;
		const labelElement = rendered.container.querySelector('.ss__quantity-picker__label')!;

		expect(labelElement).toBeInTheDocument();
		expect(labelElement.tagName).toBe('SPAN');
		expect(labelElement).toHaveTextContent('Quantity');
		expect(pickerElement.firstElementChild).toBe(labelWrapperElement);
		expect(labelWrapperElement.firstElementChild).toBe(labelElement);
	});

	it('respects the hideButtons prop', async () => {
		const changeFn = jest.fn();
		const rendered = render(<QuantityPicker startValue={5} max={10} hideButtons onChange={changeFn} />);
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;
		const decrementButton = rendered.container.querySelector('.ss__quantity-picker__button--decrement');
		const incrementButton = rendered.container.querySelector('.ss__quantity-picker__button--increment');

		expect(decrementButton).not.toBeInTheDocument();
		expect(incrementButton).not.toBeInTheDocument();
		expect(inputElement).not.toHaveAttribute('disabled');

		// input can still be used to change the value
		await userEvent.clear(inputElement);
		await userEvent.type(inputElement, '7');
		await userEvent.tab();

		await waitFor(() => expect(inputElement.value).toBe('7'));
		expect(changeFn).toHaveBeenCalledWith(expect.anything(), 7);
	});

	it('respects the disabled prop', async () => {
		const changeFn = jest.fn();
		const rendered = render(<QuantityPicker disabled onChange={changeFn} />);
		const pickerElement = rendered.container.querySelector('.ss__quantity-picker')!;
		const inputElement = rendered.container.querySelector<HTMLInputElement>('.ss__quantity-picker__input')!;
		const incrementButton = rendered.container.querySelector('.ss__quantity-picker__button--increment')!;

		expect(pickerElement.className.match(/disabled/)).toBeTruthy();
		expect(inputElement).toHaveAttribute('disabled');

		await userEvent.click(incrementButton);
		expect(changeFn).not.toHaveBeenCalled();
	});

	it('renders with additional style using prop', () => {
		const style = {
			padding: '20px',
		};

		const rendered = render(<QuantityPicker style={style} />);
		const pickerElement = rendered.container.querySelector('.ss__quantity-picker')!;
		const styles = getComputedStyle(pickerElement);

		expect(styles.padding).toBe(style.padding);
	});

	it('can disableStyles', () => {
		const rendered = render(<QuantityPicker disableStyles />);
		const pickerElement = rendered.container.querySelector('.ss__quantity-picker');

		expect(pickerElement?.classList.length).toBe(1);
	});

	describe('QuantityPicker lang works', () => {
		it('has default aria labels on the buttons and input', () => {
			const rendered = render(<QuantityPicker />);
			const inputElement = rendered.container.querySelector('.ss__quantity-picker__input')!;
			const decrementButton = rendered.container.querySelector('.ss__quantity-picker__button--decrement')!;
			const incrementButton = rendered.container.querySelector('.ss__quantity-picker__button--increment')!;

			expect(inputElement).toHaveAttribute('aria-label');
			expect(decrementButton).toHaveAttribute('aria-label');
			expect(incrementButton).toHaveAttribute('aria-label');
		});

		it('immediately available lang options', async () => {
			const langOptions = ['quantityInput', 'incrementButton', 'decrementButton'];

			//text attributes/values
			const value = 'custom value';
			const altText = 'custom alt';
			const ariaLabel = 'custom label';
			const ariaValueText = 'custom value text';
			const title = 'custom title';

			const valueMock = jest.fn(() => value);
			const altMock = jest.fn(() => altText);
			const labelMock = jest.fn(() => ariaLabel);
			const valueTextMock = jest.fn(() => ariaValueText);
			const titleMock = jest.fn(() => title);

			const langObjs = [
				{
					attributes: {
						alt: altText,
						'aria-label': ariaLabel,
						'aria-valuetext': ariaValueText,
						title: title,
					},
				},
				{
					attributes: {
						alt: altMock,
						'aria-label': labelMock,
						'aria-valuetext': valueTextMock,
						title: titleMock,
					},
				},
			];

			langOptions.forEach((option) => {
				langObjs.forEach((langObj) => {
					const lang = {
						[`${option}`]: langObj,
					};
					// @ts-ignore - dynamic lang key
					const rendered = render(<QuantityPicker lang={lang} />);

					const langElem = rendered.container.querySelector(`[ss-lang=${option}]`);
					expect(langElem).toBeInTheDocument();
					expect(langElem).toHaveAttribute('alt', altText);
					expect(langElem).toHaveAttribute('aria-label', ariaLabel);
					expect(langElem).toHaveAttribute('aria-valuetext', ariaValueText);
					expect(langElem).toHaveAttribute('title', title);

					jest.restoreAllMocks();
				});
			});
		});
	});

	it('is themeable with ThemeProvider', () => {
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<QuantityPicker />
			</ThemeProvider>
		);

		const pickerElement = rendered.container.querySelector('.ss__quantity-picker');
		expect(pickerElement).toHaveClass(globalTheme.components.quantityPicker.className);
	});

	it('is themeable with theme prop', () => {
		const rendered = render(<QuantityPicker theme={propTheme} />);

		const pickerElement = rendered.container.querySelector('.ss__quantity-picker');
		expect(pickerElement).toHaveClass(propTheme.components.quantityPicker.className);
	});

	it('is themeable and theme prop overrides ThemeProvider', () => {
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<QuantityPicker theme={propTheme} />
			</ThemeProvider>
		);

		const pickerElement = rendered.container.querySelector('.ss__quantity-picker');
		expect(pickerElement).toHaveClass(propTheme.components.quantityPicker.className);
		expect(pickerElement).not.toHaveClass(globalTheme.components.quantityPicker.className);
	});
});
