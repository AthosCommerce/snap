import { css } from '@emotion/react';
import type { AutocompleteProps, AutocompleteTemplatesLegalProps } from '../../../../components/Organisms/Autocomplete';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import { autocompleteThemeComponentProps } from '../../../themeComponents/autocomplete';

// static variables
const headerSelectors =
	'.ss__autocomplete__terms .ss__autocomplete__title h5, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__header, .ss__autocomplete__content__results .ss__autocomplete__title h5, .ss__autocomplete__content__info a, .ss__no-results__recommendations h3';
const activeSelectors =
	'.ss__autocomplete__terms .ss__autocomplete__terms__options .ss__autocomplete__terms__option--active a, .ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__options .ss__facet-list-options .ss__facet-list-options__option--filtered, .ss__autocomplete__content__results .ss__results .ss__result:hover .ss__result__details .ss__result__details__title a, .ss__autocomplete__content__info a:hover';

// CSS in JS style script for the Autocomplete component
const autocompleteStyleScript = (props: AutocompleteProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const desktopBp = variables?.breakpoints?.desktop || custom.breakpoints.desktop;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;

	// shared styles
	const sharedStyles = css({
		'&.ss__autocomplete': {
			top: '48px',
			left: 0,
			right: 0,
			border: `1px solid ${custom.colors.gray02}`,
			backgroundColor: custom.colors.white,
			overflow: 'hidden',
			gap: `${custom.spacing.x4}px`,
			padding: `${custom.spacing.x4}px`,
			...custom.styles.boxSizing('autocomplete', props?.treePath, props?.name),
			'&.ss__autocomplete--only-terms': {
				width: '100%',
			},
			'a, div, p, .ss__button': {
				fontSize: '12px',
			},
			'a, div:not(.ss__button, .ss__rating__icons, .ss__rating__icons .ss__rating__stars .ss__rating__stars__star), p': {
				lineHeight: 1.5,
				color: variables?.colors?.text,
			},
			a: {
				display: 'block',
			},
			'ul, ul li': {
				padding: 0,
				margin: 0,
				listStyle: 'none',
			},
			'.ss__banner': {
				img: {
					maxWidth: '100%',
					maxHeight: '150px',
					height: 'auto',
				},
			},
			[headerSelectors]: {
				padding: 0,
				...custom.styles.headerText(variables?.colors?.secondary, '14px'),
				lineHeight: 1.2,
			},
			'.ss__autocomplete__facets .ss__facets .ss__facet .ss__facet__header, .ss__autocomplete__content__results .ss__autocomplete__title h5, .ss__autocomplete__content__info a, .ss__no-results__recommendations h3':
				{
					margin: `0 0 ${custom.spacing.x4}px 0`,
				},
			[activeSelectors]: {
				...custom.styles.activeText(variables?.colors?.primary),
			},
			'& > div': {
				minWidth: '1px',
				maxWidth: 'none',
				flex: props?.vertical ? `1 1 calc(100% + ${custom.spacing.x8}px)` : '1 1 0%',
				margin: `0 -${custom.spacing.x4}px`,
				padding: `0 ${custom.spacing.x4}px`,
				paddingBottom: `${custom.spacing.x4}px`,
				borderBottom: `1px solid ${custom.colors.gray02}`,
				'&:last-child': {
					paddingBottom: 0,
					borderBottomWidth: 0,
				},
			},
			'.ss__autocomplete__terms, .ss__autocomplete__facets': {
				flex: props?.vertical ? '' : '0 0 200px',
			},
			'.ss__autocomplete__terms': {
				backgroundColor: 'transparent',
				'& > div': {
					'.ss__autocomplete__title': {
						padding: 0,
					},
					'.ss__autocomplete__terms__options': {
						'.ss__autocomplete__terms__option a': {
							fontSize: '14px',
							em: {
								color: variables?.colors?.text,
								fontStyle: 'normal',
								fontSize: 'inherit',
								fontWeight: 'inherit',
							},
						},
						'.ss__autocomplete__terms__option--active a': {
							'&, & em': {
								...custom.styles.activeText(variables?.colors?.primary),
							},
						},
					},
				},
			},
			'.ss__autocomplete__facets': {
				'.ss__facets': {
					width: '100%',
					flexFlow: 'row nowrap',
					gap: `${custom.spacing.x4}px`,
					'.ss__facet': {
						flex: '1 1 0%',
						margin: 0,
						'.ss__facet__header': {
							borderBottom: 0,
							'.ss__facet__header__inner': {
								fontSize: 'inherit',
								fontWeight: 'inherit',
								lineHeight: 'inherit',
								color: 'inherit',
							},
						},
						'.ss__facet__options': {
							'.ss__facet-hierarchy-options .ss__facet-hierarchy-options__option, .ss__facet-list-options .ss__facet-list-options__option': {
								padding: 0,
								margin: `0 0 ${custom.spacing.x1}px 0`,
								'&:last-child': {
									marginBottom: 0,
								},
							},
							'.ss__facet__facet-grid-options .ss__facet-grid-options__option': {
								display: 'flex',
							},
						},
					},
				},
				'.ss__banner': {
					display: 'none',
					margin: `${custom.spacing.x4}px 0 0 0`,
				},
			},
			'.ss__autocomplete__content': {
				display: 'block',
				overflow: 'visible',
				'.ss__banner': {
					margin: `0 0 ${custom.spacing.x4}px 0`,
				},
			},
			'.ss__autocomplete__content__results': {
				'&:after': {
					content: '""',
					display: 'block',
					height: `${custom.spacing.x4}px`,
					margin: `0 -${custom.spacing.x4}px`,
					position: 'relative',
					zIndex: 2,
				},
				'.ss__results': {
					overflowY: 'auto',
					overflowX: 'hidden',
					maxHeight: '54vh',
					...custom.styles.scrollbar(),
				},
				'.ss__results .ss__result.ss__result--grid': {
					...custom.styles.resultCompact('grid', '', 12),
				},
				'.ss__results .ss__result.ss__result--list': {
					...custom.styles.resultCompact('', '0 0 80px', 12),
				},
			},
			'.ss__autocomplete__content__info': {
				textAlign: 'left',
				borderTop: `1px solid ${custom.colors.gray02}`,
				margin: `0 -${custom.spacing.x4}px`,
				padding: `${custom.spacing.x4}px ${custom.spacing.x4}px 0 ${custom.spacing.x4}px`,
				a: {
					position: 'relative',
					display: 'inline-block',
					padding: `0 ${custom.spacing.x1 + custom.sizes.icon12}px 0 0`,
					'&, .ss__icon': {
						margin: 0,
					},
					'.ss__icon': {
						position: 'absolute',
						top: 0,
						bottom: 0,
						right: 0,
						margin: 'auto 0',
					},
				},
			},
			'.ss__autocomplete__content__no-results': {
				'.ss__autocomplete__content__no-results__text': {
					p: {
						display: 'inline',
						margin: 0,
						padding: 0,
						fontSize: '14px',
						'& ~ p': {
							paddingLeft: '4px',
						},
					},
				},
			},
		},
		[`${custom.utils.getBp(custom.breakpoints.small, 'max')}`]: {
			'&.ss__autocomplete': {
				'.ss__autocomplete__content__results .ss__results': {
					gridTemplateColumns: `repeat(2, 1fr)`,
					'& > *:nth-child(n + 3)': {
						display: 'none',
					},
				},
			},
		},
		[`${custom.utils.getBp(mobileBp)}`]: {
			'&.ss__autocomplete': {
				'.ss__autocomplete__content .ss__autocomplete__content__info': {
					textAlign: 'right',
				},
			},
		},
		[`${custom.utils.getBp(tabletBp)}`]: {
			'&.ss__autocomplete': {
				flexWrap: props?.vertical ? 'nowrap' : 'wrap',
				right: 0,
				left: 'auto',
				'& > div:not(.ss__autocomplete__terms), & > div:not(.ss__autocomplete__terms):last-child': {
					paddingBottom: 0,
					borderBottomWidth: 0,
				},
				'.ss__autocomplete__terms': {
					flex: props?.vertical ? '' : `1 1 calc(100% + ${custom.spacing.x8}px)`,
				},
				'.ss__autocomplete__facets': {
					'.ss__facets': {
						flexWrap: 'wrap',
						'.ss__facet': {
							flex: '1 1 100%',
						},
					},
					'.ss__banner': {
						display: 'block',
					},
				},
				'.ss__autocomplete__content': {
					'.ss__autocomplete__content__info': {
						borderTop: 0,
						padding: 0,
						margin: 0,
					},
				},
			},
		},
		[`${custom.utils.getBp(desktopBp)}`]: {
			'&.ss__autocomplete': {
				flexWrap: props?.vertical ? 'wrap' : 'nowrap',
				[headerSelectors]: {
					fontSize: '16px',
				},
				'.ss__autocomplete__terms, .ss__autocomplete__facets': {
					flex: props?.vertical ? '' : '0 0 220px',
				},
				'.ss__autocomplete__terms': {
					flexWrap: 'wrap',
					alignContent: 'flex-start',
					paddingBottom: 0,
					borderBottomWidth: 0,
					'& > div .ss__autocomplete__terms__options .ss__autocomplete__terms__option a': {
						fontSize: '16px',
					},
				},
				'.ss__autocomplete__content__results .ss__results': {
					maxHeight: '60vh',
				},
			},
		},
	});

	// autcomplete horizontal styles
	const autocompleteHorizontalStyles = css([
		sharedStyles,
		{
			'.ss__autocomplete__terms': {
				'& > div': {
					'.ss__autocomplete__title h5': {
						margin: `0 0 ${custom.spacing.x4}px 0`,
					},
					'.ss__autocomplete__terms__options': {
						flexFlow: 'row wrap',
						justifyContent: 'flex-start',
						gap: `${custom.spacing.x1}px ${custom.spacing.x4}px`,
						'.ss__autocomplete__terms__option': {
							flex: '0 1 auto',
							minWidth: '1px',
							a: {
								padding: 0,
							},
						},
						'.ss__autocomplete__terms__option--active a': {
							backgroundColor: 'transparent',
						},
					},
				},
			},
		},
	]);

	// autcomplete vertical styles
	const autocompleteVerticalStyles = css([
		sharedStyles,
		{
			'.ss__autocomplete__terms': {
				'& > div': {
					'.ss__autocomplete__title h5': {
						margin: `0 0 ${custom.spacing.x2}px 0`,
					},
					'.ss__autocomplete__terms__options': {
						display: 'block',
						'.ss__autocomplete__terms__option': {
							a: {
								padding: `${custom.spacing.x2}px 0`,
								transition: `padding-left 0.5s ease`,
							},
						},
						'.ss__autocomplete__terms__option--active': {
							a: {
								paddingLeft: `${custom.spacing.x4}px`,
								backgroundColor: custom.colors.gray01,
							},
						},
					},
				},
			},
		},
	]);

	return props?.horizontalTerms ? autocompleteHorizontalStyles : autocompleteVerticalStyles;
};

