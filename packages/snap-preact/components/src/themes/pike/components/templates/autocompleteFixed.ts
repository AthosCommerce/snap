import { css } from '@emotion/react';
import { autocompleteFixedThemeComponentProps } from '../../../themeComponents/autocompleteFixed';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteFixedProps, AutocompleteFixedTemplatesLegalProps } from '../../../../components/Templates/AutocompleteFixed';
import { autocompleteSharedStyleScript } from '../templates/autocompleteShared';
import { custom } from '../../custom';

// static variables
const searchInputHeight = 40;

// CSS in JS style script for the Search component
const autocompleteFixedStyleScript = (props: AutocompleteFixedProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	// autocomplete shared styles
	const sharedStyles = css({
		'.ss__modal': {
			'.ss__modal__content': {
				'.ss__autocomplete-fixed__inner': {
					'.ss__autocomplete-fixed__inner__layout-wrapper': {
						'.ss__autocomplete': {
							...autocompleteSharedStyleScript(props, 'autocompleteFixed'),
						},
					},
				},
			},
		},
	});

	// autocomplete fixed styles
	const fixedStyles = css({
		...custom.styles.boxSizing('autocompleteFixed', props?.treePath, props?.name),
		'.ss__modal': {
			'.ss__modal__content': {
				'.ss__autocomplete-fixed__inner': {
					'& > .ss__search-input': {
						height: `${searchInputHeight}px`,
						margin: 0,
						'.ss__button, .ss__search-input__button--close-search-button': {
							width: `${searchInputHeight}px`,
						},
					},
					'.ss__autocomplete-fixed__inner__layout-wrapper': {
						maxHeight: 'none',
						width: 'auto',
						'&, .ss__autocomplete': {
							overflow: 'visible',
						},
						'.ss__autocomplete': {
							maxWidth: '100%',
							width: props?.width,
							left: 0,
							right: 0,
							margin: `${custom.spacing.x2}px auto auto auto`,
						},
					},
				},
			},
		},
		[`${custom.utils.getBp(mobileBp)}`]: {
			'.ss__modal': {
				'.ss__modal__content': {
					'.ss__autocomplete-fixed__inner': {
						'.ss__autocomplete-fixed__inner__layout-wrapper': {
							'.ss__autocomplete': {
								maxWidth: 'none',
								left: 'auto',
							},
						},
					},
				},
			},
		},
	});

	// autocomplete styles
	const autocompleteFixedStyles = css([sharedStyles, fixedStyles]);

	return autocompleteFixedStyles;
};

export const autocompleteFixed: ThemeComponent<'autocompleteFixed', AutocompleteFixedProps, AutocompleteFixedTemplatesLegalProps> = {
	default: {
		...autocompleteFixedThemeComponentProps.default,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.default?.['autocompleteFixed'] || {}),
			themeStyleScript: autocompleteFixedStyleScript,
			layout: 'standard',
			width: '940px',
			viewportMaxHeight: false,
			contentTitle: 'Product Suggestions',
		},
		'autocompleteFixed terms': {
			vertical: true,
		},
		'autocompleteFixed termsList': {
			verticalOptions: true,
		},
		'autocompleteFixed facets': {
			limit: 3,
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
		'autocompleteFixed facetPaletteOptions': {
			gridSize: '48px',
			hideLabel: false,
		},
		'autocompleteFixed facetGridOptions': {
			gridSize: '48px',
		},
		'autocompleteFixed results': {
			rows: 2,
			columns: 3,
			gapSize: `${custom.spacing.x4}px`,
		},
		'autocompleteFixed recommendationGrid': {
			rows: 2,
			columns: 4,
			gapSize: `${custom.spacing.x4}px`,
		},
		'autocompleteFixed button.see-more icon': {
			size: `${custom.sizes.icon12}px`,
			icon: custom.icons.arrowRight,
		},
	},
	mobile: {
		...autocompleteFixedThemeComponentProps.mobile,
		autocompleteFixed: {
			...(autocompleteFixedThemeComponentProps.mobile?.['autocompleteFixed'] || {}),
			layout: 'mini',
			width: 'auto',
		},
		'autocompleteFixed terms': {
			vertical: false,
		},
		'autocompleteFixed termsList': {
			verticalOptions: false,
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
			layout: 'standard',
			width: '600px',
		},
		'autocompleteFixed terms': {
			vertical: false,
		},
		'autocompleteFixed termsList': {
			verticalOptions: false,
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
			width: '700px',
		},
		'autocompleteFixed terms': {
			vertical: false,
		},
		'autocompleteFixed termsList': {
			verticalOptions: false,
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
