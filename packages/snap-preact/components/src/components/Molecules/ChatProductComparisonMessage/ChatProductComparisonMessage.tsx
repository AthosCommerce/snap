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
		'.ss__chat-product-comparison-message__table-wrapper': {
			overflowX: 'auto',
		},

		'.ss__chat-product-comparison-message__table': {
			borderCollapse: 'collapse',
			width: '100%',
			fontSize: '0.9em',

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

		'.ss__chat-product-comparison-message__summary': {
			marginTop: '0.75em',
			fontSize: '0.9em',
			color: '#6B7280',
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

	const { chatItem, className, internalClassName } = props;

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

	const headings = comparisonData.features.length ? Object.keys(comparisonData.features[0].values) : [];

	return comparisonData.features.length ? (
		<CacheProvider>
			<div className={classnames('ss__chat-product-comparison-message', className, internalClassName)} {...styling}>
				<div className={classnames('ss__chat-product-comparison-message__table-wrapper')}>
					<table className={classnames('ss__chat-product-comparison-message__table')}>
						<thead>
							<tr>
								<th />
								{headings.map((heading) => {
									const product = searchResults.find((r) => r?.mappings?.core?.name === heading);
									return (
										<th key={heading} className={classnames('ss__chat-product-comparison-message__table__product-header')}>
											{product?.mappings?.core?.imageUrl && (
												<img
													className={classnames('ss__chat-product-comparison-message__table__product-header__image')}
													src={product.mappings.core.imageUrl as string}
													alt={heading}
												/>
											)}
											<div className={classnames('ss__chat-product-comparison-message__table__product-header__name')}>{heading}</div>
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody>
							{comparisonData.features.map((feature, index) => (
								<tr key={index}>
									<td className={classnames('ss__chat-product-comparison-message__table__feature-name')}>{feature.featureName}</td>
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
				{comparisonData.summary && <div className={classnames('ss__chat-product-comparison-message__summary')}>{comparisonData.summary}</div>}
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
