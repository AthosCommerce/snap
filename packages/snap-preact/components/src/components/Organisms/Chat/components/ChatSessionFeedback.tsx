import { h } from 'preact';

import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import type { ChatController } from '@athoscommerce/snap-controller';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../../utilities';
import { ComponentProps, StyleScript } from '../../../../types';
import { useLang } from '../../../../hooks';
import { useA11y } from '../../../../hooks/useA11y';
import { Icon } from '../../../Atoms/Icon';
import { ChatLang, chatDefaultLang, langAttrOf } from '../Chat.lang';

const defaultStyles: StyleScript<ChatSessionFeedbackProps> = ({ primaryColorBg, primaryColorFg }) => {
	const colorPrimary = primaryColorBg!;
	const colorPrimaryText = primaryColorFg!;
	return css({
		position: 'absolute',
		top: '10px',
		left: '10px',
		right: '10px',
		zIndex: 11,
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
		padding: '8px 15px',
		background: new Colour(colorPrimary).mixBlack(0.1),
		color: colorPrimaryText,
		fontSize: '14px',
		borderRadius: '8px',
		boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
		'.ss__chat__session-feedback__icon': {
			flex: '0 0 auto',
			display: 'flex',
			alignItems: 'center',
			svg: {
				fill: colorPrimaryText,
				stroke: colorPrimaryText,
			},
		},
		'.ss__chat__session-feedback__label': {
			flex: '1 1 auto',
			whiteSpace: 'nowrap',
		},
		'.ss__chat__session-feedback__actions': {
			display: 'flex',
			gap: '6px',
			alignItems: 'center',
			'> span': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
				opacity: 0.85,
				padding: '4px',
				borderRadius: '4px',
				border: '1px solid transparent',
				transition: 'opacity 0.15s ease, border-color 0.15s ease',
				'&:hover': {
					opacity: 1,
				},
			},
			svg: {
				fill: colorPrimaryText,
				stroke: colorPrimaryText,
			},
			'&.ss__chat__session-feedback__actions--rated > span': {
				opacity: 1,
				cursor: 'default',
				'&:hover': {
					borderColor: 'transparent',
				},
			},
		},
		'.ss__chat__session-feedback__close': {
			flex: '0 0 auto',
			display: 'flex',
			alignItems: 'center',
			cursor: 'pointer',
			opacity: 0.85,
			transition: 'opacity 0.15s ease',
			'&:hover': {
				opacity: 1,
			},
			svg: {
				fill: colorPrimaryText,
				stroke: colorPrimaryText,
			},
		},
	});
};

export const ChatSessionFeedback = observer((properties: ChatSessionFeedbackProps): JSX.Element | null => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatSessionFeedbackProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatSessionFeedback', globalTheme, defaultProps, properties);

	const { className, internalClassName, controller } = props;
	const { store } = controller;

	const lang = deepmerge(chatDefaultLang, props.lang || {});
	const mergedLang = useLang(
		{
			feedbackPrompt: lang.feedbackPrompt!,
			feedbackThanks: lang.feedbackThanks!,
		} as any,
		{ controller },
		{ activeBreakpoint: globalTheme?.activeBreakpoint }
	);

	const styling = mergeStyles<ChatSessionFeedbackProps>(props, defaultStyles);

	const feedbackAfterMessages = controller.config.settings?.feedbackAfterMessages;
	const systemMessages = (store.currentChat?.chat || []).filter((msg) => msg.messageType !== 'user' && msg.messageType !== 'productQuery');
	const currentRating = store.currentChat?.feedback.rating;
	const hasRated = !!currentRating;
	const shouldShowFeedback =
		feedbackAfterMessages &&
		systemMessages.length >= feedbackAfterMessages &&
		!store.currentChat?.feedback.dismissed &&
		(!hasRated || store.currentChat?.feedback.justGiven);

	if (!shouldShowFeedback) {
		return null;
	}

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__chat__session-feedback', className, internalClassName)}>
				<div className="ss__chat__session-feedback__icon">
					<Icon icon="chat" size="16px" />
				</div>
				<span className="ss__chat__session-feedback__label" {...(hasRated ? mergedLang.feedbackThanks?.all : mergedLang.feedbackPrompt?.all)}></span>
				<div className={`ss__chat__session-feedback__actions${hasRated ? ' ss__chat__session-feedback__actions--rated' : ''}`}>
					{(!hasRated || currentRating === 'UP') && (
						<span
							role="button"
							ref={(e) => useA11y(e)}
							aria-label={langAttrOf(lang.feedbackThumbsUpButton, 'aria-label')}
							aria-disabled={hasRated}
							onClick={() => !hasRated && controller.handleFeedback('UP')}
						>
							<Icon icon={'thumbs-up'} size="16px" title={langAttrOf(lang.feedbackThumbsUpButton, 'title')} />
						</span>
					)}
					{(!hasRated || currentRating === 'DOWN') && (
						<span
							role="button"
							ref={(e) => useA11y(e)}
							aria-label={langAttrOf(lang.feedbackThumbsDownButton, 'aria-label')}
							aria-disabled={hasRated}
							onClick={() => !hasRated && controller.handleFeedback('DOWN')}
						>
							<Icon icon={'thumbs-down'} size="16px" title={langAttrOf(lang.feedbackThumbsDownButton, 'title')} />
						</span>
					)}
				</div>
				{!hasRated && (
					<span
						className="ss__chat__session-feedback__close"
						role="button"
						ref={(e) => useA11y(e)}
						aria-label={langAttrOf(lang.feedbackDismissButton, 'aria-label')}
						onClick={() => store.currentChat?.dismissFeedback()}
					>
						<Icon icon="close-thin" size="14px" />
					</span>
				)}
			</div>
		</CacheProvider>
	);
});

export type ChatSessionFeedbackProps = {
	controller: ChatController;
	lang?: Partial<ChatLang>;
	primaryColorBg?: string;
	primaryColorFg?: string;
} & ComponentProps<ChatSessionFeedbackProps>;
