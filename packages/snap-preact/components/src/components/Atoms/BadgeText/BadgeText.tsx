import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { mergeProps, mergeStyles } from '../../../utilities';
import { useCustomComponentOverride } from '../../../hooks';

const defaultStyles: StyleScript<BadgeTextProps> = ({ colorText }) => {
	return css({
		display: 'inline-block',
		boxSizing: 'border-box',
		padding: '0.3em 0.9em',
		color: colorText,
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		maxWidth: '100%',
	});
};

export const BadgeText = observer((properties: BadgeTextProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<BadgeTextProps> = {
		// default props
		colorText: '#000000',
		treePath: globalTreePath,
	};

	const props = mergeProps('badgeText', globalTheme, defaultProps, properties);

	const { value, tag, className, internalClassName } = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('badgeText', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	const styling = mergeStyles<BadgeTextProps>(props, defaultStyles);

	return value ? (
		<CacheProvider>
			<div {...styling} className={classnames('ss__badge-text', `ss__badge-text--${tag}`, className, internalClassName)}>
				<span className="ss__badge-text__value">{value}</span>
			</div>
		</CacheProvider>
	) : null;
});

export type BadgeTextProps = BadgeTextTemplatesLegalProps & ComponentProps<BadgeTextProps>;
export type BadgeTextTemplatesLegalProps = {
	value: string;
	colorText?: string;
	tag?: string;
};
