import { h } from 'preact';

import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import type { ChatController } from '@athoscommerce/snap-controller';
import type { ChatRequestModel } from '@athoscommerce/snap-client';
import { ChatAttachmentImage } from '@athoscommerce/snap-store-mobx';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../../utilities';
import { ComponentProps, StyleScript } from '../../../../types';
import { useLang } from '../../../../hooks';
import { useA11y } from '../../../../hooks/useA11y';
import { Button } from '../../../Atoms/Button';
import { Icon } from '../../../Atoms/Icon';
import { ChatLang, chatDefaultLang, langAttrOf } from '../Chat.lang';

const defaultStyles: StyleScript<ChatTopicDriftProps> = ({ primaryColorBg, primaryColorFg }) => {
	const colorPrimary = primaryColorBg!;
	const colorPrimaryText = primaryColorFg!;
	return css({
		display: 'flex',
		alignItems: 'center',
		gap: '12px',
		padding: '12px 16px',
		border: `1px solid ${new Colour(colorPrimary).mixWhite(0.6)}`,
		borderRadius: '8px',
		backgroundColor: '#fff',
		'.ss__chat__topic-drift__icon--info': {
			flex: '0 0 auto',
			fill: colorPrimary,
			stroke: colorPrimary,
			svg: {
				fill: colorPrimary,
				stroke: colorPrimary,
			},
		},
		'.ss__chat__topic-drift__text': {
			flex: '1 1 0%',
			display: 'flex',
			flexDirection: 'column',
			gap: '2px',
			'span:first-of-type': {
				fontWeight: 'bold',
				color: colorPrimary,
				fontSize: '14px',
			},
			'span:last-of-type': {
				color: '#6A7282',
				fontSize: '13px',
			},
		},
		'.ss__chat__topic-drift__button': {
			flex: '0 0 auto',
			backgroundColor: colorPrimary,
			color: colorPrimaryText,
			borderRadius: '6px',
			padding: '8px 14px',
			fontSize: '13px',
			fontWeight: 500,
			cursor: 'pointer',
			whiteSpace: 'nowrap',
			'&:not(.ss__button--disabled):hover': {
				background: new Colour(colorPrimary).mixBlack(),
			},
		},
		'.ss__chat__topic-drift__icon--close': {
			flex: '0 0 auto',
			cursor: 'pointer',
			fill: '#6A7282',
			stroke: '#6A7282',
			svg: {
				fill: '#6A7282',
				stroke: '#6A7282',
			},
		},
	});
};

export const ChatTopicDrift = observer((properties: ChatTopicDriftProps): JSX.Element | null => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatTopicDriftProps> = {
		variant: 'drift',
		treePath: globalTreePath,
	};

	const props = mergeProps('chatTopicDrift', globalTheme, defaultProps, properties);

	const { className, internalClassName, controller, variant } = props;
	const { store } = controller;

	const lang = deepmerge(chatDefaultLang, props.lang || {});
	const mergedLang = useLang(
		{
			highVolumeMessage: lang.highVolumeMessage!,
			highVolumeSubMessage: lang.highVolumeSubMessage!,
			newSessionButton: lang.newSessionButton!,
			topicDriftScopeMessage: lang.topicDriftScopeMessage!,
			topicDriftScopeSubMessage: lang.topicDriftScopeSubMessage!,
			topicDriftMessage: lang.topicDriftMessage!,
			topicDriftSubMessage: lang.topicDriftSubMessage!,
		} as any,
		{ controller },
		{ activeBreakpoint: globalTheme?.activeBreakpoint }
	);

	const styling = mergeStyles<ChatTopicDriftProps>(props, defaultStyles);

	if (variant === 'sessionLimit') {
		if (!store.currentChat?.sessionLimitReached) return null;
		return (
			<CacheProvider>
				<div {...styling} className={classnames('ss__chat__topic-drift', className, internalClassName)}>
					<Icon icon="info" size="18px" className={'ss__chat__topic-drift__icon--info'} />
					<div className={'ss__chat__topic-drift__text'}>
						<span {...mergedLang.highVolumeMessage?.all}></span>
						<span {...mergedLang.highVolumeSubMessage?.all}></span>
					</div>
					<Button
						className={'ss__chat__topic-drift__button'}
						onClick={() => {
							controller.store.createChat();
						}}
					>
						<span {...mergedLang.newSessionButton?.all}></span>
					</Button>
				</div>
			</CacheProvider>
		);
	}

	const drift = store.currentChat?.topicDrift;
	if (!drift) return null;
	// recommendedAction is the prescription; driftType is the diagnosis.
	// Hide the banner when the backend says to keep flowing, or when no drift was detected.
	if (drift.recommendedAction === 'CONTINUE' || drift.driftType === 'NO_DRIFT') return null;

	const isScopeRedirect = drift.recommendedAction === 'SCOPE_REDIRECT';

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__chat__topic-drift', className, internalClassName)}>
				<Icon icon="info" size="18px" className={'ss__chat__topic-drift__icon--info'} />
				<div className={'ss__chat__topic-drift__text'}>
					<span {...(isScopeRedirect ? mergedLang.topicDriftScopeMessage?.all : mergedLang.topicDriftMessage?.all)}></span>
					<span {...(isScopeRedirect ? mergedLang.topicDriftScopeSubMessage?.all : mergedLang.topicDriftSubMessage?.all)}></span>
				</div>
				{!isScopeRedirect && (
					<Button
						className={'ss__chat__topic-drift__button'}
						onClick={() => {
							// Capture image attachments from the current chat before handleTopicDrift /
							// createChat tear down the conversation — an imageSearch that drifted needs
							// the same image attached to the carried-over message in the new session,
							// otherwise params would fall back to a `general` request without the image.
							const previousImageAttachments = (store.currentChat?.attachments.attached || [])
								.filter((item) => item.type === 'image' && item.state !== 'error')
								.map((item) => {
									const img = item as ChatAttachmentImage;
									return {
										type: 'image' as const,
										base64: img.base64,
										fileName: img.fileName,
										imageId: img.imageId,
										imageUrl: img.imageUrl,
										thumbnailUrl: img.thumbnailUrl,
										// Already uploaded — skip the 'loading' default state.
										state: 'attached' as const,
									};
								});
							const messageText = store.currentChat?.handleTopicDrift();
							if (messageText) {
								controller.store.createChat();
								previousImageAttachments.forEach((cfg) => {
									controller.store.currentChat?.attachments.add(cfg);
								});
								// partial override — the params getter decides the requestType (e.g. imageSearch
								// when an image is re-attached), so only the message is overridden here
								controller.search({ data: { message: messageText } } as Partial<ChatRequestModel>);
							}
						}}
					>
						<span {...mergedLang.newSessionButton?.all}></span>
					</Button>
				)}
				<span
					role="button"
					ref={(e) => useA11y(e)}
					aria-label={langAttrOf(lang.topicDriftDismissButton, 'aria-label')}
					onClick={() => {
						store.currentChat?.dismissTopicDrift();
					}}
				>
					<Icon icon="close-thin" size="14px" className={'ss__chat__topic-drift__icon--close'} />
				</span>
			</div>
		</CacheProvider>
	);
});

export type ChatTopicDriftProps = {
	controller: ChatController;
	variant?: 'drift' | 'sessionLimit';
	lang?: Partial<ChatLang>;
	primaryColorBg?: string;
	primaryColorFg?: string;
} & ComponentProps<ChatTopicDriftProps>;
