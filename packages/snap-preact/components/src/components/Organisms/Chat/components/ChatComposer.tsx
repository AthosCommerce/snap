import { h, RefObject } from 'preact';

import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import type { ChatController } from '@athoscommerce/snap-controller';
import { CHAT_MAX_MESSAGE_LENGTH } from '@athoscommerce/snap-client';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../../providers';
import { mergeProps, mergeStyles } from '../../../../utilities';
import { ComponentProps, StyleScript } from '../../../../types';
import { Button } from '../../../Atoms/Button';
import { ChatLang, chatDefaultLang, langAttrOf, langTextOf } from '../Chat.lang';

// show the character counter only when the user is approaching the limit
const CHAR_COUNTER_THRESHOLD = 200;

const defaultStyles: StyleScript<ChatComposerProps> = ({ primaryColorBg, primaryColorFg }) => {
	const colorPrimary = primaryColorBg!;
	const colorPrimaryText = primaryColorFg!;
	return css({
		display: 'flex',
		flexDirection: 'column',
		gap: '8px',
		flexShrink: 0,
		'.ss__chat__input': {
			display: 'flex',
			justifyContent: 'space-between',
			gap: '8px',
			flexShrink: 0,
			'.ss__chat__input__input': {
				flex: '1 1 0%',
				minWidth: 0,
				border: '1px solid #ccc',
				borderRadius: '2em',
				display: 'flex',
				justifyContent: 'space-between',
				overflow: 'auto',
				'&:has(input:disabled)': {
					backgroundColor: '#f5f5f5',
				},
				'input[type="text"]': {
					padding: '0.5em 0',
					margin: '0 0 0 1em',
					flex: '1 0 auto',
					border: 'none',
					backgroundColor: 'transparent',
					'&::placeholder': {
						color: '#999',
						opacity: 0.7,
					},
					'&:focus': {
						outline: 'none',
						borderColor: colorPrimary,
					},
					'&:disabled': {
						backgroundColor: 'transparent',
					},
				},
				'.ss__button': {
					margin: '0 0.5em 0 0',
					backgroundColor: 'transparent',
					'&:hover': {
						backgroundColor: 'transparent',
					},
					'&:disabled': {
						backgroundColor: 'transparent',
					},
				},
				'input[type="file"]': {
					display: 'none',
				},
				'.ss__chat__input__counter': {
					alignSelf: 'center',
					flexShrink: 0,
					fontSize: '10px',
					color: '#999',
					padding: '0 0.75em',
					whiteSpace: 'nowrap',
				},
			},
			'.ss__chat__input__actions': {
				'.ss__button': {
					backgroundColor: colorPrimary,
					color: colorPrimaryText,
					borderRadius: '50%',
					height: '3em',
					width: '3em',
					cursor: 'pointer',
					justifyContent: 'center',
					boxSizing: 'border-box',
					'&:disabled': {
						opacity: 0.5,
						cursor: 'not-allowed',
					},
					svg: {
						fill: colorPrimaryText,
						stroke: colorPrimaryText,
					},
				},
			},
		},
		'.ss__chat__disclaimer': {
			fontSize: '10px',
			color: '#6A7282',
			textAlign: 'center',
			flexShrink: 0,
		},
	});
};

