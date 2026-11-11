import { h } from 'preact';

import { useState, useEffect, useRef } from 'preact/hooks';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { mergeProps, mergeStyles } from '../../../utilities';
import { useCustomComponentOverride } from '../../../hooks';

export const FALLBACK_IMAGE_URL = '//cdn.athoscommerce.net/snap/images/fallback.png';

const defaultStyles: StyleScript<ImageProps> = ({ height }) => {
	return css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: height ? height : 'auto',
		'& img': {
			flexShrink: '0',
			objectFit: 'contain',
			maxWidth: '100%',
			maxHeight: '100%',
		},

		'&.ss__image--hidden': {
			'& img': {
				visibility: 'hidden',
			},
		},
	});
};

export const Image = observer((properties: ImageProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<ImageProps> = {
		fallback: FALLBACK_IMAGE_URL,
		lazy: true,
		treePath: globalTreePath,
	};

	const props = mergeProps('image', globalTheme, defaultProps, properties);

	const {
		alt,
		src,
		srcset,
		sizes,
		fallback,
		title,
		hoverSrc,
		lazy,
		onMouseOver,
		onMouseOut,
		onError,
		onLoad,
		onClick,
		onPointerDown,
		onPointerMove,
		onPointerUp,
		onPointerLeave,
		className,
		internalClassName,
		draggable,
	} = props;

	const { overrideElement, shouldRenderDefault } = useCustomComponentOverride('image', props);

	if (!shouldRenderDefault) {
		return overrideElement;
	}

	const [visibile, setVisibile] = useState(false);
	const [isHovering, setHover] = useState(false);
	const [srcsetFailed, setSrcsetFailed] = useState(false);

	const prevSrcRef = useRef(src);
	useEffect(() => {
		prevSrcRef.current = src;
	});
	if (prevSrcRef.current != src) {
		setVisibile(false);
		setSrcsetFailed(false);
	}

	const styling = mergeStyles<ImageProps>(props, defaultStyles);

	// a srcset function is applied to `hoverSrc` while hovering, a srcset string is removed while hovering so that `hoverSrc` is displayed
	// a srcset that has failed to load is not set again until `src` changes
	const srcsetAttribute =
		srcsetFailed || (isHovering && typeof srcset != 'function') ? undefined : resolveSrcset(isHovering ? hoverSrc : src, srcset);

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__image', { 'ss__image--hidden': !visibile }, className, internalClassName)}>
				<img
					// `loading` must stay the first attribute - attributes are set in order, and `auto` in `sizes` is only used when the image is already lazy as `src` is set
					loading={lazy ? 'lazy' : undefined}
					src={(isHovering ? hoverSrc : src) || fallback}
					srcSet={srcsetAttribute}
					sizes={sizes}
					alt={alt}
					title={title || alt}
					onLoad={(e: React.MouseEvent<HTMLImageElement>) => {
						setVisibile(true);
						onLoad && onLoad(e);
					}}
					onClick={(e: React.MouseEvent<HTMLImageElement>) => onClick && onClick(e)}
					onError={(e: React.MouseEvent<HTMLImageElement>) => {
						if (srcsetAttribute) {
							// srcset candidates take precedence over src, so stop rendering the srcset to retry with src before falling back
							setSrcsetFailed(true);
						} else {
							(e.target as HTMLImageElement).src = fallback || '';
						}
						onError && onError(e);
					}}
					onMouseOver={(e: React.MouseEvent<HTMLImageElement>) => {
						hoverSrc && setHover(true);
						onMouseOver && onMouseOver(e);
					}}
					onMouseOut={(e: React.MouseEvent<HTMLImageElement>) => {
						hoverSrc && setHover(false);
						onMouseOut && onMouseOut(e);
					}}
					onPointerDown={(e: React.MouseEvent<HTMLImageElement>) => {
						onPointerDown && onPointerDown(e);
					}}
					onPointerMove={(e: React.MouseEvent<HTMLImageElement>) => {
						onPointerMove && onPointerMove(e);
					}}
					onPointerUp={(e: React.MouseEvent<HTMLImageElement>) => {
						onPointerUp && onPointerUp(e);
					}}
					onPointerLeave={(e: React.MouseEvent<HTMLImageElement>) => {
						onPointerLeave && onPointerLeave(e);
					}}
					draggable={draggable}
				/>
			</div>
		</CacheProvider>
	);
});

// a srcset attribute value, or a function that builds one from an image url (called with `src`, and with `hoverSrc` while hovering)
export type ImageSrcset = string | ((src: string) => string | undefined);

const resolveSrcset = (src: string | undefined, srcset: ImageSrcset | undefined): string | undefined => {
	if (typeof srcset == 'function') {
		return (src && srcset(src)) || undefined;
	}
	return srcset;
};

export type ImageProps = ImageTemplatesLegalProps & ComponentProps<ImageProps>;

export type ImageTemplatesLegalProps = {
	alt: string;
	src: string;
	srcset?: ImageSrcset;
	sizes?: string;
	title?: string;
	fallback?: string;
	height?: string;
	hoverSrc?: string;
	onMouseOver?: (e: React.MouseEvent<HTMLImageElement>) => void;
	onMouseOut?: (e: React.MouseEvent<HTMLImageElement>) => void;
	onPointerDown?: (e: React.MouseEvent<HTMLImageElement>) => void;
	onPointerMove?: (e: React.MouseEvent<HTMLImageElement>) => void;
	onPointerUp?: (e: React.MouseEvent<HTMLImageElement>) => void;
	onPointerLeave?: (e: React.MouseEvent<HTMLImageElement>) => void;
	onError?: (e: React.MouseEvent<HTMLImageElement>) => void;
	onLoad?: (e: React.MouseEvent<HTMLImageElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
	lazy?: boolean;
	draggable?: boolean;
};
