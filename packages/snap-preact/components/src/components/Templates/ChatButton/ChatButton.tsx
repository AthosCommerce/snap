import { h } from 'preact';
import { css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';

import { ChatButtonOrganism, ChatButtonOrganismProps, ChatButtonTemplatesLegalProps, ChatButtonLang } from '../../Organisms/ChatButton';
import type { ChatController } from '@athoscommerce/snap-controller';

const defaultStyles: StyleScript<ChatButtonProps> = () => {
	// inline-block so the wrapper flows alongside its siblings when injected into
	// merchant chrome (e.g. a nav); all button styling lives in the organism
	return css({
		display: 'inline-block',
	});
};

export const ChatButton = observer((properties: ChatButtonProps): JSX.Element => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatButtonProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatButton', globalTheme, defaultProps, properties);

	const { className, internalClassName, controller, disableStyles, treePath } = props;

	const subProps: ChatButtonSubProps = {
		ChatButton: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props.theme,
			treePath,
		},
	};

	const styling = mergeStyles<ChatButtonProps>(props, defaultStyles);

	// className/internalClassName stay on the template wrapper only — spreading them
	// into the organism would duplicate user classes on two DOM levels
	// treePath is omitted too — the organism calls mergeProps('chatButton') itself, and passing
	// this one down would append a second 'chatButton' segment
	const organismProps = { ...props, className: undefined, internalClassName: undefined, treePath: undefined };

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__chat-button-template', className, internalClassName)}>
				<ChatButtonOrganism {...subProps.ChatButton} {...organismProps} controller={controller} />
			</div>
		</CacheProvider>
	);
});

interface ChatButtonSubProps {
	ChatButton: Partial<ChatButtonOrganismProps>;
}

export type ChatButtonProps = {
	controller: ChatController;
	lang?: Partial<ChatButtonLang>;
	content?: string | JSX.Element;
} & ChatButtonTemplatesLegalProps &
	ComponentProps<ChatButtonProps>;

export type { ChatButtonTemplatesLegalProps, ChatButtonLang };
