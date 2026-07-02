import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Image, ImageProps } from '../../Atoms/Image';
import { Button, ButtonProps } from '../../Atoms/Button';
import { Icon, IconProps } from '../../Atoms/Icon';

const defaultStyles: StyleScript<ChatAttachmentContextProps> = () => {
	return css({
		'.ss__chat-attachment-context__label': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			fontSize: '0.8em',
			color: '#555',
			marginBottom: '0.5em',

			'.ss__chat-attachment-context__label__close': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '1.5em',
				height: '1.5em',
				borderRadius: '50%',
				background: 'transparent',
				border: 'none',
				cursor: 'pointer',
				padding: 0,
				'&:hover': {
					background: '#eee',
				},
				'&:focus-visible': {
					outline: '2px solid #253B80',
					outlineOffset: '2px',
				},
			},
		},

		'.ss__chat-attachment-context__items': {
			display: 'flex',
			flexWrap: 'wrap',
			gap: '0.5em',

			'.ss__chat-attachment-context__item': {
				display: 'flex',
				alignItems: 'center',
				gap: '0.5em',
				padding: '0.25em 0.5em',
				border: '1px solid #eee',
				borderRadius: '0.5em',
				background: '#f9fafb',
				maxWidth: 'calc(50% - 0.25em)',

				'&.ss__chat-attachment-context__item--clickable': {
					cursor: 'pointer',
					'&:hover': {
						borderColor: '#253B80',
					},
					'&:focus-visible': {
						outline: '2px solid #253B80',
						outlineOffset: '2px',
					},
				},

				'&.ss__chat-attachment-context__item--error': {
					background: '#fff5f5',
					borderColor: '#fca5a5',
					color: '#b91c1c',
					maxWidth: '100%',
				},

				'.ss__chat-attachment-context__item__content': {
					position: 'relative',
					width: '2em',
					height: '2em',
					flexShrink: 0,
					'.ss__image': {
						width: '100%',
						height: '100%',
					},
				},

				'.ss__chat-attachment-context__item__name': {
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					fontSize: '0.85em',
				},

				'.ss__chat-attachment-context__item__loading': {
					position: 'absolute',
					inset: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '2px',
					'.ss__chat-attachment-context__item__loading__dot': {
						width: '4px',
						height: '4px',
						borderRadius: '50%',
						background: '#253B80',
						animation: 'ss-chat-attachment-context-pulse 1s ease-in-out infinite',
						'&:nth-of-type(2)': { animationDelay: '0.2s' },
						'&:nth-of-type(3)': { animationDelay: '0.4s' },
					},
				},

				'@keyframes ss-chat-attachment-context-pulse': {
					'0%, 100%': { opacity: 0.3 },
					'50%': { opacity: 1 },
				},

				'.ss__chat-attachment-context__item__error-icon': {
					fontWeight: 'bold',
				},

				'.ss__chat-attachment-context__item__remove': {
					marginLeft: 'auto',
					padding: 0,
					background: 'transparent',
					border: 'none',
				},
			},
		},
	});
};

export const ChatAttachmentContext = observer((properties: ChatAttachmentContextProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatAttachmentContextProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatAttachmentContext', globalTheme, defaultProps, properties);

	const { title, items, onClose, disableStyles, className, internalClassName, treePath } = props;

	if (!items || items.length === 0) {
		return <></>;
	}

	const subProps: ChatAttachmentContextSubProps = {
		image: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		icon: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		removeButton: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<ChatAttachmentContextProps>(props, defaultStyles);

	const handleItemKeyDown = (e: any, onClick?: () => void): void => {
		if (!onClick) return;
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			onClick();
		}
	};

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-attachment-context', className, internalClassName)} {...styling}>
				<div className={'ss__chat-attachment-context__label'}>
					<span>{title}</span>
					{onClose && (
						<button type="button" className={'ss__chat-attachment-context__label__close'} onClick={onClose} aria-label={`Close ${title}`}>
							<Icon {...subProps.icon} icon={'close-thin'} size={'12px'} />
						</button>
					)}
				</div>
				<div className={'ss__chat-attachment-context__items'}>
					{items.map((item) => {
						const isClickable = !!item.onClick;
						return (
							<div
								key={item.id}
								className={classnames('ss__chat-attachment-context__item', {
									'ss__chat-attachment-context__item--error': item.hasError,
									'ss__chat-attachment-context__item--clickable': isClickable,
								})}
								onClick={item.onClick}
								onKeyDown={(e: any) => handleItemKeyDown(e, item.onClick)}
								role={isClickable ? 'button' : undefined}
								tabIndex={isClickable ? 0 : undefined}
								aria-label={isClickable ? `Open ${item.name}` : undefined}
							>
								{item.hasError ? (
									<>
										<div className={'ss__chat-attachment-context__item__error-icon'} aria-hidden="true">
											!
										</div>
										<div className={'ss__chat-attachment-context__item__error-message'}>{item.errorMessage || `Upload Failed - ${item.name}`}</div>
									</>
								) : (
									<>
										<div className={'ss__chat-attachment-context__item__content'}>
											{item.imageUrl && <Image {...subProps.image} className={item.isLoading ? 'loading' : ''} src={item.imageUrl} alt={item.name} />}
											{item.isLoading && (
												<div className={'ss__chat-attachment-context__item__loading'} role="status" aria-label={`Loading ${item.name}`}>
													<div className={'ss__chat-attachment-context__item__loading__dot'}></div>
													<div className={'ss__chat-attachment-context__item__loading__dot'}></div>
													<div className={'ss__chat-attachment-context__item__loading__dot'}></div>
												</div>
											)}
										</div>
										<div className={'ss__chat-attachment-context__item__name'} title={item.name}>
											{item.name}
										</div>
									</>
								)}
								{item.onRemove && (items.length > 1 || !onClose || isClickable) && (
									<Button
										{...subProps.removeButton}
										className={'ss__chat-attachment-context__item__remove'}
										aria-label={`Remove ${item.name}`}
										onClick={(e: any) => {
											e.stopPropagation();
											if (!item.isLoading) item.onRemove?.();
										}}
										icon={{
											icon: 'close-thin',
											size: '0.6em',
										}}
									/>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</CacheProvider>
	);
});

interface ChatAttachmentContextSubProps {
	image: Partial<ImageProps>;
	icon: Partial<IconProps>;
	removeButton: Partial<ButtonProps>;
}

export type ChatAttachmentContextItem = {
	id: string;
	name: string;
	imageUrl?: string;
	isLoading?: boolean;
	hasError?: boolean;
	errorMessage?: string;
	onClick?: () => void;
	onRemove?: () => void;
};

export type ChatAttachmentContextProps = {
	title: string;
	items: ChatAttachmentContextItem[];
	onClose?: () => void;
} & ComponentProps<ChatAttachmentContextProps>;
