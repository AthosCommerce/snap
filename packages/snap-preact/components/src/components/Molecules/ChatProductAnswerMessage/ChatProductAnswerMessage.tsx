import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import type { ChatController } from '@athoscommerce/snap-controller';
import { ChatResponseProductAnswerData } from '@athoscommerce/snap-client';
import { Image } from '../../Atoms/Image';
import { Button } from '../../Atoms/Button';
import { Price } from '../../..';
import { marked } from 'marked';

const defaultStyles: StyleScript<ChatProductAnswerMessageProps> = () => {
	return css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1em',

		'.ss__chat-product-answer-message__product-card': {
			display: 'flex',
			gap: '1em',
			alignItems: 'center',
			padding: '1em',
			background: '#F9FAFB',
			borderRadius: '1em',

			'.ss__chat-product-answer-message__product-card__image': {
				width: '80px',
				height: '80px',
				objectFit: 'contain',
				flexShrink: 0,
				borderRadius: '0.5em',
			},

			'.ss__chat-product-answer-message__product-card__details': {
				display: 'flex',
				flexDirection: 'column',
				gap: '0.25em',
				flex: 1,

				'.ss__chat-product-answer-message__product-card__details__name': {
					fontWeight: 'bold',
					fontSize: '1em',
				},

				'.ss__chat-product-answer-message__product-card__details__brand': {
					fontSize: '0.85em',
					color: '#6B7280',
				},

				'.ss__chat-product-answer-message__product-card__details__price': {
					fontWeight: 'bold',
					fontSize: '1.1em',
				},
			},

			'.ss__chat-product-answer-message__product-card__action': {
				flexShrink: 0,

				'.ss__button': {
					background: '#253B80',
					color: '#fff',
					borderRadius: '0.5em',
					padding: '0.5em 1em',
					fontWeight: 'bold',
					border: 'none',
					whiteSpace: 'nowrap',

					'&:not(.ss__button--disabled):hover': {
						background: '#1a2d66',
					},
				},
			},
		},

		'.ss__chat-product-answer-message__section': {
			'.ss__chat-product-answer-message__section__title': {
				background: '#253B80',
				color: '#fff',
				padding: '0.5em 0.75em',
				fontWeight: 'bold',
				fontSize: '0.95em',
				borderRadius: '0.5em 0.5em 0 0',
			},

			'.ss__chat-product-answer-message__section__content': {
				fontSize: '0.9em',

				'p, ul, ol': {
					margin: '0.5em 0',
				},

				'ul, ol': {
					paddingLeft: '1.5em',
				},

				li: {
					padding: '0.25em 0',
				},
			},

			'.ss__chat-product-answer-message__section__table': {
				width: '100%',
				borderCollapse: 'collapse',
				fontSize: '0.9em',

				tr: {
					borderBottom: '1px solid #E5E7EB',
				},

				td: {
					padding: '0.6em 0.75em',
					verticalAlign: 'top',
				},

				'td:first-of-type': {
					fontWeight: '600',
					color: '#374151',
					whiteSpace: 'nowrap',
					textTransform: 'uppercase',
					fontSize: '0.85em',
					width: '40%',
				},

				'td:last-of-type': {
					textAlign: 'right',
					color: '#374151',
				},
			},
		},
	});
};

export const ChatProductAnswerMessage = observer((properties: ChatProductAnswerMessageProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatProductAnswerMessageProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatProductAnswerMessage', globalTheme, defaultProps, properties);

	const { chatItem, controller, className, internalClassName } = props;

	const styling = mergeStyles<ChatProductAnswerMessageProps>(props, defaultStyles);

	const { messageType, text, sourceProduct } = chatItem;
	if (messageType !== 'productAnswer') {
		console.warn('ChatProductAnswerMessage received message with unsupported type:', messageType, 'Expected type: productAnswer');
		return null;
	}

	const core = sourceProduct?.mappings?.core;
	const parsedHtml = text ? (marked.parse(text) as string) : '';

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-product-answer-message', className, internalClassName)} {...styling}>
				{core && (
					<div className={classnames('ss__chat-product-answer-message__product-card')}>
						{core.imageUrl && (
							<Image
								className={classnames('ss__chat-product-answer-message__product-card__image')}
								src={core.imageUrl as string}
								alt={core.name || ''}
								onClick={() => controller?.viewProduct(sourceProduct as any)}
							/>
						)}
						<div className={classnames('ss__chat-product-answer-message__product-card__details')}>
							{core.name && <div className={classnames('ss__chat-product-answer-message__product-card__details__name')}>{core.name}</div>}
							{core.brand && <div className={classnames('ss__chat-product-answer-message__product-card__details__brand')}>{core.brand}</div>}
							{core.price && (
								<div className={classnames('ss__chat-product-answer-message__product-card__details__price')}>
									<Price value={core.price} />
								</div>
							)}
						</div>
						<div className={classnames('ss__chat-product-answer-message__product-card__action')}>
							<Button content={'Add to Cart'} onClick={() => controller?.viewProduct(sourceProduct as any)} />
						</div>
					</div>
				)}

				{parsedHtml && (
					<div className={classnames('ss__chat-product-answer-message__section')}>
						<div className={classnames('ss__chat-product-answer-message__section__title')}>Product Information</div>
						<div className={classnames('ss__chat-product-answer-message__section__content')} dangerouslySetInnerHTML={{ __html: parsedHtml }} />
					</div>
				)}
			</div>
		</CacheProvider>
	);
});

export type ChatProductAnswerMessageProps = {
	chatItem: ChatResponseProductAnswerData;
	controller?: ChatController;
	lang?: Partial<ChatProductAnswerMessageLang>;
} & ChatProductAnswerMessageTemplatesLegalProps &
	ComponentProps<ChatProductAnswerMessageProps>;

export type ChatProductAnswerMessageTemplatesLegalProps = {
	chatItem: ChatResponseProductAnswerData;
};

export interface ChatProductAnswerMessageLang {
	// placeholder for future lang overrides
}
