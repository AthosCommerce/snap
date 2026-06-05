import { h } from 'preact';
import { createPortal } from 'preact/compat';
import { useState, useEffect, useRef } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { css } from '@emotion/react';
import classnames from 'classnames';

import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, StyleScript } from '../../../types';
import { mergeProps, mergeStyles } from '../../../utilities';

const ZOOM_MIN = 1;
const ZOOM_MAX = 4;
const ZOOM_STEP = 0.5;
const SWIPE_THRESHOLD = 40; // px of horizontal travel before a touch swipe paginates

const clampZoom = (value: number): number => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, value));

const defaultStyles: StyleScript<GalleryProps> = () => {
	return css({
		position: 'fixed',
		inset: 0,
		zIndex: 10010, // above the quickview modal (9998) and dropdown portals (9999)
		display: 'flex',
		flexDirection: 'column',
		background: 'rgba(0, 0, 0, 0.9)',

		'& .ss__gallery__toolbar': {
			display: 'flex',
			justifyContent: 'flex-end',
			alignItems: 'center',
			gap: '8px',
			padding: '12px 16px',
		},
		'& .ss__gallery__button': {
			background: 'rgba(255, 255, 255, 0.12)',
			color: '#fff',
			border: 'none',
			borderRadius: '4px',
			width: '40px',
			height: '40px',
			fontSize: '1.3em',
			lineHeight: 1,
			cursor: 'pointer',
			'&:disabled': {
				opacity: 0.4,
				cursor: 'default',
			},
		},
		'& .ss__gallery__counter': {
			color: '#fff',
			marginRight: 'auto',
			padding: '0 8px',
			fontSize: '0.9em',
		},
		'& .ss__gallery__stage': {
			position: 'relative',
			flex: '1 1 auto',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			overflow: 'hidden',
		},
		'& .ss__gallery__image': {
			maxWidth: '90vw',
			maxHeight: '80vh',
			objectFit: 'contain',
			userSelect: 'none',
			transformOrigin: 'center center',
			transition: 'transform 0.05s linear',
		},
		'& .ss__gallery__nav': {
			// Full-height click strips down each edge, with the arrow vertically centered.
			position: 'absolute',
			top: 0,
			bottom: 0,
			height: '100%',
			width: '64px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'rgba(255, 255, 255, 0.06)',
			color: '#fff',
			border: 'none',
			borderRadius: 0,
			fontSize: '2em',
			lineHeight: 1,
			cursor: 'pointer',
			zIndex: 1,
			'&:hover': {
				background: 'rgba(255, 255, 255, 0.14)',
			},
		},
		'& .ss__gallery__nav--prev': {
			left: 0,
		},
		'& .ss__gallery__nav--next': {
			right: 0,
		},
	});
};

