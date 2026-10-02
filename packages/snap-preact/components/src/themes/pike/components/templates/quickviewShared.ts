import { css } from '@emotion/react';
import { custom } from '../../custom';
import { Theme } from '../../../../providers';

type QuickviewSharedProps = {
	theme?: Theme;
};

// static variables
const closeSize = custom.sizes.height;

// CSS in JS style script for the quickview layout inside the QuickviewModal and QuickviewSlideout templates
// (QuickviewLayout itself is a building block and is not themed directly)
export const quickviewSharedStyleScript = (props: QuickviewSharedProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;

	// nested under `.ss__quickview` to out-specify the layout's own (later inserted) rules
	return css({
		'.ss__quickview': {
			'.ss__quickview__content': {
				padding: `${closeSize + custom.spacing.x2}px ${custom.spacing.x4}px ${custom.spacing.x4}px`,
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
				...custom.styles.headerText(variables?.colors?.secondary, '20px'),
				lineHeight: 1.2,
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
				top: `${custom.spacing.x1}px`,
				right: `${custom.spacing.x1}px`,
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
