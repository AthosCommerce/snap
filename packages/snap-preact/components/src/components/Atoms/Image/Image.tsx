import { h } from 'preact';

import { useState, useEffect, useRef, useMemo } from 'preact/hooks';
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
		buildSrcsetUrl,
		fallback,
		title,
		hoverSrc,
		hoverSrcset,
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

	const prevSrcRef = useRef('');
	useEffect(() => {
		prevSrcRef.current = src;
	});
	if (prevSrcRef.current && prevSrcRef.current != src) {
		setVisibile(false);
	}

	const styling = mergeStyles<ImageProps>(props, defaultStyles);

	// when `srcset` is an array of widths and no `hoverSrcset` is provided, the same widths are applied to `hoverSrc`
	const srcsetUrlBuilder = buildSrcsetUrl || defaultBuildSrcsetUrl;
	const srcsetAttribute = useMemo(() => resolveSrcset(src, srcset, srcsetUrlBuilder), [src, srcset, srcsetUrlBuilder]);
	const hoverSrcsetAttribute = useMemo(
		() => resolveSrcset(hoverSrc, hoverSrcset ?? (Array.isArray(srcset) ? srcset : undefined), srcsetUrlBuilder),
		[hoverSrc, hoverSrcset, srcset, srcsetUrlBuilder]
	);

	return (
		<CacheProvider>
			<div {...styling} className={classnames('ss__image', { 'ss__image--hidden': !visibile }, className, internalClassName)}>
				<img
					src={(isHovering ? hoverSrc : src) || fallback}
					srcSet={isHovering ? hoverSrcsetAttribute : srcsetAttribute}
					sizes={sizes}
					alt={alt}
					title={title || alt}
					loading={lazy ? 'lazy' : undefined}
					onLoad={(e: React.MouseEvent<HTMLImageElement>) => {
						setVisibile(true);
						onLoad && onLoad(e);
					}}
					onClick={(e: React.MouseEvent<HTMLImageElement>) => onClick && onClick(e)}
					onError={(e: React.MouseEvent<HTMLImageElement>) => {
						const imageElement = e.target as HTMLImageElement;
						if (imageElement.getAttribute('srcset')) {
							// srcset candidates take precedence over src, so remove the srcset to retry with src (sizes is ignored without a srcset)
							imageElement.removeAttribute('srcset');
						} else {
							imageElement.src = fallback || '';
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

export type SrcsetUrlBuilder = (src: string, width: number) => string;

// default `buildSrcsetUrl` - builds the url of an image at a given width by setting the `width` query parameter (supported by the Shopify CDN)
export const defaultBuildSrcsetUrl: SrcsetUrlBuilder = (src, width) => {
	const hashIndex = src.indexOf('#');
	const hash = hashIndex === -1 ? '' : src.slice(hashIndex);
	const url = hashIndex === -1 ? src : src.slice(0, hashIndex);
	const queryIndex = url.indexOf('?');
	const path = queryIndex === -1 ? url : url.slice(0, queryIndex);
	const params = (queryIndex === -1 ? [] : url.slice(queryIndex + 1).split('&')).filter((param) => param && !param.startsWith('width='));
	params.push(`width=${width}`);
	return `${path}?${params.join('&')}${hash}`;
};

// encodes whitespace in a srcset candidate url (whitespace separates the url from its descriptor)
const encodeSrcsetUrl = (url: string): string => url.replace(/\s/g, (char) => encodeURIComponent(char));

// resolves a srcset prop (srcset string or array of widths) into a srcset attribute value
const resolveSrcset = (src: string | undefined, srcset: string | number[] | undefined, buildSrcsetUrl: SrcsetUrlBuilder): string | undefined => {
	if (!Array.isArray(srcset)) {
		return srcset;
	}
	if (!src) {
		return undefined;
	}
	// width descriptors must be unique positive integers (numeric strings from loosely typed config are coerced)
	const widths = Array.from(new Set(srcset.map(Number).filter((width) => Number.isInteger(width) && width > 0)));
	return widths.map((width) => `${encodeSrcsetUrl(buildSrcsetUrl(src, width))} ${width}w`).join(', ') || undefined;
};

export type ImageProps = ImageTemplatesLegalProps & ComponentProps<ImageProps>;

export type ImageTemplatesLegalProps = {
	alt: string;
	src: string;
	srcset?: string | number[];
	sizes?: string;
	buildSrcsetUrl?: SrcsetUrlBuilder;
	title?: string;
	fallback?: string;
	height?: string;
	hoverSrc?: string;
	hoverSrcset?: string | number[];
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
