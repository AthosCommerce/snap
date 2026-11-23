import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import type { ThemeVariables } from '../../providers';

extend([a11yPlugin]);

// a theme color used as text, an outline or an icon on the theme's white and light gray surfaces - a color too
// light to read there is darkened, keeping its hue, until it reaches 3:1 against white. colors that cannot be
// resolved at style time (`currentColor`, CSS variables) are left to the page
const readable = (color?: string): string | undefined => {
	if (!color) return undefined;
	let parsed = colord(color);
	if (!parsed.isValid()) return color;
	for (let step = 0; step < 20 && parsed.contrast('#ffffff') < 3; step++) {
		parsed = parsed.darken(0.05);
	}
	return parsed.toHex().toLowerCase();
};

/*
	What the theme colors are for - every component asks for a purpose here, never for a color variable, so a
	color means one thing everywhere. all three default to `currentColor`: an unset theme is monochrome, and
	setting `primary` alone brands every action and selection.

	- primary - BRAND: what the shopper acts on or has chosen. filled main actions (see more, apply, more info,
	  add all to cart) and every selected, active or current state, drawn in this one color - selected options
	  and their checks, the current page, tab and term, selected swatches, chips and tiles, the slider's range,
	  progress bars and the active carousel dot
	- secondary - STRUCTURE: titles, resting control outlines, icons and chevrons, and text actions (view more,
	  clear all, links)
	- accent - HIGHLIGHT: what should catch the eye on almost every search - the query in the results header and
	  in a spelling correction, the untyped part of each autocomplete suggestion, sale prices and rating stars
*/
const colorRoles = (variables?: ThemeVariables) => {
	const colors = variables?.colors;
	const fill = (color?: string): [string, string] => {
		const parsed = colord(color || '');
		const solid = parsed.isValid() ? parsed : colord('#000000');
		return [solid.toHex().toLowerCase(), solid.isDark() ? '#ffffff' : '#000000'];
	};

	return {
		// selected and current states - text, rings, outlines and checks
		brand: readable(colors?.primary),
		// filled main actions and filled selections - [fill, text on it]; unresolvable colors fill black
		brandFill: fill(colors?.primary),
		// titles, resting outlines, icons and text actions
		structure: readable(colors?.secondary),
		// the searched query, the untyped part of suggestions, sale prices and rating stars
		highlight: readable(colors?.accent),
	};
};

export const custom = {
	colors: {
		white: '#ffffff',
		black: '#000000',
		gray01: '#efefef', // light fill: facet cards, dropdown pills, hovered/selected rows, tracks
		gray02: '#e6e6e6', // decorative rule: chip and page outlines
		controlBorder: '#cccccc', // control boundary: checkbox/radio boxes, swatch outlines, bullets, empty stars
		gray03: '#959595', // muted text: counts, strike prices, placeholders, inactive tabs
		gray04: '#767676', // label text: small titles that still need to be read (4.5:1 on white)
	},
	styles: {
		// active/selected text - bold, in the brand color
		activeText: (color?: string) => ({
			'&, &:hover': {
				fontWeight: 'bold',
				color: color || undefined,
			},
		}),
		// the Icon component sets its own `fill`, so `color` alone is not enough
		indicator: (color?: string) => ({
			color: color || undefined,
			fill: color || undefined,
		}),
	},
	colorRoles,
	utils: {
		// fill and contrast text for a filled control in a passed color (a component's `backgroundColor` prop) -
		// unresolvable colors (`currentColor`) fall back to black
		activeColors: (color: string): [string, string] => {
			const parsed = colord(color);
			const fill = parsed.isValid() ? parsed : colord('#000000');
			return [fill.toHex().toLowerCase(), fill.isDark() ? '#ffffff' : '#000000'];
		},
		// a hover/selected row tint over a background - a neutral gray when the color cannot be resolved
		// at style time (`currentColor`, CSS variables), since it works on light and dark backgrounds
		rowTint: (background: string): string => {
			const parsed = colord(background);
			if (!parsed.isValid()) return 'rgba(128, 128, 128, 0.15)';
			return parsed.isDark() ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.06)';
		},
	},
};
