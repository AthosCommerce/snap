import { css } from '@emotion/react';
import type { GridProps, GridTemplatesLegalProps } from '../../../../components/Molecules/Grid';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';
import Color from 'color';

// grid size
const gridSize = 42;

// CSS in JS style script for the Grid component
const gridStyleScript = (props: Partial<GridProps>) => {
	const variables = props?.theme?.variables;
	const activeColor = new Color(variables?.colors?.primary || undefined);
	const fontColor =
		activeColor.isDark() || activeColor.hex().toLowerCase() == '#00aeef'
			? Color(custom.colors.white || undefined)
			: Color(custom.colors.black || undefined);
	const darkGray = custom.utils.darkenColor(custom.colors.gray02, 0.075);

	return css({
		'.ss__grid__title': {
			margin: `0 0 ${custom.spacing.x1}px 0`,
			fontSize: custom.utils.convertPxToEm(14),
			fontWeight: custom.fonts.weight02,
			lineHeight: 1,
		},
		'.ss__grid__options': {
			display: 'flex',
			flexFlow: 'row wrap',
			gap: props?.gapSize ? props.gapSize : custom.spacing.x1,
			alignItems: 'center',
			'&:before, &:after': {
				display: 'none',
			},
			'.ss__grid__option': {
				flex: '0 1 auto',
				minWidth: '1px',
				'&, &.ss__grid__option--selected': {
					border: 0,
				},
				'.ss__grid__option__inner .ss__grid__option__label, .ss__grid__show-more-wrapper': {
					fontSize: custom.utils.convertPxToEm(12),
					lineHeight: 1,
				},
			},
			'.ss__grid__option:not(.ss__grid__show-more-wrapper)': {
				position: 'relative',
				width: `${gridSize}px`,
				maxHeight: `${gridSize}px`,
				aspectRatio: 1,
				color: variables?.colors?.text,
				overflow: 'hidden',
				'&, &:after, *': {
					boxSizing: 'border-box',
				},
				'&:before': {
					display: 'none',
				},
				'&:after': {
					content: '""',
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: 1,
					border: `1px solid ${custom.colors.black}`,
					opacity: 0.15,
				},
				'&.ss__grid__option--dark, &:has(.ss__grid__option__inner--grey)': {
					'.ss__grid__option__inner': {
						'.ss__grid__option__label': {
							color: fontColor.hex(),
						},
					},
				},
				'&.ss__grid__option--selected': {
					'&:after': {
						opacity: 0.3,
					},
					'&:has(.ss__grid__option__inner:not([style]))': {
						backgroundColor: activeColor.hex(),
						'&:after': {
							borderColor: activeColor.hex(),
							opacity: 1,
						},
						'.ss__grid__option__inner': {
							'.ss__grid__option__label': {
								color: fontColor.hex(),
							},
						},
					},
					'&:has(.ss__grid__option__inner .ss__image)': {
						backgroundColor: 'transparent',
						'&:after': {
							borderColor: custom.colors.black,
							opacity: 0.3,
						},
						'.ss__grid__option__inner': {
							'.ss__grid__option__label': {
								color: variables?.colors?.text,
							},
						},
					},
					'.ss__grid__option__inner': {
						'.ss__grid__option__label': {
							fontWeight: custom.fonts.weight01,
						},
					},
				},
				'&.ss__grid__option--disabled, &.ss__grid__option--unavailable': {
					opacity: 1,
					cursor: 'not-allowed',
					pointerEvents: 'none',
					'.ss__grid__option__inner:after': {
						content: '""',
						display: 'block',
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						zIndex: 3,
						margin: 'auto',
						backgroundColor: darkGray.replace('#', ''),
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
						backgroundImage: `url("data:image/svg+xml,%3Csvg style=%27transform: rotate%28-45deg%29%27 xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 56 56%27 preserveAspectRatio=%27xMinYMid%27%3E%3Cpath fill=%27%23${darkGray.replace(
							'#',
							''
						)}%27 d=%27M0 23.297h56v9.406h-56v-9.406z%27 /%3E%3C/svg%3E")`,
					},
				},
				'.ss__grid__option__inner': {
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
					'.ss__grid__option__label': {
						display: 'block',
						position: 'absolute',
						zIndex: 2,
						maxWidth: `calc(100% - ${custom.spacing.x2}px)`,
						maxHeight: `calc(100% - ${custom.spacing.x2}px)`,
						overflow: 'hidden',
					},
				},
			},
			'.ss__grid__show-more-wrapper': {
				maxHeight: 'none',
			},
		},
		'.ss__grid__show-more-wrapper': {
			'&:not(.ss__grid__option)': {
				margin: `${custom.spacing.x2}px 0 0 0`,
			},
			'&, .ss__grid__show-more': {
				cursor: 'pointer',
			},
			'.ss__grid__show-more': {
				fontSize: custom.utils.convertPxToEm(12),
				fontWeight: custom.fonts.weight01,
				lineHeight: 1,
				color: variables?.colors?.primary,
			},
		},
	});
};

// Grid component props
export const grid: ThemeComponent<'grid', GridProps, GridTemplatesLegalProps> = {
	default: {
		grid: {
			themeStyleScript: gridStyleScript,
			gapSize: `${custom.spacing.x1}px`,
			hideLabels: false,
		},
	},
};
