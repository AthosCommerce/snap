import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { mergeProps, mergeStyles } from '../../../utilities';
import { ComponentProps, StyleScript } from '../../../types';

const DEFAULT_VERBS = ['Thinking', 'Searching', 'Analyzing', 'Generating', 'Processing'];
const MIN_INTERVAL = 1000;
const MAX_INTERVAL = 5000;

const defaultStyles: StyleScript<ChatLoadingIndicatorProps> = () => {
	return css({
		padding: '1em',
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
	// fall back to DEFAULT_VERBS inline — can't rely on defaultProps because mergeProps
	// spreads incoming props over defaults, so an explicit `verbs={undefined}` from a caller
	// would wipe out the default array.
	const verbs = props.verbs && props.verbs.length > 0 ? props.verbs : DEFAULT_VERBS;

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
	}, [loading, verbs]);

	const styling = mergeStyles<ChatLoadingIndicatorProps>(props, defaultStyles);

	if (!loading || !verbs[verbIndex]) return null;

	return (
		<CacheProvider>
			<div className={classnames('ss__chat-loading-indicator', className, internalClassName)} {...styling}>
				<span key={verbIndex} className={'ss__chat-loading-indicator__verb'}>
					{verbs[verbIndex]}...
				</span>
			</div>
		</CacheProvider>
	);
};

export type ChatLoadingIndicatorProps = {
	loading?: boolean;
	verbs?: string[];
} & ComponentProps<ChatLoadingIndicatorProps>;
