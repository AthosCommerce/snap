import { IconType } from '../../components/Atoms/Icon';
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';

extend([a11yPlugin]);

// parse a color for calculations - colors that cannot be resolved at style time
// (`currentColor`, CSS variables, invalid values) are treated as black
const parseColor = (color: string) => {
	const parsed = colord(color);
	return parsed.isValid() ? parsed : colord('#000000');
};

// calculate spacing
const spacing = 5;
const spacingCalc = (value: number) => {
	return spacing * value;
};

/*
	Pike design language - every component style should be expressible with these rules and tokens.

	- Shape: square corners (`sizes.radius` 0); the only round shapes are radios, slider handles and
	  thin bars (slider rails, scrollbars, progress indicators), which are pill-rounded.
	- Surfaces: neutral controls are a "box" - 1px `controlBorder` over a `gray01` fill (`styles.box`).
	  Popovers (dropdown content) sit on white with the same border. Decorative rules (dividers, image
	  frames, panels, containers) use the lighter `gray02`.
	- Accessibility: control boundaries and state indicators meet WCAG 1.4.11 non-text contrast (3:1
	  against white and the gray01 fill) - `controlBorder` for borders, 45% black for swatch outlines.
	  `gray02` is only for decoration that does not identify a control.
	- Color roles: theme colors default to `currentColor`, so Pike inherits the site's text color.
	    - primary: active/selected TEXT (`styles.activeText`), the 2px header underline, sale prices,
	      active pagination dots and scrollbar thumbs.
	    - secondary: FILLED selections and controls (buttons, carousel arrows, selected grid options,
	      slider handles) via `utils.activeColors`, plus header text color.
	  `currentColor` cannot be resolved to a hex value at style time, so `utils.activeColors` falls
	  back to a black fill with white text - the default Pike look is monochrome.
	- Neutrals: gray01 fill, gray02 decorative rule, controlBorder control boundary (and empty rating
	  stars), gray04 muted text (option counts, strike prices, placeholders).
	- Type: 14px base text (`styles.baseText`); headers are bold (`fonts.weight02`) via
	  `styles.headerText` - 14px in compact contexts, 16px for facet/sidebar headers, 18-22px for
	  section titles; option counts 10px; badges and fine print 12px.
	- States: active = bold + primary text; selected (filled) = secondary fill + contrast text;
	  disabled = `styles.disabled` (0.65 opacity, not-allowed cursor); unavailable variants add a
	  strike through.
	- Sizing: controls are `sizes.height` (35px) tall; spacing is a 5px scale (`spacing.x1`-`x8`);
	  icons are 8-16px (`sizes.icon08`-`icon16`); chevrons for direction, plus/minus for overflow.
	- Indicators: checkboxes are a box with a small filled square (`icons.check`); expand/collapse
	  chevrons rotate 180deg on open, as does the sidebar toggle's filter icon.
	- Panels (slideouts, modals): the panel content owns a 20px (`spacing.x4`) padding - the slideout itself
	  has none. Close buttons are transparent icon buttons (hit area = icon + `spacing.x2` each side) whose
	  icon lines up with the content edges - in-flow buttons keep the hit area inside the content box and
	  push the icon to its right edge; absolutely positioned ones offset into the padding.
	- Overlays on images (badges, quickview) share a 5px inset; the quickview button is a quiet white square
	  shown on card hover/focus (always on touch devices).
	- Focus: keyboard focus only (`:focus-visible`) gets a 2px ring offset 2px (`styles.focusRing`) in the
	  secondary color, or black when that color is too light (`utils.focusColor`); white in dark contexts
	  (gallery, overlay result details). Mouse focus shows no ring. Text fields never get the ring
	  (browsers treat every text field focus as :focus-visible) - their edge thickens to 2px in the focus
	  color instead (`styles.fieldFocus`). Applied globally in `globalStyle` and in components that
	  portal outside the theme scope (gallery, dropdown portals).
*/

