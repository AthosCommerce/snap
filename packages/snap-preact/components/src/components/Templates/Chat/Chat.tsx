import { h } from 'preact';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { useLang } from '../../../hooks';
import deepmerge from 'deepmerge';

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

	// Lang scaffold — keeps the Template ready for future i18n overrides
	const defaultLang: Partial<ChatLang> = {};
	const lang = deepmerge(defaultLang, props.lang || {});
	useLang(lang as any, { controller });

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

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__chat', className, internalClassName)}>
				<ChatOrganism {...subProps.Chat} {...props} controller={controller} />
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
	Omit<ComponentProps, 'customComponent'>;

export type { ChatTemplatesLegalProps, ChatLang };
