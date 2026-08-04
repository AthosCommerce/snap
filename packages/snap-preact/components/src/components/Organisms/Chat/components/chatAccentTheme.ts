import { Theme } from '../../../../providers';
import { Colour } from '../../../../utilities';

export type ChatAccentColors = {
	primaryAccentColorBg: string;
	primaryAccentColorFg: string;
	secondaryAccentColorBg: string;
	secondaryAccentColorFg: string;
};

/**
 * Accent styling for buttons living inside child components (ChatResult's cart /
 * inquire icons and ChatProductQueryMessage's action buttons) — injected through
 * the theme so each child applies it via its own style pipeline instead of the
 * organism reaching in with `!important` overrides.
 */
export const chatAccentThemeComponents = ({
	primaryAccentColorBg,
	primaryAccentColorFg,
	secondaryAccentColorBg,
	secondaryAccentColorFg,
}: ChatAccentColors): Theme['components'] => {
	return {
		chatResult: {
			style: {
				'.ss__chat-result__image__icons': {
					'.ss__button.ss__chat-result__image__icons__icon--cart': {
						backgroundColor: primaryAccentColorBg,
						svg: {
							fill: primaryAccentColorFg,
							stroke: primaryAccentColorFg,
						},
					},
					'.ss__button.ss__chat-result__image__icons__icon--inquire': {
						backgroundColor: secondaryAccentColorBg,
						svg: {
							fill: secondaryAccentColorFg,
							stroke: secondaryAccentColorFg,
						},
					},
				},
			},
		},
		chatProductQueryMessage: {
			style: {
				'.ss__chat-product-query-message__header__product__actions': {
					'.ss__chat-product-query-message__header__product__actions__add-to-cart .ss__button': {
						background: primaryAccentColorBg,
						color: primaryAccentColorFg,
						svg: {
							fill: primaryAccentColorFg,
							stroke: primaryAccentColorFg,
						},
						'&:not(.ss__button--disabled):hover': {
							background: new Colour(primaryAccentColorBg).darkenHex(),
						},
					},
					'.ss__chat-product-query-message__header__product__actions__show-similar .ss__button, .ss__chat-product-query-message__header__product__actions__discuss-product .ss__button':
						{
							background: secondaryAccentColorBg,
							color: secondaryAccentColorFg,
							border: `1px solid ${secondaryAccentColorFg}`,
							'&:not(.ss__button--disabled):hover': {
								background: new Colour(secondaryAccentColorBg).darkenHex(),
							},
						},
				},
			},
		},
	} as Theme['components'];
};
