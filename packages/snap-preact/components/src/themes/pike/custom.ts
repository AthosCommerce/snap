import { IconType } from '../../components/Atoms/Icon';
import Color from 'color';

// calculate spacing
const spacing = 5;
const spacingCalc = (value: number) => {
	return spacing * value;
};

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
		text: '#515151', // theme color
		primary: '#00aeef', // theme color
		secondary: '#1d4990', // theme color
		accent: '#2154a5', // theme color
		white: '#ffffff',
		black: '#000000',
		gray01: '#f8f8f8', // lighter gray: bg color under terms, dropdown, checkboxes
		gray02: '#ebebeb', // light gray: borders for autocomplete, dropdown, checkboxes
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
					color: color ? color : '',
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
				color: color ? color : '',
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
				border: `1px solid ${custom.colors.gray02}`,
				...radiusStyle,
				backgroundColor: custom.colors.gray01,
				color: color ? color : '',
				padding: padding,
			};
		},
		boxSizing: (component: string, treePath?: string, name?: string) => {
			treePath = treePath ? treePath : component;
			component = name ? `${component}.${name}` : component; // if name is present, add to component
			component = treePath.includes('storybook') ? `storybook ${component}` : component; // or if component is in storybook, add it

			// box-sizing rules for uniform sizing
			// if path and component are same, apply box-sizing
			// if they are not the same, this means some parent component will have the box sizing rules
			if (treePath == component) {
				return {
					'&, *, *:before, *:after': {
						boxSizing: 'border-box',
					},
				};
			} else {
				return null;
			}
		},
		disabled: () => {
			// disabled styles
			return {
				'&': {
					cursor: 'not-allowed !important',
					opacity: 0.65,
				},
				'*': {
					pointerEvents: 'none',
					opacity: 1,
				},
			};
		},
		headerText: (color?: string, fontSize?: string) => {
			// header text styles
			return {
				fontSize: fontSize ? fontSize : '',
				fontWeight: custom?.fonts?.weight02,
				textTransform: custom?.fonts?.transform,
				color: color ? color : '',
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
					backgroundColor: custom.colors.gray02,
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
		activeColors: (color?: string) => {
			// get active color and related font color
			color = color ? color : custom.colors.primary;
			const whiteColor = new Color(custom.colors.white);
			const blackColor = new Color(custom.colors.black);
			const activeColor = new Color(color);
			const accentColor = activeColor.isDark() || activeColor.hex().toLowerCase() == custom.colors.primary ? whiteColor : blackColor;
			return [activeColor.hex().toLowerCase(), accentColor.hex().toLowerCase()];
		},
		darkenColor: (color?: string, amount?: number) => {
			// darken a color
			amount = amount ? amount : 0.075;
			color = color ? color : custom.colors.gray02;
			const darkColor = new Color(color).darken(amount).hex().toLowerCase();
			return darkColor;
		},
		getBp: (bp: number, rule?: string) => {
			// get breakpoint selector
			rule = rule && (rule == 'min' || rule == 'max') ? rule : 'min';
			return `@media (${rule}-width: ${rule == 'min' ? bp + 1 : bp}px)`;
		},
		lightenColor: (color?: string, amount?: number) => {
			// lighten a color
			amount = amount ? amount : 0.42;
			color = color ? color : custom.colors.text;
			const lightColor = new Color(color).lighten(amount).hex().toLowerCase();
			return lightColor;
		},
	},
};

// types for custom theme object
type ObjectAnyType = {
	[key: string]: any;
};

type ObjectIconType = {
	[key: string]: IconType;
};

type ObjectNestedType = {
	[key: string]: ObjectNumberOrStringType | ObjectNestedType;
};

type ObjectNumberType = {
	[key: string]: number;
};

type ObjectNumberOrStringType = {
	[key: string]: number | string;
};

type ObjectStringType = {
	[key: string]: string;
};

type CustomThemeType = {
	breakpoints: ObjectNumberType;
	colors: ObjectStringType;
	fonts: ObjectAnyType;
	icons: ObjectIconType;
	sizes: ObjectNumberType;
	spacing: ObjectNumberType;
	styles: {
		activeText: (color?: string) => ObjectNestedType;
		badgeText: (fontSize: number) => ObjectNumberOrStringType;
		baseText: (color?: string) => ObjectNumberOrStringType;
		borderRadius: (value?: number, unit?: string) => ObjectStringType | null;
		box: (color?: string, padding?: number | string, radius?: boolean) => ObjectNumberOrStringType;
		boxSizing: (component: string, treePath?: string, name?: string) => ObjectNestedType | null;
		disabled: () => ObjectNumberOrStringType | ObjectNestedType;
		headerText: (color?: string, fontSize?: string) => ObjectNumberOrStringType;
		resultCompact: (layout?: string, imageWidth?: string, fontSize?: number) => ObjectNumberOrStringType | ObjectNestedType;
		scrollbar: () => ObjectNestedType;
		srOnly: () => ObjectNumberOrStringType;
		textOverflow: () => ObjectNumberOrStringType;
	};
	utils: {
		activeColors: (color?: string) => string[];
		darkenColor: (color?: string, amount?: number) => string;
		getBp: (bp: number, rule?: string) => string;
		lightenColor: (color?: string, amount?: number) => string;
	};
};
