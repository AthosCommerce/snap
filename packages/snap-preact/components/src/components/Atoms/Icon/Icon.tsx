import { h, ComponentChildren } from 'preact';

import { jsx, css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { iconPaths, IconType } from './paths';
import { mergeProps, mergeStyles } from '../../../utilities';

const defaultStyles: StyleScript<IconProps> = ({ color, fill, stroke, theme, width, height, size }) => {
	return css({
		color: color || fill || theme?.variables?.colors?.primary,
		fill: fill || color || theme?.variables?.colors?.primary,
		stroke: stroke,
		width: isNaN(Number(width || size)) ? width || size : `${width || size}px`,
		height: isNaN(Number(height || size)) ? height || size : `${height || size}px`,
		position: 'relative',
	});
};

export function Icon(properties: IconProps) {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<IconProps> = {
		size: '16px',
		viewBox: '0 0 56 56',
		treePath: globalTreePath,
	};

	const props = mergeProps('icon', globalTheme, defaultProps, properties);

	const {
		color,
		icon,
		fill,
		path,
		children,
		size,
		width,
		title,
		height,
		viewBox,
		disableStyles,
		className,
		internalClassName,
		style: _,
		styleScript: __,
		themeStyleScript: ___,
		name: ____,
		treePath: _____,
		...otherProps
	} = props;

	const iconPath = iconPaths[icon as IconType] || path;
	const pathType = typeof iconPath;
	const styling = mergeStyles<IconProps>(props, defaultStyles);

	return children || (iconPath && (pathType === 'string' || (pathType === 'object' && Array.isArray(iconPath)))) ? (
		<CacheProvider>
			<svg
				{...styling}
				className={classnames('ss__icon', icon ? `ss__icon--${icon}` : null, className, internalClassName)}
				viewBox={viewBox}
				xmlns="http://www.w3.org/2000/svg"
				width={disableStyles ? width || size : undefined}
				height={disableStyles ? height || size : undefined}
				{...otherProps}
			>
				{title ? <title>{title}</title> : null}
				{(() => {
					if (children) {
						return children;
					} else if (pathType === 'string') {
						return <path fill={disableStyles ? fill || color || undefined : undefined} d={iconPath as string} />;
					} else if (iconPath && pathType === 'object' && Array.isArray(iconPath)) {
						return (iconPath as SVGPathElement[]).map((p, i) => <p.type key={i} {...p.attributes} />);
					}
				})()}
			</svg>
		</CacheProvider>
	) : null;
}

export type SVGPathElement = {
	type: string;
	attributes: {
		[attribute: string]: string;
	};
};

export type IconProps = {
	name?: IconNames;
} & IconTemplatesLegalProps &
	ComponentProps<IconProps>;

export type IconTemplatesLegalProps = {
	color?: string;
	fill?: string;
	stroke?: string;
	icon?: IconType | false;
	title?: string;
	path?: string | SVGPathElement[];
	children?: ComponentChildren;
	size?: string | number;
	width?: string | number;
	height?: string | number;
	viewBox?: string;
};

export type IconNames =
	| 'bundle-cart'
	| 'bundle-selector'
	| 'bundle-cart-separator'
	| 'next'
	| 'prev'
	| 'active'
	| 'inactive'
	| 'star--empty'
	| 'star--full'
	| 'selection'
	| 'open'
	| 'close'
	| 'option'
	| 'expand'
	| 'collapse'
	| 'overflow-more'
	| 'overflow-less';
