import { css } from '@emotion/react';
import type { FacetsHorizontalProps, FacetsHorizontalTemplatesLegalProps } from '../../../../components/Organisms/FacetsHorizontal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const dropdownButtonHeight = custom.sizes.height;

// CSS in JS style script for the Facets component
const facetsHorizontalStyleScript = (props: FacetsHorizontalProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;

	// facets horizontal styles
	const facetsHorizontalStyles = css({
		margin: 0,
		...custom.styles.boxSizing('facetsHorizontal', props?.treePath, props?.name),
		'.ss__facets-horizontal__header': {
			gap: `${custom.spacing.x2}px`,
			position: 'relative',
			'& > *': {
				minWidth: '1px',
				flex: '0 1 auto',
				width: `calc((100% - ${custom.spacing.x2 * 2}px) / 3)`,
			},
			'& > *, .ss__facets-horizontal__header__dropdown, .ss__mobile-sidebar': {
				margin: 0,
			},
			'.ss__facets-horizontal__header__dropdown': {
				position: 'static',
				'&.ss__dropdown--open': {
					'.ss__dropdown__button': {
						'.ss__dropdown__button__heading': {
							'.ss__dropdown__button__heading__icon': {
								transform: 'rotate(180deg)',
							},
						},
					},
					'.ss__dropdown__content': {
						width: 'auto',
						minWidth: '1px',
						maxHeight: 'none',
						overflowY: 'visible',
						padding: `${custom.spacing.x4}px`,
						marginTop: `${custom.spacing.x1}px`,
						right: 0,
					},
				},
				'.ss__dropdown__button, .ss__dropdown__content': {
					...custom.styles.box(variables?.colors?.text, `0 ${custom.spacing.x2}px`),
				},
				'.ss__dropdown__button': {
					height: `${dropdownButtonHeight}px`,
					lineHeight: `${dropdownButtonHeight}px`,
					'&, .ss__dropdown__button__heading': {
						width: '100%',
					},
					'.ss__dropdown__button__heading': {
						flexFlow: 'row nowrap',
						justifyContent: 'flex-start',
						gap: `${custom.spacing.x1}px`,
						padding: 0,
						'& > *': {
							minWidth: '1px',
						},
						'.ss__facet__header__inner': {
							flex: '1 1 0%',
							gap: `${custom.spacing.x1}px`,
							alignItems: 'center',
							maxWidth: '100%',
							paddingRight: `${custom.spacing.x1}px`,
							fontWeight: custom.fonts.weight01,
							'span:not(.ss__facet__header__selected-count)': {
								...custom.styles.textOverflow(),
							},
							'.ss__facet__header__selected-count, .ss__facet__header__clear-all': {
								fontSize: '12px',
								margin: 0,
							},
							'.ss__facet__header__clear-all': {
								padding: 0,
								height: 'auto',
								lineHeight: 'inherit',
								marginLeft: 'auto',
								'&, &:hover': {
									border: 0,
									backgroundColor: 'transparent',
									color: 'inherit',
								},
								'&:hover': {
									textDecoration: 'none',
								},
								'.ss__button__icon': {
									margin: 0,
								},
							},
						},
						'.ss__dropdown__button__heading__icon': {
							transition: 'transform ease 0.5s',
						},
					},
				},
				'.ss__dropdown__content': {
					'.ss__checkbox, .ss__radio, .ss__search-input .ss__search-input__input, .ss__facet__range-inputs .ss__facet__range-input__input': {
						backgroundColor: custom.colors.white,
					},
					'.ss__facet': {
						margin: 0,
					},
					'.ss__facet.ss__facet--showing-all:has(.ss__facet__show-more-less) .ss__facet__options': {
						maxHeight: '360px',
					},
					'.ss__facet-grid-options': {
						'.ss__facet-grid-options__option:not(.ss__facet-grid-options__option--filtered)': {
							backgroundColor: custom.colors.white,
						},
					},
					'.ss__facet--slider .ss__facet__options, .ss__facet__range-inputs': {
						maxWidth: '50%',
						marginLeft: 'auto',
						marginRight: 'auto',
					},
					'.ss__facet__show-more-less': {
						margin: `${custom.spacing.x2}px 0 0 0`,
						justifyContent: 'center',
						'.ss__facet__show-more-less__icon': {
							margin: 0,
						},
					},
				},
			},
			'.ss__facets-horizontal__header__dropdown .ss__dropdown__content .ss__facet__show-more-less, .ss__mobile-sidebar .ss__slideout__button .ss__button':
				{
					display: 'flex',
				},
		},
		[`${custom.utils.getBp(mobileBp)}`]: {
			'.ss__facets-horizontal__header': {
				'& > *': {
					width: `calc((100% - ${custom.spacing.x2 * 3}px) / 4)`,
				},
			},
		},
		[`${custom.utils.getBp(tabletBp)}`]: {
			'.ss__facets-horizontal__header': {
				'& > *': {
					width: `calc((100% - ${custom.spacing.x2 * 5}px) / 6)`,
				},
			},
		},
	});

	return facetsHorizontalStyles;
};

// FacetsHorizontal component props
export const facetsHorizontal: ThemeComponent<'facetsHorizontal', FacetsHorizontalProps, FacetsHorizontalTemplatesLegalProps> = {
	default: {
		facetsHorizontal: {
			themeStyleScript: facetsHorizontalStyleScript,
			iconExpand: custom.icons.arrowDown,
			iconCollapse: custom.icons.arrowDown,
			alwaysShowFiltersButton: true,
		},
		'facetsHorizontal button.reset-facet icon': {
			size: `${custom.sizes.icon08}px`,
		},
		'facetsHorizontal dropdown facet': {
			statefulOverflow: true,
			horizontal: true,
			display: {
				list: {
					limit: 32,
				},
				hierarchy: {
					limit: 32,
				},
				grid: {
					limit: 36,
				},
				palette: {
					limit: 36,
				},
			},
		},
		'facetsHorizontal mobileSidebar facet': {
			statefulOverflow: true,
			horizontal: false,
			display: {
				list: {
					limit: 10,
				},
				hierarchy: {
					limit: 10,
				},
				grid: {
					limit: 12,
				},
				palette: {
					limit: 12,
				},
			},
		},
		'facetsHorizontal facetListOptions': {
			hideCheckbox: false,
		},
		'facetsHorizontal facetGridOptions': {
			gridSize: '48px',
		},
		'facetsHorizontal mobileSidebar facetGridOptions': {
			gridSize: '52px',
		},
		'facetsHorizontal facetPaletteOptions': {
			gridSize: '48px',
		},
		'facetsHorizontal mobileSidebar facetPaletteOptions': {
			gridSize: '52px',
		},
	},
};
