import { colord } from 'colord';

/*
	What the theme colors are for - a color means one thing everywhere. all three default to `currentColor`:
	an unset theme is monochrome, and setting `primary` alone brands every action and selection.

	- primary - BRAND: what the shopper acts on or has chosen. filled main actions (see more, apply, more info,
	  add all to cart) and every selected, active or current state, drawn in this one color - selected options
	  and their checks, the current page, tab and term, selected swatches, chips and tiles, the slider's range,
	  progress bars and the active carousel dot
	- secondary - STRUCTURE: titles, resting control outlines, icons and chevrons, and text actions (view more,
	  clear all, links)
	- accent - HIGHLIGHT: what should catch the eye on almost every search - the query in the results header and
	  in a spelling correction, the untyped part of each autocomplete suggestion, sale prices and rating stars
*/
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
