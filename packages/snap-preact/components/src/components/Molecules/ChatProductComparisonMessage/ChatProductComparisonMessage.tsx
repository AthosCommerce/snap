import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { ChatController } from '@athoscommerce/snap-controller';
// import { Lang } from '../../../hooks';
import { ChatResponseProductComparisonData } from '@athoscommerce/snap-client';

const defaultStyles: StyleScript<ChatProductComparisonMessageProps> = () => {
	return css({
		padding: '1em',
		'.ss__chat-product-comparison-message__table-wrapper': {
			overflowX: 'auto',
		},

		'.ss__chat-product-comparison-message__table': {
			borderCollapse: 'collapse',
			width: '100%',
			fontSize: '0.9em',

			'.ss__chat-product-comparison-message__table__caption': {
				position: 'absolute',
				width: '1px',
				height: '1px',
				padding: 0,
				margin: '-1px',
				overflow: 'hidden',
				clip: 'rect(0, 0, 0, 0)',
				whiteSpace: 'nowrap',
				border: 0,
			},

			'th, td': {
				padding: '0.6em 0.8em',
				textAlign: 'left',
				verticalAlign: 'top',
				border: '1px solid #E5E7EB',
			},

			'tbody tr:nth-of-type(even)': {
				background: '#F9FAFB',
			},

			'.ss__chat-product-comparison-message__table__product-header': {
				textAlign: 'center',
				minWidth: '120px',

				'.ss__chat-product-comparison-message__table__product-header__link': {
					background: 'none',
					border: 'none',
					padding: 0,
					font: 'inherit',
					color: 'inherit',
					display: 'block',
					width: '100%',
					cursor: 'pointer',
					textAlign: 'center',
					'&:hover .ss__chat-product-comparison-message__table__product-header__name': {
						textDecoration: 'underline',
					},
				},

				'.ss__chat-product-comparison-message__table__product-header__image': {
					width: '80px',
					height: '80px',
					objectFit: 'contain',
					display: 'block',
					margin: '0 auto 0.4em',
				},

				'.ss__chat-product-comparison-message__table__product-header__name': {
					fontWeight: 'bold',
					fontSize: '0.85em',
				},
			},

			'.ss__chat-product-comparison-message__table__feature-name': {
				fontWeight: '600',
				background: '#F3F4F6',
				whiteSpace: 'nowrap',
			},

			'.ss__chat-product-comparison-message__table__value': {
				textAlign: 'center',
			},
		},
	});
};

export const ChatProductComparisonMessage = observer((properties: ChatProductComparisonMessageProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatProductComparisonMessageProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatProductComparisonMessage', globalTheme, defaultProps, properties);

	const { chatItem, controller, className, internalClassName } = props;

	// const subProps: ChatProductComparisonMessageSubProps = {

	// };

	const styling = mergeStyles<ChatProductComparisonMessageProps>(props, defaultStyles);

	//initialize lang
	// const defaultLang = {
	// 	// label: {
	// 	// 	value: label,
	// 	// },
	// };

	//deep merge with props.lang
	// const lang = deepmerge(defaultLang, props.lang || {});

	const { messageType, comparisonData, searchResults } = chatItem;
	if (messageType !== 'productComparison') {
		console.warn('ChatProductComparisonMessage received message with unsupported type:', messageType, 'Expected type: productComparison');
		return null;
	}

	const headings = searchResults.length ? searchResults.map((r: any) => String(r?.id)) : [];
	const getDisplay = (r: any) => r?.display || r;
	const allProductsHaveImage =
		headings.length > 0 &&
		headings.every((heading) => {
			const core = getDisplay(searchResults.find((r: any) => r?.id === heading))?.mappings?.core;
			return !!(core?.imageUrl || core?.parentImageUrl);
		});

	return comparisonData.features.length ? (
		<CacheProvider>
			<div className={classnames('ss__chat-product-comparison-message', className, internalClassName)} {...styling}>
				<div className={classnames('ss__chat-product-comparison-message__table-wrapper')}>
					<table className={classnames('ss__chat-product-comparison-message__table')} aria-label="Product comparison">
						<caption className="ss__chat-product-comparison-message__table__caption">Product comparison</caption>
						<thead>
							<tr>
								<th scope="col" aria-label="Feature" />
								{headings.map((heading) => {
									const product = searchResults.find((r: any) => r?.id === heading);
									const display = getDisplay(product);
									const productName = (display?.mappings?.core?.name as string) ?? heading;
									const handleOpenProduct = (e: any) => {
										if (!controller || !product) return;
										controller.track.product.click(e, product as any);
										controller.productQuickView(product as any);
									};
									return (
										<th key={heading} scope="col" className={classnames('ss__chat-product-comparison-message__table__product-header')}>
											<button
												type="button"
												className={classnames('ss__chat-product-comparison-message__table__product-header__link')}
												onClick={handleOpenProduct}
												aria-label={`View details for ${productName}`}
											>
												{allProductsHaveImage && (
													<img
														className={classnames('ss__chat-product-comparison-message__table__product-header__image')}
														src={(display.mappings.core.imageUrl || display.mappings.core.parentImageUrl) as string}
														alt={productName}
													/>
												)}
												<div className={classnames('ss__chat-product-comparison-message__table__product-header__name')}>{productName}</div>
											</button>
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody>
							{comparisonData.features.map((feature, index) => (
								<tr key={index}>
									<th scope="row" className={classnames('ss__chat-product-comparison-message__table__feature-name')}>
										{feature.featureName}
									</th>
									{headings.map((heading) => (
										<td key={heading} className={classnames('ss__chat-product-comparison-message__table__value')}>
											{feature.values[heading] ?? '—'}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</CacheProvider>
	) : null;
});

// interface ChatProductComparisonMessageSubProps {

// }

export type ChatProductComparisonMessageProps = {
	chatItem: ChatResponseProductComparisonData;
	controller?: ChatController;
	lang?: Partial<ChatProductComparisonMessageLang>;
} & ChatProductComparisonMessageTemplatesLegalProps &
	ComponentProps<ChatProductComparisonMessageProps>;

export type ChatProductComparisonMessageTemplatesLegalProps = {
	chatItem: ChatResponseProductComparisonData;
};

export interface ChatProductComparisonMessageLang {
	// label: Lang<{
	// 	options: ListOption[];
	// 	selectedOptions: ListOption[];
	// }>;
}
