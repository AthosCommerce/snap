import { css } from '@emotion/react';
import type { FacetListOptionsProps, FacetListOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetListOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const lightGray = custom.utils.lightenColor();
const checkboxSpacing = custom.sizes.icon16 + custom.spacing.x2;

// CSS in JS style script for the FacetListOptions component
const facetListOptionsStyleScript = (props: FacetListOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const mobileBp = variables?.breakpoints?.mobile || custom.breakpoints.mobile;
	const tabletBp = variables?.breakpoints?.tablet || custom.breakpoints.tablet;

	// shared styles
	const sharedStyles = css({
		...custom.styles.boxSizing('facetListOptions', props?.treePath, props?.name),
		'.ss__facet-list-options__option': {
			lineHeight: 1.5,
			color: variables?.colors?.text,
			position: 'relative',
			gap: `${custom.spacing.x1}px`,
			padding: props?.hideCheckbox ? 0 : `0 0 0 ${checkboxSpacing}px`,
			'.ss__checkbox, .ss__radio': {
				position: 'absolute',
				top: '1.5px',
				left: 0,
			},
			'.ss__facet-list-options__option__value': {
				margin: 0,
				'.ss__facet-list-options__option__value__count': {
					position: 'relative',
					top: `${props?.horizontal && props?.treePath?.includes('storybook') ? 0.5 : -1}px`,
					margin: 0,
					padding: `0 ${custom.spacing.x1}px`,
					fontSize: '10px',
					color: lightGray,
				},
			},
		},
		'.ss__facet-list-options__option.ss__facet-list-options__option--filtered': {
			...custom.styles.activeText(variables?.colors?.primary),
		},
	});

	// facet list styles
	const facetListStyles = css([
		sharedStyles,
		{
			'.ss__facet-list-options__option': {
				margin: `0 0 ${custom.spacing.x1}px 0`,
				'&:last-child': {
					marginBottom: 0,
				},
			},
		},
	]);

	// facet horizontal styles
	const facetListHorizontalStyles = css([
		sharedStyles,
		{
			flexFlow: 'row wrap',
			gap: `${custom.spacing.x1}px ${custom.spacing.x2}px`,
			'.ss__facet-list-options__option': {
				flex: '0 1 auto',
				width: `calc((100% - ${custom.spacing.x2}px) / 2)`,
				minWidth: '1px',
				margin: 0,
				'.ss__facet-list-options__option__value': {
					display: 'flex',
					alignItems: 'center',
					'.ss__facet-list-options__option__value__label': {
						...custom.styles.textOverflow(),
					},
				},
			},
		},
		{
			[`${custom.utils.getBp(mobileBp)}`]: {
				'.ss__facet-list-options__option': {
					width: `calc((100% - ${custom.spacing.x2 * 2}px) / 3)`,
				},
			},
		},
		{
			[`${custom.utils.getBp(tabletBp)}`]: {
				'.ss__facet-list-options__option': {
					width: `calc((100% - ${custom.spacing.x2 * 3}px) / 4)`,
				},
			},
		},
	]);

	return props?.horizontal ? facetListHorizontalStyles : facetListStyles;
};

// FacetListOptions component props
export const facetListOptions: ThemeComponent<'facetListOptions', FacetListOptionsProps, FacetListOptionsTemplatesLegalProps> = {
	default: {
		facetListOptions: {
			themeStyleScript: facetListOptionsStyleScript,
		},
	},
};
