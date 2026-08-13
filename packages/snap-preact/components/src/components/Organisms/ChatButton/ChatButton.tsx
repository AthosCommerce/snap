import { h, ComponentChildren } from 'preact';
import { useRef, useEffect } from 'preact/hooks';

import { css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';
import { observer } from 'mobx-react-lite';

import type { ChatController } from '@athoscommerce/snap-controller';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { cloneWithProps, defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { useCustomComponentOverride } from '../../../hooks';
import { Button, ButtonProps } from '../../Atoms/Button';
import { IconProps, IconType } from '../../Atoms/Icon';
import { langAttrOf } from '../Chat/Chat.lang';
import { ChatButtonLang, chatButtonDefaultLang } from './ChatButton.lang';

const defaultStyles: StyleScript<ChatButtonOrganismProps> = ({ theme }) => {
	// primary may be 'currentColor' (base theme) — background stays fixed so the
	// pill remains legible wherever it inherits its color from
	const color = theme?.variables?.colors?.primary || '#333';

	return css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '8px',
		padding: '8px 16px',
		background: '#fff',
		color: color,
		border: `1px solid ${color}`,
		borderRadius: '24px',
		fontSize: '14px',
		fontWeight: 600,
		lineHeight: 1.2,
		cursor: 'pointer',
		transition: 'box-shadow 0.15s ease',
		'&:hover': {
			boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
		},
		'&:focus-visible': {
			outline: '2px solid currentColor',
			outlineOffset: '2px',
		},
		// native Button always renders its content span — collapse it when empty
		// so the flex gap doesn't offset icon-only buttons
		'.ss__button__content:empty': {
			display: 'none',
		},
		'.ss__icon': {
			fill: 'currentColor',
			stroke: 'currentColor',
		},
	});
};

export const ChatButtonOrganism = observer((properties: ChatButtonOrganismProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatButtonOrganismProps> = {
		icon: 'chat',
		treePath: globalTreePath,
	};

	const props = mergeProps('chatButton', globalTheme, defaultProps, properties);

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('chatButton', props);

	const { className, internalClassName, controller, content, children, icon, disableStyles, treePath } = props;
	const { store } = controller;

	// Register with the store so the Chat organism hides its built-in bubble while
	// an external launcher is mounted. Runs before any early return (hooks-order safe).
	useEffect(() => store.registerLauncher(), [store]);

	// Same visibility rule as the Chat organism: hidden when disabled at bootstrap,
	// but kept mounted when chat becomes disabled mid-session.
	const wasVisibleRef = useRef(false);
	if (!store.chatEnabled && !wasVisibleRef.current) {
		return <></>;
	}
	wasVisibleRef.current = true;

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	const subProps: ChatButtonSubProps = {
		button: {
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const styling = mergeStyles<ChatButtonOrganismProps>(props, defaultStyles);

	const lang = deepmerge(chatButtonDefaultLang, props.lang || {});

	return (
		<CacheProvider>
			<Button
				{...styling}
				{...subProps.button}
				native
				type="button"
				className={classnames('ss__chat-button', { 'ss__chat-button--open': store.open }, className, internalClassName)}
				aria-label={store.open ? langAttrOf(lang.closeChatButton, 'aria-label') : langAttrOf(lang.openChatButton, 'aria-label')}
				title={store.open ? langAttrOf(lang.closeChatButton, 'title') : langAttrOf(lang.openChatButton, 'title')}
				aria-expanded={store.open}
				onClick={() => controller.handlers.button.click()}
				content={
					content || children ? (
						<span className="ss__chat-button__content">
							{cloneWithProps(content, { treePath })}
							{cloneWithProps(children, { treePath })}
						</span>
					) : undefined
				}
				icon={
					icon && { internalClassName: 'ss__chat-button__icon', ...(typeof icon == 'string' ? { icon: icon } : typeof icon == 'object' ? icon : {}) }
				}
			/>
		</CacheProvider>
	);
});

interface ChatButtonSubProps {
	button: Partial<ButtonProps>;
}

export type ChatButtonOrganismProps = {
	controller: ChatController;
	lang?: Partial<ChatButtonLang>;
	content?: string | JSX.Element;
} & ChatButtonTemplatesLegalProps &
	ComponentProps<ChatButtonOrganismProps>;

export type ChatButtonTemplatesLegalProps = {
	icon?: IconType | Partial<IconProps> | boolean;
	children?: ComponentChildren;
};
