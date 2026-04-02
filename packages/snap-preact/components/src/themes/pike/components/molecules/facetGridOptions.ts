import { css } from '@emotion/react';
import type { FacetGridOptionsProps, FacetGridOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetGridOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const activeColors = custom.utils.activeColors();
const activeColor = activeColors[0];
const fontColor = activeColors[1];

// CSS in JS style script for the FacetGridOptions component
const facetGridOptionsStyleScript = (props: FacetGridOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// facet grid styles
	const facetGridStyles = css({
		alignItems: 'center',
		...custom.styles.boxSizing('facetGridOptions', props?.treePath, props?.name),
		'.ss__facet-grid-options__option': {
			height: '100%',
			aspectRatio: 1,
			padding: `${custom.spacing.x2}px`,
			'&, .ss__facet-grid-options__option__value': {
				overflow: 'hidden',
			},
			'.ss__facet-grid-options__option__value': {
				display: 'block',
				maxWidth: '100%',
				maxHeight: '100%',
				color: 'inherit',
				'&, &.ss__facet-grid-options__option__value--smaller': {
					fontSize: '12px',
					lineHeight: 1,
				},
			},
			'&, &:hover:not(.ss__facet-grid-options__option--filtered)': {
				...custom.styles.box(variables?.colors?.text, 0),
			},
			'&.ss__facet-grid-options__option--filtered': {
				backgroundColor: activeColor,
				borderColor: activeColor,
				...custom.styles.activeText(fontColor),
			},
		},
	});

	return facetGridStyles;
};

// FacetGridOptions component props
export const facetGridOptions: ThemeComponent<'facetGridOptions', FacetGridOptionsProps, FacetGridOptionsTemplatesLegalProps> = {
	default: {
		facetGridOptions: {
			themeStyleScript: facetGridOptionsStyleScript,
			columns: 0,
			gridSize: '52px',
			gapSize: `${custom.spacing.x1}px`,
		},
	},
};