export const ChatComposer = observer((properties: ChatComposerProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatComposerProps> = {
		poweredByText: 'Powered by Athos Commerce.',
		treePath: globalTreePath,
	};

	const props = mergeProps('chatComposer', globalTheme, defaultProps, properties);

	const { className, internalClassName, controller, fileInputRef, onUserSend, poweredByText, privacyPolicyUrl } = props;
	const { store } = controller;

	const lang = deepmerge(chatDefaultLang, props.lang || {});

	const styling = mergeStyles<ChatComposerProps>(props, defaultStyles);

	const inputDisabled = store.loading || store.blocked || store.currentChat?.sessionLimitReached || store.chatEnabled === false;

	const placeholder = (() => {
		const comparedCount = store.currentChat?.comparisons.compared.length || 0;
		const committedCount = store.currentChat?.comparisons.committed.length || 0;
		const attached = store.currentChat?.attachments.attached.filter((item) => item.state === 'attached' || item.state === 'active') || [];
		const attachedProducts = attached.filter((item) => item.type === 'product');
		const attachedImages = attached.filter((item) => item.type === 'image' && !item.error);

		if (attachedProducts.length === 1) {
			return langTextOf(lang.inputPlaceholderAskProduct);
		}
		if (comparedCount > 1 || attachedProducts.length > 1) {
			return langTextOf(lang.inputPlaceholderCompare);
		}
		if (committedCount > 0) {
			return langTextOf(lang.inputPlaceholderComparedProducts);
		}

		if (attachedImages.length > 0) {
			return langTextOf(lang.inputPlaceholderAskImage);
		}
		if (comparedCount === 1) {
			return langTextOf(lang.inputPlaceholderAddCompare);
		}
		return langTextOf(lang.inputPlaceholder);
	})();

	const hasImageAttachment = (store.currentChat?.attachments.attached || []).some((item) => item.type === 'image' && !item.error);
	const messageEmpty = !controller.store.inputValue.trim();
	const sendDisabled =
		store.blocked || store.currentChat?.sessionLimitReached || store.chatEnabled === false || (hasImageAttachment && messageEmpty) || messageEmpty;

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__chat__composer', className, internalClassName)}>
				<div className={'ss__chat__input'}>
					<div className={'ss__chat__input__input'}>
						<input
							type="text"
							name="ss-chat-input"
							maxLength={CHAT_MAX_MESSAGE_LENGTH}
							disabled={inputDisabled}
							placeholder={placeholder}
							onInput={(e) => controller.handlers.input.input(e as unknown as Event)}
							onKeyDown={(e) => {
								controller.handlers.input.enterKey(e as unknown as KeyboardEvent);
								if (e.key === 'Enter') {
									onUserSend && onUserSend();
								}
							}}
							value={controller.store.inputValue}
						/>
						{controller.store.inputValue.length >= CHAR_COUNTER_THRESHOLD && (
							<span className={'ss__chat__input__counter'}>{`${controller.store.inputValue.length}/${CHAT_MAX_MESSAGE_LENGTH}`}</span>
						)}
						{store.features.imageSearch.enabled && (
							<>
								<Button
									className={'ss__chat__upload-button'}
									disabled={inputDisabled}
									onClick={() => fileInputRef.current?.click()}
									aria-label={langAttrOf(lang.uploadImageButton, 'aria-label')}
									icon={{ icon: 'image', title: langAttrOf(lang.uploadImageButton, 'title') }}
								/>
								<input
									ref={fileInputRef}
									onChange={async (e) => {
										await controller.upload((e.target as HTMLInputElement).files);
										// reset value
										(e.target as HTMLInputElement).value = '';
									}}
									type="file"
									accept="image/*"
									className="ss__chat__input__input__file"
								/>
							</>
						)}
					</div>
					<div className={'ss__chat__input__actions'}>
						<Button
							className="ss__chat__send-button"
							aria-label={langAttrOf(lang.sendMessageButton, 'aria-label')}
							icon={{ icon: 'send', title: langAttrOf(lang.sendMessageButton, 'title') }}
							disabled={sendDisabled}
							onClick={() => {
								if (sendDisabled) return;
								controller.search();
								onUserSend && onUserSend();
							}}
						/>
					</div>
				</div>
				<div className={'ss__chat__disclaimer'}>
					<i>
						{poweredByText} {langTextOf(lang.disclaimerText)}
						{privacyPolicyUrl && (
							<>
								{' '}
								<a href={privacyPolicyUrl} target="_blank" rel="noopener noreferrer">
									{langTextOf(lang.privacyPolicyLinkText)}
								</a>
							</>
						)}
					</i>
				</div>
			</div>
		</CacheProvider>
	);
});

export type ChatComposerProps = {
	controller: ChatController;
	fileInputRef: RefObject<HTMLInputElement>;
	/** Called after the user submits a message (Enter key or send button). */
	onUserSend?: () => void;
	poweredByText?: string;
	privacyPolicyUrl?: string;
	lang?: Partial<ChatLang>;
	primaryColorBg?: string;
	primaryColorFg?: string;
} & ComponentProps<ChatComposerProps>;
