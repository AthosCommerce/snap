import { css } from '@emotion/react';
import { custom } from '../../custom';
import { Theme } from '../../../../providers';

type QuickviewSharedProps = {
	theme?: Theme;
};

// static variables
const closeIcon = custom.sizes.icon14;
const closeInset = custom.spacing.x2; // hit area padding around the close icon
const closeSize = closeIcon + closeInset * 2;
const contentPadding = custom.spacing.x4;
// the close icon sits flush with the content's top/right padding edges
const closeOffset = contentPadding - closeInset;
// single column layouts reserve a header strip for the close icon: padding / icon / padding
export const quickviewHeaderHeight = contentPadding + closeIcon + contentPadding;
export const quickviewCloseClearance = closeIcon + custom.spacing.x2;
// title line box (20px * 1.2) - a close icon sharing the title row centers on it
const titleSize = 20;
const titleLine = titleSize * 1.2;
export const quickviewCloseTitleOffset = contentPadding + (titleLine - closeIcon) / 2 - closeInset;

// CSS in JS style script for the quickview layout inside the QuickviewModal and QuickviewSlideout templates
// (QuickviewLayout itself is a building block and is not themed directly)
export const quickviewSharedStyleScript = (props: QuickviewSharedProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// nested under `.ss__quickview` to out-specify the layout's own (later inserted) rules
	return css({
		'.ss__quickview': {
			'.ss__quickview__content': {
				padding: `${quickviewHeaderHeight}px ${contentPadding}px ${contentPadding}px`,
				...custom.styles.baseText(),
				// single column layouts (slideout) stack module rows directly in the content
				display: 'flex',
				flexDirection: 'column',
				gap: `${custom.spacing.x4}px`,
			},
			'.ss__quickview__row': {
				gap: `${custom.spacing.x6}px`,
			},
			'.ss__quickview__column': {
				gap: `${custom.spacing.x4}px`,
			},
			'.ss__quickview__title': {
				margin: 0,
				paddingRight: 0,
				...custom.styles.headerText(variables?.colors?.secondary, `${titleSize}px`),
				lineHeight: titleLine / titleSize,
			},
			'.ss__quickview__variants': {
				gap: `${custom.spacing.x4}px`,
			},
			'.ss__quickview__variant': {
				marginBottom: 0,
			},
			'.ss__quickview__variant-title': {
				margin: `0 0 ${custom.spacing.x2}px 0`,
				...custom.styles.headerText(variables?.colors?.secondary, '14px'),
				textTransform: 'capitalize',
			},
			'.ss__quickview__description': {
				lineHeight: 1.5,
				'p:first-of-type': {
					marginTop: 0,
				},
				'p:last-of-type': {
					marginBottom: 0,
				},
			},
			// close is an icon button on the panel - no fill
			'.ss__button.ss__quickview__close': {
				top: `${closeOffset}px`,
				right: `${closeOffset}px`,
				width: `${closeSize}px`,
				height: `${closeSize}px`,
				padding: 0,
				justifyContent: 'center',
				color: 'inherit',
				'&, &:hover, &:not(.ss__button--disabled):hover': {
					border: 0,
					backgroundColor: 'transparent',
				},
			},
		},
	});
};
