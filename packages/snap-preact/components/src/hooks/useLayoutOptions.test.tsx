import { h } from 'preact';
import { useLayoutOptions } from './useLayoutOptions';
import * as useControllerStorageModule from './useControllerStorage';

jest.mock('./useControllerStorage');
const mockUseControllerStorage = useControllerStorageModule.useControllerStorage as jest.Mock;

const mockController = {
	log: jest.fn(),
	storage: { get: jest.fn(), set: jest.fn() },
};

const optionGrid = { label: 'grid', value: 1, default: true, overrides: { components: { results: { columns: 4 } } } };
const optionList = { label: 'list', value: 2, overrides: { components: { results: { columns: 1 } } } };
const layoutOptions = [optionGrid, optionList];

const makeProps = (overrides: any = {}) => ({
	controller: mockController,
	layoutOptions,
	...overrides,
});

/**
 * Run the hook with a pre-set storedSelection value returned by useControllerStorage.
 * storedSelection should be the storable form { value, label } (or undefined), matching
 * what the hook actually persists to session storage.
 */
const runHook = (props: any, globalTheme: any, storedSelection: any) => {
	const storeSelection = jest.fn();
	mockUseControllerStorage.mockReturnValue([storedSelection, storeSelection]);
	useLayoutOptions(props, globalTheme);
	return { storeSelection };
};

