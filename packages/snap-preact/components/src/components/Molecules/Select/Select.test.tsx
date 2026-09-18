import { h } from 'preact';

import { render } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import { Select, SelectProps } from './Select';
import { ThemeProvider } from '../../../providers';
import { ListOption } from '../../../types';

describe('Select Component', () => {
	const options: ListOption[] = [
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
	];

	const globalTheme = {
		components: {
			button: {
				color: 'blue',
			},
			select: {
				className: 'classy-global',
			},
		},
	};

	const propTheme = {
		components: {
			button: {
				color: 'red',
			},
			select: {
				className: 'classy-global',
			},
		},
	};

	it('it does not render without options', () => {
		const rendered = render(<Select options={[]} />);
		const selectElement = rendered.container.querySelector('.ss__select');

		expect(selectElement).not.toBeInTheDocument();
	});

	it('renders with additional style using prop', () => {
		const style = {
			padding: '20px',
		};

		const rendered = render(<Select options={options} style={style} />);
		const selectElement = rendered.container.querySelector('.ss__select')!;

		const styles = getComputedStyle(selectElement);

		expect(styles.padding).toBe(style.padding);
	});

	describe('styled', () => {
		it('it renders with options', () => {
			const rendered = render(<Select options={options} />);
			const selectElement = rendered.container.querySelector('.ss__select');
			const optionsElements = rendered.container.querySelectorAll('.ss__select__select__option');

			expect(selectElement).toBeInTheDocument();
			expect(optionsElements).toHaveLength(options.length);
			expect(selectElement?.classList.length).toBeGreaterThan(1);
		});

		it('has props to customize colors', () => {
			const props = {
				color: 'blue',
				borderColor: 'green',
				backgroundColor: 'purple',
				iconColor: 'red',
			};

			const rendered = render(
				<div>
					<button>a dummy button</button>
					<Select options={options} {...props} />
				</div>
			);

			// needed to ensure that the Button is not hovered for test to pass
			const dummyButton = rendered.getByText('a dummy button');
			dummyButton.focus();

			const selectElement = rendered.container.querySelector('.ss__select')!;
			const selectStyles = getComputedStyle(selectElement);

			const buttonElement = selectElement!.querySelector('.ss__button')!;
			const buttonStyles = getComputedStyle(buttonElement);

			const iconElement = selectElement!.querySelector('.ss__icon')!;
			const iconStyles = getComputedStyle(iconElement);

			const optionsElement = rendered.container.querySelector('.ss__select__select')!;
			const optionsStyles = getComputedStyle(optionsElement);

			expect(selectStyles.color).toBe(props.color);
			expect(buttonStyles.color).toBe(props.color);
			expect(buttonStyles.border).toBe(`1px solid ${props.borderColor}`);
			expect(buttonStyles.backgroundColor).toBe(props.backgroundColor);
			expect(buttonStyles.backgroundColor).toBe(props.backgroundColor);
			expect(iconStyles.fill).toBe(props.iconColor);
			expect(optionsStyles.backgroundColor).toBe(props.backgroundColor);
		});

		it('has props to customize the icon', async () => {
			const props: Partial<SelectProps> = {
				iconOpen: 'angle-left',
				iconClose: 'angle-right',
				iconColor: 'purple,',
			};

			const rendered = render(<Select options={options} {...props} />);

			const selectElement = rendered.container.querySelector('.ss__select')!;
			const dropdownButton = selectElement.querySelector('.ss__dropdown__button')!;
			let iconElement = selectElement.querySelector('.ss__icon')!;
			const iconStyles = getComputedStyle(iconElement);

			expect(iconStyles!.fill).toBe(props.iconColor);
			expect(iconElement).toHaveClass(`ss__icon--${props.iconOpen}`);
			await userEvent.click(dropdownButton);
			iconElement = selectElement.querySelector('.ss__icon')!;
			expect(iconElement).toHaveClass(`ss__icon--${props.iconClose}`);
		});

		it('is open on render when using startOpen prop', () => {
			const rendered = render(<Select startOpen options={options} />);
			const selectElement = rendered.container.querySelector('.ss__select');
			const dropdownElement = selectElement?.querySelector('.ss__dropdown');
			expect(dropdownElement).toHaveClass('ss__dropdown--open');
		});

		it('is closed on render when using startOpen false prop', () => {
			const rendered = render(<Select startOpen={false} options={options} />);
			const selectElement = rendered.container.querySelector('.ss__select');
			const dropdownElement = selectElement?.querySelector('.ss__dropdown');
			expect(dropdownElement).not.toHaveClass('ss__dropdown--open');
		});

		it('opens and closes on button click', async () => {
			const rendered = render(<Select options={options} />);
			const selectElement = rendered.container.querySelector('.ss__select');
			const dropdownElement = selectElement?.querySelector('.ss__dropdown');
			const dropdownButton = dropdownElement?.querySelector('.ss__dropdown__button')!;

			expect(dropdownElement).not.toHaveClass('ss__dropdown--open');

			await userEvent.click(dropdownButton);

			expect(dropdownElement).toHaveClass('ss__dropdown--open');
		});

		it('it adds "selected" class on option selection and closes the dropdown', async () => {
			const selectFn = jest.fn();
			const selectIndex = 1;

			const rendered = render(<Select options={options} onSelect={selectFn} />);

			const selectElement = rendered.container.querySelector('.ss__select')!;
			let optionElements = selectElement.querySelectorAll('.ss__select__select__option');
			const dropdownButton = selectElement.querySelector('.ss__dropdown__button')!;

			await userEvent.click(dropdownButton);
			await userEvent.click(optionElements[selectIndex]);

			optionElements = selectElement.querySelectorAll('.ss__select__select__option');
			expect(selectElement).not.toHaveClass('ss__dropdown--open');

			expect(selectFn).toHaveBeenCalledWith(expect.anything(), options[selectIndex]);
			optionElements.forEach((optionElement, index) => {
				if (index != selectIndex) {
					expect(optionElement).not.toHaveClass('ss__select__select__option--selected');
				} else {
					expect(optionElement).toHaveClass('ss__select__select__option--selected');
				}
			});
		});

		it('it shows clearSelection label when a selection is made', async () => {
			const clearSelectionLabel = 'clear selection';
			const rendered = render(<Select clearSelection={clearSelectionLabel} options={options} />);
			const selectElement = rendered.container.querySelector('.ss__select');
			let optionElements = selectElement?.querySelectorAll('.ss__select__select__option')!;

			await userEvent.click(optionElements[2]);

			optionElements = selectElement?.querySelectorAll('.ss__select__select__option')!;

			expect(selectElement).toBeInTheDocument();
			expect(optionElements).toHaveLength(options.length + 1);
			expect(optionElements[0]).toHaveTextContent(clearSelectionLabel);
		});

		it('it fires onSelect event on option selection', async () => {
			const selectFn = jest.fn();

			const rendered = render(<Select options={options} onSelect={selectFn} />);

			const selectElement = rendered.container.querySelector('.ss__select');
			const optionElements = selectElement?.querySelectorAll('.ss__select__select__option')!;

			await userEvent.click(optionElements[1]);

			expect(selectFn).toHaveBeenCalledWith(expect.anything(), options[1]);
		});

		it('it can be disabled', async () => {
			const selectFn = jest.fn();

			const rendered = render(<Select disabled={true} options={options} onSelect={selectFn} />);

			const selectElement = rendered.container.querySelector('.ss__select');
			const optionElements = selectElement?.querySelectorAll('.ss__select__select__option')!;
			const dropdownButton = selectElement?.querySelector('.ss__dropdown__button')!;

			expect(selectElement).toHaveClass('ss__select--disabled');
			expect(selectElement).not.toHaveClass('ss__dropdown--open');

			await userEvent.click(dropdownButton);

			expect(selectElement).not.toHaveClass('ss__dropdown--open');

			await userEvent.click(optionElements[1]);

			expect(selectFn).not.toHaveBeenCalledWith(expect.anything(), options[1]);
		});

		it('renders the "label" prop in button', () => {
			const label = 'selectme';
			const rendered = render(<Select label={label} options={options} />);

			const buttonLabel = rendered.container.querySelector('.ss__select__label');

			expect(buttonLabel).toHaveTextContent(label);
		});

		it('can hide the "label" with hidelabel', () => {
			const label = 'selectme';
			const rendered = render(<Select hideLabel={true} label={label} options={options} />);

			const buttonLabel = rendered.container.querySelector('.ss__select__label');

			expect(buttonLabel).not.toBeInTheDocument();
		});

		it('renders the "separator" prop in button when there is a label and a selection is made', async () => {
			const separator = ':::';
			const label = 'color';
			const rendered = render(<Select label={label} separator={separator} options={options} />);
			const selectElement = rendered.container.querySelector('.ss__select');
			const optionElements = selectElement?.querySelectorAll('.ss__select__select__option')!;

			await userEvent.click(optionElements[3]);

			const buttonSeparator = selectElement?.querySelector('.ss__select__label__separator');

			expect(buttonSeparator).toHaveTextContent(separator);
		});

		it('does not render the "separator" prop in button when there is no label and a selection is made', async () => {
			const separator = ':::';
			const rendered = render(<Select separator={separator} options={options} />);

			const selectElement = rendered.container.querySelector('.ss__select');
			const optionElements = selectElement?.querySelectorAll('.ss__select__select__option')!;

			await userEvent.click(optionElements[3]);

			const buttonSeparator = selectElement?.querySelector('.ss__select__label__separator');

			expect(buttonSeparator).not.toBeInTheDocument();
		});

		it('it can have managed state with "selected" prop', () => {
			const selectFn = jest.fn();
			const selectedIndex = 1;

			const rendered = render(<Select options={options} selected={options[selectedIndex]} onSelect={selectFn} />);

			const selectElement = rendered.container.querySelector('.ss__select');
			const optionElements = selectElement?.querySelectorAll('.ss__select__select__option');

			optionElements?.forEach((optionElement, index) => {
				if (index != selectedIndex) {
					expect(optionElement).not.toHaveClass('ss__select__select__option--selected');
				} else {
					expect(optionElement).toHaveClass('ss__select__select__option--selected');
				}
			});
		});

		it('resyncs the selection when the selected prop returns to an earlier value', () => {
			const { container, rerender } = render(<Select options={options} selected={options[0]} />);

			const selectedOption = () => container.querySelector('.ss__select__select__option--selected');

			expect(selectedOption()).toHaveTextContent(options[0].label as string);

			rerender(<Select options={options} selected={options[1]} />);

			expect(selectedOption()).toHaveTextContent(options[1].label as string);

			// back to the value the prop held on mount - eg. switching back to the previously viewed tab
			rerender(<Select options={options} selected={options[0]} />);

			expect(selectedOption()).toHaveTextContent(options[0].label as string);
		});

		it('does not revert a selection made before the selected prop catches up', async () => {
			const { container, rerender } = render(<Select options={options} selected={options[0]} />);

			await userEvent.click(container.querySelector('.ss__dropdown__button')!);
			await userEvent.click(container.querySelectorAll('.ss__select__select__option')[1]);

			// the store has not updated yet, so 'selected' still holds the previous option
			rerender(<Select options={options} selected={options[0]} />);

			expect(container.querySelector('.ss__select__select__option--selected')).toHaveTextContent(options[1].label as string);
		});

		it('does not render the "label" prop in button with hideLabelOnSelection', () => {
			const label = 'selectme';
			const selectedIndex = 1;
			const rendered = render(<Select hideLabelOnSelection label={label} selected={options[selectedIndex]} options={options} />);

			const buttonLabel = rendered.container.querySelector('.ss__select__label');

			expect(buttonLabel).not.toBeInTheDocument();
		});

		it('can hideSelection', () => {
			const label = 'selectme';
			const selectedIndex = 1;
			const rendered = render(<Select hideSelection label={label} selected={options[selectedIndex]} options={options} />);

			const button = rendered.container.querySelector('.ss__select__dropdown__button');
			const icon = button?.querySelector('.ss__select__dropdown__button__icon');
			const selection = button?.querySelector('.ss__select__selection');
			const labelEl = button?.querySelector('.ss__select__label');
			const labelInner = labelEl?.querySelector('label');
			const separator = labelEl?.querySelector('.ss__select__label__separator');

			expect(icon).toBeInTheDocument();
			expect(icon).toHaveClass('ss__icon--angle-down');

			expect(labelEl).toBeInTheDocument();
			expect(labelEl).toHaveAttribute('ss-lang', 'buttonLabel');
			expect(labelEl).toHaveAttribute('aria-label', 'selectme dropdown, 7 options , Currently selected option is Orange');

			expect(labelInner).toBeInTheDocument();
			expect(labelInner).toHaveAttribute('ss-lang', 'buttonLabel');
			expect(labelInner).toHaveTextContent(label);

			expect(separator).toBeInTheDocument();
			expect(separator).toHaveTextContent(':');

			expect(selection).not.toBeInTheDocument();
		});

		it('can hideIcon', () => {
			const label = 'selectme';
			const selectedIndex = 1;
			const rendered = render(<Select hideIcon label={label} selected={options[selectedIndex]} options={options} />);

			const button = rendered.container.querySelector('.ss__select__dropdown__button');
			const icon = button?.querySelector('.ss__select__dropdown__button__icon');
			const selection = button?.querySelector('.ss__select__selection');
			const labelEl = button?.querySelector('.ss__select__label');
			const labelInner = labelEl?.querySelector('label');
			const separator = labelEl?.querySelector('.ss__select__label__separator');

			expect(icon).not.toBeInTheDocument();

			expect(labelEl).toBeInTheDocument();
			expect(labelEl).toHaveAttribute('ss-lang', 'buttonLabel');
			expect(labelEl).toHaveAttribute('aria-label', 'selectme dropdown, 7 options , Currently selected option is Orange');

			expect(labelInner).toBeInTheDocument();
			expect(labelInner).toHaveAttribute('ss-lang', 'buttonLabel');
			expect(labelInner).toHaveTextContent(label);

			expect(separator).toBeInTheDocument();
			expect(separator).toHaveTextContent(':');

			expect(selection).toBeInTheDocument();
			expect(selection).toHaveTextContent(options[selectedIndex].label as string);
		});

		it('can hideOptionLabels', async () => {
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

			const label = 'selectme';
			const selectedIndex = 1;
			const rendered = render(<Select hideOptionLabels label={label} selected={iconOptions[selectedIndex]} options={iconOptions} />);

			const icon = rendered.container.querySelector('.ss__select__dropdown__button__icon');
			const button = rendered.container.querySelector('.ss__select__dropdown__button');
			const selection = rendered.container.querySelector('.ss__select__selection');

			expect(icon).toBeInTheDocument();
			expect(selection).not.toBeInTheDocument();

			await userEvent.click(button!);

			const options = rendered.container.querySelectorAll('.ss__select__select__option');
			const optionIcon = rendered.container.querySelectorAll('.ss__select__select__option .ss__select__select__option__icon')[0];
			const optionLabel = rendered.container.querySelector('.ss__select__select__option span');

			expect(options).toHaveLength(iconOptions.length);
			expect(optionIcon).toBeInTheDocument();
			expect(optionLabel).not.toBeInTheDocument();
			expect(optionIcon?.classList.contains('ss__icon--square')).toBe(true);
		});

		it('can hideOptionIcons', async () => {
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

			const label = 'selectme';
			const selectedIndex = 1;
			const rendered = render(<Select hideOptionIcons label={label} selected={iconOptions[selectedIndex]} options={iconOptions} />);

			const icon = rendered.container.querySelector('.ss__select__dropdown__button__icon');
			const button = rendered.container.querySelector('.ss__select__dropdown__button');
			const selection = rendered.container.querySelector('.ss__select__selection');

			expect(icon).toBeInTheDocument();
			expect(selection).toBeInTheDocument();

			await userEvent.click(button!);

			const options = rendered.container.querySelectorAll('.ss__select__select__option');
			const optionIcon = rendered.container.querySelector('.ss__select__select__option .ss__select__select__option__icon');
			const optionLabel = rendered.container.querySelector('.ss__select__select__option span');

			expect(options).toHaveLength(iconOptions.length);
			expect(optionIcon).not.toBeInTheDocument();
			expect(optionLabel).toBeInTheDocument();
			expect(optionLabel).toHaveTextContent(iconOptions[0].label as string);
		});

		it('can disableStyles', () => {
			const rendered = render(<Select disableStyles options={options} />);

			const selectElement = rendered.container.querySelector('.ss__select');

			expect(selectElement?.classList).toHaveLength(1);
		});

		it('renders with classname', () => {
			const className = 'classy';
			const rendered = render(<Select options={options} className={className} />);

			const selectElement = rendered.container.querySelector('.ss__select');
			expect(selectElement).toBeInTheDocument();
			expect(selectElement).toHaveClass(className);
		});

		describe('Select lang works', () => {
			const selector = '.ss__select';

			it('immediately available lang options', async () => {
				const langOptions = ['buttonLabel'];

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
						const rendered = render(<Select options={options} lang={lang} separator={''} />);
						const element = rendered.container.querySelector(selector);
						expect(element).toBeInTheDocument();

						const langElems = rendered.container.querySelectorAll(`[ss-lang=${option}]`);
						expect(langElems.length).toBeGreaterThan(0);
						langElems.forEach((elem) => {
							if (typeof langObj.value == 'function') {
								expect(valueMock).toHaveBeenCalledWith({
									options: options,
									selectedOptions: [],
									label: undefined,
									open: false,
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
					<Select options={options} />
				</ThemeProvider>
			);
			const selectElement = rendered.container.querySelector('.ss__select')!;
			const buttonElement = selectElement.querySelector('.ss__button')!;

			const styles = getComputedStyle(buttonElement);

			expect(selectElement).toBeInTheDocument();
			expect(styles?.color).toBe(globalTheme.components.button.color);
			expect(selectElement).toHaveClass(globalTheme.components.select.className);
		});

		it('is themeable with theme prop', () => {
			const rendered = render(<Select options={options} theme={propTheme} />);
			const selectElement = rendered.container.querySelector('.ss__select')!;
			const buttonElement = selectElement.querySelector('.ss__button')!;

			const styles = getComputedStyle(buttonElement);

			expect(styles?.color).toBe(propTheme.components.button.color);
			expect(selectElement).toBeInTheDocument();
			expect(selectElement).toHaveClass(propTheme.components.select.className);
		});

		it('is themeable and theme prop overrides ThemeProvider', () => {
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<Select theme={propTheme} options={options} />
				</ThemeProvider>
			);
			const selectElement = rendered.container.querySelector('.ss__select')!;
			const buttonElement = selectElement.querySelector('.ss__button')!;

			const styles = getComputedStyle(buttonElement);

			expect(selectElement).toBeInTheDocument();
			expect(selectElement).toHaveClass(propTheme.components.select.className);
			expect(styles?.color).toBe(propTheme.components.button.color);
		});
	});

	describe('native', () => {
		it('is renders with options', () => {
			const rendered = render(<Select native options={options} />);
			const selectContainer = rendered.container.querySelector('.ss__select');
			const selectElement = selectContainer?.querySelector('select');
			const labelElement = selectContainer?.querySelector('.ss__select__label');
			const separatorElement = selectContainer?.querySelector('.ss__select__label__separator');

			expect(selectContainer).toBeInTheDocument();
			expect(selectElement).toBeInTheDocument();
			expect(labelElement).not.toBeInTheDocument();
			expect(separatorElement).not.toBeInTheDocument();
			expect(selectElement).not.toHaveAttribute('disabled');

			const optionsElements = selectElement?.querySelectorAll('option');
			expect(optionsElements).toHaveLength(options.length);
		});

		it('uses the "label" and "separator" prop', () => {
			const label = 'selectme';
			const separator = ':::';
			const rendered = render(<Select native label={label} separator={separator} options={options} />);

			const selectContainer = rendered.container.querySelector('.ss__select');
			const labelElement = selectContainer?.querySelector('.ss__select__label');
			const separatorElement = selectContainer?.querySelector('.ss__select__label__separator');

			expect(labelElement).toBeInTheDocument();
			expect(labelElement).toHaveTextContent(label);

			expect(separatorElement).toBeInTheDocument();
			expect(separatorElement).toHaveTextContent(separator);
		});

		it('it fires onSelect event on option selection', async () => {
			const selectFn = jest.fn();

			const rendered = render(<Select native options={options} onSelect={selectFn} />);
			const selectContainer = rendered.container.querySelector('.ss__select')!;
			const selectElement = selectContainer.querySelector('select')!;
			const optionsElements = selectElement.querySelectorAll('option')!;

			expect(optionsElements[0].selected).toBe(true);

			await userEvent.selectOptions(selectElement, options[1].value as string);

			expect(selectFn).toHaveBeenCalledWith(expect.anything(), options[1]);
			expect(optionsElements[0].selected).toBe(false);
			expect(optionsElements[1].selected).toBe(true);
		});

		it('it can be disabled', async () => {
			const selectFn = jest.fn();

			const rendered = render(<Select disabled native options={options} onSelect={selectFn} />);
			const selectContainer = rendered.container.querySelector('.ss__select');
			const selectElement = selectContainer?.querySelector('select')!;
			const optionsElements = selectElement?.querySelectorAll('option');
			const firstOptionElement = optionsElements && optionsElements[0];
			const secondOptionElement = optionsElements && optionsElements[1];

			expect(firstOptionElement?.selected).toBe(true);
			expect(selectElement).toHaveAttribute('disabled');

			await userEvent.selectOptions(selectElement, options[1].value as string);

			expect(selectFn).not.toHaveBeenCalledWith(expect.anything(), options[1]);
			expect(firstOptionElement?.selected).toBe(true);
			expect(secondOptionElement?.selected).toBe(false);
		});

		it('renders with classname', () => {
			const className = 'classy';
			const rendered = render(<Select native options={options} className={className} />);

			const selectElement = rendered.container.querySelector('.ss__select');
			expect(selectElement).toBeInTheDocument();
			expect(selectElement).toHaveClass(className);
		});

		it('is themeable with ThemeProvider', () => {
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<Select native options={options} />
				</ThemeProvider>
			);
			const selectElement = rendered.container.querySelector('.ss__select');

			expect(selectElement).toBeInTheDocument();
		});

		it('is themeable with theme prop', () => {
			const rendered = render(<Select native options={options} theme={propTheme} />);
			const selectElement = rendered.container.querySelector('.ss__select');

			expect(selectElement).toBeInTheDocument();
		});

		it('is themeable and theme prop overrides ThemeProvider', () => {
			const rendered = render(
				<ThemeProvider theme={globalTheme}>
					<Select theme={propTheme} native options={options} />
				</ThemeProvider>
			);
			const selectElement = rendered.container.querySelector('.ss__select');

			expect(selectElement).toBeInTheDocument();
		});
	});
});
