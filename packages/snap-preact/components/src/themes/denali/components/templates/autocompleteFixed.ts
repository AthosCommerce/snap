import { css } from '@emotion/react';
import { autocompleteFixedThemeComponentProps } from '../../../themeComponents/autocompleteFixed';
import { ThemeComponent } from '../../../../providers';
import { autocompleteSharedStyles } from './autocompleteShared';
import { AutocompleteFixedProps, AutocompleteFixedTemplatesLegalProps } from '../../../../components/Templates/AutocompleteFixed';

// CSS in JS style script for the Search component
const autocompleteFixedStyleScript = ({ width }: AutocompleteFixedProps) => {
	return css({
		...autocompleteSharedStyles,
		'.ss__autocomplete__button--see-more': {
			margin: '10px',
		},
		// the panel hangs from the store's input - round only its bottom corners
		'.ss__autocomplete-fixed__inner .ss__autocomplete': {
			borderRadius: '20px',
			overflow: 'hidden',
		},
		// the results column of a fixed panel is narrow - the text uses the full card width
		'.ss__autocomplete__content .ss__results .ss__result__details': {
			paddingLeft: 0,
			paddingRight: 0,
		},
		// the panel takes the theme width instead of the store input's, growing left from the input's right edge
		...(width && width !== 'auto'
			? {
					'.ss__autocomplete-fixed__inner__layout-wrapper': {
						width: 'auto',
						'.ss__autocomplete': {
							width,
							maxWidth: 'calc(100vw - 20px)',
							left: 'auto',
							right: 0,
						},
					},
			  }
			: {}),
	});
};

export const autocompleteFixed: ThemeComponent<'autocompleteFixed', AutocompleteFixedProps, AutocompleteFixedTemplatesLegalProps> = {
	default: {
		...autocompleteFixedThemeComponentProps.default,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.default?.['autocompleteFixed'] || {}),
			themeStyleScript: autocompleteFixedStyleScript,
			width: '940px',
		},

		'autocompleteFixed recommendationGrid': {
			columns: 4,
			rows: 2,
		},
		'autocompleteFixed results': {
			columns: 3,
			rows: 2,
			gapSize: '10px',
		},
	},
	mobile: {
		...autocompleteFixedThemeComponentProps.mobile,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.mobile?.['autocompleteFixed'] || {}),
			width: 'auto',
		},
	},
	desktop: {
		...autocompleteFixedThemeComponentProps.desktop,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.desktop?.['autocompleteFixed'] || {}),
			width: '700px',
		},
	},
	tablet: {
		...autocompleteFixedThemeComponentProps.tablet,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.tablet?.['autocompleteFixed'] || {}),
			width: '600px',
		},
		// the shared tablet props set no grid here, and the default layer's 4 columns overflow the tablet panel
		'autocompleteFixed recommendationGrid': {
			columns: 3,
			rows: 2,
		},
	},
};
