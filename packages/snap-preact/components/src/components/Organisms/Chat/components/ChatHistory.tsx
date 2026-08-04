import { h } from 'preact';

import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import type { ChatController } from '@athoscommerce/snap-controller';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../../providers';
import { mergeProps, mergeStyles } from '../../../../utilities';
import { ComponentProps, StyleScript } from '../../../../types';
import { useLang } from '../../../../hooks';
import { Button } from '../../../Atoms/Button';
import { Dropdown } from '../../../Atoms/Dropdown';
import { ChatLang, chatDefaultLang, langAttrOf, langTextOf } from '../Chat.lang';

const defaultStyles: StyleScript<ChatHistoryProps> = () => {
	return css({
		'&.ss__dropdown--open': {
			'.ss__dropdown__button': {
				backgroundColor: '#dddddd33',
				borderRadius: '6px',
			},
		},
		'.ss__dropdown__button': {
			display: 'flex',
			alignItems: 'center',
		},
		'.ss__chat__history': {
			color: '#333',
			position: 'absolute',
			width: 300,
			minHeight: 170,
			top: 6,
			right: 0,
			background: 'white',
			zIndex: 21,
			boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.2)',
			borderRadius: '6px',
			display: 'flex',
			flexDirection: 'column',
			gap: 5,
			padding: '10px',
			boxSizing: 'border-box',
			'.ss__chat__history__header': {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				h4: {
					margin: 0,
					fontSize: '14px',
				},
				'.ss__chat__history__header__buttons': {
					'.ss__button': {
						fontSize: '14px',
						color: '#333',
						'&:hover': {
							background: 'none',
							color: '#000',
						},
					},
				},
			},
			'.ss__chat__history__chats': {
				display: 'flex',
				flexDirection: 'column',
				gap: 5,
				maxHeight: '300px',
				overflowY: 'auto',
				'.ss__chat__history__chats__chat': {
					'.ss__button': {
						borderRadius: '12px',
						width: '100%',
						border: '1px solid #eee',
						fontSize: '12px',
						display: 'flex',
						flexDirection: 'column',
						boxSizing: 'border-box',
						'.ss__chat__history__chat__button__text': {
							fontWeight: 'bold',
						},
						'.ss__chat__history__chat__button__date': {},
					},
				},
			},
		},
	});
};

const HistoryButton = (props: { disabled?: boolean; open?: boolean; title?: string; ariaLabel?: string }) => (
	<Button
		className="ss__chat__header__button--history"
		disabled={props.disabled}
		aria-label={props.ariaLabel}
		icon={{
			icon: 'history',
			title: props.title,
		}}
	/>
);

const HistoryPopup = observer((props: { controller: ChatController; lang: Partial<ChatLang>; newChatLabel?: string; toggleOpen?: () => void }) => {
	const { controller, lang, newChatLabel, toggleOpen } = props;
	const { store } = controller;
	const mergedLang = useLang(
		{
			historyTitle: lang.historyTitle!,
			historyClearButton: lang.historyClearButton!,
		} as any,
		{ controller }
	);

	return (
		<div className="ss__chat__history">
			<div className="ss__chat__history__header">
				<h4 {...mergedLang.historyTitle?.all}></h4>
				<div className="ss__chat__history__header__buttons">
					<Button
						disabled={store.loading || store.blocked}
						onClick={() => {
							controller.store.clearHistory();
							toggleOpen && toggleOpen();
						}}
					>
						<span {...mergedLang.historyClearButton?.all}></span>
					</Button>
				</div>
			</div>
			{store.chats.length > 0 ? (
				<div className="ss__chat__history__chats">
					{store.chats
						.slice()
						.reverse()
						.map((chat) => (
							<div key={chat.id} className="ss__chat__history__chats__chat">
								<Button
									className="ss__chat__history__chat__button"
									onClick={() => {
										controller.switchChat(chat.id);
									}}
									disabled={chat.id === store.currentChatId || store.loading || store.blocked}
								>
									<div className="ss__chat__history__chat__button__text">
										{(() => {
											const lastUserMessage = [...chat.chat].reverse().find((message) => message.messageType === 'user');
											if (!lastUserMessage) return newChatLabel;
											const text = lastUserMessage.text;
											return text.length > 50 ? `${text.slice(0, 50)}...` : text;
										})()}
									</div>
									<div className="ss__chat__history__chat__button__date">{chat.createdAt.toLocaleString()}</div>
								</Button>
							</div>
						))}
				</div>
			) : null}
		</div>
	);
});

export const ChatHistory = observer((properties: ChatHistoryProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatHistoryProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatHistory', globalTheme, defaultProps, properties);

	const { className, internalClassName, controller } = props;
	const { store } = controller;

	const lang = deepmerge(chatDefaultLang, props.lang || {});

	const styling = mergeStyles<ChatHistoryProps>(props, defaultStyles);

	return (
		<CacheProvider>
			<Dropdown
				{...styling}
				disabled={store.loading || store.blocked}
				className={classnames('ss__chat__header__dropdown-history', className, internalClassName)}
				button={<HistoryButton title={langAttrOf(lang.chatHistoryButton, 'title')} ariaLabel={langAttrOf(lang.chatHistoryButton, 'aria-label')} />}
			>
				<HistoryPopup controller={controller} lang={lang} newChatLabel={langTextOf(lang.historyNewChatLabel)} />
			</Dropdown>
		</CacheProvider>
	);
});

export type ChatHistoryProps = {
	controller: ChatController;
	lang?: Partial<ChatLang>;
} & ComponentProps<ChatHistoryProps>;
