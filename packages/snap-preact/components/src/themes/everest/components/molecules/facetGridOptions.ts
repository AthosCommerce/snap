import { css } from '@emotion/react';
import type { FacetGridOptionsProps, FacetGridOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetGridOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// CSS in JS style script for the FacetGridOptions component
const facetGridOptionsStyleScript = (props: FacetGridOptionsProps) => {
	const variables = props?.theme?.variables;
	const activeColor = new Color(variables?.colors?.primary || undefined);
	const fontColor =
		activeColor.isDark() || activeColor.hex().toLowerCase() == '#d15120'
			? Color(custom.colors.white || undefined)
			: Color(custom.colors.black || undefined);
	const gridSize = props?.gridSize ? props.gridSize : '52px';

	return css({
		gridTemplateColumns: `repeat(auto-fill, minmax(${gridSize}, 1fr))`,
		gap: props?.gapSize ? props.gapSize : custom.spacing.x1,
		alignItems: 'center',
		'.ss__facet-grid-options__option': {
			position: 'relative',
			height: '100%',
			aspectRatio: 1,
			border: 0,
			color: variables?.colors?.text,
			'&, &:after, .ss__facet-grid-options__option__value': {
				boxSizing: 'border-box',
			},
			'&:after, .ss__facet-grid-options__option__value': {
				display: 'block',
			},
			'&:after': {
				content: '""',
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				zIndex: 1,
				border: `1px solid ${custom.colors.gray02}`,
				backgroundColor: custom.colors.gray01,
			},
			'.ss__facet-grid-options__option__value': {
				position: 'relative',
				zIndex: 2,
				maxWidth: `calc(100% - ${custom.spacing.x2}px)`,
				maxHeight: `calc(100% - ${custom.spacing.x2}px)`,
				overflow: 'hidden',
				'&, &.ss__facet-grid-options__option__value--smaller': {
					fontSize: custom.utils.convertPxToEm(12),
					lineHeight: 1,
				},
			},
		},
		'.ss__facet-grid-options__option.ss__facet-grid-options__option--filtered': {
			fontWeight: custom.fonts.weight01,
			color: fontColor.hex(),
			'&:after': {
				backgroundColor: activeColor.hex(),
				borderColor: activeColor.hex(),
			},
		},
	});
};

// FacetGridOptions component props
export const facetGridOptions: ThemeComponent<'facetGridOptions', FacetGridOptionsProps, FacetGridOptionsTemplatesLegalProps> = {
	default: {
		facetGridOptions: {
			themeStyleScript: facetGridOptionsStyleScript,
			gridSize: '52px',
			gapSize: `${custom.spacing.x1}px`,
		},
	},
};
