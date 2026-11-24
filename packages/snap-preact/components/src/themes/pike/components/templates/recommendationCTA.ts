import { css } from '@emotion/react';
import { custom } from '../../custom';
import { Theme } from '../../../../providers';

// CTA props
type CTAProps = {
	theme?: Theme;
};

// static variables
const lightGray = custom.colors.gray03;

// CSS in JS style script for the Recommendation CTA component
export const recommendationCTAStyleScript = (props: CTAProps, handle: string, spacing?: string) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const variables = props?.theme?.variables;
	const brandColors = custom.utils.activeColors(variables?.colors?.primary || custom.colors.primary);
	const recommendationHandle = `.ss__recommendation-${handle}__wrapper`;

	// shared styles
	const sharedStyles = css({
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		gap: `${custom.spacing.x2}px`,
		...custom.styles.box(undefined, spacing ? spacing : `${custom.spacing.x2}px`),
		// a container, not a control - decorative border
		borderColor: custom.colors.gray02,
		'& > *': {
			flex: '1 1 100%',
			minWidth: '1px',
		},
		[`${recommendationHandle}__cta__subtotal, ${recommendationHandle}__cta__button`]: {
			position: 'relative',
			zIndex: 2,
		},
		[`${recommendationHandle}__cta__subtotal`]: {
			'& > *': {
				margin: `0 0 ${custom.spacing.x2}px 0`,
				'&:last-child': {
					marginBottom: 0,
				},
			},
			[`${recommendationHandle}__cta__subtotal__icon__wrapper`]: {
				lineHeight: 1,
				// the "plus" joining the bundle is a structural icon
				'.ss__icon': {
					...custom.styles.indicator(variables?.colors?.secondary),
				},
			},
			[`${recommendationHandle}__cta__subtotal__title`]: {
				display: 'block',
				...custom.styles.headerText(variables?.colors?.secondary, '16px'),
			},
			[`${recommendationHandle}__cta__subtotal__prices`]: {
				label: {
					margin: 0,
					padding: 0,
					'& ~ label': {
						paddingLeft: `${custom.spacing.x1}px`,
					},
				},
				[`${recommendationHandle}__cta__subtotal__strike`]: {
					'&, span': {
						color: lightGray,
					},
					// a discounted subtotal is a sale price - a highlight, like result sale prices
					[`& ~ ${recommendationHandle}__cta__subtotal__price`]: {
						'&, span': {
							color: variables?.colors?.accent,
						},
					},
				},
				[`${recommendationHandle}__cta__subtotal__price`]: {
					'&, span': {
						fontSize: '16px',
						fontWeight: custom.fonts.weight01,
					},
				},
			},
		},
		// add to cart is the bundle's main action - filled with the brand color, like Apply and More info
		[`${recommendationHandle}__cta__button`]: {
			'&, &:hover, &:not(.ss__button--disabled):hover': {
				backgroundColor: brandColors[0],
				borderColor: brandColors[0],
				color: brandColors[1],
			},
			flexWrap: 'nowrap',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
	});

	return sharedStyles;
};
