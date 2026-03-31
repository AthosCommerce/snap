import { css } from '@emotion/react';
import type { FacetsHorizontalProps, FacetsHorizontalTemplatesLegalProps } from '../../../../components/Organisms/FacetsHorizontal';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the Facets component
const facetsHorizontalStyleScript = (props: FacetsHorizontalProps) => {
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;
	const columnsSelector = `.ss__facet-hierarchy-options, .ss__facet-list-options, .ss__facet-palette-options.ss__facet-palette-options--list`;

	return css({
		margin: 0,
		'.ss__facets-horizontal__header': {
			gap: 0,
			margin: `0 -${custom.spacing.x1}px -${custom.spacing.x2}px -${custom.spacing.x1}px `,
			position: 'relative',
			'& > *': {
				boxSizing: 'border-box',
				minWidth: '1px',
				width: `${100 / 6}%`,
				flex: '0 1 auto',
				padding: `0 ${custom.spacing.x1}px`,
			},
			'& > *, .ss__facets-horizontal__header__dropdown, .ss__mobile-sidebar': {
				margin: `0 0 ${custom.spacing.x2}px 0`,
			},
			'.ss__facets-horizontal__header__dropdown': {
				position: 'static',
				'&.ss__dropdown--open': {
					'.ss__dropdown__button': {
						'.ss__dropdown__button__heading': {
							'.ss__icon': {
								transform: 'rotate(180deg)',
							},
						},
					},
					'.ss__dropdown__content': {
						width: 'auto',
						minWidth: '1px',
						maxHeight: 'none',
						overflowY: 'visible',
						padding: `${custom.spacing.x2}px`,
						marginTop: `${custom.spacing.x2}px`,
						left: `${custom.spacing.x1}px`,
						right: `${custom.spacing.x1}px`,
					},
				},
				'.ss__dropdown__button, .ss__dropdown__content': {
					border: `1px solid ${custom.colors.gray02}`,
					backgroundColor: custom.colors.gray01,
				},
				'.ss__dropdown__button': {
					display: 'block',
					height: `${custom.sizes.height}px`,
					lineHeight: `${custom.sizes.height}px`,
					padding: `0 ${custom.spacing.x2}px`,
					textAlign: 'left',
					color: variables?.colors?.text,
					'.ss__dropdown__button__heading': {
						flexFlow: 'row nowrap',
						justifyContent: 'flex-start',
						gap: `${custom.spacing.x1}px`,
						padding: 0,
						'& > *': {
							minWidth: '1px',
							flex: '0 1 auto',
						},
						span: {
							flex: '1 1 0%',
							paddingRight: `${custom.spacing.x1}px`,
							fontWeight: custom.fonts.weight01,
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
						},
						'.ss__icon': {
							transition: 'transform ease 0.5s',
						},
					},
				},
				'.ss__dropdown__content': {
					width: 'auto',
					padding: `${custom.spacing.x2}px`,
					[columnsSelector]: {
						display: 'flex',
						flexFlow: 'row wrap',
						gap: `0 ${custom.spacing.x2}px`,
						'& > *': {
							flex: '0 1 auto',
							width: `${100 / 4 - 2}%`,
							minWidth: '1px',
							boxSizing: 'border-box',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
						},
					},
					'.ss__checkbox, .ss__radio, .ss__search-input .ss__search-input__input': {
						backgroundColor: custom.colors.white,
					},
					'.ss__facet': {
						margin: 0,
					},
					'.ss__facet.ss__facet--showing-all .ss__facet__options': {
						maxHeight: '360px',
					},
					'.ss__facet-list-options': {
						marginBottom: `-${custom.spacing.x1}px`,
						'.ss__facet-list-options__option:last-of-type': {
							marginBottom: `${custom.spacing.x1}px`,
						},
					},
					'.ss__facet-hierarchy-options': {
						'.ss__facet-hierarchy-options__option.ss__facet-hierarchy-options__option--filtered': {
							'& ~ .ss__facet-hierarchy-options__option:not(.ss__facet-hierarchy-options__option--filtered)': {
								paddingLeft: 0,
							},
						},
					},
					'.ss__facet-grid-options': {
						'.ss__facet-grid-options__option:not(.ss__facet-grid-options__option--filtered)': {
							'&:after': {
								backgroundColor: custom.colors.white,
							},
						},
					},
					'.ss__facet--slider': {
						'.ss__facet__options': {
							display: 'flex',
							minHeight: '100px',
							'.ss__facet-slider': {
								width: '100%',
							},
						},
					},
					'.ss__facet__show-more-less': {
						textAlign: 'center',
					},
				},
			},
			'.ss__mobile-sidebar': {
				'.ss__slideout__button .ss__button': {
					display: 'flex',
				},
			},
		},
		[`@media (max-width: ${tabletBp}px)`]: {
			'.ss__facets-horizontal__header': {
				'& > *': {
					width: `${100 / 4}%`,
				},
				'.ss__facets-horizontal__header__dropdown .ss__dropdown__content': {
					[columnsSelector]: {
						'& > *': {
							width: `${100 / 3 - 2}%`,
						},
					},
				},
			},
		},
		[`@media (max-width: ${mobileBp}px)`]: {
			'.ss__facets-horizontal__header': {
				'& > *': {
					width: `${100 / 2}%`,
				},
				'.ss__facets-horizontal__header__dropdown .ss__dropdown__content': {
					[columnsSelector]: {
						'& > *': {
							width: `${100 / 2 - 2}%`,
						},
					},
				},
			},
		},
	});
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
		'facetsHorizontal dropdown button icon': {
			size: `${custom.sizes.icon12}px`,
		},
		'facetsHorizontal dropdown facet': {
			statefulOverflow: true,
			display: {
				list: {
					limit: 32,
				},
				hierarchy: {
					limit: 32,
				},
				grid: {
					limit: 34,
				},
				palette: {
					limit: 34,
				},
			},
		},
		'facetsHorizontal mobileSidebar facet': {
			statefulOverflow: true,
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
		'facetsHorizontal facetGridOptions': {
			gridSize: '62px',
		},
		'facetsHorizontal mobileSidebar facetGridOptions': {
			gridSize: '52px',
		},
		'facetsHorizontal facetPaletteOptions': {
			gridSize: '62px',
		},
		'facetsHorizontal mobileSidebar facetPaletteOptions': {
			gridSize: '52px',
		},
	},
};
