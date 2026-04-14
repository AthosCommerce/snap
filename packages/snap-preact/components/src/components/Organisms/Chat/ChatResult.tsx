import { ChatController } from '@athoscommerce/snap-controller';
import { Product } from '@athoscommerce/snap-store-mobx';
import { observer } from 'mobx-react-lite';
import { Image, ImageProps } from '../../Atoms/Image';
import { Button, ButtonProps } from '../../Atoms/Button';
import { mergeProps, mergeStyles } from '../../../utilities';
import { css, Theme, useTheme, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { CalloutBadge, OverlayBadge, Price } from '../../..';

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

		'.ss__chat__result__image': {
			width: '100%',
			position: 'relative',
			overflow: 'hidden',
			'.ss__chat__result__image__buttons': {
				position: 'absolute',
				bottom: 0,
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				gap: '0.5em',
				padding: '0.5em',

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

			'.ss__chat__result__image__icons': {
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

				'.ss__button': {
					height: '2.5em',
					width: '2.5em',
					backgroundColor: '#000',
					borderRadius: '50%',
					justifyContent: 'center',

					'&.ss__chat__result__image__icons__icon--cart': {
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
		'.ss__chat__result__content': {
			background: '#f9fafb',
			display: 'flex',
			flexDirection: 'column',
			gap: '0.5em',
			flex: '1 1 auto',
			padding: '0.5em 0',

			'.ss__chat__result__content__title--primary': {
				padding: '0 0.5em',
			},
			'.ss__chat__result__content__title--secondary': {
				padding: '0 0.5em',
				color: '#6A7282',
				fontSize: '90%',
			},
			'.ss__chat__result__content__price': {
				padding: '0 0.5em',
				color: '#000',
				fontWeight: 'bold',
				fontSize: '1.2em',
				marginTop: 'auto',
			},
		},
	});
};
export const ChatResult = observer((properties: ChatResultProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatResultProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatResult', globalTheme, defaultProps, properties);

	const { controller, result, scrollToBottom } = props;

	const isInComparison = controller.store.currentChat?.comparisons.items.some((item) => item.result?.id === result.id);

	const subProps: ChatResultSubProps = {
		button: {
			// component theme overrides
			theme: props.theme,
			// treePath,
		},
		image: {
			lazy: false,
			onLoad: scrollToBottom,
			// component theme overrides
			theme: props.theme,
			// treePath,
		},
	};

	const styling = mergeStyles<ChatResultProps>(properties, defaultStyles);
	return (
		<div className="ss__chat__result" {...styling}>
			<div className="ss__chat__result__image">
				<OverlayBadge controller={controller as any} result={result} renderEmpty={true}>
					<Image
						className={'ss__chat__result__detail-slot__image'}
						alt={result.mappings.core?.name || ''}
						src={result.mappings.core?.imageUrl || ''}
						{...subProps.image}
					/>
				</OverlayBadge>
				<div className="ss__chat__result__image__buttons">
					{controller.store.features.similarProducts.enabled && (
						<Button
							className={'ss__chat__result__image__buttons__similar'}
							content={'Similar'}
							onClick={() => {
								controller.discussProduct(result, { requestType: 'productSimilar' });
							}}
						/>
					)}
					<Button
						className={'ss__chat__result__image__buttons__compare'}
						content={isInComparison ? undefined : 'Compare'}
						icon={isInComparison ? { icon: 'check-thin', title: 'Added to comparison' } : undefined}
						onClick={() => {
							controller.compareProduct(result);
						}}
					/>
				</div>
				<div className="ss__chat__result__image__icons">
					<Button
						className={'ss__chat__result__image__icons__icon--inquire'}
						icon={{ icon: 'chat', title: 'Discuss Product' }}
						onClick={() => {
							controller.discussProduct(result, { requestType: 'productQuery' });
						}}
					/>
					<Button
						className={'ss__chat__result__image__icons__icon--cart'}
						icon={{ icon: 'cart', title: 'Add to Cart' }}
						onClick={() => {
							controller.addToCart(result);
						}}
					/>
				</div>
			</div>
			<div className="ss__chat__result__content">
				{result.mappings.core?.name && <div className="ss__chat__result__content__title--primary">{result.mappings.core?.name}</div>}
				{(result as any).brand && <div className="ss__chat__result__content__title--secondary">{(result as any).brand}</div>}
				{result.mappings.core?.price && (
					<div className="ss__chat__result__content__price">
						<Price value={result.mappings.core?.price} />
					</div>
				)}
				<CalloutBadge controller={controller} result={result} />
			</div>
		</div>
	);
});

interface ChatResultSubProps {
	button: Partial<ButtonProps>;
	image: Partial<ImageProps>;
}
interface ChatResultProps extends ComponentProps {
	result: Product;
	controller: ChatController;
	scrollToBottom: () => void;
}
