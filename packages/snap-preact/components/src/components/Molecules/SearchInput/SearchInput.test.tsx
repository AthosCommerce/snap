import { h } from 'preact';
import { fireEvent, render } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '../../../providers/theme';
import { SearchInput } from './SearchInput';

describe('SearchInput Component', () => {
	const theme = {
		components: {
			searchInput: {
				placeholderText: 'theme',
			},
		},
	};

	it('renders', () => {
		const rendered = render(<SearchInput value={''} />);
		const searchInput = rendered.container.querySelector('.ss__search-input');
		expect(searchInput).toBeInTheDocument();
	});

	it('can update placeholderText text', () => {
		const placeholderText = 'hello';
		const rendered = render(<SearchInput value={''} placeholderText={placeholderText} />);
		const searchInput: HTMLInputElement = rendered.container.querySelector('.ss__search-input__input')!;
		expect(searchInput).toBeInTheDocument();
		expect(searchInput.placeholder).toBe(placeholderText);
	});

	it('can update name attribute text', () => {
		const name = 'hello';
		const rendered = render(<SearchInput value={''} inputName={name} />);
		const searchInput: HTMLInputElement = rendered.container.querySelector('.ss__search-input__input')!;
		expect(searchInput).toBeInTheDocument();
		expect(searchInput.getAttribute('name')).toBe(name);
	});

	it('can invoke onChange callback', async () => {
		const onChangeFn = jest.fn();
		const text = 'hello world';
		const rendered = render(<SearchInput value={''} onChange={onChangeFn} />);
		const searchInput: HTMLInputElement = rendered.container.querySelector('.ss__search-input__input')!;
		expect(searchInput).toBeInTheDocument();

		await userEvent.type(searchInput, text);
		expect(searchInput.value).toBe(text);
		expect(onChangeFn).toHaveBeenCalled();
	});

	it('can change searchButton icon with submitSearchButton prop', () => {
		const rendered = render(<SearchInput value={''} submitSearchButton={{ icon: 'cog' }} />);
		const searchInput = rendered.container.querySelector('.ss__search-input__input');
		expect(searchInput).toBeInTheDocument();
		const icon = rendered.container.querySelector('.ss__icon');
		expect(icon).toBeInTheDocument();
		expect(icon?.classList).toContain('ss__icon--cog');
	});

	it('can disable styling', () => {
		const rendered = render(<SearchInput value={''} disableStyles={true} />);
		const searchInput = rendered.container.querySelector('.ss__search-input');
		expect(searchInput?.classList.length).toBe(1);
	});

	it('renders with classname', () => {
		const className = 'classy';
		const rendered = render(<SearchInput value={''} className={className} />);
		const searchInput = rendered.container.querySelector('.ss__search-input');

		expect(searchInput).toBeInTheDocument();
		expect(searchInput).toHaveClass(className);
	});

	it('renders with search icon by default', async () => {
		const func = jest.fn();
		const rendered = render(<SearchInput value={''} submitSearchButton={{ onClick: func }} />);
		const searchButton = rendered.container.querySelector('.ss__search-input__button--submit-search-button');
		const searchButtonIcon = rendered.container.querySelector('.ss__search-input__button--submit-search-button .ss__icon--search-thin');
		expect(searchButton).toBeInTheDocument();
		expect(searchButtonIcon).toBeInTheDocument();

		expect(func).not.toHaveBeenCalled();

		await userEvent.click(searchButton!);

		expect(func).toHaveBeenCalled();
	});

	it('renders with clear icon only when value', async () => {
		const func = jest.fn();
		const rendered = render(<SearchInput value={''} clearSearchButton={{ onClick: func, icon: 'cog' }} />);
		const clearButton = rendered.container.querySelector('.ss__search-input__button--clear-search-icon');
		const clearButtonIcon = rendered.container.querySelector('.ss__search-input__button--clear-search-icon .ss__icon--cog');

		expect(clearButton).not.toBeInTheDocument();
		expect(clearButtonIcon).not.toBeInTheDocument();

		const rendered2 = render(<SearchInput value={'val'} clearSearchButton={{ onClick: func, icon: 'cog' }} />);
		const clearButton2 = rendered2.container.querySelector('.ss__search-input__button--clear-search-button');
		const clearButtonIcon2 = rendered2.container.querySelector('.ss__search-input__button--clear-search-button .ss__icon--cog');

		expect(clearButton2).toBeInTheDocument();
		expect(clearButtonIcon2).toBeInTheDocument();

		expect(func).not.toHaveBeenCalled();

		await userEvent.click(clearButton2!);

		expect(func).toHaveBeenCalled();

		//hmm this doesnt work in the test..
		// const input = rendered2.container.querySelector('input');
		// expect(input!.value).toBe('');
	});

	it('renders with close icon', async () => {
		const func = jest.fn();
		const rendered = render(<SearchInput value={''} closeSearchButton={{ onClick: func, icon: 'cog' }} />);
		const closeButton = rendered.container.querySelector('.ss__search-input__button--close-search-button');
		const closeButtonIcon = rendered.container.querySelector('.ss__search-input__button--close-search-button .ss__icon--cog');

		expect(closeButton).toBeInTheDocument();
		expect(closeButtonIcon).toBeInTheDocument();

		expect(func).not.toHaveBeenCalled();

		await userEvent.click(closeButton!);

		expect(func).toHaveBeenCalled();
	});

	it('uses defaultValue as the initial value when value is not provided', async () => {
		const rendered = render(<SearchInput defaultValue={'dress'} />);
		const input: HTMLInputElement = rendered.container.querySelector('.ss__search-input__input')!;

		expect(input.value).toBe('dress');

		await userEvent.type(input, 'es');
		expect(input.value).toBe('dresses');
	});

	it('ignores defaultValue when value is provided', () => {
		const rendered = render(<SearchInput value={'shoes'} defaultValue={'dress'} />);
		const input: HTMLInputElement = rendered.container.querySelector('.ss__search-input__input')!;

		expect(input.value).toBe('shoes');
	});

	it('invokes onSubmit with the input value when Enter is pressed', async () => {
		const onSubmit = jest.fn();
		const rendered = render(<SearchInput onSubmit={onSubmit} />);
		const input: HTMLInputElement = rendered.container.querySelector('.ss__search-input__input')!;

		await userEvent.type(input, 'dress');
		expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.type(input, '{Enter}');
		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(onSubmit.mock.calls[0][0].key).toBe('Enter');
		expect(onSubmit.mock.calls[0][1]).toBe('dress');
	});

	it('does not invoke onSubmit for an Enter that confirms an IME composition', () => {
		const onSubmit = jest.fn();
		const rendered = render(<SearchInput defaultValue={'dress'} onSubmit={onSubmit} />);
		const input: HTMLInputElement = rendered.container.querySelector('.ss__search-input__input')!;

		fireEvent.keyDown(input, { key: 'Enter', keyCode: 229 });
		expect(onSubmit).not.toHaveBeenCalled();

		fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(onSubmit.mock.calls[0][1]).toBe('dress');
	});

	it('invokes onSubmit and submitSearchButton.onClick when the submit button is clicked', async () => {
		const onSubmit = jest.fn();
		const onClick = jest.fn();
		const rendered = render(<SearchInput defaultValue={'dress'} onSubmit={onSubmit} submitSearchButton={{ onClick }} />);
		const submitButton = rendered.container.querySelector('.ss__search-input__button--submit-search-button')!;

		await userEvent.click(submitButton);

		expect(onClick).toHaveBeenCalledTimes(1);
		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(onSubmit.mock.calls[0][0].type).toBe('click');
		expect(onSubmit.mock.calls[0][1]).toBe('dress');
	});

	it('does not invoke onSubmit from the submit button when disabled', async () => {
		const onSubmit = jest.fn();
		const rendered = render(<SearchInput defaultValue={'dress'} onSubmit={onSubmit} disabled />);
		const submitButton = rendered.container.querySelector('.ss__search-input__button--submit-search-button')!;

		await userEvent.click(submitButton);

		expect(onSubmit).not.toHaveBeenCalled();
	});

	describe('search input lang works', () => {
		const selector = '.ss__search-input';

		it('immediately available lang options', async () => {
			// placeholderText
			const langOptions = ['submitSearchButton', 'clearSearchButton', 'closeSearchButton'];

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
				langObjs.forEach(async (langObj) => {
					const lang = {
						[`${option}`]: langObj,
					};

					// @ts-ignore
					const rendered = render(
						<SearchInput value={'dress'} lang={lang} closeSearchButton={{ icon: 'close' }} clearSearchButton={{ icon: 'close-thin' }} />
					);

					const element = rendered.container.querySelector(selector);
					expect(element).toBeInTheDocument();

					const langElem = rendered.container.querySelector(`[ss-lang=${option}]`);
					expect(langElem).toBeInTheDocument();
					if (typeof langObj.value == 'function') {
						expect(langElem?.innerHTML).toBe(value);
					} else {
						expect(langElem?.innerHTML).toBe(langObj.value);
					}

					expect(langElem).toHaveAttribute('alt', altText);
					expect(langElem).toHaveAttribute('aria-label', ariaLabel);
					expect(langElem).toHaveAttribute('aria-valuetext', ariaValueText);
					expect(langElem).toHaveAttribute('title', title);

					jest.restoreAllMocks();
				});
			});
		});
	});

	it('hides the submit search button with hideSubmitSearchButton', () => {
		const rendered = render(<SearchInput value={''} hideSubmitSearchButton={true} />);
		const submitButton = rendered.container.querySelector('.ss__search-input__button--submit-search-button');
		expect(submitButton).not.toBeInTheDocument();
	});

	it('hides the clear search button with hideClearSearchButton', () => {
		const rendered = render(<SearchInput value={'dress'} hideClearSearchButton={true} />);
		const clearButton = rendered.container.querySelector('.ss__search-input__button--clear-search-button');
		expect(clearButton).not.toBeInTheDocument();
	});

	it('hides the close search button with hideCloseSearchButton', () => {
		const rendered = render(<SearchInput value={''} closeSearchButton={{ icon: 'angle-left' }} hideCloseSearchButton={true} />);
		const closeButton = rendered.container.querySelector('.ss__search-input__button--close-search-button');
		expect(closeButton).not.toBeInTheDocument();
	});

	it('is themeable with ThemeProvider', () => {
		const rendered = render(
			<ThemeProvider theme={theme}>
				<SearchInput value={''} />
			</ThemeProvider>
		);

		const searchInput: HTMLInputElement = rendered.container.querySelector('.ss__search-input__input')!;
		expect(searchInput).toBeInTheDocument();

		expect(searchInput?.placeholder).toBe(theme.components.searchInput.placeholderText);
	});

	it('is themeable with theme prop', () => {
		const rendered = render(<SearchInput value={''} theme={theme} />);
		const searchInput: HTMLInputElement = rendered.container.querySelector('.ss__search-input__input')!;
		expect(searchInput).toBeInTheDocument();

		expect(searchInput.placeholder).toBe(theme.components.searchInput.placeholderText);
	});

	it('is themeable with theme prop overrides ThemeProvider', () => {
		const componentTheme = {
			components: {
				searchInput: {
					placeholderText: 'theme 2',
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={theme}>
				<SearchInput value={''} theme={componentTheme} />
			</ThemeProvider>
		);
		const searchInput: HTMLInputElement | null = rendered.container.querySelector('.ss__search-input__input');
		expect(searchInput).toBeInTheDocument();

		expect(searchInput?.placeholder).toBe(componentTheme.components.searchInput.placeholderText);
	});
});