// custom theme object
// contains defaults, colors, utils, global styles, etc.
export const custom: CustomThemeType = {
	breakpoints: {
		small: 540,
		mobile: 767,
		tablet: 991,
		desktop: 1199,
	},
	colors: {
		primary: 'currentColor', // theme color
		secondary: 'currentColor', // theme color
		accent: 'currentColor', // theme color
		white: '#ffffff',
		black: '#000000',
		gray01: '#f8f8f8', // lighter gray: bg color under terms, dropdown, checkboxes
		gray02: '#ebebeb', // light gray: decorative rules - dividers, image frames, panel borders
		gray04: '#6b6b6b', // dark gray: muted text (counts, strike prices, placeholders)
		controlBorder: '#8c8c8c', // control boundaries - 3.36:1 on white, 3.16:1 on gray01 (WCAG 1.4.11)
		overlay: 'rgba(0, 0, 0, 0.80)', // color used for overlays
	},
	fonts: {
		weight01: 700, // main font weight
		weight02: 700, // header font weight
		style: false,
		transform: 'none',
	},
	icons: {
		arrowLeft: 'chevron-left',
		arrowRight: 'chevron-right',
		arrowDown: 'chevron-down',
		arrowUp: 'chevron-up',
		bag: 'bag',
		check: 'square',
		close: 'close',
		minus: 'minus',
		plus: 'plus',
		filter: 'filter',
		search: 'search',
		sort: 'sort',
	},
	sizes: {
		font: 16, // base font size
		height: 35, // refers to height for button and dropdown sizes
		icon08: 8,
		icon10: 10,
		icon12: 12,
		icon14: 14,
		icon16: 16,
		radius: 0, // global border radius value
	},
	spacing: {
		x1: spacing,
		x2: spacingCalc(2),
		x3: spacingCalc(3),
		x4: spacingCalc(4),
		x5: spacingCalc(5),
		x6: spacingCalc(6),
		x7: spacingCalc(7),
		x8: spacingCalc(8),
	},
	styles: {
		activeText: (color?: string) => {
			// active text styles
			return {
				'&, &:hover': {
					fontWeight: custom?.fonts?.weight01,
					color: color || undefined,
				},
			};
		},
		badgeText: (fontSize: number) => {
			// badge text styles
			return {
				display: 'block',
				fontSize: fontSize,
				lineHeight: 1.2,
			};
		},
		baseText: (color?: string) => {
			// header text styles
			return {
				fontSize: '14px',
				lineHeight: 1.5,
				color: color || undefined,
			};
		},
		borderRadius: (value?: number, unit?: string) => {
			const hasValue = value || value === 0 ? true : false;
			value = hasValue ? value : custom.sizes.radius;
			unit = unit ? unit : value === 0 ? '' : 'px';

			// sets border radius
			return {
				borderRadius: hasValue || custom.sizes.radius ? `${value}${unit}` : ``,
			};
		},
		box: (color?: string, padding?: number | string, radius?: boolean) => {
			// styles for box designs

			// define padding value
			if (padding) {
				padding = padding;
			} else if (padding === 0) {
				padding = '';
			} else {
				padding = `${custom.spacing.x2}px` as number | string;
			}

			// check if radius setting is available
			const hasRadius = typeof radius == 'boolean' ? radius : true;

			// radius style if available
			const radiusStyle = hasRadius && custom.sizes.radius ? custom.styles.borderRadius() : null;

			return {
				border: `1px solid ${custom.colors.controlBorder}`,
				...radiusStyle,
				backgroundColor: custom.colors.gray01,
				color: color || undefined,
				padding: padding,
			};
		},
		columns: (maxColumns = 4, minWidth = 140) => {
			// horizontal option layouts - up to `maxColumns` columns, fewer when the CONTAINER is too
			// narrow for `minWidth` columns (viewport breakpoints over-pack options in narrow containers)
			const columnGap = custom.spacing.x2;
			const maxColumnsWidth = `calc((100% - ${columnGap * (maxColumns - 1)}px) / ${maxColumns})`;
			return {
				display: 'grid',
				gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, max(${minWidth}px, ${maxColumnsWidth})), 1fr))`,
				gap: `${custom.spacing.x1}px ${columnGap}px`,
			};
		},
		focusRing: (color: string) => {
			// keyboard focus indicator (apply under `:focus-visible` only) - important to beat the outline that
			// useA11y injects for `[ss-a11y]` elements, which is not a Pike color and is ignored by some browsers
			return {
				outline: `2px solid ${color} !important`,
				outlineOffset: '2px !important',
			};
		},
		fieldFocus: (color: string) => {
			// text entry focus - a 2px edge in the focus color instead of the ring (browsers treat every
			// text field focus as :focus-visible, so a ring would also show for mouse users)
			return {
				outline: 'none !important',
				borderColor: color,
				boxShadow: `inset 0 0 0 1px ${color}`,
			};
		},
		disabled: () => {
			// disabled styles
			return {
				'&': {
					cursor: 'not-allowed !important',
					opacity: 0.65,
				},
				// children keep their own opacity - resetting it here revealed intentionally hidden
				// elements (unchecked radio icons) inside disabled options
				'*': {
					pointerEvents: 'none',
				},
			};
		},
		headerText: (color?: string, fontSize?: string) => {
			// header text styles
			return {
				fontSize: fontSize ? fontSize : '',
				fontWeight: custom?.fonts?.weight02,
				textTransform: custom?.fonts?.transform,
				color: color || undefined,
			};
		},
		resultCompact: (layout?: string, imageWidth?: string, fontSize?: number) => {
			layout = (layout && layout == 'grid') || layout == 'list' ? layout : 'list';
			fontSize = fontSize ? fontSize : 14;

			// shared styles
			const sharedStyles = {
				'&': {
					gap: `${custom.spacing.x1}px`,
				},
				'.ss__result__details__title a, .ss__result__details__pricing .ss__price, .ss__result__details__pricing .ss__price span': {
					fontSize: `${fontSize}px`,
				},
				'.ss__result__details__pricing .ss__result__price': {
					fontSize: `${fontSize + 2}px`,
				},
				'.ss__result__details__title a': {
					display: '-webkit-box',
					WebkitBoxOrient: 'vertical',
					overflow: 'hidden',
					WebkitLineClamp: '2',
				},
				'.ss__result__details__variant-selection, .ss__result__add-to-cart-wrapper': {
					marginTop: '2.5px',
				},
			};

			// compact grid styles
			const gridStyles = {
				'.ss__result__details': {
					...sharedStyles,
				},
			};

			// compact list styles
			const listStyles = {
				'&': {
					gap: `${custom.spacing.x2}px`,
				},
				'.ss__result__image-wrapper': {
					flex: imageWidth ? imageWidth : '',
				},
				'.ss__result__details': {
					'.ss__result__details__title, .ss__result__details__pricing': {
						flex: '1 1 100%',
					},
					...sharedStyles,
					'.ss__result__details__variant-selection .ss__variant-selection': {
						width: '100%',
					},
				},
			};

			return layout == 'grid' ? gridStyles : listStyles;
		},
		scrollbar: () => {
			// scrollbar styles
			return {
				'&::-webkit-scrollbar': {
					width: '8px',
					height: '8px',
				},
				'&::-webkit-scrollbar-track': {
					backgroundColor: custom.colors.gray01,
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: custom.colors.controlBorder,
				},
			};
		},
		srOnly: () => {
			// screen reader only styles
			return {
				position: 'absolute',
				width: '1px',
				height: '1px',
				padding: 0,
				margin: '-1px',
				overflow: 'hidden',
				clip: 'rect(0, 0, 0, 0)',
			};
		},
		textOverflow: () => {
			// text overflow styles
			return {
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
			};
		},
	},
	utils: {
		activeColors: (color: string) => {
			// get active color and related font color
			// unresolvable colors (`currentColor`, CSS variables) fall back to a black fill
			const activeColor = parseColor(color);
			const accentColor = activeColor.isDark() ? custom.colors.white : custom.colors.black;
			return [activeColor.toHex().toLowerCase(), accentColor];
		},
		darkenColor: (color?: string, amount?: number) => {
			// darken a color
			amount = amount ? amount : 0.075;
			color = color ? color : custom.colors.gray02;
			const darkColor = parseColor(color).darken(amount).toHex().toLowerCase();
			return darkColor;
		},
		focusColor: (color?: string) => {
			// focus ring color - the theme color when it has 3:1 contrast on white (WCAG 1.4.11), otherwise black
			const parsed = colord(color || '');
			return parsed.isValid() && parsed.contrast(custom.colors.white) >= 3 ? parsed.toHex().toLowerCase() : custom.colors.black;
		},
		getBp: (bp: number, rule?: string) => {
			// get breakpoint selector
			rule = rule && (rule == 'min' || rule == 'max') ? rule : 'min';
			return `@media (${rule}-width: ${rule == 'min' ? bp + 1 : bp}px)`;
		},
		lightenColor: (color?: string, amount?: number) => {
			// lighten a color
			amount = amount ? amount : 0.42;
			color = color ? color : custom.colors.black;
			const lightColor = parseColor(color).lighten(amount).toHex().toLowerCase();
			return lightColor;
		},
	},
};

// types for custom theme object
type ObjectNestedType = {
	[key: string]: ObjectNumberOrStringType | ObjectNestedType | undefined;
};

type ObjectNumberOrStringType = {
	[key: string]: number | string | undefined;
};

type CustomThemeType = {
	breakpoints: {
		[key: string]: number;
	};
	colors: {
		[key: string]: string;
	};
	fonts: {
		[key: string]: any;
	};
	icons: {
		[key: string]: IconType;
	};
	sizes: {
		[key: string]: number;
	};
	spacing: {
		[key: string]: number;
	};
	styles: {
		activeText: (color?: string) => ObjectNestedType;
		badgeText: (fontSize: number) => ObjectNumberOrStringType;
		baseText: (color?: string) => ObjectNumberOrStringType;
		borderRadius: (value?: number, unit?: string) => { [key: string]: string } | null;
		box: (color?: string, padding?: number | string, radius?: boolean) => ObjectNumberOrStringType;
		columns: (maxColumns?: number, minWidth?: number) => ObjectNumberOrStringType;
		disabled: () => ObjectNumberOrStringType | ObjectNestedType;
		focusRing: (color: string) => ObjectNumberOrStringType;
		fieldFocus: (color: string) => ObjectNumberOrStringType;
		headerText: (color?: string, fontSize?: string) => ObjectNumberOrStringType;
		resultCompact: (layout?: string, imageWidth?: string, fontSize?: number) => ObjectNumberOrStringType | ObjectNestedType;
		scrollbar: () => ObjectNestedType;
		srOnly: () => ObjectNumberOrStringType;
		textOverflow: () => ObjectNumberOrStringType;
	};
	utils: {
		activeColors: (color: string) => string[];
		darkenColor: (color?: string, amount?: number) => string;
		focusColor: (color?: string) => string;
		getBp: (bp: number, rule?: string) => string;
		lightenColor: (color?: string, amount?: number) => string;
	};
};
