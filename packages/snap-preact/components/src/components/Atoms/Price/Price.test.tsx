import { h } from 'preact';
import { render } from '@testing-library/preact';

import { Price } from './Price';
import { ThemeProvider } from '../../../providers';

describe('Price Component', () => {
	it('renders', () => {
		const rendered = render(<Price value={1099.99} />);
		const priceElement = rendered.container.querySelector('.ss__price');
		expect(priceElement).toBeInTheDocument();
	});

	it('has a line-through', () => {
		const args = {
			value: 1099.99,
			lineThrough: true,
		};
		const rendered = render(<Price {...args} />);
		const priceElement = rendered.container.querySelector('.ss__price')!;
		const styles = getComputedStyle(priceElement);
		expect(styles.textDecoration).toBe('line-through');
	});

	it('does not render the currency code by default', () => {
		const rendered = render(<Price value={1099.99} code={'USD'} />);
		expect(rendered.container.querySelector('.ss__price__code')).not.toBeInTheDocument();
		expect(rendered.container.querySelector('.ss__price')?.textContent).toBe('$1,099.99');
	});

	it('renders the currency code after the amount when showCode is enabled', () => {
		const rendered = render(<Price value={1099.99} code={'USD'} showCode={true} />);
		const codeElement = rendered.container.querySelector('.ss__price__code');
		expect(codeElement).toBeInTheDocument();
		expect(codeElement?.textContent).toBe('USD');
		// separated by a non-breaking space so the amount and code stay on one line
		expect(rendered.container.querySelector('.ss__price')?.textContent).toBe('$1,099.99\u00A0USD');
	});

	it('renders a trailing symbol and a trailing code together', () => {
		const args = {
			value: 1099.99,
			symbol: 'kr',
			symbolAfter: true,
			thousandsSeparator: ' ',
			decimalSeparator: ',',
			code: 'SEK',
			showCode: true,
		};
		const rendered = render(<Price {...args} />);
		expect(rendered.container.querySelector('.ss__price')?.textContent).toBe('1 099,99kr\u00A0SEK');
	});

	it('does not render the currency code when a format function is supplied', () => {
		const rendered = render(<Price value={1099.99} code={'USD'} showCode={true} format={() => 'CUSTOM'} />);
		expect(rendered.container.querySelector('.ss__price__code')).not.toBeInTheDocument();
		expect(rendered.container.querySelector('.ss__price')?.textContent).toBe('CUSTOM');
	});

	it('takes the currency code from the theme', () => {
		const theme = {
			components: {
				price: {
					code: 'EUR',
					showCode: true,
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={theme}>
				<Price value={1099.99} />
			</ThemeProvider>
		);
		expect(rendered.container.querySelector('.ss__price__code')?.textContent).toBe('EUR');
	});

	it('has default custom options', () => {
		const args = {
			value: 1099.99,
		};
		const rendered = render(<Price {...args} />);
		const priceElement = rendered.container.querySelector('.ss__price');
		const priceText = priceElement?.textContent;
		expect(priceText).toBe('$1,099.99');
	});

	it('has custom options', () => {
		const args = {
			value: 1099.99,
			symbol: ' £',
			decimalPlaces: 2,
			thousandsSeparator: '.',
			decimalSeparator: '.',
			symbolAfter: true,
		};
		const rendered = render(<Price {...args} />);
		const priceElement = rendered.container.querySelector('.ss__price');
		const symbolElement = rendered.container.querySelector('.ss__price__symbol');

		const priceText = priceElement?.textContent;
		expect(priceText).toBe('1.099.99 £');

		expect(symbolElement).toBeDefined();
		expect(symbolElement?.textContent).toBe(args.symbol);
	});

	it('renders with additional style using prop', () => {
		const style = {
			padding: '20px',
		};

		const rendered = render(<Price value={100} style={style} />);
		const priceElement = rendered.container.querySelector('.ss__price')!;
		const styles = getComputedStyle(priceElement);

		expect(styles.padding).toBe(style.padding);
	});

	it('can disable styling', () => {
		const args = {
			value: 1099.99,
			disableStyles: true,
		};
		const rendered = render(<Price {...args} />);
		const priceElement = rendered.container.querySelector('.ss__price');
		expect(priceElement?.className).not.toMatch(/formatted-/);
	});

	it('can custom className', () => {
		const args = {
			value: 1099.99,
			className: 'custom-class',
		};
		const rendered = render(<Price {...args} />);
		const priceElement = rendered.container.querySelector('.ss__price');
		expect(priceElement?.classList).toContain(args.className);
	});

	it('is themeable with ThemeProvider', () => {
		const globalTheme = {
			components: {
				price: {
					className: 'theme-class',
				},
			},
		};

		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<Price value={1099.99} />
			</ThemeProvider>
		);

		const priceElement = rendered.container.querySelector('.ss__price');
		expect(priceElement).toHaveClass(globalTheme.components.price.className);
	});

	it('is themeable with theme prop', () => {
		const propTheme = {
			components: {
				price: {
					className: 'theme-class',
				},
			},
		};

		const rendered = render(<Price value={1099.99} theme={propTheme} />);

		const priceElement = rendered.container.querySelector('.ss__price');
		expect(priceElement).toHaveClass(propTheme.components.price.className);
	});

	it('is themeable and theme prop overrides ThemeProvider', () => {
		const globalTheme = {
			components: {
				price: {
					className: 'global-class',
				},
			},
		};

		const propTheme = {
			components: {
				price: {
					className: 'theme-class',
				},
			},
		};

		const rendered = render(
			<ThemeProvider theme={globalTheme}>
				<Price value={1099.99} theme={propTheme} />
			</ThemeProvider>
		);

		const priceElement = rendered.container.querySelector('.ss__price');
		expect(priceElement).toHaveClass(propTheme.components.price.className);
		expect(priceElement).not.toHaveClass(globalTheme.components.price.className);
	});
});
