import { ComponentChildren, h } from 'preact';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { useGlobals, useEffect } from '@storybook/preview-api';
import { observer } from 'mobx-react-lite';

import { SnapTemplates, TemplatesStore } from '../../src';
import { ThemeComplete, ThemeProvider } from '../src/providers/theme';
import { base, bocachica, everest, matterhorn, pike, snappy, snapnco } from '../src/themes';

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
addTheme(snapTemplates, 'everest', everest);
addTheme(snapTemplates, 'matterhorn', matterhorn);
addTheme(snapTemplates, 'pike', pike);
addTheme(snapTemplates, 'snapnco', snapnco);
addTheme(snapTemplates, 'snappy', snappy);

// color keys that map to theme variables.colors
const COLOR_KEYS = ['primary', 'secondary', 'accent', 'text'] as const;
type ColorKey = typeof COLOR_KEYS[number];
const GLOBAL_COLOR_PREFIX = 'themeColor_';
const DEFAULT_COLOR_PREFIX = 'themeDefaultColor_';

// register globals so Storybook persists color overrides and theme defaults across story navigation
export const globalTypes = {
	themeColor_primary: { defaultValue: '' },
	themeColor_secondary: { defaultValue: '' },
	themeColor_accent: { defaultValue: '' },
	themeColor_text: { defaultValue: '' },
	themeDefaultColor_primary: { defaultValue: '' },
	themeDefaultColor_secondary: { defaultValue: '' },
	themeDefaultColor_accent: { defaultValue: '' },
	themeDefaultColor_text: { defaultValue: '' },
};

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

export const decorators = [
	(Story: any, context: any) => {
		// useGlobals must be called here in the decorator (valid Storybook hook context)
		const [globals, updateGlobals] = useGlobals();

		// Sync the active theme's default colors into globals so the toolbar can display them
		const activeThemeName: string = context.globals.theme || 'base';
		useEffect(() => {
			const themeStore = snapTemplates.templates.themes.library[activeThemeName];
			const defaultColors = themeStore?.theme?.variables?.colors as Record<ColorKey, string> | undefined;
			if (defaultColors) {
				const defaults: Record<string, string> = {};
				COLOR_KEYS.forEach((k) => {
					defaults[`${DEFAULT_COLOR_PREFIX}${k}`] = defaultColors[k] || '';
				});
				updateGlobals(defaults);
			}
		}, [activeThemeName]);

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
				everest: snapTemplates.templates.themes.library.everest.theme,
				matterhorn: snapTemplates.templates.themes.library.matterhorn.theme,
				pike: snapTemplates.templates.themes.library.pike.theme,
			},
			defaultTheme: 'base',
			Provider: BoundProvider,
		});

		return themeDecoratorFn(Story, context);
	},
];

export const parameters = {
	actions: {
		argTypesRegex: '^on[A-Z].*',
		disabled: false,
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
};

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
