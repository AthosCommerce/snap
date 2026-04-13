import { h } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { mergeProps, mergeStyles } from '../../../utilities';
import { useComponent } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';

const defaultStyles: StyleScript<BadgeImageProps> = () => {
	return css({
		maxHeight: '100%',
		maxWidth: '100%',
	});
};

export const BadgeImage = observer((properties: BadgeImageProps) => {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<BadgeImageProps> = {
		// default props
		treePath: globalTreePath,
	};

	const props = mergeProps('badgeImage', globalTheme, defaultProps, properties);

	const { label, url, tag, className, internalClassName, customComponent } = props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.badgeImage || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const styling = mergeStyles<BadgeImageProps>(props, defaultStyles);

	return url ? (
		<CacheProvider>
			<img
				{...styling}
				className={classnames('ss__badge-image', `ss__badge-image--${tag}`, className, internalClassName)}
				alt={label || `${tag} badge`}
				src={url}
			/>
		</CacheProvider>
	) : null;
});

export type BadgeImageProps = BadgeImageTemplatesLegalProps & ComponentProps<BadgeImageProps>;
export type BadgeImageTemplatesLegalProps = {
	url: string;
	label?: string;
	tag?: string;
};