export const Gallery = observer((properties: GalleryProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultProps: Partial<GalleryProps> = {
		treePath: globalTreePath,
		startIndex: 0,
	};

	const props = mergeProps('gallery', globalTheme, defaultProps, properties);
	const { images, open, startIndex, onClose, alt, className, internalClassName } = props;

	const [index, setIndex] = useState<number>(startIndex || 0);
	const [zoom, setZoom] = useState<number>(ZOOM_MIN);
	const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const dragRef = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);
	const touchRef = useRef<{ x: number; y: number } | null>(null);

	const count = images?.length || 0;

	// Reset to the clicked image (and clear zoom/pan) whenever the gallery opens or the start changes.
	useEffect(() => {
		if (open) {
			setIndex(Math.min(Math.max(startIndex || 0, 0), Math.max(count - 1, 0)));
			setZoom(ZOOM_MIN);
			setPan({ x: 0, y: 0 });
		}
	}, [open, startIndex, count]);

	const goTo = (next: number) => {
		if (count === 0) return;
		const wrapped = (next + count) % count;
		setIndex(wrapped);
		setZoom(ZOOM_MIN);
		setPan({ x: 0, y: 0 });
	};
	const showPrev = () => goTo(index - 1);
	const showNext = () => goTo(index + 1);
	const zoomIn = () => setZoom((z) => clampZoom(z + ZOOM_STEP));
	const zoomOut = () =>
		setZoom((z) => {
			const next = clampZoom(z - ZOOM_STEP);
			if (next === ZOOM_MIN) setPan({ x: 0, y: 0 });
			return next;
		});

	// Keyboard controls while open.
	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'Escape':
					onClose && onClose();
					break;
				case 'ArrowRight':
					showNext();
					break;
				case 'ArrowLeft':
					showPrev();
					break;
				case '+':
				case '=':
					zoomIn();
					break;
				case '-':
				case '_':
					zoomOut();
					break;
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open, index, count]);

	const styling = mergeStyles<GalleryProps>(props, defaultStyles);

	if (!open || count === 0) return null;

	// Drag-to-pan when zoomed in.
	const onPointerDown = (e: any) => {
		if (zoom <= ZOOM_MIN) return;
		dragRef.current = { startX: e.clientX, startY: e.clientY, baseX: pan.x, baseY: pan.y };
	};
	const onPointerMove = (e: any) => {
		if (!dragRef.current) return;
		setPan({ x: dragRef.current.baseX + (e.clientX - dragRef.current.startX), y: dragRef.current.baseY + (e.clientY - dragRef.current.startY) });
	};
	const endDrag = () => {
		dragRef.current = null;
	};

	// Dismiss when the dark backdrop itself is clicked (not the image or a control). Works on
	// the overlay root and the stage, both of which are `e.currentTarget` only for backdrop hits.
	const onBackdropClick = (e: any) => {
		if (e.target === e.currentTarget) onClose && onClose();
	};

	// Mobile: horizontal touch-swipe paginates (only when not zoomed — zoom uses drag-to-pan).
	const onTouchStart = (e: any) => {
		if (e.touches && e.touches.length === 1) {
			touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
		}
	};
	const onTouchEnd = (e: any) => {
		const start = touchRef.current;
		touchRef.current = null;
		if (!start || zoom > ZOOM_MIN || count <= 1) return;
		const touch = e.changedTouches && e.changedTouches[0];
		if (!touch) return;
		const dx = touch.clientX - start.x;
		const dy = touch.clientY - start.y;
		// Require a dominantly-horizontal swipe past the threshold.
		if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
			if (dx < 0) showNext();
			else showPrev();
		}
	};

	const currentSrc = images[index];

	return createPortal(
		<CacheProvider>
			<div
				{...styling}
				className={classnames('ss__gallery', className, internalClassName)}
				role="dialog"
				aria-modal="true"
				aria-label="Image gallery"
				onClick={onBackdropClick}
			>
				<div className="ss__gallery__toolbar">
					{count > 1 && (
						<span className="ss__gallery__counter">
							{index + 1} / {count}
						</span>
					)}
					<button
						type="button"
						className="ss__gallery__button ss__gallery__zoom-out"
						aria-label="Zoom out"
						disabled={zoom <= ZOOM_MIN}
						onClick={zoomOut}
					>
						−
					</button>
					<button
						type="button"
						className="ss__gallery__button ss__gallery__zoom-in"
						aria-label="Zoom in"
						disabled={zoom >= ZOOM_MAX}
						onClick={zoomIn}
					>
						+
					</button>
					<button type="button" className="ss__gallery__button ss__gallery__close" aria-label="Close gallery" onClick={() => onClose && onClose()}>
						×
					</button>
				</div>

				<div className="ss__gallery__stage" onClick={onBackdropClick} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
					{count > 1 && (
						<button type="button" className="ss__gallery__nav ss__gallery__nav--prev" aria-label="Previous image" onClick={showPrev}>
							‹
						</button>
					)}

					<img
						className="ss__gallery__image"
						src={currentSrc}
						alt={alt || ''}
						draggable={false}
						style={{
							transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
							cursor: zoom > ZOOM_MIN ? (dragRef.current ? 'grabbing' : 'grab') : 'default',
						}}
						onPointerDown={onPointerDown}
						onPointerMove={onPointerMove}
						onPointerUp={endDrag}
						onPointerLeave={endDrag}
					/>

					{count > 1 && (
						<button type="button" className="ss__gallery__nav ss__gallery__nav--next" aria-label="Next image" onClick={showNext}>
							›
						</button>
					)}
				</div>
			</div>
		</CacheProvider>,
		document.body
	);
});

export type GalleryProps = {
	images: string[];
	open: boolean;
	startIndex?: number;
	onClose?: () => void;
	alt?: string;
} & ComponentProps<GalleryProps>;
