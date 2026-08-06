import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Lang, useLang, useA11y, useCustomComponentOverride } from '../../../hooks';
import { Image, ImageProps } from '../../Atoms/Image';
import { Button, ButtonProps } from '../../Atoms/Button';

const defaultStyles: StyleScript<ChatAttachmentContextProps> = ({ theme }) => {
	const colorPrimary = Colour.concrete(theme?.variables?.colors?.primary) || '#253B80';
	return css({
		'.ss__chat-attachment-context__label': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			fontSize: '0.8em',
			color: '#555',
			marginBottom: '0.5em',

			'.ss__chat-attachment-context__label__close.ss__button': {
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
					outline: `2px solid ${colorPrimary}`,
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

				'.ss__chat-attachment-context__item__main': {
					display: 'flex',
					alignItems: 'center',
					gap: '0.5em',
					flex: 1,
					minWidth: 0,
				},

				'&.ss__chat-attachment-context__item--clickable': {
					cursor: 'pointer',
					'&:hover': {
						borderColor: colorPrimary,
					},
					'.ss__chat-attachment-context__item__main:focus-visible': {
						outline: `2px solid ${colorPrimary}`,
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
						background: colorPrimary,
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

export const ChatAttachmentContext = observer((properties: ChatAttachmentContextProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatAttachmentContextProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatAttachmentContext', globalTheme, defaultProps, properties);

	const { title, items, onClose, disableStyles, className, internalClassName, treePath } = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('chatAttachmentContext', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	if (!items || items.length === 0) {
		return <></>;
	}

	const subProps: ChatAttachmentContextSubProps = {
		image: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		closeButton: {
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

	//initialize lang
	const defaultLang: Partial<ChatAttachmentContextLang> = {
		closeButton: {
			attributes: {
				'aria-label': `Close ${title}`,
			},
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});
	const mergedLang = useLang(lang as any, {
		title,
		items,
	});

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-attachment-context', className, internalClassName)} {...styling}>
				<div className={'ss__chat-attachment-context__label'}>
					<span>{title}</span>
					{onClose && (
						<Button
							{...subProps.closeButton}
							internalClassName={'ss__chat-attachment-context__label__close'}
							onClick={onClose}
							icon={{ icon: 'close-thin', size: '12px' }}
							{...mergedLang.closeButton.attributes}
						/>
					)}
				</div>
				<div className={'ss__chat-attachment-context__items'}>
					{items.map((item) => {
						const isClickable = !!item.onClick;

						const itemDefaultLang = {
							openItemButton: {
								attributes: {
									'aria-label': `Open ${item.name}`,
								},
							},
							loadingIndicator: {
								attributes: {
									'aria-label': `Loading ${item.name}`,
								},
							},
							removeButton: {
								attributes: {
									'aria-label': `Remove ${item.name}`,
								},
							},
							uploadFailedText: {
								value: `Upload Failed - ${item.name}`,
							},
						};
						const itemLang = deepmerge(itemDefaultLang, props.lang || {});
						const itemMergedLang = useLang(itemLang as any, {
							title,
							items,
							item,
						});

						const itemContent = item.hasError ? (
							<>
								<div className={'ss__chat-attachment-context__item__error-icon'} aria-hidden="true">
									!
								</div>
								{item.errorMessage ? (
									<div className={'ss__chat-attachment-context__item__error-message'}>{item.errorMessage}</div>
								) : (
									<div className={'ss__chat-attachment-context__item__error-message'} {...itemMergedLang.uploadFailedText.value} />
								)}
							</>
						) : (
							<>
								<div className={'ss__chat-attachment-context__item__content'}>
									{item.imageUrl && <Image {...subProps.image} className={item.isLoading ? 'loading' : ''} src={item.imageUrl} alt={item.name} />}
									{item.isLoading && (
										<div className={'ss__chat-attachment-context__item__loading'} role="status" {...itemMergedLang.loadingIndicator.attributes}>
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
						);

						return (
							<div
								key={item.id}
								className={classnames('ss__chat-attachment-context__item', {
									'ss__chat-attachment-context__item--error': item.hasError,
									'ss__chat-attachment-context__item--clickable': isClickable,
								})}
							>
								{isClickable ? (
									<div
										className={'ss__chat-attachment-context__item__main'}
										role="button"
										ref={(e) => useA11y(e)}
										onClick={item.onClick}
										{...itemMergedLang.openItemButton.attributes}
									>
										{itemContent}
									</div>
								) : (
									<div className={'ss__chat-attachment-context__item__main'}>{itemContent}</div>
								)}
								{item.onRemove && (items.length > 1 || !onClose || isClickable) && (
									<Button
										{...subProps.removeButton}
										className={'ss__chat-attachment-context__item__remove'}
										onClick={(e: any) => {
											e.stopPropagation();
											if (!item.isLoading) item.onRemove?.();
										}}
										icon={{
											icon: 'close-thin',
											size: '0.6em',
										}}
										{...itemMergedLang.removeButton.attributes}
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
	closeButton: Partial<ButtonProps>;
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
	lang?: Partial<ChatAttachmentContextLang>;
} & ComponentProps<ChatAttachmentContextProps>;

export interface ChatAttachmentContextLang {
	closeButton?: Lang<never>;
	openItemButton?: Lang<never>;
	loadingIndicator?: Lang<never>;
	removeButton?: Lang<never>;
	uploadFailedText?: Lang<never>;
}
