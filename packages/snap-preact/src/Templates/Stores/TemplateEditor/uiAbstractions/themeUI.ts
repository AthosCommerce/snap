import { debounce } from '@athoscommerce/snap-toolbox';
import { AbstractionGroup } from '../../../../types';
import { TemplateEditorStore } from '../TemplateEditorStore';

export function themeUI(store: TemplateEditorStore): AbstractionGroup[] {
	return [
		{
			controls: [
				{
					type: 'dropdown',
					label: 'Theme',
					description: 'Theme for styling the templates',
					getDisplayState: () => 'visible',
					getOptions: () => {
						const libraryThemes = Object.keys(store.templatesStore.themes.library);
						const libraryThemeOptions = {
							options: libraryThemes.map((theme) => ({ value: theme })),
						};

						// Not using local themes for now...
						// const localThemes = Object.keys(store.templatesStore.themes.local);
						// const localThemeOptions = {
						// 	group: 'local',
						// 	options: localThemes.map(theme => ({ value: theme }))
						// };

						return [libraryThemeOptions];
					},
					getValue: () => {
						return store.overrides.theme.extends ?? store.initial.theme.extends ?? 'global';
					},
					shouldShowReset: () => {
						return typeof store.overrides.theme.extends !== 'undefined';
					},
					onValueChange: (value) => {
						store.setTheme(value as string);
					},
					onReset: () => {
						store.setTheme(store.initial.theme.extends);
					},
				},
			],
		},
		{
			title: 'Breakpoints',
			controls: [
				{
					type: 'number',
					label: 'Mobile Breakpoint',
					description: 'Mobile breakpoint for responsive design',
					getDisplayState: () => 'visible',
					getValue: () => {
						// value is derived in the editorstore at construction time
						return store.overrides.theme.variables?.breakpoints?.mobile ?? store.initial.theme.variables?.breakpoints?.mobile ?? '';
					},
					shouldShowReset: () => {
						// if the override differs from the initial state, show reset
						const initialMobile = store.initial.theme.variables?.breakpoints?.mobile;
						const overrideMobile = store.overrides.theme.variables?.breakpoints?.mobile;
						return typeof overrideMobile !== 'undefined' && initialMobile != overrideMobile;
					},
					onValueChange: (value) => {
						store.setThemeOverride({ path: ['variables', 'breakpoints', 'mobile'], value });
					},
					onReset: () => {
						store.setThemeOverride({ path: ['variables', 'breakpoints', 'mobile'], value: undefined });
					},
				},
				{
					type: 'number',
					label: 'Tablet Breakpoint',
					description: 'Tablet breakpoint for responsive design',
					getDisplayState: () => 'visible',
					getValue: () => {
						// value is derived in the editorstore at construction time
						return store.overrides.theme.variables?.breakpoints?.tablet ?? store.initial.theme.variables?.breakpoints?.tablet ?? '';
					},
					shouldShowReset: () => {
						// if the override differs from the initial state, show reset
						const initialTablet = store.initial.theme.variables?.breakpoints?.tablet;
						const overrideTablet = store.overrides.theme.variables?.breakpoints?.tablet;
						return typeof overrideTablet !== 'undefined' && initialTablet != overrideTablet;
					},
					onValueChange: (value) => {
						store.setThemeOverride({ path: ['variables', 'breakpoints', 'tablet'], value });
					},
					onReset: () => {
						store.setThemeOverride({ path: ['variables', 'breakpoints', 'tablet'], value: undefined });
					},
				},
				{
					type: 'number',
					label: 'Desktop Breakpoint',
					description: 'Desktop breakpoint for responsive design',
					getDisplayState: () => 'visible',
					getValue: () => {
						// value is derived in the editorstore at construction time
						return store.overrides.theme.variables?.breakpoints?.desktop ?? store.initial.theme.variables?.breakpoints?.desktop ?? '';
					},
					shouldShowReset: () => {
						// if the override differs from the initial state, show reset
						const initialDesktop = store.initial.theme.variables?.breakpoints?.desktop;
						const overrideDesktop = store.overrides.theme.variables?.breakpoints?.desktop;
						return typeof overrideDesktop !== 'undefined' && initialDesktop != overrideDesktop;
					},
					onValueChange: (value) => {
						store.setThemeOverride({ path: ['variables', 'breakpoints', 'desktop'], value });
					},
					onReset: () => {
						store.setThemeOverride({ path: ['variables', 'breakpoints', 'desktop'], value: undefined });
					},
				},
			],
		},
		{
			title: 'Colors',
			controls: [
				{
					type: 'color',
					label: 'Text Color',
					description: 'Text color for the theme',
					getDisplayState: () => 'visible',
					getValue: () => {
						// value is derived in the editorstore at construction time
						return store.overrides.theme.variables?.colors?.text ?? store.initial.theme.variables?.colors?.text ?? '';
					},
					shouldShowReset: () => {
						// if the override differs from the initial state, show reset
						const initialText = store.initial.theme.variables?.colors?.text?.toUpperCase();
						const overrideText = store.overrides.theme.variables?.colors?.text?.toUpperCase();
						return typeof overrideText !== 'undefined' && initialText != overrideText;
					},
					onValueChange: debounce((value) => {
						store.setThemeOverride({ path: ['variables', 'colors', 'text'], value });
					}, 50),
					onReset: () => {
						store.setThemeOverride({ path: ['variables', 'colors', 'text'], value: undefined });
					},
				},
				{
					type: 'color',
					label: 'Primary Color',
					description: 'Primary color for the theme',
					getDisplayState: () => 'visible',
					getValue: () => {
						// value is derived in the editorstore at construction time
						return store.overrides.theme.variables?.colors?.primary ?? store.initial.theme.variables?.colors?.primary ?? '';
					},
					shouldShowReset: () => {
						// if the override differs from the initial state, show reset
						const initialPrimary = store.initial.theme.variables?.colors?.primary?.toUpperCase();
						const overridePrimary = store.overrides.theme.variables?.colors?.primary?.toUpperCase();
						return typeof overridePrimary !== 'undefined' && initialPrimary != overridePrimary;
					},
					onValueChange: debounce((value) => {
						store.setThemeOverride({ path: ['variables', 'colors', 'primary'], value });
					}, 50),
					onReset: () => {
						store.setThemeOverride({ path: ['variables', 'colors', 'primary'], value: undefined });
					},
				},
				{
					type: 'color',
					label: 'Secondary Color',
					description: 'Secondary color for the theme',
					getDisplayState: () => 'visible',
					getValue: () => {
						// value is derived in the editorstore at construction time
						return store.overrides.theme.variables?.colors?.secondary ?? store.initial.theme.variables?.colors?.secondary ?? '';
					},
					shouldShowReset: () => {
						// if the override differs from the initial state, show reset
						const initialSecondary = store.initial.theme.variables?.colors?.secondary?.toUpperCase();
						const overrideSecondary = store.overrides.theme.variables?.colors?.secondary?.toUpperCase();
						return typeof overrideSecondary !== 'undefined' && initialSecondary != overrideSecondary;
					},
					onValueChange: debounce((value) => {
						store.setThemeOverride({ path: ['variables', 'colors', 'secondary'], value });
					}, 50),
					onReset: () => {
						store.setThemeOverride({ path: ['variables', 'colors', 'secondary'], value: undefined });
					},
				},
				{
					type: 'color',
					label: 'Accent Color',
					description: 'Accent color for the theme',
					getDisplayState: () => 'visible',
					getValue: () => {
						// value is derived in the editorstore at construction time
						return store.overrides.theme.variables?.colors?.accent ?? store.initial.theme.variables?.colors?.accent ?? '';
					},
					shouldShowReset: () => {
						// if the override differs from the initial state, show reset
						const initialAccent = store.initial.theme.variables?.colors?.accent?.toUpperCase();
						const overrideAccent = store.overrides.theme.variables?.colors?.accent?.toUpperCase();
						return typeof overrideAccent !== 'undefined' && initialAccent != overrideAccent;
					},
					onValueChange: debounce((value) => {
						store.setThemeOverride({ path: ['variables', 'colors', 'accent'], value });
					}, 50),
					onReset: () => {
						store.setThemeOverride({ path: ['variables', 'colors', 'accent'], value: undefined });
					},
				},
			],
		},
	];
}
