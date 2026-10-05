import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { Colour, defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Lang, useCustomComponentOverride } from '../../../hooks';
import type { ChatController } from '@athoscommerce/snap-controller';
import { Button, ButtonProps } from '../../Atoms/Button';
import { QuickviewLayout, QuickviewLayoutProps, QuickviewLayoutLang, QuickviewLayoutTemplatesLegalProps } from '../../Organisms/QuickviewLayout';
import type { Product } from '@athoscommerce/snap-store-mobx';

const defaultStyles: StyleScript<ChatQuickviewProps> = ({ primaryColor, primaryColorText, theme }) => {
	const colorPrimary = primaryColor || Colour.concrete(theme?.variables?.colors?.primary) || '#253B80';
	const colorPrimaryText = primaryColorText || '#fff';
	const colorCta = Colour.concrete(theme?.variables?.colors?.accent) || '#feeeae';
	// neutral colors — no theme variable equivalents
	const colorText = '#374151';
	const colorBorder = '#E5E7EB';

	return css({
		display: 'flex',
		flexDirection: 'column',
		paddingBottom: '1em',

		'.ss__chat-quickview__header__back.ss__button': {
			// Overlay banner pinned to the top of the secondary chat's scrollable messages
			// container so it stays visible while the product details scroll underneath.
			// Styling mirrors `.ss__chat__session-feedback` (dark primary bg, primary text,
			// 8px/15px padding, 10px gap, 14px font).
			position: 'sticky',
			top: 0,
			zIndex: 2,
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'flex-end',
			alignItems: 'center',
			gap: '10px',
			padding: '8px 15px',
			background: colorPrimary,
			color: colorPrimaryText,
			fontSize: '14px',
			cursor: 'pointer',
			border: 'none',
			font: 'inherit',
			width: 'auto',
			'.ss__button__content': {
				width: 'auto',
			},
			// pin the background so the Chat organism's generic `.ss__button:hover`
			// lightening rule (higher specificity) doesn't recolor the banner
			'&:not(.ss__button--disabled):hover': {
				background: colorPrimary,
			},
			'&:focus-visible': {
				outline: `2px solid ${colorPrimaryText}`,
				outlineOffset: '-2px',
			},
			svg: {
				fill: colorPrimaryText,
				stroke: colorPrimaryText,
			},
		},

		// Content sizing for the chat's secondary window — each rendering surface owns its own
		// `.ss__quickview__content` sizing (QuickviewLayout sets none). The content spans the
		// panel with no gutter of its own so the header banner can bleed to the panel edges;
		// every other section row gets the standard gutter below.
		'.ss__quickview__content': {
			padding: 0,
			minWidth: 'auto',
			maxWidth: '100%',
			display: 'flex',
			flexDirection: 'column',
			gap: '1em',
		},
		'.ss__quickview__content > .ss__quickview__row': {
			padding: '0 1em',
		},

		// Default layout only: the component fills the chat's secondary window, the header banner row
		// stays put, and the remaining rows (grouped in column 3) scroll on their own. A custom
		// `layout` opts out since its rows are not grouped this way.
		'&.ss__chat-quickview--default-layout': {
			height: '100%',
			minHeight: 0,
			boxSizing: 'border-box',

			'.ss__quickview, .ss__quickview__content': {
				flex: '1 1 auto',
				minHeight: 0,
				display: 'flex',
				flexDirection: 'column',
			},
			'.ss__quickview__content > .ss__quickview__row:first-of-type': {
				flex: '0 0 auto',
			},
			'.ss__quickview__content > .ss__quickview__row:first-of-type + .ss__quickview__row': {
				flex: '1 1 auto',
				minHeight: 0,
				overflowY: 'auto',
				padding: 0,
			},
			'.ss__quickview__column.ss__quickview__column--c3': {
				padding: '0 1em',
				gap: '1em',
			},
		},

		// Header banner: product image beside the name/price/actions on the primary color.
		// The column flex rules out-rank QuickviewLayout's own (viewport-based) column sizing so
		// the header keeps its side-by-side arrangement at every panel width.
		'.ss__quickview__content > .ss__quickview__row:first-of-type': {
			background: colorPrimary,
			color: colorPrimaryText,
			padding: '1em',
			gap: '1em',
			flexWrap: 'nowrap',

			'.ss__quickview__column.ss__quickview__column--c1': {
				flex: '0 0 25%',
				maxWidth: '25%',
			},
			'.ss__quickview__column.ss__quickview__column--c2': {
				flex: '1 1 auto',
				maxWidth: '100%',
				gap: '0.5em',
				justifyContent: 'space-evenly',

				'.ss__quickview__row': {
					padding: 0,
					gap: '0.5em',
				},
			},

			// the header thumbnail is a plain image — hide the slideshow chrome
			'.ss__quickview__slideshow': {
				background: '#fff',
				borderRadius: '0.33em',
				overflow: 'hidden',

				'.ss__slideshow__navigation, .ss__slideshow__pagination': {
					display: 'none',
				},
			},

			'.ss__quickview__title': {
				fontWeight: 'bold',
				fontSize: '1.2em',
				padding: 0,
			},
			'.ss__quickview__price': {
				fontWeight: 'bold',
				fontSize: '1.1em',

				'.ss__price': {
					color: colorPrimaryText,
				},
			},

			'.ss__button': {
				flexDirection: 'row-reverse', // icon renders after the label — reverse to place it left
				borderRadius: '0.5em',
				padding: '0.4em 0.75em',
				fontWeight: 'bold',
				whiteSpace: 'nowrap',
				cursor: 'pointer',
				fontSize: '0.8em',
				justifyContent: 'center',
				textAlign: 'center',

				'.ss__button__content': {
					width: 'auto',
				},
			},
		},

		// Action button colors. Kept at the same specificity as the Chat organism's accent theme
		// (chatAccentTheme.ts), which is applied after these and wins. The hover rules pin the
		// backgrounds so the Chat organism's generic `.ss__button:hover` lightening rule doesn't
		// recolor them.
		'.ss__quickview__add-to-cart.ss__button': {
			background: colorCta,
			color: '#000',
			border: 'none',

			svg: {
				fill: '#000',
				stroke: '#000',
			},
			'&:not(.ss__button--disabled):hover': {
				background: colorCta,
				filter: 'brightness(0.97)',
			},
		},
		'.ss__quickview__similar.ss__button, .ss__quickview__discuss.ss__button': {
			background: '#000',
			color: '#fff',
			border: 'none',

			svg: {
				fill: '#fff',
				stroke: '#fff',
			},
			'&:not(.ss__button--disabled):hover': {
				background: '#000',
			},
		},

		'.ss__quickview__content .ss__quickview__variant-title': {
			fontWeight: 600,
			fontSize: '0.9em',
			color: colorText,
			textTransform: 'uppercase',
			marginBottom: '0.5em',
		},

		// untyped selections (e.g. size) render as a row of selectable tiles
		'.ss__variant-selection--list': {
			'.ss__list__title': {
				display: 'none', // the variant-title above already labels the selection
			},
			'.ss__list__options': {
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				gap: '0.5em',
				margin: 0,
				padding: 0,
			},
			'.ss__list__option': {
				flex: '1 1 auto',
				justifyContent: 'center',
				textAlign: 'center',
				border: '2px solid transparent',
				borderRadius: '0.5em',
				padding: '0.4em 0.75em',
				color: colorText,
				cursor: 'pointer',
				transition: 'border-color 0.15s ease',

				'.ss__list__option__label': {
					cursor: 'pointer',
				},
				'&:hover': {
					borderColor: colorPrimary,
				},
				'&.ss__list__option--selected': {
					borderColor: colorPrimary,
					borderWidth: '3px',
					padding: '0.3em 0.65em',
					fontWeight: 'normal',
				},
				'&.ss__list__option--unavailable': {
					opacity: 0.4,
				},
			},
		},

		// a selection with a single value offers no choice — the legacy panel left these out
		'.ss__quickview__variant:has(.ss__list__option:only-child), .ss__quickview__variant:has(.ss__slideshow__slide:only-child)': {
			display: 'none',
		},

		// swatch selections (e.g. colour) mirror the legacy chat panel: the Swatches slideshow is
		// flattened into a wrapping row of tiles, each a thumbnail with its value label
		// beneath. Values without a thumbnail fall back to the legacy text-only pill.
		'.ss__variant-selection--swatches .ss__swatches': {
			'.ss__slideshow': {
				overflow: 'visible',

				'.ss__slideshow__navigation, .ss__slideshow__pagination': {
					display: 'none',
				},
				'.ss__slideshow__container': {
					width: '100%',
					margin: 0,
				},
				'.ss__slideshow__track': {
					flexWrap: 'wrap',
					justifyContent: 'flex-start',
					gap: '0.5em',
					width: '100%',
					transform: 'none !important',
					transition: 'none',
				},
				'.ss__slideshow__slide': {
					display: 'flex',
					flex: '1 1 auto',
					width: 'auto',
					minWidth: 0,
					maxWidth: 'none',
					margin: 0,
				},
			},

			'.ss__swatches__slideshow__swatch': {
				boxSizing: 'border-box',
				width: '100%',
				aspectRatio: 'auto',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'flex-start',
				padding: '0.25em',
				paddingBottom: 'calc(0.25em + 1em)', // reserve room for the label positioned below the thumbnail
				border: '2px solid transparent',
				borderRadius: '0.5em',
				background: 'transparent',
				color: colorText,
				transition: 'border-color 0.15s ease',

				'&:hover': {
					borderColor: colorPrimary,
				},
				'&:focus-visible': {
					outline: `2px solid ${colorPrimary}`,
					outlineOffset: '2px',
				},
				'&.ss__swatches__slideshow__swatch--selected': {
					borderColor: colorPrimary,
					borderWidth: '3px',
					padding: '0.15em',
					paddingBottom: 'calc(0.15em + 1em)',
				},
				'&.ss__swatches__slideshow__swatch--disabled, &.ss__swatches__slideshow__swatch--unavailable': {
					opacity: 0.4,

					'&:before': {
						display: 'none', // the faded tile replaces the strike-through
					},
				},
				'&.ss__swatches__slideshow__swatch--unavailable': {
					cursor: 'not-allowed',
				},
				'&.ss__swatches__slideshow__swatch--dark': {
					color: colorText,
				},

				'.ss__swatches__slideshow__swatch__inner': {
					position: 'relative',
					flex: '0 0 auto',
					width: '48px',
					height: '48px',

					'.ss__image': {
						width: '100%',
						height: '100%',

						img: {
							width: '100%',
							height: '100%',
							objectFit: 'contain',
						},
					},
				},
				'.ss__swatches__slideshow__swatch__value': {
					position: 'absolute',
					top: '100%',
					left: '50%',
					transform: 'translateX(-50%)',
					marginTop: '0.25em',
					fontSize: '0.75em',
					lineHeight: 1,
					color: colorText,
					textAlign: 'center',
					maxWidth: '60px',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
				},

				// text-only tile: no thumbnail to show, so the colour chip is dropped and the label
				// itself becomes the pill
				'&:not(:has(.ss__image))': {
					padding: '0.4em 0.75em',
					alignSelf: 'center',

					'&.ss__swatches__slideshow__swatch--selected': {
						padding: '0.3em 0.65em',
					},
					'.ss__swatches__slideshow__swatch__inner': {
						width: 'auto',
						height: 'auto',
						background: 'none !important',
					},
					'.ss__swatches__slideshow__swatch__value': {
						position: 'static',
						transform: 'none',
						margin: 0,
						fontSize: '1em',
						lineHeight: 'inherit',
						maxWidth: 'none',
					},
				},
			},
		},

		'.ss__quickview__content .ss__quickview__attributes': {
			'& tr': {
				borderBottom: `1px solid ${colorBorder}`,
				transition: 'background-color 0.15s ease',
			},
			'& tbody tr:hover': {
				background: '#F3F4F6',
			},
			'& th': {
				color: '#6B7280',
				letterSpacing: '0.03em',
			},
			'& td': {
				textAlign: 'right',
				color: '#111827',
				fontWeight: 500,
			},
		},

		'.ss__quickview__content .ss__quickview__description': {
			fontSize: '0.9em',
			color: colorText,
			lineHeight: 1.5,
		},

		// discreet link to the product page below the details
		'.ss__quickview__go-to-product.ss__button': {
			background: 'transparent',
			border: 'none',
			padding: 0,
			color: colorPrimary,
			fontSize: '0.9em',
			cursor: 'pointer',

			'&:not(.ss__button--disabled):hover': {
				background: 'transparent',
				textDecoration: 'underline',
			},
		},
	});
};

