import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { mergeProps, mergeStyles } from '../../../utilities';
import { useComponent } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<BadgeRectangleProps> = ({ color, colorText }) => {
	return css({
		display: 'inline-block',
		boxSizing: 'border-box',
		padding: '0.3em 0.9em',
		background: color,
		color: colorText,
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		maxWidth: '100%',
	});
};

export const BadgeRectangle = observer((properties: BadgeRectangleProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<BadgeRectangleProps> = {
		// default props
		color: 'rgba(58, 35, 173, 1)',
		colorText: '#fff',
		treePath: globalTreePath,
	};

	const props = mergeProps('badgeRectangle', globalTheme, defaultProps, properties);

	const { value, tag, className, internalClassName, customComponent } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.badgeRectangle || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const styling = mergeStyles<BadgeRectangleProps>(props, defaultStyles);

	return value ? (
		<CacheProvider>
			<div {...styling} className={classnames('ss__badge-rectangle', `ss__badge-rectangle--${tag}`, className, internalClassName)}>
				<span className="ss__badge-rectangle__value">{value}</span>
			</div>
		</CacheProvider>
	) : null;
});

export type BadgeRectangleProps = BadgeRectangleTemplatesLegalProps & ComponentProps<BadgeRectangleProps>;
export type BadgeRectangleTemplatesLegalProps = {
	value: string;
	color?: string;
	colorText?: string;
	tag?: string;
};
