import { TemplateEditorStore } from './TemplateEditorStore';

jest.mock('./uiAbstractions', () => ({
	configUI: () => [],
	themeUI: () => [],
	searchControllerUI: () => [],
	autocompleteControllerUI: () => [],
	searchTargetUI: () => [],
	autocompleteTargetUI: () => [],
	updateAutocompleteControllerState: jest.fn(),
}));

describe('TemplateEditorStore', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('preserves non-parsable color tokens while normalizing valid colors', () => {
		const templatesStore = {
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
				search: [],
				autocomplete: [],
			},
		};

		const store = new TemplateEditorStore({ templatesStore: templatesStore as any });

		expect(store.initial.theme.variables.colors.primary).toBe('currentColor');
		expect(store.initial.theme.variables.colors.secondary).toBe('#ff0000');
		expect(store.initial.theme.variables.colors.accent).toBe('#00aeef');
	});
});
