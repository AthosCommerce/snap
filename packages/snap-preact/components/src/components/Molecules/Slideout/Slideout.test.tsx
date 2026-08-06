import { h } from 'preact';

import { render, waitFor, act } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';

import { Slideout, SlideDirectionType } from './Slideout';
import { ThemeProvider } from '../../../providers';

describe('Slideout Component', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: true,
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});

	const theme = {
		components: {
			slideout: {
				width: '550px',
			},
		},
	};

	it('renders and is visible', () => {
		const args = {
			active: true,
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);
		const slideoutElement = rendered.container.querySelector('.ss__slideout')!;
		const styles = getComputedStyle(slideoutElement);
		expect(slideoutElement).toBeInTheDocument();
		expect(styles.left).toBe('0px');
	});

	it('is not visible', () => {
		const args = {
			active: false,
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);
		const slideoutElement = rendered.container.querySelector('.ss__slideout')!;
		const styles = getComputedStyle(slideoutElement);
		expect(styles.left).toBe('-300px');
		expect(styles.left).not.toBe('0px');
	});

	it('has custom width', () => {
		const args = {
			active: false,
			width: '400px',
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);
		const slideoutElement = rendered.container.querySelector('.ss__slideout')!;
		const styles = getComputedStyle(slideoutElement);
		expect(styles.maxWidth).toBe(args.width);
	});

	it('has custom displayAtWidth', () => {
		const args = {
			active: false,
			width: '400px',
			displayAt: '(min-width: 600px)',
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);
		const slideoutElement = rendered.container.querySelector('.ss__slideout');
		expect(slideoutElement).toBeInTheDocument();
	});

	it('does not render if matchMedia returns false', () => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false, // return false
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
		const args = {
			active: false,
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);
		const slideoutElement = rendered.container.querySelector('.ss__slideout');
		expect(slideoutElement).not.toBeInTheDocument();
	});

	it('displays overlay', () => {
		const args = {
			active: true,
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);
		const overlayElement = rendered.container.querySelector('.ss__overlay.ss__overlay--active');
		expect(overlayElement).toBeInTheDocument();
	});

	it('hides overlay when inactive', () => {
		const args = {
			active: false,
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);
		const overlayElement = rendered.container.querySelector('.ss__overlay.ss__overlay--active');
		expect(overlayElement).not.toBeInTheDocument();
	});

	it('has custom overlay color', () => {
		const args = {
			active: true,
			overlayColor: 'rgba(0, 0, 0, 0.1)',
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);
		const overlayElement = rendered.container.querySelector('.ss__overlay.ss__overlay--active')!;
		const styles = getComputedStyle(overlayElement);
		expect(styles.background).toBe(args.overlayColor);
	});

	it('can set custom slideDirection', () => {
		const args = {
			active: true,
			slideDirection: 'right' as SlideDirectionType,
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);
		const overlayElement = rendered.container.querySelector('.ss__slideout.ss__slideout--active')!;
		const styles = getComputedStyle(overlayElement);
		expect(styles.right).toBe('0px');
		expect(styles.left).toBe('');
	});

	it('can set custom transitionSpeed', () => {
		const args = {
			active: true,
			transitionSpeed: '0.55s',
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);
		const overlayElement = rendered.container.querySelector('.ss__slideout.ss__slideout--active')!;
		const styles = getComputedStyle(overlayElement);
		expect(styles.transition).toBe(`left ${args.transitionSpeed}`);
	});

	it('renders a wrapper element with classname', () => {
		const args = {
			active: true,
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);

		const buttonElement = rendered.container.querySelector('.ss__slideout__button');
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent(args.buttonContent);
	});

	it('does not render a wrapper element when using "noButtonWrapper" prop', () => {
		const args = {
			noButtonWrapper: true,
			className: 'clickit',
			buttonContent: <div>click me</div>,
		};
		const rendered = render(<Slideout {...args} />);

		const buttonWrapperElement = rendered.container.querySelector('.ss__slideout__button');
		const buttonElement = rendered.container.querySelector(`.${args.className}`);
		expect(buttonWrapperElement).not.toBeInTheDocument();
		expect(buttonElement).toBeInTheDocument();
	});

	it('toggles the "ss__slideout--active" class when the button is clicked', async () => {
		const args = {
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);

		const buttonElement = rendered.container.querySelector('.ss__slideout__button');
		const containerElement = rendered.container.querySelector('.ss__slideout');

		expect(containerElement).not.toHaveClass('ss__slideout--active');

		// click the button
		if (buttonElement) await userEvent.click(buttonElement);
		expect(containerElement).toHaveClass('ss__slideout--active');
	});

	it('toggles the "ss__slideout--active" class when the button is clicked', async () => {
		const args = {
			buttonContent: 'click me',
		};
		const rendered = render(
			<Slideout {...args}>
				<div id="findme">findme</div>
			</Slideout>
		);

		const buttonElement = rendered.container.querySelector('.ss__slideout__button');
		const containerElement = rendered.container.querySelector('.ss__slideout');
		const findMeDiv = rendered.container.querySelector('#findme');

		expect(containerElement).not.toHaveClass('ss__slideout--active');
		expect(findMeDiv).not.toBeInTheDocument();

		// click the button
		await userEvent.click(buttonElement!);

		await waitFor(() => {
			const containerElement = rendered.container.querySelector('.ss__slideout');
			const findMeDiv = rendered.container.querySelector('#findme');
			expect(containerElement).toHaveClass('ss__slideout--active');
			expect(findMeDiv).toBeInTheDocument();
		});
	});

	it('toggles the "ss__slideout--active" class when using clonedElement props', async () => {
		const ButtonComponent = (props: any) => {
			return (
				<div className="custom-button" onClick={() => props.toggleActive()}>
					{props.active ? 'active' : 'inactive'}
				</div>
			);
		};

		const args = {
			noButtonWrapper: true,
			buttonContent: <ButtonComponent />,
		};

		const rendered = render(<Slideout {...args} />);
		const buttonElement = rendered.container.querySelector('.custom-button');
		const containerElement = rendered.container.querySelector('.ss__slideout');

		expect(containerElement).not.toHaveClass('ss__slideout--active');
		expect(buttonElement).toHaveTextContent('inactive');

		// click the button
		if (buttonElement) await userEvent.click(buttonElement);
		expect(containerElement).toHaveClass('ss__slideout--active');
		expect(buttonElement).toHaveTextContent('active');
	});

	it('toggles the "ss__slideout--active" class when the buttonSelector elem is clicked', async () => {
		const args = {
			buttonSelector: '#clickMe',
		};
		const rendered = render(
			<>
				<div id="clickMe">click me</div>
				<Slideout {...args}>
					<div id="findme">findme</div>
				</Slideout>
			</>
		);

		const buttonElement = rendered.container.querySelector('#clickMe');
		const containerElement = rendered.container.querySelector('.ss__slideout');
		const findMeDiv = rendered.container.querySelector('#findme');

		expect(containerElement).not.toHaveClass('ss__slideout--active');
		expect(findMeDiv).not.toBeInTheDocument();

		// click the button
		await userEvent.click(buttonElement!);
		await waitFor(() => {
			const containerElement = rendered.container.querySelector('.ss__slideout');
			const findMeDiv = rendered.container.querySelector('#findme');
			expect(containerElement).toHaveClass('ss__slideout--active');
			expect(findMeDiv).toBeInTheDocument();
		});
	});

	it('does not accumulate listeners across re-renders with string buttonSelector', async () => {
		const button = document.createElement('div');
		button.id = 'accumTest2';
		document.body.appendChild(button);

		const addSpy = jest.spyOn(button, 'addEventListener');

		const args = {
			buttonSelector: '#accumTest2',
			width: '300px',
		};
		const { container, rerender } = render(<Slideout {...args} />);

		// Force several re-renders with a prop change that doesn't affect buttonSelector
		rerender(<Slideout {...args} width="301px" />);
		rerender(<Slideout {...args} width="302px" />);

		// Fixed code: addEventListener('click', ...) called exactly once on mount.
		// Buggy code: called once per render → 3 calls.
		const clickCalls = addSpy.mock.calls.filter(([event]) => event === 'click');
		expect(clickCalls).toHaveLength(1);

		// Behavioral check: a single click opens the slideout
		await act(async () => {
			button.click();
		});
		await waitFor(() => {
			expect(container.querySelector('.ss__slideout')).toHaveClass('ss__slideout--active');
		});

		addSpy.mockRestore();
		document.body.removeChild(button);
	});

	it('toggles correctly using current state with element buttonSelector (no stale closure)', async () => {
		const buttonEl = document.createElement('button');
		buttonEl.id = 'elemBtn';
		document.body.appendChild(buttonEl);

		const addSpy = jest.spyOn(buttonEl, 'addEventListener');

		const args = {
			buttonSelector: buttonEl,
		};
		const { container, unmount } = render(<Slideout {...args} />);

		// Exactly one listener should be attached regardless of re-renders
		const clickCalls = addSpy.mock.calls.filter(([event]) => event === 'click');
		expect(clickCalls).toHaveLength(1);

		expect(container.querySelector('.ss__slideout')).not.toHaveClass('ss__slideout--active');

		// First click → open
		await act(async () => {
			buttonEl.click();
		});
		await waitFor(() => {
			expect(container.querySelector('.ss__slideout')).toHaveClass('ss__slideout--active');
		});

		// Second click → closed (would stay open with stale closure bug)
		await act(async () => {
			buttonEl.click();
		});
		await waitFor(() => {
			expect(container.querySelector('.ss__slideout')).not.toHaveClass('ss__slideout--active');
		});

		addSpy.mockRestore();
		unmount();
		document.body.removeChild(buttonEl);
	});

	it('cleans up listeners on unmount so clicks do not trigger state updates', async () => {
		const button = document.createElement('div');
		button.id = 'unmountBtn2';
		document.body.appendChild(button);

		const addSpy = jest.spyOn(button, 'addEventListener');
		const removeSpy = jest.spyOn(button, 'removeEventListener');

		const args = {
			buttonSelector: '#unmountBtn2',
		};
		const { unmount } = render(<Slideout {...args} />);

		// Capture the handler that was registered
		const clickAddCalls = addSpy.mock.calls.filter(([event]) => event === 'click');
		expect(clickAddCalls).toHaveLength(1);
		const registeredHandler = clickAddCalls[0][1];

		unmount();

		// Fixed code: removeEventListener called with the same handler on cleanup.
		// Buggy code: removeEventListener never called → 0 calls.
		const clickRemoveCalls = removeSpy.mock.calls.filter(([event]) => event === 'click');
		expect(clickRemoveCalls).toHaveLength(1);
		expect(clickRemoveCalls[0][1]).toBe(registeredHandler);

		addSpy.mockRestore();
		removeSpy.mockRestore();
		document.body.removeChild(button);
	});

	it('can disable styles', () => {
		const args = {
			active: true,
			disableStyles: true,
			buttonContent: 'click me',
		};
		const rendered = render(<Slideout {...args} />);

		const resultElement = rendered.container.querySelector('.ss__slideout');

		expect(resultElement?.classList).toHaveLength(2);
	});

	it('can add additional styles', () => {
		const args = {
			buttonContent: 'click me',
			disableStyles: true,
			style: {
				backgroundColor: 'green',
			},
		};

		const rendered = render(<Slideout {...args} />);
		const slideoutElement = rendered.container.querySelector('.ss__slideout');
		const styles = getComputedStyle(slideoutElement!);

		expect(styles.backgroundColor).toBe(args.style.backgroundColor);
	});

	it('is themeable with ThemeProvider', () => {
		const args = {
			buttonContent: 'click me',
			active: true,
		};
		const rendered = render(
			<ThemeProvider theme={theme}>
				<Slideout {...args} />
			</ThemeProvider>
		);
		const slideoutElement = rendered.container.querySelector('.ss__slideout')!;
		const styles = getComputedStyle(slideoutElement);
		expect(styles.maxWidth).toBe(theme.components.slideout.width);
	});

	it('is themeable with theme prop', () => {
		const args = {
			buttonContent: 'click me',
			active: true,
		};
		const rendered = render(<Slideout {...args} theme={theme} />);
		const slideoutElement = rendered.container.querySelector('.ss__slideout')!;
		const styles = getComputedStyle(slideoutElement);
		expect(styles.maxWidth).toBe(theme.components.slideout.width);
	});

	it('is themeable with theme  prop overrides ThemeProvider', () => {
		const args = {
			buttonContent: 'click me',
			active: true,
		};
		const themeOverride = {
			components: {
				slideout: {
					width: '600px',
				},
			},
		};
		const rendered = render(
			<ThemeProvider theme={theme}>
				<Slideout {...args} theme={themeOverride} />
			</ThemeProvider>
		);
		const slideoutElement = rendered.container.querySelector('.ss__slideout')!;
		const styles = getComputedStyle(slideoutElement);
		expect(styles.maxWidth).toBe(themeOverride.components.slideout.width);
	});
});
