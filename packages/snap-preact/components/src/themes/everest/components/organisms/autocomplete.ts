import { css } from '@emotion/react';
import type { AutocompleteProps, AutocompleteTemplatesLegalProps } from '../../../../components/Organisms/Autocomplete';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import { autocompleteThemeComponentProps } from '../../../themeComponents/autocomplete';

// CSS in JS style script for the Autocomplete component
const autocompleteStyleScript = (props: AutocompleteProps) => {
	const variables = props?.theme?.variables;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;
	const headerSelectors =
		'.ss__autocomplete__terms .ss__autocomplete__title h5, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__header, .ss__autocomplete__content__results .ss__autocomplete__title h5, .ss__autocomplete__content__info a, .ss__no-results__recommendations h3';
	const activeSelectors =
		'.ss__autocomplete__terms .ss__autocomplete__terms__options .ss__autocomplete__terms__option--active a, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__options .ss__facet-list-options .ss__facet-list-options__option--filtered, .ss__autocomplete__content__results .ss__results .ss__result:hover .ss__result__details .ss__result__details__title a, .ss__autocomplete__content__info a:hover';

	return css({
		'&.ss__autocomplete': {
			border: `1px solid ${custom.colors.gray02}`,
			backgroundColor: custom.colors.white,
			width: props?.width,
			right: 0,
			left: 'auto',
			top: 'auto',
			margin: `${custom.spacing.x1}px 0 0 0`,
			gap: `${custom.spacing.x4}px`,
			'a, div, p': {
				fontSize: custom.utils.convertPxToEm(12),
				lineHeight: 1.5,
				color: variables?.colors?.text,
			},
			a: {
				display: 'block',
			},
			'.ss__banner': {
				img: {
					maxWidth: '100%',
					maxHeight: '150px',
					height: 'auto',
				},
			},
			[headerSelectors]: {
				margin: `0 0 ${custom.spacing.x4}px 0`,
				fontSize: custom.utils.convertPxToEm(16),
				fontWeight: custom.fonts.weight02,
				lineHeight: 1.2,
				color: variables?.colors?.secondary,
			},
			[activeSelectors]: {
				fontWeight: custom.fonts.weight01,
				color: variables?.colors?.primary,
			},
			'& > div': {
				minWidth: '1px',
				maxWidth: 'none',
				flex: '0 1 auto',
				padding: `${custom.spacing.x4}px 0`,
				order: 0,
				'&:first-of-type': {
					paddingLeft: `${custom.spacing.x4}px`,
				},
				'&:last-of-type': {
					paddingRight: `${custom.spacing.x4}px`,
				},
				'&.ss__autocomplete__terms': {
					padding: 0,
				},
			},
			'.ss__autocomplete__terms': {
				width: '200px',
				backgroundColor: custom.colors.gray01,
				textAlign: 'left',
				'& > div:first-of-type .ss__autocomplete__title': {
					marginTop: `${custom.spacing.x2}px`,
				},
				'& > div:last-of-type .ss__autocomplete__terms__options': {
					marginBottom: `${custom.spacing.x2}px`,
				},
				'& > div': {
					'.ss__autocomplete__title': {
						padding: 0,
						h5: {
							margin: 0,
							padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
						},
					},
					'.ss__autocomplete__terms__options': {
						'.ss__autocomplete__terms__option': {
							a: {
								padding: `${custom.spacing.x2}px ${custom.spacing.x4}px`,
								fontSize: custom.utils.convertPxToEm(14),
								color: variables?.colors?.primary,
								em: {
									color: variables?.colors?.text,
									fontStyle: 'normal',
									fontSize: 'inherit',
									fontWeight: 'inherit',
								},
							},
						},
						'.ss__autocomplete__terms__option--active': {
							'a, a em': {
								fontWeight: custom?.fonts?.weight01,
								color: variables?.colors?.primary,
							},
						},
					},
				},
			},
			'.ss__autocomplete__facets': {
				width: '200px',
				textAlign: 'left',
				'.ss__facets': {
					'.ss__facet': {
						margin: `0 0 ${custom.spacing.x4}px 0`,
						'&.ss__facet--showing-all': {
							'.ss__facet__options': {
								maxHeight: 'none',
								overflow: 'visible',
								padding: 0,
							},
						},
						'&:last-of-type': {
							marginBottom: 0,
						},
						'.ss__facet__header': {
							borderBottom: 0,
							padding: 0,
							'.ss__facet__header__inner': {
								fontSize: 'inherit',
								fontWeight: 'inherit',
								color: 'inherit',
							},
						},
						'.ss__facet__options': {
							margin: 0,
							maxHeight: 'none',
							overflow: 'visible',
							'.ss__facet-hierarchy-options .ss__facet-hierarchy-options__option, .ss__facet-list-options .ss__facet-list-options__option': {
								padding: 0,
								margin: `0 0 ${custom.spacing.x1}px 0`,
								'&:last-of-type': {
									marginBottom: 0,
								},
							},
							'.ss__facet-list-options': {
								'.ss__facet-list-options__option': {},
							},
						},
					},
				},
			},
			'.ss__autocomplete__content': {
				flex: '1 1 0%',
				overflow: 'visible',
				justifyContent: 'flex-start',
			},
			'.ss__autocomplete__content__results': {
				margin: `0 0 ${custom.spacing.x4}px 0`,
				'.ss__results': {
					overflowY: 'auto',
					overflowX: 'hidden',
					maxHeight: '75vh',
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
					'.ss__result': {
						'.ss__result__details': {
							gap: `${custom.spacing.x1}px`,
							'.ss__result__details__pricing': {
								'.ss__result__price': {
									fontSize: custom.utils.convertPxToEm(14),
								},
								'.ss__price--strike': {
									fontSize: custom.utils.convertPxToEm(12),
								},
							},
						},
					},
					'.ss__inline-banner': {
						maxHeight: '250px',
						overflow: 'hidden',
					},
				},
			},
			'.ss__autocomplete__content__info': {
				padding: 0,
				a: {
					margin: 0,
					'.ss__icon': {
						fill: 'currentColor',
						stroke: 'currentColor',
					},
				},
			},
			'.ss__autocomplete__content__no-results': {
				'.ss__autocomplete__content__no-results__text': {
					p: {
						display: 'inline',
						margin: 0,
						padding: 0,
						'& ~ p': {
							paddingLeft: '4px',
						},
					},
				},
				'.ss__no-results__recommendations': {
					margin: `${custom.spacing.x4}px 0 0 0`,
				},
			},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'&.ss__autocomplete': {
				flexFlow: 'row wrap',
				gap: 0,
				width: props?.width,
				left: 0,
				right: 0,
				[headerSelectors]: {
					fontSize: custom.utils.convertPxToEm(14),
				},
				'& > div': {
					flex: '1 1 100%',
					borderBottom: `1px solid ${custom.colors.gray02}`,
					'&:last-of-type': {
						borderBottomWidth: 0,
					},
					'&, &.ss__autocomplete__terms': {
						padding: `${custom.spacing.x4}px`,
					},
				},
				'.ss__autocomplete__terms': {
					backgroundColor: 'transparent',
					display: 'flex',
					flexFlow: 'row nowrap',
					gap: `${custom.spacing.x4}px`,
					width: 'auto',
					'& > div': {
						minWidth: '1px',
						flex: '1 1 0%',
						'&:first-of-type .ss__autocomplete__title': {
							marginTop: 0,
						},
						'&:last-of-type .ss__autocomplete__terms__options': {
							marginBottom: 0,
						},
						'.ss__autocomplete__title h5': {
							padding: 0,
							margin: `0 0 ${custom.spacing.x4}px 0`,
						},
						'.ss__autocomplete__terms__options': {
							gap: `${custom.spacing.x1}px ${custom.spacing.x4}px`,
							flexFlow: 'row wrap',
							justifyContent: 'flex-start',
							'.ss__autocomplete__terms__option': {
								flex: '0 1 auto',
								a: {
									padding: 0,
									fontSize: custom.utils.convertPxToEm(12),
								},
							},
						},
					},
				},
				'.ss__autocomplete__terms > div .ss__autocomplete__terms__options, .ss__autocomplete__facets .ss__facets': {
					display: 'flex',
				},
				'.ss__autocomplete__terms > div .ss__autocomplete__terms__options, .ss__autocomplete__facets .ss__facets .ss__facet': {
					minWidth: '1px',
				},
				'.ss__autocomplete__facets': {
					width: 'auto',
					'.ss__facets': {
						gap: `0 ${custom.spacing.x4}px`,
						flexFlow: 'row nowrap',
						'.ss__facet': {
							flex: '1 1 0%',
							'&, &:last-of-type': {
								margin: 0,
							},
						},
					},
				},
				'.ss__autocomplete__content__info': {
					a: {
						'.ss__icon': {
							position: 'relative',
							top: '1px',
						},
					},
				},
			},
		},
		[`@media (max-width: ${custom.breakpoints.small}px)`]: {
			'&.ss__autocomplete': {
				'.ss__autocomplete__content__results .ss__results, .ss__autocomplete__content__no-results .ss__recommendation-grid__results': {
					gridTemplateColumns: `repeat(2, 1fr)`,
					'& > div:nth-of-type(n+3)': {
						display: 'none',
					},
				},
			},
		},
	});
};

