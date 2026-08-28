import { h } from 'preact';
import { useEffect } from 'preact/hooks';
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
import type { Product, VariantSelection } from '@athoscommerce/snap-store-mobx';

const defaultStyles: StyleScript<ChatProductQueryMessageProps> = ({ primaryColor, primaryColorText, theme }) => {
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

		'.ss__chat-product-query-message__header__back.ss__button': {
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
		'.ss__quickview__content > .ss__quickview-layout__row': {
			padding: '0 1em',
		},

		// Header banner: product image beside the name/price/actions on the primary color.
		// The column flex rules out-rank QuickviewLayout's own (viewport-based) column sizing so
		// the header keeps its side-by-side arrangement at every panel width.
		'.ss__quickview__content > .ss__quickview-layout__row:first-of-type': {
			background: colorPrimary,
			color: colorPrimaryText,
			padding: '1em',
			gap: '1em',
			flexWrap: 'nowrap',

			'.ss__quickview-layout__column.ss__quickview-layout__column--c1': {
				flex: '0 0 25%',
				maxWidth: '25%',
			},
			'.ss__quickview-layout__column.ss__quickview-layout__column--c2': {
				flex: '1 1 auto',
				maxWidth: '100%',
				gap: '0.5em',
				justifyContent: 'space-evenly',

				'.ss__quickview-layout__row': {
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

			// pin the backgrounds so the Chat organism's generic `.ss__button:hover`
			// lightening rule (higher specificity) doesn't recolor the action buttons
			'.ss__button': {
				flexDirection: 'row-reverse', // icon renders after the label — reverse to place it left
				borderRadius: '0.5em',
				padding: '0.4em 0.75em',
				fontWeight: 'bold',
				border: 'none',
				whiteSpace: 'nowrap',
				cursor: 'pointer',
				fontSize: '0.8em',
				justifyContent: 'center',
				textAlign: 'center',

				'.ss__button__content': {
					width: 'auto',
				},
			},
			'.ss__quickview__add-to-cart.ss__button': {
				background: colorCta,
				color: '#000',

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

				svg: {
					fill: '#fff',
					stroke: '#fff',
				},
				'&:not(.ss__button--disabled):hover': {
					background: '#000',
				},
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
				border: `1px solid ${colorBorder}`,
				borderRadius: '0.5em',
				padding: '0.4em 0.75em',
				cursor: 'pointer',

				'&.ss__list__option--selected': {
					borderColor: colorPrimary,
					borderWidth: '2px',
					padding: 'calc(0.4em - 1px) calc(0.75em - 1px)',
					fontWeight: 'bold',
				},
				'&.ss__list__option--unavailable': {
					opacity: 0.4,
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

export const ChatProductQueryMessage = observer((properties: ChatProductQueryMessageProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatProductQueryMessageProps> = {
		treePath: globalTreePath,
		hideBadge: true,
		// mirrors the legacy chat product panel: a header banner (image beside name/price and the
		// add-to-cart/similar/discuss actions) followed by variants, the attribute table, and the
		// description — the banner styling lives in defaultStyles above
		layout: [['c1', 'c2'], ['variantSelections'], ['productDetailTable'], ['productDetail.mappings.core.description'], ['button.more-info']],
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
	};

	const props = mergeProps('chatProductQueryMessage', globalTheme, defaultProps, properties);

	const {
		chatItem,
		controller,
		disableStyles,
		className,
		internalClassName,
		treePath,
		layout,
		hideBadge,
		column1,
		column2,
		column3,
		column4,
		recommendation,
	} = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('chatProductQueryMessage', props);

	const styling = mergeStyles<ChatProductQueryMessageProps>(props, defaultStyles);

	const { messageType, sourceProduct } = chatItem;

	const quickviewManager = controller?.quickviewManager;
	const product = quickviewManager?.store?.product as Product | undefined;

	const chatMessages = controller?.store.currentChat?.chat || [];
	const sourceMessage = chatItem.sourceMessageId ? chatMessages.find((m) => m.id === chatItem.sourceMessageId) : null;
	const cameFromInspiration = sourceMessage?.messageType === 'inspirationResult';
	const cameFromComparison = sourceMessage?.messageType === 'productComparison';

	const variants = product?.variants;
	const selections = variants?.selections || [];

	// Ensure every selection has an initial value picked. Without this, entering
	// the quickview from inspiration leaves all selections empty, and the first
	// variant click can't narrow `refineSelections` to a single variant — so the
	// active variant (and hero image) doesn't update until a second selection is
	// made. Prefer the variant whose own id (uid) matches the clicked result's id
	// so the panel reflects exactly the variant the user clicked; fall back to the
	// first available value.
	useEffect(() => {
		if (messageType !== 'productQuery' || !product) return;

		const sourceId = sourceProduct?.id;
		const matchedVariant = sourceId != null ? variants?.data?.find((variant) => variant.mappings?.core?.uid === sourceId) : undefined;

		selections.forEach((selection: VariantSelection) => {
			if (selection.selected) return;
			const matchedValue = matchedVariant?.options?.[selection.field]?.value;
			const target =
				(matchedValue != null && selection.values.find((v) => v.available && v.value == matchedValue)) ||
				selection.values.find((v) => v.available) ||
				selection.values[0];
			if (target) {
				selection.select(target.value);
			}
		});
	}, [selections]);

	// after all hooks — an override that resolves or fails mid-lifecycle must not
	// change the hook count between renders
	if (!shouldRenderDefault) {
		return overrideElement;
	}

	//initialize lang
	const defaultLang: Partial<ChatProductQueryMessageLang> = {
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
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});

	if (messageType !== 'productQuery') {
		controller?.log?.warn('ChatProductQueryMessage received message with unsupported type:', messageType, 'Expected type: productQuery');
		return null;
	}

	if (!quickviewManager) {
		controller?.log?.warn(
			`ChatProductQueryMessage requires the controller's quickview manager — chat controllers receive one from Snap whenever they are configured`
		);
		return null;
	}

	const subProps: ChatProductQueryMessageSubProps = {
		button: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		quickviewLayout: {
			// default props
			...defined({ hideBadge, column1, column2, column3, column4, recommendation, lang }),
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const handleBack = () => {
		controller?.store.currentChat?.popProductQueryMessage(chatItem.sourceMessageId);
		controller?.closeProductQuickview();
	};

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-product-query-message', className, internalClassName)} {...styling}>
				{(cameFromInspiration || cameFromComparison) && (
					<Button
						{...subProps.button}
						internalClassName={classnames('ss__chat-product-query-message__header__back')}
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

interface ChatProductQueryMessageSubProps {
	button: Partial<ButtonProps>;
	quickviewLayout: Partial<QuickviewLayoutProps>;
}

export type ChatProductQueryMessageProps = {
	chatItem: ChatProductQueryMessageItem;
	controller?: ChatController;
	lang?: Partial<ChatProductQueryMessageLang>;
	// `layout` is optional here (unlike on QuickviewLayout) because the container supplies a default
	layout?: QuickviewLayoutTemplatesLegalProps['layout'];
} & ChatProductQueryMessageTemplatesLegalProps &
	Omit<QuickviewLayoutTemplatesLegalProps, 'layout'> &
	ComponentProps<ChatProductQueryMessageProps>;

export type ChatProductQueryMessageItem = {
	id: string;
	messageType: 'productQuery';
	sourceProduct: Product;
	sourceMessageId?: string;
};

export type ChatProductQueryMessageTemplatesLegalProps = {
	primaryColor?: string;
	primaryColorText?: string;
};

export interface ChatProductQueryMessageLang extends Partial<QuickviewLayoutLang> {
	backToComparisonButton?: Lang<never>;
	backToInspirationButton?: Lang<never>;
}
