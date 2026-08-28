import { renderHook, act } from '@testing-library/preact';
import { useChatOverflow, UseChatOverflowOptions } from './useChatOverflow';

type ContainerMock = {
	scrollHeight: number;
	clientHeight: number;
	scrollTop: number;
	scrollTo: jest.Mock;
	addEventListener: jest.Mock;
	removeEventListener: jest.Mock;
	scrollHandlers: (() => void)[];
};

const makeContainer = (overrides: Partial<ContainerMock> = {}): ContainerMock => {
	const container: ContainerMock = {
		scrollHeight: 500,
		clientHeight: 500,
		scrollTop: 0,
		scrollTo: jest.fn(),
		addEventListener: jest.fn((event: string, handler: () => void) => {
			if (event === 'scroll') container.scrollHandlers.push(handler);
		}),
		removeEventListener: jest.fn(),
		scrollHandlers: [],
		...overrides,
	};
	return container;
};

describe('useChatOverflow', () => {
	const setup = (containerOverrides: Partial<ContainerMock> = {}, optionOverrides: Partial<UseChatOverflowOptions> = {}) => {
		const container = makeContainer(containerOverrides);
		const header = { offsetHeight: 80 } as HTMLDivElement;
		const messagesContainerRef = { current: container as unknown as HTMLDivElement };
		const headerRef = { current: header };

		const initialProps: UseChatOverflowOptions = {
			messagesContainerRef,
			headerRef,
			open: true,
			loading: false,
			visibleChatLength: 0,
			lastVisibleMessage: undefined,
			...optionOverrides,
		};
		const utils = renderHook((props: UseChatOverflowOptions) => useChatOverflow(props), { initialProps });
		return { container, header, messagesContainerRef, headerRef, initialProps, ...utils };
	};

	it('scrolls to the bottom of the container when opened', () => {
		const { container } = setup({ scrollHeight: 900 });
		expect(container.scrollTo).toHaveBeenCalledWith({ top: 900, behavior: 'smooth' });
	});

	it('reports no overflow when the content fits', () => {
		const { result } = setup({ scrollHeight: 500, clientHeight: 500 });
		expect(result.current.messagesOverflow).toBe(false);
	});

	it('reports overflow when content exceeds the container', () => {
		const { result } = setup({ scrollHeight: 700, clientHeight: 500 });
		expect(result.current.messagesOverflow).toBe(true);
	});

	it('applies hysteresis before switching back from overlay to in-flow', () => {
		const { result, container, initialProps, rerender } = setup({ scrollHeight: 700, clientHeight: 500 });
		expect(result.current.messagesOverflow).toBe(true);

		// shrink the content, but not enough to also fit the 80px header re-inserted in flow
		container.scrollHeight = 460;
		rerender({ ...initialProps, visibleChatLength: 1 });
		expect(result.current.messagesOverflow).toBe(true);

		// shrink far enough that the content fits with the header taking flow space
		container.scrollHeight = 400;
		rerender({ ...initialProps, visibleChatLength: 2 });
		expect(result.current.messagesOverflow).toBe(false);
	});

	it('auto-scrolls when the user sends a message', () => {
		const { container, initialProps, rerender } = setup();
		container.scrollTo.mockClear();

		rerender({ ...initialProps, visibleChatLength: 1, lastVisibleMessage: { messageType: 'user' } });
		expect(container.scrollTo).toHaveBeenCalled();
	});

	it('shows the new-messages indicator for response messages when scrolled up', () => {
		const { result, container, initialProps, rerender } = setup({ scrollHeight: 1000, clientHeight: 400 });

		// simulate the user scrolling away from the bottom
		container.scrollTop = 100; // 1000 - 100 - 400 = 500 > 100 threshold
		act(() => container.scrollHandlers.forEach((handler) => handler()));

		container.scrollTo.mockClear();
		rerender({ ...initialProps, visibleChatLength: 1, lastVisibleMessage: { messageType: 'text' } });

		expect(result.current.showNewMessages).toBe(true);
		expect(container.scrollTo).not.toHaveBeenCalled();
	});

	it('auto-scrolls response messages into view when already near the bottom', () => {
		const { result, container, initialProps, rerender } = setup({ scrollHeight: 1000, clientHeight: 400 });

		container.scrollTop = 550; // 1000 - 550 - 400 = 50 < 100 threshold
		act(() => container.scrollHandlers.forEach((handler) => handler()));

		container.scrollTo.mockClear();
		rerender({ ...initialProps, visibleChatLength: 1, lastVisibleMessage: { messageType: 'text' } });

		expect(result.current.showNewMessages).toBe(false);
		expect(container.scrollTo).toHaveBeenCalled();
	});

	it('dismisses the new-messages indicator when the user scrolls back to the bottom', () => {
		const { result, container, initialProps, rerender } = setup({ scrollHeight: 1000, clientHeight: 400 });

		container.scrollTop = 100;
		act(() => container.scrollHandlers.forEach((handler) => handler()));
		rerender({ ...initialProps, visibleChatLength: 1, lastVisibleMessage: { messageType: 'text' } });
		expect(result.current.showNewMessages).toBe(true);

		container.scrollTop = 590;
		act(() => container.scrollHandlers.forEach((handler) => handler()));
		expect(result.current.showNewMessages).toBe(false);
	});

	it('scrolls to show the loading indicator when loading starts', () => {
		const { container, initialProps, rerender } = setup();
		container.scrollTo.mockClear();

		rerender({ ...initialProps, loading: true });
		expect(container.scrollTo).toHaveBeenCalled();
	});

	it('only scrolls conditionally when the user is near the bottom', () => {
		const { result, container } = setup({ scrollHeight: 1000, clientHeight: 400 });

		container.scrollTop = 100;
		act(() => container.scrollHandlers.forEach((handler) => handler()));
		container.scrollTo.mockClear();
		result.current.scrollToBottomIfNear();
		expect(container.scrollTo).not.toHaveBeenCalled();

		container.scrollTop = 590;
		act(() => container.scrollHandlers.forEach((handler) => handler()));
		container.scrollTo.mockClear();
		result.current.scrollToBottomIfNear();
		expect(container.scrollTo).toHaveBeenCalled();
	});
});
