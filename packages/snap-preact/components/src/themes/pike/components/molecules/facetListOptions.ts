import { css } from '@emotion/react';
import type { FacetListOptionsProps, FacetListOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetListOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const lightGray = custom.colors.gray04;
const checkboxSpacing = custom.sizes.icon16 + custom.spacing.x2;

// CSS in JS style script for the FacetListOptions component
const facetListOptionsStyleScript = (props: FacetListOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// shared styles
	const sharedStyles = css({
		'.ss__facet-list-options__option': {
			...custom.styles.baseText(),
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
					top: '-1px',
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
			...custom.styles.columns(),
			'.ss__facet-list-options__option': {
				minWidth: '1px',
				margin: 0,
				'.ss__facet-list-options__option__value': {
					display: 'flex',
					alignItems: 'baseline',
					'.ss__facet-list-options__option__value__label': {
						...custom.styles.textOverflow(),
					},
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
