import { h } from 'preact';
import { observer } from 'mobx-react-lite';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { Colour, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { useCustomComponentOverride } from '../../../hooks';
import { Button, ButtonProps } from '../../Atoms/Button';
import { Icon, IconProps } from '../../Atoms/Icon';
import type { ChatController } from '@athoscommerce/snap-controller';
import type { ChatResponseActionsData } from '@athoscommerce/snap-client';

const defaultStyles: StyleScript<ChatSuggestedQuestionsProps> = ({ primaryColor, theme }) => {
	const colorPrimary = primaryColor || Colour.concrete(theme?.variables?.colors?.primary) || '#253B80';
	return css({
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
		'.ss__chat-suggested-questions__item.ss__button': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			gap: '12px',
			background: '#fff',
			border: '1px solid #eee',
			borderRadius: '12px',
			padding: '14px 16px',
			cursor: 'pointer',
			fontSize: '14px',
			color: '#333',
			textAlign: 'left',
			width: '100%',
			boxSizing: 'border-box',
			'.ss__button__content': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: '12px',
			},
			'&:not(.ss__button--disabled):hover': {
				borderColor: '#ccc',
				boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
			},
			'&:focus-visible': {
				outline: `2px solid ${colorPrimary}`,
				outlineOffset: '2px',
			},
			'.ss__chat-suggested-questions__item__text': {
				flex: 1,
				fontWeight: 500,
			},
			'.ss__chat-suggested-questions__item__icon': {
				width: '30px',
				height: '30px',
				background: colorPrimary,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '50%',
				flexShrink: 0,
				svg: {
					fill: '#fff',
					stroke: '#fff',
				},
			},
		},
	});
};

export const ChatSuggestedQuestions = observer((properties: ChatSuggestedQuestionsProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatSuggestedQuestionsProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatSuggestedQuestions', globalTheme, defaultProps, properties);

	const { controller, questions, actions, disableStyles, className, internalClassName, treePath } = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('chatSuggestedQuestions', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	const items: string[] = questions ?? actions?.map((action: { message: string }) => action.message) ?? [];

	if (items.length === 0) {
		return null;
	}

	const subProps: ChatSuggestedQuestionsSubProps = {
		button: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
		icon: {
			disableStyles,
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<ChatSuggestedQuestionsProps>(props, defaultStyles);

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-suggested-questions', className, internalClassName)} {...styling}>
				{items.map((item, index) => (
					<Button
						{...subProps.button}
						key={index}
						internalClassName="ss__chat-suggested-questions__item"
						onClick={() => {
							controller.openChat(item);
						}}
					>
						<span className="ss__chat-suggested-questions__item__text">{item}</span>
						<span className="ss__chat-suggested-questions__item__icon" aria-hidden="true">
							<Icon {...subProps.icon} icon="chat" />
						</span>
					</Button>
				))}
			</div>
		</CacheProvider>
	);
});

interface ChatSuggestedQuestionsSubProps {
	button: Partial<ButtonProps>;
	icon: Partial<IconProps>;
}

export type ChatSuggestedQuestionsProps = {
	controller: ChatController;
	questions?: string[];
	actions?: ChatResponseActionsData['actions'];
} & ChatSuggestedQuestionsTemplatesLegalProps &
	ComponentProps<ChatSuggestedQuestionsProps>;

export type ChatSuggestedQuestionsTemplatesLegalProps = {
	primaryColor?: string;
};
