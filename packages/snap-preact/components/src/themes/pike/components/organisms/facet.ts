import { css } from '@emotion/react';
import type { FacetProps, FacetTemplatesLegalProps } from '../../../../components/Organisms/Facet';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const lightGray = custom.utils.lightenColor();

// CSS in JS style script for the Facet component
const facetStyleScript = (props: FacetProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// facet styles
	const facetStyles = css({
		...custom.styles.boxSizing('facet', props?.treePath, props?.name),
		'&.ss__facet--collapsed': {
			'.ss__facet__header': {
				'.ss__facet__dropdown__icon': {
					transform: 'rotate(0deg)',
				},
			},
		},
		'&.ss__facet--showing-all:has(.ss__facet__show-more-less)': {
			'.ss__facet__options': {
				maxHeight: `490px`,
				overflowY: 'auto',
				overflowX: 'hidden',
				paddingRight: `${custom.spacing.x2}px`,
			},
		},
		'.ss__facet__header': {
			margin: ` 0 0 ${custom.spacing.x4}px 0`,
			padding: ` 0 0 ${custom.spacing.x2}px 0`,
			borderBottom: `2px solid ${variables?.colors?.primary}`,
			gap: `${custom.spacing.x2}px`,
			...custom.styles.headerText('', '16px'),
			'.ss__facet__header__inner': {
				flex: '1 1 0%',
				gap: `${custom.spacing.x1}px`,
				alignItems: 'center',
				maxWidth: '100%',
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
			'.ss__facet__dropdown__icon': {
				transition: 'transform ease 0.5s',
				transform: 'rotate(180deg)',
			},
		},
		'.ss__facet__options': {
			marginTop: 0,
			maxHeight: 'none',
			overflow: 'visible',
			...custom.styles.scrollbar(),
		},
		'.ss__search-input': {
			margin: `0 0 ${custom.spacing.x4}px`,
		},
		'.ss__facet__range-inputs': {
			margin: `${custom.spacing.x4}px 0 0 0`,
			fontSize: '14px',
			color: variables?.colors?.text,
			'&, .ss__facet__range-inputs__row': {
				gap: `${custom.spacing.x2}px`,
			},
			'.ss__facet__range-inputs__row': {
				' > *': {
					minWidth: '1px',
					flex: '1 1 0%',
				},
				'.ss__facet__range-inputs__separator': {
					flex: '0 1 auto',
				},
			},
			'.ss__facet__range-inputs__separator, .ss__facet__range-inputs__row--button-wrapper .ss__button': {
				margin: 0,
			},
			'.ss__facet__range-input': {
				gap: `${custom.spacing.x1 / 2}px`,
				border: 0,
				backgroundColor: 'transparent',
			},
			'.ss__facet__range-input__prefix': {
				padding: 0,
			},
			'.ss__facet__range-input__input': {
				height: custom.sizes.height,
				lineHeight: custom.sizes.height,
				...custom.styles.box(variables?.colors?.text, `0 ${custom.spacing.x2}px`, false),
				'&::-webkit-input-placeholder': {
					color: lightGray,
				},
				'&::-ms-input-placeholder': {
					color: lightGray,
				},
				'&::placeholder': {
					color: lightGray,
				},
			},
			'.ss__facet__range-inputs__row--button-wrapper .ss__button': {
				width: '100%',
			},
		},
		'.ss__facet__show-more-less': {
			margin: `${custom.spacing.x2}px 0 0 0`,
			flexFlow: 'row nowrap',
			display: 'inline-flex',
			alignItems: 'center',
			gap: `${custom.spacing.x2}px`,
			...custom.styles.activeText(variables?.colors?.primary),
			lineHeight: 1,
			'.ss__facet__show-more-less__icon': {
				margin: 0,
			},
		},
	});

	return facetStyles;
};

// Facet component props
export const facet: ThemeComponent<'facet', FacetProps, FacetTemplatesLegalProps> = {
	default: {
		facet: {
			themeStyleScript: facetStyleScript,
			iconCollapse: custom.icons.arrowDown,
			iconExpand: custom.icons.arrowDown,
			iconOverflowMore: custom.icons.plus,
			iconOverflowLess: custom.icons.minus,
			color: custom.colors.secondary,
			iconColor: custom.colors.primary,
		},
		'facet dropdown icon.collapse': {
			size: `${custom.sizes.icon12}px`,
		},
		'facet dropdown icon.expand': {
			size: `${custom.sizes.icon12}px`,
		},
		'facet button.reset-facet icon': {
			size: `${custom.sizes.icon08}px`,
		},
		'facet icon.overflow-more': {
			size: `${custom.sizes.icon10}px`,
		},
	},
};
