import { colord } from 'colord';

// theme color roles, matching Pike: secondary = titles and control chrome, primary = emphasis text, accent = indicators
export const custom = {
	colors: {
		white: '#ffffff',
		black: '#000000',
		gray01: '#efefef', // light fill: facet cards, dropdown pills, hovered/selected rows, tracks
		gray02: '#e6e6e6', // decorative rule: chip and page outlines
		controlBorder: '#cccccc', // control boundary: checkbox/radio boxes, swatch outlines, bullets, empty stars
		gray03: '#959595', // muted text: counts, strike prices, placeholders, inactive tabs
	},
	styles: {
		// active/selected text - bold in the primary color
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
		// fill and contrast text for a filled control - unresolvable colors (`currentColor`) fall back to black
		activeColors: (color: string): [string, string] => {
			const parsed = colord(color);
			const fill = parsed.isValid() ? parsed : colord('#000000');
			return [fill.toHex().toLowerCase(), fill.isDark() ? '#ffffff' : '#000000'];
		},
	},
};
