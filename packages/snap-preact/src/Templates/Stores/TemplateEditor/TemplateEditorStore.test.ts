import { TemplateEditorStore } from './TemplateEditorStore';
import { TargetStore } from '../TargetStore';

jest.mock('./uiAbstractions', () => ({
	configUI: () => [],
	themeUI: () => [],
	searchControllerUI: () => [],
	autocompleteControllerUI: () => [],
	searchTargetUI: () => [],
	autocompleteTargetUI: () => [],
	updateAutocompleteControllerState: jest.fn(),
}));

const createTemplatesStore = (searchTargets: TargetStore[] = []) => ({
	config: {
		config: {
			platform: 'other',
		},
		theme: {
			extends: 'base',
		},
	},
	setLanguage: jest.fn(),
	setCurrency: jest.fn(),
	library: {
		themes: {
			base: {
				variables: {
					breakpoints: {
						mobile: 600,
						tablet: 900,
						desktop: 1200,
					},
					colors: {
						primary: 'currentColor',
						secondary: 'rgb(255, 0, 0)',
						accent: '#00AEEF',
					},
				},
			},
		},
	},
	themes: {
		library: {
			base: {
				setEditorOverrides: jest.fn(),
			},
		},
	},
	targets: {
		search: searchTargets,
		autocomplete: [],
		recommendation: {
			bundle: [],
			default: [],
			email: [],
		},
	},
});

describe('TemplateEditorStore', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('preserves non-parsable color tokens while normalizing valid colors', () => {
		const store = new TemplateEditorStore({ templatesStore: createTemplatesStore() as any });

		expect(store.initial.theme.variables.colors.primary).toBe('currentColor');
		expect(store.initial.theme.variables.colors.secondary).toBe('#ff0000');
		expect(store.initial.theme.variables.colors.accent).toBe('#00aeef');
	});

	it('keeps emptyTarget on generated search targets that set it', () => {
		const templatesStore = createTemplatesStore([
			new TargetStore({ target: { type: 'search', selector: '#search', component: 'Search', index: 0 } }),
			new TargetStore({ target: { type: 'search', selector: '#search-skeleton', component: 'Search', emptyTarget: false, index: 1 } }),
		]);
		const store = new TemplateEditorStore({ templatesStore: templatesStore as any });

		const config = store.generateTemplatesConfig();

		expect(config.search?.targets).toStrictEqual([
			{ selector: '#search', component: 'Search' },
			{ selector: '#search-skeleton', component: 'Search', emptyTarget: false },
		]);
	});
});
