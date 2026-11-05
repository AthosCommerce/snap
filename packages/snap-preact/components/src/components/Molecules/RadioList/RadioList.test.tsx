import { h } from 'preact';

import { render } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { RadioList } from './RadioList';
import { ThemeProvider } from '../../../providers';
import { ListOption } from '../../../types';

describe('RadioList Component', () => {
	const options = [
		{
			label: 'Red',
			value: 'red',
		},
		{
			label: 'Orange',
			value: 'orange',
		},
		{
			label: 'Yellow',
			value: 'yellow',
		},
		{
			label: 'Green',
			value: 'green',
		},
		{
			label: 'Blue',
			value: 'blue',
		},
		{
			label: 'Indigo',
			value: 'indigo',
		},
		{
			label: 'Violet',
			value: 'violet',
		},
	] as ListOption[];

	const globalTheme = {
		components: {
			radioList: {
				className: 'classy-global',
			},
		},
	};

	const propTheme = {
		components: {
			radioList: {
				className: 'classy-global',
			},
		},
	};

	it('it does not render without options', () => {
		const rendered = render(<RadioList options={[]} />);
		const element = rendered.container.querySelector('.ss__radio-list');

		expect(element).not.toBeInTheDocument();
	});

	it('renders', () => {
		const rendered = render(<RadioList options={options} />);
		const element = rendered.container.querySelector('.ss__radio-list')!;

		expect(element).toBeInTheDocument();
	});

	it('renders with correct ammount of children', () => {
		const rendered = render(<RadioList options={options} />);
		const optionElems = rendered.container.querySelectorAll('.ss__radio-list__option');

		expect(optionElems).toHaveLength(options.length);
	});

	it('renders with additional style using prop', () => {
		const style = {
			padding: '20px',
		};

		const rendered = render(<RadioList options={options} style={style} />);
		const element = rendered.container.querySelector('.ss__radio-list')!;

		const styles = getComputedStyle(element);

		expect(styles.padding).toBe(style.padding);
	});

	it('it fires onSelect event on option selection', async () => {
		const selectFn = jest.fn();

		const rendered = render(<RadioList options={options} onSelect={selectFn} />);

		const element = rendered.container.querySelector('.ss__radio-list');
		const optionElements = element?.querySelectorAll('.ss__radio-list__option')!;

		await userEvent.click(optionElements[1]);

		expect(selectFn).toHaveBeenCalledWith(expect.anything(), options[1]);
	});

	it('it adds "selected" class on selected option', async () => {
		const selectFn = jest.fn();
		const selectIndex = 1;

		const rendered = render(<RadioList options={options} onSelect={selectFn} />);

		const element = rendered.container.querySelector('.ss__radio-list')!;
		let optionElements = element.querySelectorAll('.ss__radio-list__option');

		let selected = rendered.container.querySelector('.ss__radio-list__option--selected');

		expect(selected).not.toBeInTheDocument();

		await userEvent.click(optionElements[selectIndex]);

		optionElements = element.querySelectorAll('.ss__radio-list__option');

		expect(selectFn).toHaveBeenCalledWith(expect.anything(), options[selectIndex]);

		optionElements.forEach((optionElement, index) => {
			if (index != selectIndex) {
				expect(optionElement).not.toHaveClass('ss__radio-list__option--selected');
			} else {
				expect(optionElement).toHaveClass('ss__radio-list__option--selected');
			}
		});
	});

	it('can set selected via selected prop', async () => {
		const selectFn = jest.fn();
		const selectIndex = 1;

		const rendered = render(<RadioList options={options} onSelect={selectFn} selected={options[1]} />);

		const element = rendered.container.querySelector('.ss__radio-list')!;
		let optionElements = element.querySelectorAll('.ss__radio-list__option');

		let selected = rendered.container.querySelector('.ss__radio-list__option--selected');

		expect(selected).toBeInTheDocument();

		expect(selected?.querySelector('.ss__radio-list__option__label')?.innerHTML).toBe(options[1].label);

		await userEvent.click(optionElements[selectIndex]);

		optionElements = element.querySelectorAll('.ss__radio-list__option');

		expect(selectFn).toHaveBeenCalledWith(expect.anything(), options[selectIndex]);

		optionElements.forEach((optionElement, index) => {
			if (index != selectIndex) {
				expect(optionElement).not.toHaveClass('ss__radio-list__option--selected');
			} else {
				expect(optionElement).toHaveClass('ss__radio-list__option--selected');
			}
		});
	});

	it('resyncs the selection when the selected prop returns to an earlier value', () => {
		const { container, rerender } = render(<RadioList options={options} selected={options[0]} />);

		const selectedLabel = () => container.querySelector('.ss__radio-list__option--selected .ss__radio-list__option__label')?.innerHTML;

		expect(selectedLabel()).toBe(options[0].label);

		rerender(<RadioList options={options} selected={options[1]} />);

		expect(selectedLabel()).toBe(options[1].label);

		// back to the value the prop held on mount - eg. switching back to the previously viewed tab
		rerender(<RadioList options={options} selected={options[0]} />);

		expect(selectedLabel()).toBe(options[0].label);
	});

	it('does not revert a selection made before the selected prop catches up', async () => {
		const { container, rerender } = render(<RadioList options={options} selected={options[0]} />);

		await userEvent.click(container.querySelectorAll('.ss__radio-list__option')[1]);

		// the store has not updated yet, so 'selected' still holds the previous option
		rerender(<RadioList options={options} selected={options[0]} />);

		expect(container.querySelector('.ss__radio-list__option--selected .ss__radio-list__option__label')?.innerHTML).toBe(options[1].label);
	});

	it('uses label when passed, and value if not', async () => {
		const selectFn = jest.fn();
		const options2 = [
			{
				label: 'Red',
				value: 'red',
			},
			{
				value: 'orange',
			},
		];

		const rendered = render(<RadioList options={options2} onSelect={selectFn} />);

		const element = rendered.container.querySelector('.ss__radio-list')!;
		let optionElements = element.querySelectorAll('.ss__radio-list__option');

		expect(optionElements[0]?.querySelector('.ss__radio-list__option__label')?.innerHTML).toBe(options[0].label);
		expect(optionElements[1]?.querySelector('.ss__radio-list__option__label')?.innerHTML).toBe(options[1].value);
	});

	it('it can be disabled', async () => {
		const rendered = render(<RadioList disabled={true} options={options} />);

		const element = rendered.container?.querySelector('.ss__radio-list--disabled')!;
		expect(element).toBeInTheDocument();
		const styles = getComputedStyle(element);
		expect(styles.pointerEvents).toBe('none');
	});

	it('it can hideRadios', async () => {
		const selectFn = jest.fn();

		const rendered = render(<RadioList hideOptionRadios={true} options={options} onSelect={selectFn} />);

		const optionElements = rendered.container?.querySelectorAll('.ss__radio-list__option')[0]!;

		expect(optionElements).toBeInTheDocument();

		const radio = optionElements.querySelector('.ss__radio-list__option__radio');
		const labelEl = optionElements.querySelector('.ss__radio-list__option__label');
		expect(radio).not.toBeInTheDocument();
		expect(labelEl).toBeInTheDocument();
		expect(labelEl).toHaveTextContent(options[0].label as string);

		await userEvent.click(optionElements);

		expect(selectFn).toHaveBeenCalledWith(expect.anything(), options[0]);
	});

	it('it can hideLabels', async () => {
		const selectFn = jest.fn();

		const rendered = render(<RadioList hideOptionLabels={true} options={options} onSelect={selectFn} />);

		const optionElements = rendered.container?.querySelectorAll('.ss__radio-list__option')[0]!;
		const label = rendered.container.querySelector('.ss__radio-list__option__label');

		expect(label).not.toBeInTheDocument();
		expect(optionElements).toBeInTheDocument();

		const radioSpan = optionElements.querySelector('.ss__radio-list__option__radio');
		expect(radioSpan).toBeInTheDocument();
		expect(radioSpan).toHaveAttribute('ss-lang', 'radio');
		expect(radioSpan).toHaveAttribute('role', 'radio');
		expect(radioSpan).toHaveAttribute('aria-checked', 'false');

		const radioIcon = radioSpan?.querySelector('.ss__radio__icon');
		expect(radioIcon).toBeInTheDocument();
		expect(radioIcon).toHaveClass('ss__icon--bullet-o');

		await userEvent.click(optionElements);

		expect(selectFn).toHaveBeenCalledWith(expect.anything(), options[0]);
	});

	it('it can render Icon options', async () => {
		const selectFn = jest.fn();

		const iconOptions: ListOption[] = [
			{
				label: '1 wide',
				value: '1 wide',
				icon: 'square',
			},
			{
				label: '2 wide',
				value: '2 wide',
				icon: {
					icon: 'layout-large',
				},
			},
			{
				label: '3 wide',
				value: '3 wide',
				icon: {
					icon: 'layout-grid',
				},
			},
		];

		const rendered = render(<RadioList options={iconOptions} onSelect={selectFn} />);

		const optionElements = rendered.container?.querySelectorAll('.ss__radio-list__option')[0]!;
		const label = rendered.container.querySelector('.ss__radio-list__option__label');
		const icon = rendered.container.querySelector('.ss__radio-list__option__icon');

		expect(label).toBeInTheDocument();
		expect(icon).toBeInTheDocument();
		expect(icon?.classList.contains('ss__icon--square')).toBe(true);

		expect(optionElements).toBeInTheDocument();

		await userEvent.click(optionElements);

		expect(selectFn).toHaveBeenCalledWith(expect.anything(), iconOptions[0]);
	});

	it('it can hide Icon options', async () => {
		const selectFn = jest.fn();

		const iconOptions: ListOption[] = [
			{
				label: '1 wide',
				value: '1 wide',
				icon: 'square',
			},
			{
				label: '2 wide',
				value: '2 wide',
				icon: {
					icon: 'layout-large',
				},
			},
			{
				label: '3 wide',
				value: '3 wide',
				icon: {
					icon: 'layout-grid',
				},
			},
		];

		const rendered = render(<RadioList hideOptionIcons={true} options={iconOptions} onSelect={selectFn} />);

		const optionElements = rendered.container?.querySelectorAll('.ss__radio-list__option')[0]!;
		const label = rendered.container.querySelector('.ss__radio-list__option__label');
		const icon = rendered.container.querySelector('.ss__radio-list__option__icon');

		expect(label).toBeInTheDocument();
		expect(icon).not.toBeInTheDocument();

		expect(optionElements).toBeInTheDocument();

		await userEvent.click(optionElements);

		expect(selectFn).toHaveBeenCalledWith(expect.anything(), iconOptions[0]);
	});

	it('it can use native prop to render native radios', async () => {
		const selectFn = jest.fn();

		const rendered = render(<RadioList native={true} options={options} onSelect={selectFn} />);

		const optionElements = rendered.container?.querySelectorAll('.ss__radio-list__option__radio input')[0]!;

		expect(optionElements).toBeInTheDocument();

		expect(optionElements).toHaveAttribute('type', 'radio');

		await userEvent.click(optionElements);

		expect(selectFn).toHaveBeenCalledWith(expect.anything(), options[0]);
	});

	it('renders the titleText', () => {
		const title = 'My Title';
		const rendered = render(<RadioList titleText={title} options={options} />);

		const titleElem = rendered.container.querySelector('.ss__radio-list__title');

		expect(titleElem).toHaveTextContent(title);
	});

	it('can hide titleText', () => {
		const title = 'My Title';
		const rendered = render(<RadioList hideTitleText={true} titleText={title} options={options} />);

		const titleElem = rendered.container.querySelector('.ss__radio-list__title');

		expect(titleElem).not.toBeInTheDocument();
	});

	it('can disableStyles', () => {
		const rendered = render(<RadioList disableStyles options={options} />);

		const element = rendered.container.querySelector('.ss__radio-list');

		expect(element?.classList).toHaveLength(1);
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<RadioList options={options} className={className} />);

		const element = rendered.container.querySelector('.ss__radio-list');
		expect(element).toBeInTheDocument();
		expect(element).toHaveClass(className);
	});

	describe('RadioList lang works', () => {
		const selector = '.ss__radio-list';

		it('immediately available lang options', async () => {
			const langOptions = ['title'];

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
					value: value,
					attributes: {
						alt: altText,
						'aria-label': ariaLabel,
						'aria-valuetext': ariaValueText,
						title: title,
					},
				},
				{
					value: valueMock,
					attributes: {
						alt: altMock,
						'aria-label': labelMock,
						'aria-valuetext': valueTextMock,
						title: titleMock,
					},
				},
				{
					value: `<div>${value}</div>`,
					attributes: {
						alt: altText,
						'aria-label': ariaLabel,
						'aria-valuetext': ariaValueText,
						title: title,
					},
				},
			];

			langOptions.forEach((option) => {
				langObjs.forEach((langObj) => {
					const lang = {
						[`${option}`]: langObj,
					};

					let valueSatisfied = false;
					let altSatisfied = false;
					let labelSatisfied = false;
					let valueTextSatisfied = false;
					let titleSatisfied = false;

					// @ts-ignore
					const rendered = render(<RadioList options={options} lang={lang} />);

					const element = rendered.container.querySelector(selector);
					expect(element).toBeInTheDocument();

					const langElems = rendered.container.querySelectorAll(`[ss-lang=${option}]`);
					expect(langElems.length).toBeGreaterThan(0);
					langElems.forEach((elem) => {
						if (typeof langObj.value == 'function') {
							expect(valueMock).toHaveBeenCalledWith({
								options: options,
								selectedOptions: undefined,
							});

							if (elem?.innerHTML == value) {
								valueSatisfied = true;
							}
						} else {
							if (elem?.innerHTML == langObj.value) {
								valueSatisfied = true;
							}
						}

						if (elem.getAttribute('alt') == altText) {
							altSatisfied = true;
						}
						if (elem.getAttribute('aria-label') == ariaLabel) {
							labelSatisfied = true;
						}
						if (elem.getAttribute('aria-valuetext') == ariaValueText) {
							valueTextSatisfied = true;
						}
						if (elem.getAttribute('title') == title) {
							titleSatisfied = true;
						}
					});

					expect(valueSatisfied).toBeTruthy();
					expect(altSatisfied).toBeTruthy();
					expect(labelSatisfied).toBeTruthy();
					expect(valueTextSatisfied).toBeTruthy();
					expect(titleSatisfied).toBeTruthy();

					jest.restoreAllMocks();
				});
			});
		});
	});

	it('is themeable with ThemeProvider', () => {
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<RadioList options={options} />
			</ThemeProvider>
		);
		const element = rendered.container.querySelector('.ss__radio-list')!;

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass(globalTheme.components.radioList.className);
	});

	it('is themeable with theme prop', () => {
		const rendered = render(<RadioList options={options} theme={propTheme} />);
		const element = rendered.container.querySelector('.ss__radio-list')!;

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass(propTheme.components.radioList.className);
	});

	it('is themeable and theme prop overrides ThemeProvider', () => {
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<RadioList theme={propTheme} options={options} />
			</ThemeProvider>
		);
		const element = rendered.container.querySelector('.ss__radio-list')!;

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass(propTheme.components.radioList.className);
	});
});
