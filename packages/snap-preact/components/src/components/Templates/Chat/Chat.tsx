import { h } from 'preact';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';

import { ChatOrganism, ChatOrganismProps, ChatTemplatesLegalProps, ChatLang } from '../../Organisms/Chat';
import type { ChatController } from '@athoscommerce/snap-controller';

const defaultStyles: StyleScript<ChatProps> = () => {
	// The template itself is layout-free — the underlying Chat organism handles
	// fixed positioning and sizing. The wrapper exists purely so theme overrides
	// flow through mergeProps('chat', ...) and so the Chat surface can be themed
	// per-template like Search and Recommendation.
	return css({});
};

export const Chat = observer((properties: ChatProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chat', globalTheme, defaultProps, properties);

	const { className, internalClassName, controller, disableStyles, treePath } = props;

	const subProps: ChatSubProps = {
		Chat: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<ChatProps>(props, defaultStyles);

	// className/internalClassName stay on the template wrapper only — spreading them
	// into the organism would duplicate user classes on two DOM levels
	// treePath is omitted too — the organism calls mergeProps('chat') itself, and passing
	// this one down would append a second 'chat' segment (ss-path="chat chat")
	const organismProps = { ...props, className: undefined, internalClassName: undefined, treePath: undefined };

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__chat-template', className, internalClassName)}>
				<ChatOrganism {...subProps.Chat} {...organismProps} controller={controller} />
			</div>
		</CacheProvider>
	);
});

interface ChatSubProps {
	Chat: Partial<ChatOrganismProps>;
}

export type ChatProps = {
	controller: ChatController;
	lang?: Partial<ChatLang>;
} & ChatTemplatesLegalProps &
	ComponentProps<ChatProps>;

export type { ChatTemplatesLegalProps, ChatLang };