describe('useLayoutOptions', () => {
	beforeEach(() => jest.clearAllMocks());

	describe('selection validation', () => {
		it('does not reset when no layout is stored yet', () => {
			const props = makeProps();
			const { storeSelection } = runHook(props, {}, undefined);
			expect(storeSelection).not.toHaveBeenCalled();
		});

		it('does not reset when stored identifier matches an option by value', () => {
			const props = makeProps();
			const { storeSelection } = runHook(props, {}, { value: 1, label: 'grid' });
			expect(storeSelection).not.toHaveBeenCalled();
		});

		it('resets to default (storable form) when stored value is not in current options', () => {
			const props = makeProps();
			const { storeSelection } = runHook(props, {}, { value: 99, label: 'stale' });
			expect(storeSelection).toHaveBeenCalledWith({ value: 1, label: 'grid' });
		});

		it('falls back to label comparison when options have no value field', () => {
			const labelOnlyGrid = { label: 'grid', default: true };
			const labelOnlyList = { label: 'list' };
			const props = makeProps({ layoutOptions: [labelOnlyGrid, labelOnlyList] });
			const { storeSelection } = runHook(props, {}, { label: 'grid' });
			expect(storeSelection).not.toHaveBeenCalled();
		});

		it('resets when label-only option is not found', () => {
			const labelOnlyGrid = { label: 'grid', default: true };
			const props = makeProps({ layoutOptions: [labelOnlyGrid] });
			const { storeSelection } = runHook(props, {}, { label: 'stale' });
			// should store only serializable identifiers of the default option
			expect(storeSelection).toHaveBeenCalledWith({ value: undefined, label: 'grid' });
		});

		it('does not throw when options contain JSX values', () => {
			const jsxOptionGrid = {
				label: 'grid',
				value: 1,
				default: true,
				icon: { children: <span>grid</span> },
				overrides: { components: { results: { columns: 4 } } },
			};
			const jsxOptionList = {
				label: 'list',
				value: 2,
				icon: { children: <span>list</span> },
				overrides: { components: { results: { columns: 1 } } },
			};
			const props = makeProps({ layoutOptions: [jsxOptionGrid, jsxOptionList] });
			expect(() => runHook(props, {}, { value: 1, label: 'grid' })).not.toThrow();
		});

		it('resolves full option (including JSX fields) from layoutOptions after storage lookup', () => {
			const jsxOption = {
				label: 'grid',
				value: 1,
				default: true,
				icon: { children: <span>hi</span> },
			};
			const props = makeProps({ layoutOptions: [jsxOption] });
			runHook(props, {}, { value: 1, label: 'grid' });
			// selected must be the full option (with JSX icon), resolved from layoutOptions
			expect(props.theme.components.layoutSelector.selected).toBe(jsxOption);
		});
	});

	describe('props.theme.components.layoutSelector', () => {
		it('populates layoutSelector with options, selected, and onSelect', () => {
			const props = makeProps();
			runHook(props, {}, { value: 1, label: 'grid' });
			const ls = props.theme.components.layoutSelector;
			expect(ls.options).toBe(layoutOptions);
			expect(ls.selected).toBe(optionGrid);
			expect(typeof ls.onSelect).toBe('function');
		});

		it('onSelect stores only serializable identifiers (value + label)', () => {
			const props = makeProps();
			const { storeSelection } = runHook(props, {}, { value: 1, label: 'grid' });
			props.theme.components.layoutSelector.onSelect({}, optionList);
			expect(storeSelection).toHaveBeenCalledWith({ value: 2, label: 'list' });
			// must not store non-serializable fields like overrides or icon
			expect(storeSelection).not.toHaveBeenCalledWith(expect.objectContaining({ overrides: expect.anything() }));
		});

		it('onSelect does not store when option is falsy', () => {
			const props = makeProps();
			const { storeSelection } = runHook(props, {}, { value: 1, label: 'grid' });
			props.theme.components.layoutSelector.onSelect({}, null);
			expect(storeSelection).not.toHaveBeenCalled();
		});

		it('preserves existing props.theme.components entries', () => {
			const props = makeProps({ theme: { components: { results: { columns: 3 } } } });
			runHook(props, {}, { value: 1, label: 'grid' });
			expect(props.theme.components.results).toEqual({ columns: 3 });
			expect(props.theme.components.layoutSelector).toBeDefined();
		});
	});

	describe('overrides merging', () => {
		const globalThemeWithToolbar = (templateComponent: string) => ({
			components: {
				[`${templateComponent} toolbar`]: {
					layout: ['layoutSelector'],
				},
			},
		});

		it('merges selected layout overrides when toolbar renders layoutSelector', () => {
			const props = makeProps({ treePath: 'search results result' });
			const globalTheme = globalThemeWithToolbar('search');
			runHook(props, globalTheme, { value: 1, label: 'grid' });
			expect(props.theme.components.results).toEqual({ columns: 4 });
		});

		it('does not merge overrides when toolbar does not render layoutSelector', () => {
			const props = makeProps({ treePath: 'search results result' });
			const globalTheme = {
				components: {
					'search toolbar': { layout: ['sortBy'] },
				},
			};
			runHook(props, globalTheme, { value: 1, label: 'grid' });
			expect(props.theme.components.results).toBeUndefined();
		});

		it('does not merge overrides when treePath is not set', () => {
			const props = makeProps(); // no treePath
			const globalTheme = globalThemeWithToolbar('search');
			runHook(props, globalTheme, { value: 1, label: 'grid' });
			expect(props.theme.components.results).toBeUndefined();
		});

		it('merges overrides when toolbar key uses wildcard prefix', () => {
			const props = makeProps({ treePath: 'search results result' });
			const globalTheme = {
				components: {
					'*search toolbar': { layout: ['layoutSelector'] },
				},
			};
			runHook(props, globalTheme, { value: 1, label: 'grid' });
			expect(props.theme.components.results).toEqual({ columns: 4 });
		});

		it('merges overrides when toolbar key has no template prefix (global toolbar)', () => {
			const props = makeProps({ treePath: 'search results result' });
			const globalTheme = {
				components: {
					toolbar: { layout: ['layoutSelector'] },
				},
			};
			runHook(props, globalTheme, { value: 1, label: 'grid' });
			expect(props.theme.components.results).toEqual({ columns: 4 });
		});

		it('merges overrides when toolbar key uses user responsive prefix (M)', () => {
			const props = makeProps({ treePath: 'searchCollapsible results result' });
			const globalTheme = {
				components: {
					'(M)searchCollapsible toolbar.top': { layout: ['layoutSelector'] },
				},
			};
			runHook(props, globalTheme, { value: 1, label: 'grid' });
			expect(props.theme.components.results).toEqual({ columns: 4 });
		});

		it('merges overrides when toolbar key uses user responsive prefix (T)', () => {
			const props = makeProps({ treePath: 'search results result' });
			const globalTheme = {
				components: {
					'(T)search toolbar.middle': { layout: ['layoutSelector'] },
				},
			};
			runHook(props, globalTheme, { value: 1, label: 'grid' });
			expect(props.theme.components.results).toEqual({ columns: 4 });
		});

		it('merges overrides when toolbar key uses user responsive prefix (D)', () => {
			const props = makeProps({ treePath: 'search results result' });
			const globalTheme = {
				components: {
					'(D)search toolbar.top': { layout: ['layoutSelector'] },
				},
			};
			runHook(props, globalTheme, { value: 1, label: 'grid' });
			expect(props.theme.components.results).toEqual({ columns: 4 });
		});
	});
});
