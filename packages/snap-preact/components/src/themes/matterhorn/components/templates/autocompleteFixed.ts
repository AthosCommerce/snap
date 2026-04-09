import { css } from '@emotion/react';
import { autocompleteFixedThemeComponentProps } from '../../../themeComponents/autocompleteFixed';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteFixedProps, AutocompleteFixedTemplatesLegalProps } from '../../../../components/Templates/AutocompleteFixed';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const autocompleteFixedStyleScript = (props: AutocompleteFixedProps) => {
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;

	return css({
		'.ss__modal': {
			'.ss__modal__content': {
				'.ss__autocomplete-fixed__inner': {
					'& > .ss__search-input.autocomplete-fixed__search-input': {
						height: '40px',
						margin: `0 0 ${custom.spacing.x2}px 0`,
						'.ss__button, .ss__search-input__button--close-search-button': {
							width: '40px',
						},
					},
					'.ss__autocomplete-fixed__inner__layout-wrapper': {
						maxHeight: 'none',
						width: 'auto',
						'&, .ss__autocomplete': {
							overflowY: 'visible',
						},
						'.ss__autocomplete': {
							maxWidth: 'none',
							width: props?.width,
							right: 0,
							left: '-102px',
							top: 'auto',
							margin: 'auto',
						},
					},
				},
			},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'.ss__modal': {
				'.ss__modal__content': {
					'.ss__autocomplete-fixed__inner': {
						'.ss__autocomplete-fixed__inner__layout-wrapper': {
							'.ss__autocomplete': {
								maxWidth: '100%',
								width: props?.width,
								left: 0,
								right: 0,
							},
						},
					},
				},
			},
		},
		[`@media (max-width: ${custom.breakpoints.small}px)`]: {
			'.ss__modal': {
				'.ss__modal__content': {
					'.ss__autocomplete-fixed__inner': {
						'.ss__autocomplete-fixed__inner__layout-wrapper': {
							'.ss__autocomplete': {
								'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__results':
									{
										'& > *:nth-of-type(n+3)': {
											display: 'none',
										},
									},
							},
						},
					},
				},
			},
		},
	});
};

export const autocompleteFixed: ThemeComponent<'autocompleteFixed', AutocompleteFixedProps, AutocompleteFixedTemplatesLegalProps> = {
	default: {
		...autocompleteFixedThemeComponentProps.default,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.default?.['autocompleteFixed'] || {}),
			themeStyleScript: autocompleteFixedStyleScript,
			width: '900px',
			layout: 'standard',
		},
		'autocompleteFixed facetPaletteOptions': {
			gridSize: '38px',
			hideLabel: false,
		},
		'autocompleteFixed facetGridOptions': {
			gridSize: '38px',
		},
		'autocompleteFixed facet': {
			...(autocompleteFixedThemeComponentProps.default?.['autocompleteFixed facet'] || {}),
			display: {
				list: {
					limit: 5,
				},
				hierarchy: {
					limit: 5,
				},
				grid: {
					limit: 6,
				},
				palette: {
					limit: 6,
				},
			},
		},
		'autocompleteFixed results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteFixed recommendationGrid': {
			rows: 2,
			columns: 4,
		},
		'autocompleteFixed button.see-more icon': {
			icon: custom.icons.arrowRight,
			size: `${custom.sizes.icon12}px`,
		},
	},
	mobile: {
		...autocompleteFixedThemeComponentProps.mobile,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.mobile?.['autocompleteFixed'] || {}),
			width: 'auto',
			layout: 'mini',
		},
		'autocompleteFixed results': {
			rows: 1,
			columns: 3,
		},
		'autocompleteFixed recommendationGrid': {
			rows: 1,
			columns: 3,
		},
	},
	tablet: {
		...autocompleteFixedThemeComponentProps.tablet,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.tablet?.['autocompleteFixed'] || {}),
			width: 'auto',
			layout: 'standard',
		},
		'autocompleteFixed facet': {
			display: {
				list: {
					limit: 3,
				},
				hierarchy: {
					limit: 3,
				},
				grid: {
					limit: 4,
				},
				palette: {
					limit: 4,
				},
			},
		},
		'autocompleteFixed results': {
			rows: 1,
			columns: 4,
		},
		'autocompleteFixed recommendationGrid': {
			rows: 1,
			columns: 4,
		},
	},
	desktop: {
		...autocompleteFixedThemeComponentProps.desktop,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.desktop?.['autocompleteFixed'] || {}),
			layout: 'standard',
		},
		'autocompleteFixed results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteFixed recommendationGrid': {
			rows: 2,
			columns: 4,
		},
	},
};