// Autocomplete component props
export const autocomplete: ThemeComponent<'autocomplete', AutocompleteProps, AutocompleteTemplatesLegalProps> = {
	default: {
		...autocompleteThemeComponentProps.default,
		autocomplete: {
			themeStyleScript: autocompleteStyleScript,
			width: '900px',
		},
		'autocomplete facet': {
			limit: 5,
			disableOverflow: true,
			disableCollapse: true,
		},
		'autocomplete facets': {
			limit: 3,
		},
		'autocomplete facetListOptions': {
			hideCheckbox: true,
		},
		'autocomplete facetPaletteOptions': {
			gridSize: '38px',
			hideLabel: false,
		},
		'autocomplete facetGridOptions': {
			gridSize: '38px',
		},
		'autocomplete results': {
			rows: 2,
			columns: 3,
		},
		'autocomplete recommendationGrid': {
			rows: 2,
			columns: 4,
		},
		'autocomplete icon': {
			icon: custom.icons.arrowRight,
			size: `${custom.sizes.icon12}px`,
		},
	},
	mobile: {
		...autocompleteThemeComponentProps.mobile,
		autocomplete: {
			width: '100%',
		},
		'autocomplete results': {
			rows: 1,
			columns: 3,
		},
		'autocomplete recommendationGrid': {
			rows: 1,
			columns: 3,
		},
	},
	tablet: {
		...autocompleteThemeComponentProps.tablet,
		autocomplete: {
			width: '100%',
		},
		'autocomplete results': {
			rows: 1,
			columns: 4,
		},
		'autocomplete recommendationGrid': {
			rows: 1,
			columns: 4,
		},
	},
	desktop: {
		...autocompleteThemeComponentProps.desktop,
		autocomplete: {},
		'autocomplete results': {
			rows: 2,
			columns: 3,
		},
		'autocomplete recommendationGrid': {
			rows: 2,
			columns: 4,
		},
	},
};
