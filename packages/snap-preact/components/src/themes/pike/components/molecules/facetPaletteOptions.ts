import { css } from '@emotion/react';
import type { FacetPaletteOptionsProps, FacetPaletteOptionsTemplatesLegalProps } from '../../../../components/Molecules/FacetPaletteOptions';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const lightGray = custom.colors.gray04;
const paletteColors = {
	brown: '#845329',
	purple: '#7c368e',
	rainbow:
		'linear-gradient(rgb(40, 87, 218) 20%, rgb(40, 218, 70) 20%, rgb(40, 218, 70) 40%, rgb(245, 228, 24) 40%, rgb(245, 228, 24) 60%, rgb(242, 133, 0) 60%, rgb(242, 133, 0) 80%, rgb(218, 40, 72) 80%, rgb(218, 40, 72))',
};

// CSS in JS style script for the FacetPaletteOptions component
const facetPaletteStyleScript = (props: FacetPaletteOptionsProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const hasCheckbox = !props?.hideCheckbox ? true : false;
	const isList = props?.layout == 'list' ? true : false;
	const innerBorder = isList ? 3 : 5;

	// shared styles
	const sharedStyles = css({
		'.ss__facet-palette-options__option': {
			'&.ss__facet-palette-options__option--filtered': {
				'.ss__facet-palette-options__option__wrapper .ss__facet-palette-options__option__palette': {
					'&:before': {
						opacity: 1,
					},
					'&:after': {
						opacity: 1, // selected outline must stand out from the 45% unselected outline
					},
				},
				'.ss__facet-palette-options__option__value': {
					...custom.styles.activeText(variables?.colors?.primary),
				},
			},
			'.ss__facet-palette-options__option__wrapper': {
				border: 0,
				...custom.styles.borderRadius(0),
				'.ss__facet-palette-options__option__palette': {
					overflow: 'hidden',
					border: 0,
					padding: 0,
					'&, &:before, &:after': {
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						...custom.styles.borderRadius(0),
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
						opacity: 0.45, // 3:1 boundary for light swatches on white (WCAG 1.4.11)
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
				fontSize: '10px',
				color: lightGray,
			},
		},
	});

	// facet palette grid styles
	const facetPaletteGridStyles = css([
		sharedStyles,
		{
			alignItems: 'center',
			'.ss__facet-palette-options__option': {
				display: 'block',
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
				},
				'.ss__facet-palette-options__option__value': {
					fontSize: '12px',
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

	// facet palette shared list styles
	const sharedListStyles = css({
		'.ss__facet-palette-options__option': {
			...custom.styles.baseText(),
			minHeight: hasCheckbox ? '' : `${listSize + 2}px`,
			position: 'relative',
			gap: `${custom.spacing.x1}px`,
			padding: `${hasCheckbox ? 0 : '2px'} 0 0 ${listPadding}px`,
			margin: `0 0 ${custom.spacing.x1}px 0`,
			'&:last-child': {
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
				overflow: 'visible',
				textOverflow: 'unset',
				textAlign: 'left',
				whiteSpace: 'unset',
			},
			'.ss__facet-palette-options__option__value__count': {
				position: 'relative',
				margin: 0,
			},
		},
	});

	// facet palette list styles
	const facetPaletteListStyles = css([
		sharedStyles,
		sharedListStyles,
		{
			'&.ss__facet-palette-options--list': {
				display: 'block',
			},
			'.ss__facet-palette-options__option': {
				margin: `0 0 ${custom.spacing.x1}px 0`,
				'&:last-child': {
					marginBottom: 0,
				},
			},
		},
	]);

	// facet palette list styles
	const facetPaletteListHorizontalStyles = css([
		sharedStyles,
		sharedListStyles,
		{
			// matches the component's own `--list` display rule specificity
			'&.ss__facet-palette-options--list': {
				...custom.styles.columns(),
			},
			'.ss__facet-palette-options__option': {
				minWidth: '1px',
				margin: 0,
				'.ss__facet-palette-options__option__value': {
					...custom.styles.textOverflow(),
				},
			},
		},
	]);

	if (isList) {
		return props?.horizontal ? facetPaletteListHorizontalStyles : facetPaletteListStyles;
	} else {
		return facetPaletteGridStyles;
	}
};

// FacetPaletteOptions component props
export const facetPaletteOptions: ThemeComponent<'facetPaletteOptions', FacetPaletteOptionsProps, FacetPaletteOptionsTemplatesLegalProps> = {
	default: {
		// the opt-in remove icon sits on top of the swatch color - restore its white fill (the global
		// `icon` color would otherwise make it invisible on dark swatches)
		'facetPaletteOptions icon': {
			color: custom.colors.white,
		},
		facetPaletteOptions: {
			themeStyleScript: facetPaletteStyleScript,
			hideIcon: true,
			columns: 0,
			gridSize: '52px',
			gapSize: `${custom.spacing.x1}px`,
			colorMapping: {
				brown: {
					background: paletteColors.brown,
				},
				multi: {
					background: paletteColors.rainbow,
				},
				'multi-color': {
					background: paletteColors.rainbow,
				},
				purple: {
					background: paletteColors.purple,
				},
				rainbow: {
					background: paletteColors.rainbow,
				},
			},
		},
	},
};
