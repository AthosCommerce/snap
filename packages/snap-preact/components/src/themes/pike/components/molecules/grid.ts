import { css } from '@emotion/react';
import type { GridProps, GridTemplatesLegalProps } from '../../../../components/Molecules/Grid';
import { ThemeComponent } from '../../../../providers';
import { custom } from '../../custom';

// static variables
const gridSelector = 'ss__grid__option';
const darkSelector = `&.${gridSelector}--dark, &:has(.${gridSelector}__inner--grey), &:has(.${gridSelector}__inner--gray)`;
const imageSelector = '&:has(.ss__image)';
const urlSelector = '&[style*="url"]';
const styleSelector = '&[style], &:has(.ss__image)';
const activeColors = custom.utils.activeColors();
const activeColor = activeColors[0];
const fontColor = activeColors[1];

// CSS in JS style script for the Grid component
const gridStyleScript = (props: Partial<GridProps>) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const columns = props?.columns ? props.columns : 4;

	// grid styles
	const gridStyles = css({
		...custom.styles.boxSizing('grid', props?.treePath, props?.name),
		'.ss__grid__title': {
			margin: `0 0 ${custom.spacing.x2}px 0`,
			...custom.styles.headerText(variables?.colors?.secondary, '14px'),
		},
		'.ss__grid__options .ss__grid__option .ss__grid__option__inner .ss__grid__option__label, .ss__grid__show-more-wrapper': {
			fontSize: '12px',
			lineHeight: 1,
		},
		'.ss__grid__options': {
			display: 'flex',
			flexFlow: 'row wrap',
			alignItems: 'center',
			'&:before': {
				display: 'none',
			},
			'.ss__grid__option': {
				minWidth: '1px',
				flex: '0 1 auto',
				'&, &.ss__grid__option--selected': {
					border: 0,
				},
			},
			'.ss__grid__option:not(.ss__grid__show-more-wrapper)': {
				position: 'relative',
				maxWidth: '40px',
				width: `calc((100% - (${props?.gapSize ? props.gapSize : custom.spacing.x1} * ${columns - 1})) / ${columns})`,
				'.ss__grid__option__inner': {
					position: 'relative',
					width: '100%',
					...custom.styles.box(variables?.colors?.text, `${custom.spacing.x1}px`),
					'&, .ss__grid__option__label': {
						overflow: 'hidden',
					},
					'.ss__grid__option__label': {
						maxWidth: '100%',
						maxHeight: '100%',
					},
					[styleSelector]: {
						border: 0,
						backgroundColor: 'transparent',
						'&:before, &:after': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							...custom.styles.borderRadius(),
						},
						'&:before': {
							border: `3px solid ${custom.colors.white}`,
							margin: '1px',
							opacity: 0,
						},
						'&:after': {
							border: `1px solid ${custom.colors.black}`,
							opacity: 0.15,
						},
						'.ss__grid__option__label': {
							...custom.styles.srOnly(),
						},
					},
					[`${urlSelector}, ${imageSelector}`]: {
						'&:before': {
							margin: 0,
							borderWidth: '4px',
						},
					},
					[urlSelector]: {
						backgroundRepeat: 'no-repeat !important',
						backgroundSize: 'cover !important',
						backgroundPosition: 'center !important',
					},
					[imageSelector]: {
						'&:before, &:after': {
							zIndex: 3,
						},
						'.ss__image, .ss__grid__option__label': {
							position: 'absolute',
						},
						'.ss__image': {
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							zIndex: 1,
							img: {
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								objectPosition: 'center center',
							},
						},
						'.ss__grid__option__label': {
							zIndex: 2,
						},
					},
				},
				[darkSelector]: {
					'.ss__grid__option__inner': {
						color: fontColor,
					},
				},
				'&.ss__grid__option--disabled, &.ss__grid__option--unavailable': {
					opacity: 1,
					'&, &:before, &:after, *': {
						pointerEvents: 'unset',
						cursor: 'not-allowed !important',
					},
					'&:before': {
						maxWidth: 'calc(100% - 4px)',
						top: 0,
						bottom: 0,
						zIndex: 3,
						margin: 'auto 0',
						borderTop: `2px solid ${custom.colors.white}`,
						outlineColor: custom.colors.gray02,
						...custom.styles.borderRadius(3),
					},
					'.ss__grid__option__inner': {
						opacity: 0.65,
					},
				},
				'&.ss__grid__option--selected': {
					'.ss__grid__option__inner': {
						borderColor: activeColor,
						backgroundColor: activeColor,
						color: fontColor,
						[styleSelector]: {
							border: 0,
							backgroundColor: 'transparent',
							color: variables?.colors?.text,
							'&:before': {
								opacity: 1,
							},
							'&:after': {
								opacity: 0.3,
							},
						},
						'.ss__grid__option__label': {
							fontWeight: custom.fonts.weight01,
						},
					},
					[darkSelector]: {
						'.ss__grid__option__inner': {
							color: fontColor,
						},
					},
				},
			},
			'.ss__grid__show-more-wrapper': {
				'.ss__grid__show-more, .ss__grid__show-less': {
					paddingLeft: `${custom.spacing.x1}px`,
				},
			},
		},
		'.ss__grid__show-more-wrapper': {
			'&:not(.ss__grid__option)': {
				margin: `${custom.spacing.x1}px 0 0 0`,
				'.ss__grid__show-more, .ss__grid__show-less': {
					lineHeight: 1.5,
				},
			},
			'&, .ss__grid__show-more': {
				cursor: 'pointer',
			},
			'.ss__grid__show-more, .ss__grid__show-less': {
				...custom.styles.activeText(variables?.colors?.primary),
			},
		},
	});

	return gridStyles;
};

// Grid component props
export const grid: ThemeComponent<'grid', GridProps, GridTemplatesLegalProps> = {
	default: {
		grid: {
			themeStyleScript: gridStyleScript,
			columns: 4,
			gapSize: `${custom.spacing.x1}px`,
			hideLabels: false,
		},
	},
};
