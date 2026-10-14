import '@testing-library/jest-dom';
import { h } from 'preact';

import { render } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import { VariantSelection } from './VariantSelection';
import { ThemeProvider } from '../../../providers';

// Minimal stand-in for the store's VariantSelection — only the fields the component reads.
const selection = (overrides: any = {}) =>
	({
		field: 'size',
		label: 'Size',
		type: 'dropdown',
		selected: undefined,
		values: [
			{ value: 'small', label: 'Small', available: true },
			{ value: 'large', label: 'Large', available: true },
		],
		select: jest.fn(),
		...overrides,
	} as any);

describe('VariantSelection Component', () => {
	const globalTheme = {
		components: {
			variantSelection: {
				className: 'classy-global',
			},
		},
	};

	const propTheme = {
		components: {
			variantSelection: {
				className: 'classy-prop',
			},
		},
	};

	it('does not render without selection values', () => {
		const rendered = render(<VariantSelection selection={selection({ values: [] })} />);
		const element = rendered.container.querySelector('.ss__variant-selection');

		expect(element).not.toBeInTheDocument();
	});

	it('renders a dropdown for non-swatch selections', () => {
		const rendered = render(<VariantSelection selection={selection()} />);
		const element = rendered.container.querySelector('.ss__variant-selection')!;

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass('ss__variant-selection--dropdown');
		expect(element).toHaveClass('ss__variant-selection--size');
		expect(rendered.container.querySelector('.ss__dropdown__button')).toBeInTheDocument();
	});

	it('renders swatches when the selection type is swatch', () => {
		const rendered = render(<VariantSelection selection={selection({ field: 'color', label: 'Color', type: 'swatch' })} />);
		const element = rendered.container.querySelector('.ss__variant-selection')!;

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass('ss__variant-selection--swatches');
		expect(rendered.container.querySelector('.ss__swatches')).toBeInTheDocument();
	});

	it('can force the rendered type via the type prop', () => {
		const rendered = render(<VariantSelection selection={selection()} type="list" />);
		const element = rendered.container.querySelector('.ss__variant-selection')!;

		expect(element).toHaveClass('ss__variant-selection--list');
		expect(rendered.container.querySelector('.ss__list')).toBeInTheDocument();
	});

	it('renders the selection label and current value in the dropdown button', () => {
		const rendered = render(<VariantSelection selection={selection({ selected: { value: 'small', label: 'Small' } })} />);

		const label = rendered.container.querySelector('.ss__dropdown__button-wrapper__label');
		const selected = rendered.container.querySelector('.ss__dropdown__button-wrapper__selection');

		expect(label).toHaveTextContent('Size');
		expect(selected).toHaveTextContent('(small)');
	});

	it('does not render a current value in the dropdown button without a selected option', () => {
		const rendered = render(<VariantSelection selection={selection()} />);

		expect(rendered.container.querySelector('.ss__dropdown__button-wrapper__label')).toBeInTheDocument();
		expect(rendered.container.querySelector('.ss__dropdown__button-wrapper__selection')).not.toBeInTheDocument();
	});

	it('opens the dropdown and portals the options when the button is clicked', async () => {
		const rendered = render(<VariantSelection selection={selection()} />);

		const dropdown = rendered.container.querySelector('.ss__dropdown')!;
		const button = rendered.container.querySelector('.ss__dropdown__button')!;

		expect(dropdown).not.toHaveClass('ss__dropdown--open');

		await userEvent.click(button);

		expect(dropdown).toHaveClass('ss__dropdown--open');

		// the options list is portaled to document.body, outside the rendered container
		const options = document.body.querySelectorAll('.ss__variant-selection__option');
		expect(rendered.container.querySelector('.ss__variant-selection__option')).not.toBeInTheDocument();
		expect(options).toHaveLength(2);
		expect(options[0]).toHaveTextContent('Small');
		expect(options[1]).toHaveTextContent('Large');
	});

	it('selects the option and closes the dropdown when an option is clicked', async () => {
		const sel = selection();
		const rendered = render(<VariantSelection selection={sel} />);

		const dropdown = rendered.container.querySelector('.ss__dropdown')!;
		const button = rendered.container.querySelector('.ss__dropdown__button')!;

		await userEvent.click(button);
		expect(dropdown).toHaveClass('ss__dropdown--open');

		const option = document.body.querySelector('.ss__variant-selection__option')!;
		await userEvent.click(option);

		expect(sel.select).toHaveBeenCalledWith('small');
		expect(dropdown).not.toHaveClass('ss__dropdown--open');
	});

	it('fires the onSelect prop on option selection', async () => {
		const selectFn = jest.fn();
		const sel = selection();
		const rendered = render(<VariantSelection selection={sel} onSelect={selectFn} />);

		await userEvent.click(rendered.container.querySelector('.ss__dropdown__button')!);
		await userEvent.click(document.body.querySelectorAll('.ss__variant-selection__option')[1]);

		expect(selectFn).toHaveBeenCalledWith(expect.anything(), sel.values[1]);
		expect(sel.select).toHaveBeenCalledWith('large');
	});

	it('marks selected, disabled and unavailable options with modifier classes', async () => {
		const sel = selection({
			selected: { value: 'small', label: 'Small' },
			values: [
				{ value: 'small', label: 'Small', available: true },
				{ value: 'large', label: 'Large', disabled: true },
				{ value: 'medium', label: 'Medium', available: false },
			],
		});
		const rendered = render(<VariantSelection selection={sel} />);

		await userEvent.click(rendered.container.querySelector('.ss__dropdown__button')!);

		const options = document.body.querySelectorAll('.ss__variant-selection__option');
		expect(options[0]).toHaveClass('ss__variant-selection__option--selected');
		expect(options[1]).toHaveClass('ss__variant-selection__option--disabled');
		expect(options[1]).toHaveAttribute('aria-disabled', 'true');
		expect(options[2]).toHaveClass('ss__variant-selection__option--unavailable');
	});

	it('selects through the List component when rendered as a list', async () => {
		const sel = selection();
		const rendered = render(<VariantSelection selection={sel} type="list" />);

		const optionElements = rendered.container.querySelectorAll('.ss__list__option');
		expect(optionElements).toHaveLength(2);

		await userEvent.click(optionElements[1]);

		expect(sel.select).toHaveBeenCalledWith('large');
	});

	it('renders with additional style using prop', () => {
		const style = {
			padding: '20px',
		};

		const rendered = render(<VariantSelection selection={selection()} style={style} />);
		const element = rendered.container.querySelector('.ss__variant-selection')!;

		const styles = getComputedStyle(element);

		expect(styles.padding).toBe(style.padding);
	});

	it('can disableStyles', () => {
		const rendered = render(<VariantSelection selection={selection()} disableStyles />);

		const element = rendered.container.querySelector('.ss__variant-selection');

		// base class + type and field modifiers only — no emotion class
		expect(element?.classList).toHaveLength(3);
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<VariantSelection selection={selection()} className={className} />);

		const element = rendered.container.querySelector('.ss__variant-selection');
		expect(element).toBeInTheDocument();
		expect(element).toHaveClass(className);
	});

	it('is themeable with ThemeProvider', () => {
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<VariantSelection selection={selection()} />
			</ThemeProvider>
		);
		const element = rendered.container.querySelector('.ss__variant-selection')!;

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass(globalTheme.components.variantSelection.className);
	});

	it('is themeable with theme prop', () => {
		const rendered = render(<VariantSelection selection={selection()} theme={propTheme} />);
		const element = rendered.container.querySelector('.ss__variant-selection')!;

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass(propTheme.components.variantSelection.className);
	});

	it('is themeable and theme prop overrides ThemeProvider', () => {
		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<VariantSelection selection={selection()} theme={propTheme} />
			</ThemeProvider>
		);
		const element = rendered.container.querySelector('.ss__variant-selection')!;

		expect(element).toBeInTheDocument();
		expect(element).toHaveClass(propTheme.components.variantSelection.className);
	});
});