export const ChatQuickview = observer((properties: ChatQuickviewProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatQuickviewProps> = {
		treePath: globalTreePath,
		hideBadge: true,
		// legacy chat presentation: non-swatch selections render as a row of selectable tiles
		variantDropdownType: 'list',
		// mirrors the legacy chat product panel: a header banner (image beside name/price and the
		// add-to-cart/similar/discuss actions) followed by variants, the attribute table, the
		// description and a link to the product page — the banner styling lives in defaultStyles
		// above. The detail rows are grouped in column 3 so they can scroll independently of the
		// banner (see defaultStyles).
		layout: [['c1', 'c2'], ['c3']],
		column1: {
			layout: ['slideshow'],
			width: '25%',
		},
		column2: {
			layout: [
				['productDetail.mappings.core.name'],
				['productDetail.mappings.core.price'],
				['button.add-to-cart', 'button.similar', 'button.discuss'],
			],
			width: 'auto',
		},
		column3: {
			layout: [['variantSelections'], ['productDetailTable'], ['productDetail.mappings.core.description'], ['button.more-info']],
			width: '100%',
		},
	};

	const props = mergeProps('chatQuickview', globalTheme, defaultProps, properties);

	const {
		chatItem,
		controller,
		disableStyles,
		className,
		internalClassName,
		treePath,
		layout,
		hideBadge,
		variantDropdownType,
		column1,
		column2,
		column3,
		column4,
		recommendation,
	} = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('chatQuickview', props);

	// the fixed-header/scrolling-details styling only applies to this component's own default layout
	const isDefaultLayout = layout === defaultProps.layout;

	const styling = mergeStyles<ChatQuickviewProps>(props, defaultStyles);

	const { messageType } = chatItem;

	const quickviewManager = controller?.quickviewManager;

	const chatMessages = controller?.store.currentChat?.chat || [];
	const sourceMessage = chatItem.sourceMessageId ? chatMessages.find((m) => m.id === chatItem.sourceMessageId) : null;
	const cameFromInspiration = sourceMessage?.messageType === 'inspirationResult';
	const cameFromComparison = sourceMessage?.messageType === 'productComparison';

	// after all hooks — an override that resolves or fails mid-lifecycle must not
	// change the hook count between renders
	if (!shouldRenderDefault) {
		return overrideElement;
	}

	//initialize lang
	const defaultLang: Partial<ChatQuickviewLang> = {
		backToComparisonButton: {
			value: 'Back to comparison',
			attributes: {
				'aria-label': 'Back to comparison',
			},
		},
		backToInspirationButton: {
			value: 'Back to inspiration',
			attributes: {
				'aria-label': 'Back to inspiration',
			},
		},
		variantTitle: {
			value: ({ selection }) => `${selection.label || selection.field} (${selection.values.length})`,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});

	if (messageType !== 'productQuery') {
		controller?.log?.warn('ChatQuickview received message with unsupported type:', messageType, 'Expected type: productQuery');
		return null;
	}

	if (!quickviewManager) {
		controller?.log?.warn(
			`ChatQuickview requires the controller's quickview manager — chat controllers receive one from Snap whenever they are configured`
		);
		return null;
	}

	// legacy chat presentation, injected through the theme so the children apply it via their own
	// prop pipeline (the incoming theme wins on conflict): the action buttons carry icons, and swatch
	// tiles show their value label beneath (the Swatches default hides labels).
	const themePresentationProps: Theme = {
		components: {
			'button.add-to-cart': {
				icon: 'cart',
			},
			'button.similar': {
				icon: 'search-thin',
			},
			'button.discuss': {
				icon: 'chat',
			},
			swatches: {
				hideLabels: false,
			},
		},
	};
	props.theme = deepmerge.all([themePresentationProps, props?.theme || {}], { arrayMerge: (destinationArray, sourceArray) => sourceArray });

	const subProps: ChatQuickviewSubProps = {
		button: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		quickviewLayout: {
			// default props
			...defined({ hideBadge, variantDropdownType, column1, column2, column3, column4, recommendation, lang }),
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
	};

	const handleBack = () => {
		controller?.store.currentChat?.popProductQueryMessage(chatItem.sourceMessageId);
		controller?.closeProductQuickview();
	};

	return (
		<CacheProvider>
			<div
				className={classnames('ss__chat-quickview', { 'ss__chat-quickview--default-layout': isDefaultLayout }, className, internalClassName)}
				{...styling}
			>
				{(cameFromInspiration || cameFromComparison) && (
					<Button
						{...subProps.button}
						internalClassName={classnames('ss__chat-quickview__header__back')}
						icon={{ icon: 'angle-left', size: '14px' }}
						onClick={handleBack}
						lang={{ button: cameFromComparison ? lang.backToComparisonButton : lang.backToInspirationButton }}
					/>
				)}
				{/* the chat secondary window owns dismissal — the layout renders inline (no dialog
				    semantics, no close button) from the chat controller's own quickview store */}
				<QuickviewLayout inline quickviewManager={quickviewManager} {...subProps.quickviewLayout} layout={layout!} />
			</div>
		</CacheProvider>
	);
});

interface ChatQuickviewSubProps {
	button: Partial<ButtonProps>;
	quickviewLayout: Partial<QuickviewLayoutProps>;
}

export type ChatQuickviewProps = {
	chatItem: ChatQuickviewItem;
	controller?: ChatController;
	lang?: Partial<ChatQuickviewLang>;
	// `layout` is optional here (unlike on QuickviewLayout) because the container supplies a default
	layout?: QuickviewLayoutTemplatesLegalProps['layout'];
} & ChatQuickviewTemplatesLegalProps &
	Omit<QuickviewLayoutTemplatesLegalProps, 'layout'> &
	ComponentProps<ChatQuickviewProps>;

export type ChatQuickviewItem = {
	id: string;
	messageType: 'productQuery';
	sourceProduct: Product;
	sourceMessageId?: string;
};

export type ChatQuickviewTemplatesLegalProps = {
	primaryColor?: string;
	primaryColorText?: string;
};

export interface ChatQuickviewLang extends Partial<QuickviewLayoutLang> {
	backToComparisonButton?: Lang<never>;
	backToInspirationButton?: Lang<never>;
}
