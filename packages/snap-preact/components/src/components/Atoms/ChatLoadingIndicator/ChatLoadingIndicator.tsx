import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import deepmerge from 'deepmerge';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';
import { Lang, useCustomComponentOverride } from '../../../hooks';

const DEFAULT_VERB_KEYS = ['thinkingVerb', 'searchingVerb', 'analyzingVerb', 'generatingVerb', 'processingVerb'] as const;
const MIN_INTERVAL = 1000;
const MAX_INTERVAL = 5000;

const defaultStyles: StyleScript<ChatLoadingIndicatorProps> = () => {
	return css({
		padding: '1em 2em 0 2em',
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
		color: '#666',
		fontSize: '14px',
		fontStyle: 'italic',

		'.ss__chat-loading-indicator__verb': {
			animation: 'ss-chat-loading-indicator-fade 0.5s ease-out',
		},

		'@keyframes ss-chat-loading-indicator-fade': {
			'0%': {
				opacity: 0,
				transform: 'translateY(4px)',
			},
			'100%': {
				opacity: 1,
				transform: 'translateY(0)',
			},
		},
	});
};

export const ChatLoadingIndicator = (properties: ChatLoadingIndicatorProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ChatLoadingIndicatorProps> = {
		treePath: globalTreePath,
	};

	const props = mergeProps('chatLoadingIndicator', globalTheme, defaultProps, properties);

	const { loading, className, internalClassName } = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('chatLoadingIndicator', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	//initialize lang
	const defaultLang: Partial<ChatLoadingIndicatorLang> = {
		thinkingVerb: { value: 'Thinking' },
		searchingVerb: { value: 'Searching' },
		analyzingVerb: { value: 'Analyzing' },
		generatingVerb: { value: 'Generating' },
		processingVerb: { value: 'Processing' },
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});

	const defaultVerbs = DEFAULT_VERB_KEYS.map((key) => {
		const value = lang[key]?.value;
		return (typeof value == 'function' ? (value as () => string)() : value) as string;
	}).filter(Boolean);

	// fall back to the lang-provided default verbs inline — can't rely on defaultProps because
	// mergeProps spreads incoming props over defaults, so an explicit `verbs={undefined}` from a
	// caller would wipe out the default array.
	const verbs = props.verbs && props.verbs.length > 0 ? props.verbs : defaultVerbs;
	// key on content (not array identity) so inline array props don't restart the cycle every render
	const verbsKey = JSON.stringify(verbs);

	const [verbIndex, setVerbIndex] = useState(0);

	useEffect(() => {
		if (!loading) {
			setVerbIndex(0);
			return;
		}
		let timeoutId: ReturnType<typeof setTimeout>;
		const scheduleNext = () => {
			const nextInterval = Math.floor(Math.random() * (MAX_INTERVAL - MIN_INTERVAL + 1)) + MIN_INTERVAL;
			timeoutId = setTimeout(() => {
				setVerbIndex((prev) => (prev + 1) % verbs.length);
				scheduleNext();
			}, nextInterval);
		};
		scheduleNext();
		return () => clearTimeout(timeoutId);
	}, [loading, verbsKey]);

	const styling = mergeStyles<ChatLoadingIndicatorProps>(props, defaultStyles);

	const verb = verbs[verbIndex % verbs.length];

	if (!loading || !verb) return null;

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-loading-indicator', className, internalClassName)} role="status" aria-live="polite" {...styling}>
				<span key={verbIndex} className={'ss__chat-loading-indicator__verb'}>
					{verb}...
				</span>
			</div>
		</CacheProvider>
	);
};

export type ChatLoadingIndicatorProps = {
	loading?: boolean;
	verbs?: string[];
	lang?: Partial<ChatLoadingIndicatorLang>;
} & ComponentProps<ChatLoadingIndicatorProps>;

export interface ChatLoadingIndicatorLang {
	thinkingVerb?: Lang<never>;
	searchingVerb?: Lang<never>;
	analyzingVerb?: Lang<never>;
	generatingVerb?: Lang<never>;
	processingVerb?: Lang<never>;
}
