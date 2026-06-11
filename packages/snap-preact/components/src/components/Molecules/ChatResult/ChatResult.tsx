import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap, withTracking } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Image, ImageProps } from '../../Atoms/Image';
import { Button, ButtonProps } from '../../Atoms/Button';
import { CalloutBadge, OverlayBadge, Price } from '../../..';
import { useComponent } from '../../../hooks';
import type { ChatController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<ChatResultProps> = () => {
	return css({
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		width: '100%',
		boxSizing: 'border-box',
		border: '1px solid #e5e7eb',
		borderRadius: '1em',
		overflow: 'hidden',

		'.ss__chat-result__image': {
			width: '100%',
			aspectRatio: '1 / 1',
			position: 'relative',
			overflow: 'hidden',
			// fixed-aspect frame: scale the image to fill it and crop overflow so
			// results with different intrinsic image aspect ratios still line up
			// at the same height when displayed side-by-side.
			img: {
				width: '100%',
				height: '100%',
				objectFit: 'cover',
			},
			'.ss__chat-result__image__buttons': {
				position: 'absolute',
				bottom: 0,
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				gap: '0.5em',
				padding: '0.5em',
				boxSizing: 'border-box',

				'.ss__button': {
					padding: '0.25em 0.5em',
					background: 'rgba(255, 255, 255, 0.9)',
					textAlign: 'center',
					justifyContent: 'center',
					borderRadius: '2em',
					boxShadow: 'inset 0 0 1px 0px rgba(0, 0, 0, 0.5)',
					flex: '1 1 0',
					minWidth: 0,
					fontWeight: 'bold',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
				},
			},

			'.ss__chat-result__image__icons': {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				gap: '0.5em',
				padding: '0.5em',
				flex: '0 0 auto',
				alignItems: 'flex-start',
				boxSizing: 'border-box',

				'.ss__button': {
					height: '2.5em',
					width: '2.5em',
					backgroundColor: '#000',
					borderRadius: '50%',
					justifyContent: 'center',
					boxSizing: 'border-box',

					'&.ss__chat-result__image__icons__icon--cart': {
						backgroundColor: '#feeeae',
						svg: {
							fill: '#000',
							stroke: '#000',
						},
					},
					svg: {
						fill: '#fff',
						stroke: '#fff',
					},
				},
			},
		},
		'.ss__chat-result__content': {
			background: '#f9fafb',
			display: 'flex',
			flexDirection: 'column',
			gap: '0.5em',
			flex: '1 1 auto',
			padding: '0.5em 0',

			'.ss__chat-result__content__title--primary': {
				padding: '0 0.5em',
			},
			'.ss__chat-result__content__title--secondary': {
				padding: '0 0.5em',
				color: '#6A7282',
				fontSize: '90%',
			},
			'.ss__chat-result__content__price': {
				padding: '0 0.5em',
				color: '#000',
				fontWeight: 'bold',
				fontSize: '1.2em',
				marginTop: 'auto',
			},
		},
	});
};

export const ChatResult = withTracking(
	observer((properties: ChatResultProps): JSX.Element => {
		const globalTheme: Theme = useTheme();
		const globalTreePath = useTreePath();
		const snap = useSnap();

		const defaultProps: Partial<ChatResultProps> = {
			treePath: globalTreePath,
		};

		const props = mergeProps('chatResult', globalTheme, defaultProps, properties);

		const { controller, result, scrollToBottom, customComponent, trackingRef, disableStyles, className, internalClassName, treePath } = props;

		if (customComponent) {
			const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.result || {}, customComponent);
			if (ComponentOverride) {
				return <ComponentOverride {...props} />;
			}
		}

		const isInComparison = controller.store.currentChat?.comparisons.items.some((item) => item.result?.id === result.id);
		// a result is "configurable" when it ships with selectable variant options
		// (e.g. color/size); those need a selection before they can be added to cart
		const isConfigurable = !!(result as any).variants?.optionConfig && Object.keys((result as any).variants.optionConfig).length > 0;

		const subProps: ChatResultSubProps = {
			button: {
				disableStyles,
				theme: props.theme,
				treePath,
			},
			image: {
				lazy: false,
				onLoad: scrollToBottom,
				disableStyles,
				theme: props.theme,
				treePath,
			},
		};

		const styling = mergeStyles<ChatResultProps>(props, defaultStyles);

		return (
			<CacheProvider>
				<div className={classnames('ss__chat-result', className, internalClassName)} ref={trackingRef} {...styling}>
					<div className="ss__chat-result__image">
						<OverlayBadge controller={controller as any} result={result} renderEmpty={true}>
							<Image
								{...subProps.image}
								className={'ss__chat-result__detail-slot__image'}
								alt={result.display.mappings.core?.name || ''}
								src={result.display.mappings.core?.imageUrl || result.display.mappings.core?.parentImageUrl || ''}
							/>
						</OverlayBadge>
						<div className="ss__chat-result__image__buttons">
							{controller.store.features.similarProducts.enabled && (
								<Button
									{...subProps.button}
									className={'ss__chat-result__image__buttons__similar'}
									content={'Similar'}
									aria-label={`Show similar to ${result.display.mappings.core?.name || 'product'}`}
									onClick={() => {
										controller.productSimilar(result);
									}}
								/>
							)}
							<Button
								{...subProps.button}
								className={'ss__chat-result__image__buttons__compare'}
								content={isInComparison ? undefined : 'Compare'}
								icon={isInComparison ? { icon: 'check-thin', title: 'Added to comparison' } : undefined}
								aria-label={
									isInComparison
										? `${result.display.mappings.core?.name || 'Product'} added to comparison`
										: `Compare ${result.display.mappings.core?.name || 'product'}`
								}
								aria-pressed={isInComparison}
								onClick={() => {
									controller.compareProduct(result);
								}}
							/>
						</div>
						<div className="ss__chat-result__image__icons">
							<Button
								{...subProps.button}
								className={'ss__chat-result__image__icons__icon--inquire'}
								icon={{ icon: 'chat', title: 'Discuss Product' }}
								aria-label={`Discuss ${result.display.mappings.core?.name || 'product'}`}
								onClick={() => {
									controller.productQuery(result);
								}}
							/>
							<Button
								{...subProps.button}
								className={'ss__chat-result__image__icons__icon--cart'}
								icon={{ icon: 'cart', title: isConfigurable ? 'Configure' : 'Add to Cart' }}
								aria-label={
									isConfigurable
										? `Configure ${result.display.mappings.core?.name || 'product'}`
										: `Add ${result.display.mappings.core?.name || 'product'} to cart`
								}
								onClick={() => {
									// configurable products need a variant selection — open the product
									// information panel so the user can pick options before adding to cart
									if (isConfigurable) {
										controller.productQuickView(result);
										return;
									}
									controller.track.product.addToCart(result);
									controller.addToCart(result);
								}}
							/>
						</div>
					</div>
					<div className="ss__chat-result__content">
						{result.display.mappings.core?.name && (
							<div className="ss__chat-result__content__title--primary">{result.display.mappings.core?.name}</div>
						)}
						{result.display.mappings.core?.price && (
							<div className="ss__chat-result__content__price">
								<Price value={result.display.mappings.core?.price} />
							</div>
						)}
						<CalloutBadge controller={controller} result={result} />
					</div>
				</div>
			</CacheProvider>
		);
	})
);

interface ChatResultSubProps {
	button: Partial<ButtonProps>;
	image: Partial<ImageProps>;
}

export interface ChatResultProps extends ComponentProps {
	result: Product;
	controller: ChatController;
	scrollToBottom: () => void;
	trackingRef?: (el: HTMLElement | null) => void;
}