// Autocomplete component props
export const autocomplete: ThemeComponent<'autocomplete', AutocompleteProps, AutocompleteTemplatesLegalProps> = {
	default: {
		...autocompleteThemeComponentProps.default,
		autocomplete: {
			...(autocompleteThemeComponentProps.default?.['autocomplete'] || {}),
			themeStyleScript: autocompleteStyleScript,
			width: '940px',
			contentTitle: 'Product Suggestions',
			termsTitle: 'Search Suggestions',
			seeMoreButtonIcon: custom.icons.arrowRight,
			vertical: false,
			horizontalTerms: false,
		},
		'autocomplete facets': {
			limit: 3,
		},
		'autocomplete facet': {
			disableCollapse: true,
			disableOverflow: true,
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
		'autocomplete facetPaletteOptions': {
			gridSize: '48px',
			hideLabel: false,
		},
		'autocomplete facetGridOptions': {
			gridSize: '48px',
		},
		'autocomplete results': {
			rows: 2,
			columns: 3,
			gapSize: `${custom.spacing.x4}px`,
		},
		'autocomplete icon': {
			size: `${custom.sizes.icon12}px`,
		},
	},
	mobile: {
		...autocompleteThemeComponentProps.mobile,
		autocomplete: {
			...(autocompleteThemeComponentProps.mobile?.['autocomplete'] || {}),
			width: 'auto',
			vertical: true,
			horizontalTerms: true,
			hideFacets: true,
		},
		'autocomplete results': {
			rows: 1,
			columns: 3,
		},
	},
	tablet: {
		...autocompleteThemeComponentProps.tablet,
		autocomplete: {
			...(autocompleteThemeComponentProps.tablet?.['autocomplete'] || {}),
			width: '600px',
			vertical: true,
			horizontalTerms: true,
		},
		'autocomplete facet': {
			disableCollapse: true,
			disableOverflow: true,
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
		'autocomplete results': {
			rows: 1,
			columns: 4,
		},
	},
	desktop: {
		...autocompleteThemeComponentProps.desktop,
		autocomplete: {
			...(autocompleteThemeComponentProps.desktop?.['autocomplete'] || {}),
			width: '700px',
			vertical: false,
			horizontalTerms: true,
		},
		'autocomplete facet': {
			disableCollapse: true,
			disableOverflow: true,
			display: {
				list: {
					limit: 4,
				},
				hierarchy: {
					limit: 4,
				},
				grid: {
					limit: 6,
				},
				palette: {
					limit: 6,
				},
			},
		},
		'autocomplete results': {
			rows: 2,
			columns: 3,
		},
	},
};
