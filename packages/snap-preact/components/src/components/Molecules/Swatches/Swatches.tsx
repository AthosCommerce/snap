import { h } from 'preact';
import classnames from 'classnames';
import { css } from '@emotion/react';
import { Theme, useTheme, CacheProvider, useTreePath, useSnap } from '../../../providers';
import { ComponentProps, SwatchOption, BreakpointsProps, StyleScript } from '../../../types';
import { useA11y, useComponent, useDisplaySettings } from '../../../hooks';
import type { SnapTemplates } from '../../../../../src';
import { defined, mergeProps, mergeStyles } from '../../../utilities';
import { Grid, GridProps } from '../Grid';
import { ImageProps, Image } from '../../Atoms/Image';
import deepmerge from 'deepmerge';
import { filters } from '@athoscommerce/snap-toolbox';
import Color from 'color';
import { Slideshow, SlideshowSlide, SlideshowProps } from '../Slideshow';
import { useState } from 'preact/hooks';

const defaultStyles: StyleScript<SwatchesProps> = ({ theme }) => {
	return css({
		'.ss__swatches__slideshow__swatch': {
			boxSizing: 'content-box',
			cursor: 'pointer',
			backgroundRepeat: 'no-repeat',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			border: `1px solid ${theme?.variables?.colors?.primary || '#333'}`,
			aspectRatio: '1/1',
			flexDirection: 'column',

			'.ss__swatches__slideshow__swatch__inner': {
				aspectRatio: '1/1',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
			},

			'&.ss__swatches__slideshow__swatch--selected': {
				border: `2px solid ${theme?.variables?.colors?.primary || '#333'}`,
			},

			'&.ss__swatches__slideshow__swatch--disabled:before, &.ss__swatches__slideshow__swatch--unavailable:before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				top: '50%',
				width: '90%',
				height: '1px',
				borderTop: '3px solid #eee',
				outline: '1px solid #ffff',
				transform: 'rotate(-45deg)',
			},

			'&.ss__swatches__slideshow__swatch--disabled': {
				position: 'relative',
				cursor: 'none',
				pointerEvents: 'none',
				opacity: 0.5,
			},

			'&.ss__swatches__slideshow__swatch--unavailable': {
				cursor: 'pointer',
				opacity: 0.5,
			},

			'&.ss__swatches__slideshow__swatch--dark': {
				color: '#fff',
			},
		},
	});
};

