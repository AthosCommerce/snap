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
		// a hover/selected row tint over a background - a neutral gray when the color cannot be resolved
		// at style time (`currentColor`, CSS variables), since it works on light and dark backgrounds
		rowTint: (background: string): string => {
			const parsed = colord(background);
			if (!parsed.isValid()) return 'rgba(128, 128, 128, 0.15)';
			return parsed.isDark() ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.06)';
		},
	},
};
