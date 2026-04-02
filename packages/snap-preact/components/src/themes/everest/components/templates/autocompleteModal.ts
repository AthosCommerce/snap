import { css } from '@emotion/react';
import { autocompleteModalThemeComponentProps } from '../../../themeComponents/autocompleteModal';
import { ThemeComponent } from '../../../../providers';
import { AutocompleteModalProps, AutocompleteModalTemplatesLegalProps } from '../../../../components/Templates/AutocompleteModal';
import { custom } from '../../custom';

// CSS in JS style script for the Search component
const autocompleteModalStyleScript = (props: AutocompleteModalProps) => {
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	return css({
		'.ss__modal': {
			'&, .ss__modal__content': {
				height: '100%',
			},
			'.ss__modal__content': {
				backgroundColor: 'transparent',
				justifyContent: 'center',
				'&, .ss__autocomplete-modal__inner': {
					position: 'static',
					display: 'flex',
					flexFlow: 'column nowrap',
				},
				'.ss__autocomplete-modal__inner': {
					width: props?.width,
					maxHeight: 'none',
					height: '80vh',
					overflow: 'hidden',
					'& > .ss__search-input.autocomplete-modal__search-input, .ss__autocomplete': {
						minHeight: '1px',
						minWidth: '1px',
					},
					'& > .ss__search-input.autocomplete-modal__search-input': {
						flex: '0 1 auto',
						height: '40px',
						margin: 0,
						'.ss__button, .ss__search-input__button--close-search-button': {
							width: '40px',
						},
					},
					'.ss__autocomplete': {
						flex: '1 1 0%',
						borderWidth: 0,
						overflowY: 'auto',
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
						'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__results':
							{
								maxHeight: 'none',
								overflow: 'visible',
							},
					},
				},
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__modal': {
				'.ss__modal__content': {
					'.ss__autocomplete-modal__inner': {
						width: props?.width,
						height: '100%',
					},
				},
			},
		},
		[`@media (max-width: ${custom.breakpoints.small}px)`]: {
			'.ss__modal': {
				'.ss__modal__content': {
					'.ss__autocomplete-modal__inner': {
						'.ss__autocomplete': {
							'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__autocomplete__content__no-results__recommendations .ss__recommendation-grid__results':
								{
									'& > *:nth-of-type(n+5)': {
										display: 'none',
									},
								},
						},
					},
				},
			},
		},
	});
};

export const autocompleteModal: ThemeComponent<'autocompleteModal', AutocompleteModalProps, AutocompleteModalTemplatesLegalProps> = {
	default: {
		...autocompleteModalThemeComponentProps.default,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.default?.['autocompleteModal'] || {}),
			themeStyleScript: autocompleteModalStyleScript,
			width: '70vw',
			layout: 'standard',
		},
		'autocompleteModal facetPaletteOptions': {
			gridSize: '38px',
			hideLabel: false,
		},
		'autocompleteModal facetGridOptions': {
			gridSize: '38px',
		},
		'autocompleteModal facet': {
			...(autocompleteModalThemeComponentProps.default?.['autocompleteModal facet'] || {}),
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
		'autocompleteModal results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteModal recommendationGrid': {
			rows: 2,
			columns: 4,
		},
		'autocompleteModal button.see-more icon': {
			icon: custom.icons.arrowRight,
			size: `${custom.sizes.icon12}px`,
		},
	},
	mobile: {
		...autocompleteModalThemeComponentProps.mobile,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.mobile?.['autocompleteModal'] || {}),
			width: '100%',
			layout: 'mini',
		},
		'autocompleteModal results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteModal recommendationGrid': {
			rows: 2,
			columns: 3,
		},
	},
	tablet: {
		...autocompleteModalThemeComponentProps.tablet,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.tablet?.['autocompleteModal'] || {}),
			width: '80vw',
			layout: 'standard',
		},
		'autocompleteModal facet': {
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
		'autocompleteModal results': {
			rows: 2,
			columns: 4,
		},
		'autocompleteModal recommendationGrid': {
			rows: 2,
			columns: 4,
		},
	},
	desktop: {
		...autocompleteModalThemeComponentProps.desktop,
		autocompleteModal: {
			...(autocompleteModalThemeComponentProps.desktop?.['autocompleteModal'] || {}),
			width: '80vw',
			layout: 'standard',
		},
		'autocompleteModal results': {
			rows: 2,
			columns: 3,
		},
		'autocompleteModal recommendationGrid': {
			rows: 2,
			columns: 4,
		},
	},
};
