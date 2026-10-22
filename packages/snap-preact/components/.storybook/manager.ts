// .storybook/manager.ts
// Storybook manager-side config: UI theme + toolbar addon registration.

import React from 'react';
import { addons, types } from 'storybook/manager-api';
import athosTheme from './AthosTheme';
import { ColorPickerTool } from './ColorPickerTool';

addons.setConfig({
	theme: athosTheme,
	layoutCustomisations: {
		// hide the toolbar on docs pages, matching Storybook 7
		showToolbar: (state, defaultValue) => (state.viewMode === 'docs' ? false : defaultValue),
	},
});

addons.register('snap-theme-color-picker', () => {
	addons.add('snap-theme-color-picker/tool', {
		type: types.TOOL,
		title: 'Theme Colors',
		render: () => React.createElement(ColorPickerTool),
	});
});
