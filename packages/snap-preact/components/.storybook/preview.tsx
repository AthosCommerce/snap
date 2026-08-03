import { ComponentChildren, h } from 'preact';
import type { Preview } from '@storybook/preact-vite';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { useGlobals, useEffect } from 'storybook/preview-api';
import { observer } from 'mobx-react-lite';

import { AutodocsPage } from './AutodocsPage';
import { preserveArgTypesOrder } from './preserveArgTypesOrder';
import { SnapTemplates, TemplatesStore } from '../../src';
import { ThemeComplete, ThemeProvider } from '../src/providers/theme';
import { base, bocachica, pike, snappy, snapnco } from '../src/themes';

// custom styles for storybook
import './styles.scss';
import { SnapProvider, Theme, TreePathProvider } from '../src';

// snap instance for theming and templates functionality
const snapTemplates = new SnapTemplates({
	config: {
		siteId: 'atkzs2',
		platform: 'other',
	},
	theme: {
		extends: 'base',
	},
});

// need to add each theme synchronously
addTheme(snapTemplates, 'base', base);
addTheme(snapTemplates, 'bocachica', bocachica);
addTheme(snapTemplates, 'pike', pike);
addTheme(snapTemplates, 'snapnco', snapnco);
addTheme(snapTemplates, 'snappy', snappy);

// color keys that map to theme variables.colors
const COLOR_KEYS = ['primary', 'secondary', 'accent'] as const;
type ColorKey = typeof COLOR_KEYS[number];
const GLOBAL_COLOR_PREFIX = 'themeColor_';
const DEFAULT_COLOR_PREFIX = 'themeDefaultColor_';

const Providers = observer(
	({
		templateStore,
		children,
		themeName,
		colorOverrides,
	}: {
		templateStore: TemplatesStore;
		themeName: string;
		colorOverrides: Partial<Record<ColorKey, string>>;
		children: ComponentChildren;
	}) => {
		const themeLocation = templateStore.themes.library[themeName];
		const baseTheme = themeLocation?.theme || {};

		const hasOverrides = COLOR_KEYS.some((k) => colorOverrides[k]);
		const mergedTheme = hasOverrides
			? {
					...baseTheme,
					variables: {
						...baseTheme.variables,
						colors: {
							...baseTheme.variables?.colors,
							...Object.fromEntries(COLOR_KEYS.filter((k) => colorOverrides[k]).map((k) => [k, colorOverrides[k]])),
						},
					},
			  }
			: baseTheme;

		return (
			<SnapProvider snap={snapTemplates}>
				<ThemeProvider theme={mergedTheme}>
					<TreePathProvider path="storybook">{children}</TreePathProvider>
				</ThemeProvider>
			</SnapProvider>
		);
	}
);

const CustomThemeProvider = ({
	theme,
	children,
	colorOverrides,
}: {
	theme: Theme;
	children: ComponentChildren;
	colorOverrides: Partial<Record<ColorKey, string>>;
}) => (
	<Providers templateStore={snapTemplates.templates} themeName={theme.name!} colorOverrides={colorOverrides}>
		{children}
	</Providers>
);

const decorators = [
	(Story: any, context: any) => {
		// useGlobals must be called here in the decorator (valid Storybook hook context)
		const [globals, updateGlobals] = useGlobals();

		// Sync the active theme's default colors into globals so the toolbar can display them.
		// Writing globals re-renders every story, which remounts this decorator and re-runs the
		// effect — only write when a value actually changed, or the docs page loops forever.
		const activeThemeName: string = context.globals.theme || 'base';
		useEffect(() => {
			const themeStore = snapTemplates.templates.themes.library[activeThemeName];
			const defaultColors = themeStore?.theme?.variables?.colors as Record<ColorKey, string> | undefined;
			if (!defaultColors) return;

			const changed: Record<string, string> = {};
			COLOR_KEYS.forEach((k) => {
				const key = `${DEFAULT_COLOR_PREFIX}${k}`;
				const next = defaultColors[k] || '';
				if (globals[key] !== next) changed[key] = next;
			});

			if (Object.keys(changed).length) updateGlobals(changed);
		}, [activeThemeName, globals]);

		const colorOverrides: Partial<Record<ColorKey, string>> = {};
		COLOR_KEYS.forEach((k) => {
			const v = globals[`${GLOBAL_COLOR_PREFIX}${k}`];
			if (v) colorOverrides[k] = v;
		});

		// Bind colorOverrides into the provider
		const BoundProvider = ({ theme, children }: { theme: Theme; children: ComponentChildren }) => (
			<CustomThemeProvider theme={theme} colorOverrides={colorOverrides}>
				{children}
			</CustomThemeProvider>
		);

		const themeDecoratorFn = withThemeFromJSXProvider({
			themes: {
				snapnco: snapTemplates.templates.themes.library.snapnco.theme,
				snappy: snapTemplates.templates.themes.library.snappy.theme,
				bocachica: snapTemplates.templates.themes.library.bocachica.theme,
				base: snapTemplates.templates.themes.library.base.theme,
				pike: snapTemplates.templates.themes.library.pike.theme,
			},
			defaultTheme: 'base',
			Provider: BoundProvider,
		});

		return themeDecoratorFn(Story, context);
	},
];

const preview: Preview = {
	// every component story gets a generated docs page
	tags: ['autodocs'],
	// color overrides and theme defaults persist across story navigation
	initialGlobals: {
		themeColor_primary: '',
		themeColor_secondary: '',
		themeColor_accent: '',
		themeDefaultColor_primary: '',
		themeDefaultColor_secondary: '',
		themeDefaultColor_accent: '',
	},
	globalTypes: {
		themeColor_primary: {},
		themeColor_secondary: {},
		themeColor_accent: {},
		themeDefaultColor_primary: {},
		themeDefaultColor_secondary: {},
		themeDefaultColor_accent: {},
	},
	decorators,
	// keep each story file's declared argTypes order as the Controls / docs table order
	argTypesEnhancers: [preserveArgTypesOrder],
	parameters: {
		docs: {
			page: AutodocsPage,
		},
		controls: {
			expanded: true,
			disabled: false,
		},
		options: {
			showPanel: true,
			storySort: {
				// custom order of stories
				order: ['Documentation', 'Atoms', 'Molecules', 'Organisms', 'Templates', 'Trackers'],
			},
		},
	},
};

export default preview;

// add the full theme for template stories, and add a "simple" theme for all other stories
function addTheme(snapTemplates: SnapTemplates, themeName: string, theme: ThemeComplete) {
	snapTemplates.templates.addTheme({
		name: themeName,
		type: 'library',
		base: theme,
		language: {},
		languageOverrides: {},
		currency: {},
		innerWidth: window.innerWidth,
	});
}
