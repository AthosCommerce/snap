import { css } from '@emotion/react';
import type { FacetPaletteOptionsProps, FacetPaletteOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetPaletteOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// CSS in JS style script for the FacetPaletteOptions component
const facetPaletteStyleScript = (props: FacetPaletteOptionsProps) => {
	const variables = props?.theme?.variables;
	const lightGray = custom.utils.lightenColor(variables?.colors?.text, 0.65);
	const hasCheckbox = !props?.hideCheckbox ? true : false;

	// set details for radius
	const radius = 0;
	const radiusUnit = 'px';
	const paletteRadius = radius ? `${radius}${radiusUnit}` : `0`;

	// determine inner border width
	let innerBorder = 5;
	if (props?.layout == 'list') {
		innerBorder = hasCheckbox ? 2 : 3;
	}

	// shared palette styles
	const sharedStyles = css({
		'.ss__facet-palette-options__option': {
			display: 'block',
			color: variables?.colors?.text,
			'&, &.ss__facet-palette-options__option--filtered': {
				'.ss__facet-palette-options__option__wrapper': {
					border: 0,
					borderRadius: 0,
					padding: 0,
				},
			},
			'&.ss__facet-palette-options__option--filtered': {
				'.ss__facet-palette-options__option__wrapper .ss__facet-palette-options__option__palette': {
					'&:before': {
						opacity: 1,
					},
					'&:after': {
						opacity: 0.3,
					},
				},
			},
			'.ss__facet-palette-options__option__wrapper': {
				overflow: 'hidden',
				'.ss__facet-palette-options__option__palette': {
					border: 0,
					padding: 0,
					'&, &:before, &:after': {
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						borderRadius: paletteRadius,
						boxSizing: 'border-box',
					},
					'&:before, &:after': {
						content: '""',
						display: 'block',
					},
					'&:before': {
						border: `${innerBorder}px solid ${custom.colors.white}`,
						margin: '1px',
						opacity: 0,
					},
					'&:after': {
						border: `1px solid ${custom.colors.black}`,
						opacity: 0.15,
					},
					'&[style*="url"]': {
						backgroundRepeat: 'no-repeat !important',
						backgroundSize: 'cover !important',
						backgroundPosition: 'center !important',
					},
					'.ss__image': {
						img: {
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							objectPosition: 'center center',
						},
					},
				},
			},
			'.ss__facet-palette-options__option__value__count': {
				position: 'relative',
				top: props?.layout == 'list' ? '-1px' : '',
				padding: props?.layout == 'list' ? `0 ${custom.spacing.x1}px` : ``,
				fontSize: custom.utils.convertPxToEm(10),
				color: lightGray,
			},
		},
	});

	// grid palette styles
	const gridStyles = css([
		sharedStyles,
		{
			gridTemplateColumns: `repeat(auto-fill, minmax(${props?.gridSize ? props.gridSize : '52px'}, 1fr))`,
			gap: props?.gapSize ? props.gapSize : custom.spacing.x1,
			alignItems: 'center',
			'.ss__facet-palette-options__option': {
				textAlign: 'center',
				'&, &.ss__facet-palette-options__option--filtered': {
					'.ss__facet-palette-options__option__wrapper': {
						position: 'relative',
						height: 0,
						padding: '0 0 100% 0',
					},
				},
				'.ss__checkbox, .ss__radio': {
					display: 'none',
				},
				'.ss__facet-palette-options__option__value, .ss__facet-palette-options__option__value__count': {
					display: 'block',
					lineHeight: '0.85rem',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
				},
				'.ss__facet-palette-options__option__value': {
					fontSize: custom.utils.convertPxToEm(12),
					overflow: 'hidden',
					margin: `${custom.spacing.x1}px 0 0 0`,
				},
				'.ss__facet-palette-options__option__value__count': {
					margin: `${custom.spacing.x1 / 2}px 0 0 0`,
				},
			},
		},
	]);

	// list variables
	const listSize = hasCheckbox ? 16 : 22;
	const listCheckboxSize = 16;
	const listPadding = hasCheckbox ? custom.spacing.x4 + listSize + listCheckboxSize : custom.spacing.x2 + listSize;

	// list palette styles
	const listStyles = css([
		sharedStyles,
		{
			'&.ss__facet-palette-options--list': {
				display: 'block',
			},
			'.ss__facet-palette-options__option': {
				position: 'relative',
				padding: `${hasCheckbox ? 0 : '2px'} 0 0 ${listPadding}px`,
				margin: `0 0 ${custom.spacing.x1}px 0`,
				minHeight: hasCheckbox ? '' : `${listSize + 2}px`,
				'&:last-of-type': {
					marginBottom: 0,
				},
				'.ss__checkbox, .ss__radio, .ss__facet-palette-options__option__wrapper': {
					position: 'absolute',
					top: `${hasCheckbox ? 2 : 0.5}px`,
				},
				'.ss__checkbox, .ss__radio': {
					left: 0,
				},
				'.ss__facet-palette-options__option__wrapper': {
					left: hasCheckbox ? `${listCheckboxSize + custom.spacing.x2}px` : 0,
					width: `${listSize}px`,
					height: `${listSize}px`,
					lineHeight: `${listSize}px`,
				},
				'.ss__facet-palette-options__option__value, .ss__facet-palette-options__option__value__count': {
					display: 'inline',
					overflow: 'visible',
					textOverflow: 'unset',
					textAlign: 'left',
					whiteSpace: 'unset',
				},
				'.ss__facet-palette-options__option__value__count': {
					margin: 0,
				},
			},
		},
	]);

	return props?.layout == 'list' ? listStyles : gridStyles;
};

// FacetPaletteOptions component props
export const facetPaletteOptions: ThemeComponent<'facetPaletteOptions', FacetPaletteOptionsProps, FacetPaletteOptionsTemplatesLegalProps> = {
	default: {
		facetPaletteOptions: {
			themeStyleScript: facetPaletteStyleScript,
			hideIcon: true,
			gridSize: '52px',
			gapSize: `${custom.spacing.x1}px`,
			colorMapping: {
				brown: {
					background: custom.colors.brown,
				},
				multi: {
					background: custom.colors.rainbow,
				},
				'multi-color': {
					background: custom.colors.rainbow,
				},
				purple: {
					background: custom.colors.purple,
				},
				rainbow: {
					background: custom.colors.rainbow,
				},
			},
		},
	},
};
