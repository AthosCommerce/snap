import { h } from 'preact';
import { render, waitFor } from '@testing-library/preact';
import '@testing-library/jest-dom';

import { ThemeProvider, type Theme } from './theme';

describe('ThemeProvider', () => {
	beforeEach(() => {
		document.head.innerHTML = '';
		document.body.innerHTML = '';
	});

	it('does not duplicate global style scope or injected styles for nested providers with the same theme name', async () => {
		const globalStyle = jest.fn(({ variables }) => ({
			'.example': {
				color: variables.colors.primary,
			},
		}));

		const theme: Theme = {
			name: 'nested-theme',
			variables: {
				breakpoints: {
					mobile: 540,
					tablet: 767,
					desktop: 1200,
				},
				colors: {
					primary: '#111111',
					secondary: '#222222',
					accent: '#333333',
				},
			},
			globalStyle,
		};

		const rendered = render(
			<ThemeProvider theme={theme}>
				<ThemeProvider theme={theme}>
					<div className="example">content</div>
				</ThemeProvider>
			</ThemeProvider>
		);

		await waitFor(() => {
			expect(rendered.container.querySelectorAll('.ss__theme__nested-theme')).toHaveLength(1);
			expect(globalStyle).toHaveBeenCalledTimes(1);
		});
	});

	it('does not duplicate injected styles across separate roots with the same theme name', async () => {
		const globalStyle = jest.fn(({ variables }) => ({
			'.example': {
				color: variables.colors.primary,
			},
		}));

		const theme: Theme = {
			name: 'global',
			variables: {
				breakpoints: {
					mobile: 540,
					tablet: 767,
					desktop: 1200,
				},
				colors: {
					primary: '#111111',
					secondary: '#222222',
					accent: '#333333',
				},
			},
			globalStyle,
		};

		const renderedOne = render(
			<ThemeProvider theme={theme}>
				<div className="example">one</div>
			</ThemeProvider>
		);

		const renderedTwo = render(
			<ThemeProvider theme={theme}>
				<div className="example">two</div>
			</ThemeProvider>
		);

		await waitFor(() => {
			expect(renderedOne.container.querySelectorAll('.ss__theme__global')).toHaveLength(1);
			expect(renderedTwo.container.querySelectorAll('.ss__theme__global')).toHaveLength(1);
			expect(globalStyle).toHaveBeenCalledTimes(1);
		});
	});
});