export function Swatches(properties: SwatchesProps) {
	const globalTheme: Theme = useTheme();
	const snap = useSnap();
	const globalTreePath = useTreePath();

	const defaultCarouselBreakpoints = {
		0: {
			carousel: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 10,
			},
		},
		768: {
			carousel: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				spaceBetween: 10,
			},
		},
		1200: {
			carousel: {
				slidesPerView: 5,
				slidesPerGroup: 5,
				spaceBetween: 10,
			},
		},
	};

	const defaultProps: Partial<SwatchesProps> = {
		// default props
		type: 'slideshow',
		hideLabels: true,
		treePath: globalTreePath,
	};

	let props = mergeProps('swatches', globalTheme, defaultProps, properties);

	const breakpoints = props.breakpoints || (props.type == 'slideshow' ? defaultCarouselBreakpoints : {});

	const displaySettings = useDisplaySettings(breakpoints);
	if (displaySettings && Object.keys(displaySettings).length) {
		const theme = deepmerge(props?.theme || {}, displaySettings?.theme || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });
		props = {
			...props,
			...displaySettings,
			theme,
		};
	}

	const { onSelect, disabled, options, hideLabels, disableStyles, className, internalClassName, type, slideshow, grid, treePath, customComponent } =
		props;

	if (customComponent) {
		const ComponentOverride = useComponent((snap as SnapTemplates)?.templates?.library.import.component.swatches || {}, customComponent);
		if (ComponentOverride) {
			return <ComponentOverride {...props} />;
		}
	}

	const subProps: SwatchesSubProps = {
		slideshow: {
			// default props
			internalClassName: 'ss__swatches__slideshow',
			loop: false,
			slidesToShow: 6, // Add explicit slidesToShow
			slidesToMove: 1, // Add explicit slidesToMove
			gap: 8, // Add smaller gap
			showNavigation: true, // Enable navigation
			showPagination: false, // Disable pagination for swatches
			autoPlay: false, // Disable autoplay
			...slideshow,
			// inherited props
			...defined({
				breakpoints,
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		grid: {
			// default props
			internalClassName: 'ss__swatches__grid',
			hideLabels: hideLabels,
			overflowButtonInGrid: true,
			disableOverflowAction: true,
			rows: 1,
			columns: 6,
			...grid,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		image: {
			// default props
			internalClassName: 'ss__swatches__image',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const selected = props.selected;

	const styling = mergeStyles<SwatchesProps>(props, defaultStyles);

	// selection state
	const [selection, setSelection] = useState((selected as SwatchOption) || undefined);

	const makeSelection = (e: React.MouseEvent<HTMLElement>, option: SwatchOption) => {
		if (onSelect) {
			onSelect(e, option);
		}
		setSelection(option);
	};

	const slidesArray: SlideshowSlide[] = [];

	if (type == 'slideshow') {
		{
			options.forEach((option) => {
				const label = option.label;
				const selected = selection?.value == option.value;
				let isDark = false;
				try {
					const color = new Color(
						option.background ? option.background.toLowerCase() : option.backgroundImageUrl ? `` : option.value.toString().toLowerCase()
					);
					isDark = color.isDark();
				} catch (err) {}

				slidesArray.push({
					onClick: (e) => !disabled && !option?.disabled && makeSelection(e as any, option),
					content: (
						<div
							className={classnames(`ss__swatches__slideshow__swatch`, {
								'ss__swatches__slideshow__swatch--selected': selected,
								'ss__swatches__slideshow__swatch--disabled': option?.disabled,
								'ss__swatches__slideshow__swatch--unavailable': option?.available === false,
								'ss__swatches__slideshow__swatch--dark': isDark,
							})}
							title={label}
							ref={(e) => useA11y(e)}
							aria-disabled={option.disabled || option?.available === false}
							role="option"
							aria-selected={selected}
						>
							<div
								className={classnames(
									`ss__swatches__slideshow__swatch__inner`,
									`ss__swatches__slideshow__swatch__inner--${filters.handleize(option.value?.toString())}`
								)}
								style={{ background: option.background ? option.background : option.backgroundImageUrl ? `` : option.value }}
							>
								{!option.background && option.backgroundImageUrl ? (
									<Image {...subProps.image} src={option.backgroundImageUrl} alt={option.label || option.value?.toString()} />
								) : null}
								{!hideLabels && <span className="ss__swatches__slideshow__swatch__value">{label || option.value}</span>}
							</div>
						</div>
					),
				});
			});
		}
	}

	return typeof options == 'object' && options?.length ? (
		<CacheProvider>
			<div {...styling} className={classnames('ss__swatches', className, internalClassName)}>
				{type == 'slideshow' ? (
					<Slideshow slides={slidesArray} {...subProps.slideshow} />
				) : (
					<Grid
						{...subProps.grid}
						options={options}
						onSelect={(e, option) => {
							!disabled && makeSelection(e as any, option);
						}}
						selected={selected}
					/>
				)}
			</div>
		</CacheProvider>
	) : null;
}

export type SwatchesProps = {
	breakpoints?: BreakpointsProps;
} & SwatchesTemplatesLegalProps &
	ComponentProps<SwatchesProps>;

export type SwatchesTemplatesLegalProps = {
	options: SwatchOption[];
	onSelect?: (e: React.MouseEvent<HTMLElement>, option: SwatchOption) => void;
	selected?: SwatchOption;
	hideLabels?: boolean;
	disabled?: boolean;
	slideshow?: Partial<SlideshowProps>;
	grid?: Partial<GridProps>;
	type?: 'slideshow' | 'grid';
};

interface SwatchesSubProps {
	slideshow: Partial<SlideshowProps>;
	grid: Partial<GridProps>;
	image: Partial<ImageProps>;
}
