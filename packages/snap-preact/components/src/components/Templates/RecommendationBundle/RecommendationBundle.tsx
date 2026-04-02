import { h } from 'preact';
import { jsx, css } from '@emotion/react';
import classnames from 'classnames';
import { useRef, useEffect, useState, useMemo } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import deepmerge from 'deepmerge';
import { Carousel, CarouselProps as CarouselProps } from '../../Molecules/Carousel';
import { Result, ResultProps } from '../../Molecules/Result';
import { cloneWithProps, defined, mergeProps, mergeStyles } from '../../../utilities';
import { Theme, useTheme, CacheProvider, useTreePath } from '../../../providers';
import { ComponentProps, BreakpointsProps, StyleScript, BreakpointsEntry, JSXComponent } from '../../../types';
import { useDisplaySettings } from '../../../hooks/useDisplaySettings';
import { RecommendationProfileTracker } from '../../Trackers/Recommendation/ProfileTracker';
import { ResultTracker } from '../../Trackers/ResultTracker';
import { IconProps, IconType } from '../../Atoms/Icon';
import type { RecommendationController } from '@athoscommerce/snap-controller';
import type { CartStore, Product } from '@athoscommerce/snap-store-mobx';
import { BundleSelector, BundleSelectorProps } from './BundleSelector';
import { BundledCTA, BundledCTAProps } from './BundleCTA';
import { Lang } from '../../../hooks';
import { useIntersection } from '../../../hooks';
import { componentNameToClassName } from '../../../utilities/componentNameToClassName';

const defaultStyles: StyleScript<RecommendationBundleProps & { hasSeed: boolean; carouselEnabled: boolean }> = ({
	vertical,
	separatorIcon,
	carousel,
	ctaInline,
	hasSeed,
	hideSeed,
	carouselEnabled,
	limit,
	alias: inherits,
}) => {
	let classNamePrefix = 'ss__recommendation-bundle';
	if (inherits) {
		classNamePrefix = `ss__${componentNameToClassName(inherits)}`;
	}

	const slidesPerView = carousel?.slidesPerView!;

	return css({
		[`.${classNamePrefix}__wrapper`]: {
			display: 'flex',
			maxWidth: '100%',
			margin: '0',
			padding: '0',
		},

		[`.${classNamePrefix}__wrapper__selector--seed`]: {
			width: `${vertical ? '100%' : 'auto'}`,
			margin: `${!separatorIcon ? 'auto !important' : 'initial'}`,
		},

		[`.${classNamePrefix}__wrapper__seed-container`]: {
			width: vertical ? '100%' : `calc(100% / ${slidesPerView + (!ctaInline ? 0 : 1)})`,
		},

		[`.${classNamePrefix}__wrapper__cta`]: {
			width: vertical ? '100%' : `${!ctaInline ? '100%' : `calc(100% / ${(carouselEnabled ? slidesPerView : limit || 0) + 1})`}`,
			textAlign: 'center',

			[`.${classNamePrefix}__wrapper__cta__subtotal__prices`]: {
				display: 'block',
			},

			[`.${classNamePrefix}__wrapper__cta__button--added`]: {
				cursor: 'none',
				pointerEvents: 'none',
				opacity: '.7',
			},
		},

		[`.${classNamePrefix}__wrapper__carousel`]: {
			boxSizing: 'border-box',
			width: vertical ? '100%' : `calc(calc(100% / ${slidesPerView + (!ctaInline ? 0 : 1)}) * ${slidesPerView - (hasSeed && !hideSeed ? 1 : 0)})`,
		},

		[`.${classNamePrefix}__wrapper--seed-in-carousel`]: {
			[`.${classNamePrefix}__wrapper__cta`]: {
				width: vertical ? '100%' : `calc(100% / ${carousel?.slidesPerView! + (!ctaInline ? 0 : 1)})`,
			},

			[`.${classNamePrefix}__wrapper__carousel`]: {
				width: vertical ? '100%' : `calc(calc(100% / ${carousel?.slidesPerView! + (!ctaInline ? 0 : 1)}) * ${carousel?.slidesPerView})`,
				padding: '0',
			},
		},

		'.swiper-slide, .swiper-slide-visible.swiper-last-visible-slide': {
			[`.${classNamePrefix}__wrapper__selector__icon`]: {
				display: 'none',
			},
		},

		'.swiper-slide-visible': {
			[`.${classNamePrefix}__wrapper__selector__icon`]: {
				display: 'block',
			},
		},

		[`.${classNamePrefix}__wrapper--vertical`]: {
			flexDirection: 'column',
		},

		[`.${classNamePrefix}__wrapper__selector`]: {
			alignItems: 'baseline',
			position: 'relative',

			[`&.${classNamePrefix}__wrapper__selector--last`]: {
				[`.${classNamePrefix}__wrapper__selector__icon`]: {
					display: 'none',
				},
			},

			[`.${classNamePrefix}__wrapper__selector__result-wrapper__seed-badge`]: {
				position: 'absolute',
				top: '0',
				left: '0',
				zIndex: '1',
			},

			[`.${classNamePrefix}__wrapper__selector__icon`]: {
				position: 'absolute',
				right: '-1em',
				top: '140px',
			},

			[`.${classNamePrefix}__wrapper__selector__result-wrapper`]: {
				alignItems: 'center',
				position: 'relative',
				margin: `0px ${5 + (Number(carousel?.spaceBetween) || 0)}px`,
			},
			[`.${classNamePrefix}__wrapper__selector__result-wrapper__checkbox`]: {
				position: 'absolute',
				top: '0',
				right: '0',
				//needs to be above 100 to get above badges
				zIndex: '101',
				cursor: 'pointer',
			},
		},
	});
};

export const RecommendationBundle = observer((properties: RecommendationBundleProps) => {
	const globalTheme: Theme = useTheme();
	const globalTreePath = useTreePath();

	const defaultCarouselBreakpoints = {
		0: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 10,
			ctaInline: false,
		},
		768: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 10,
		},
		1200: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 10,
		},
	};

	const defaultProps: Partial<RecommendationBundleProps> = {
		// default props
		breakpoints: JSON.parse(JSON.stringify(defaultCarouselBreakpoints)),
		hideCheckboxes: false,
		separatorIcon: 'plus-thin',
		seedText: 'This Product',
		separatorIconSeedOnly: true,
		ctaIcon: 'bag',
		ctaButtonText: 'Add All To Cart',
		ctaButtonSuccessText: 'Bundle Added!',
		ctaButtonSuccessTimeout: 2000,
		ctaInline: true,
		onAddToCart: (e, items) => controller?.addToCart && controller.addToCart(items),
		title: properties.controller?.store?.profile?.display?.templateParameters?.title,
		description: properties.controller?.store?.profile?.display?.templateParameters?.description,
		treePath: globalTreePath,
	};

	//mergeprops only uses names that are passed via properties, so this cannot be put in the defaultProps
	const _properties = {
		name: properties.controller?.store?.profile?.tag?.toLowerCase(),
		...properties,
	};

	let props = mergeProps(_properties.alias || 'recommendationBundle', globalTheme, defaultProps, _properties);

	let classNamePrefix = 'ss__recommendation-bundle';
	if (props.alias) {
		classNamePrefix = `ss__${componentNameToClassName(props.alias)}`;
	}

	let displaySettings: BreakpointsEntry | undefined;
	if (!(properties.theme?.name || globalTheme.name)) {
		displaySettings = useDisplaySettings(props.breakpoints!);
		if (displaySettings && Object.keys(displaySettings).length) {
			const theme = deepmerge(props?.theme || {}, displaySettings?.theme || {}, { arrayMerge: (destinationArray, sourceArray) => sourceArray });
			props = {
				...props,
				...displaySettings,
				theme,
			};
		}
	}

	const {
		title,
		description,
		controller,
		breakpoints,
		results,
		carousel,
		preselectedCount,
		separatorIcon,
		hideCheckboxes,
		limit,
		seedText,
		vertical,
		onAddToCart,
		separatorIconSeedOnly,
		resultComponent,
		ctaSlot,
		hideSeed,
		ctaButtonText,
		ctaButtonSuccessText,
		ctaButtonSuccessTimeout,
		disableStyles,
		ctaIcon,
		ctaInline,
		hideSeedText,
		lazyRender,
		className,
		internalClassName,
		alias,
		style: _,
		styleScript: __,
		themeStyleScript: ___,
		treePath,
		...additionalProps
	} = props;

	const mergedlazyRender = {
		enabled: true,
		offset: '10%',
		...lazyRender,
	};

	const mergedCarouselProps = {
		enabled: true,
		loop: false,
		spaceBetween: 10,
		...carousel,
	};
	const { seedInCarousel, prevButton, nextButton, hideButtons, loop, spaceBetween, pagination } = mergedCarouselProps;

	const carouselEnabled = mergedCarouselProps.enabled;

	if (!controller || controller.type !== 'recommendation') {
		throw new Error(`<RecommendationBundle> Component requires 'controller' prop with an instance of RecommendationController`);
	}

	let resultsToRender: Product[] = results || controller.store?.results;

	if (limit) {
		resultsToRender = resultsToRender.slice(0, hideSeed && resultsToRender.filter((result) => result.bundleSeed == true).length ? limit + 1 : limit);
	}

	const cartStore = controller.store.cart;

	if (!cartStore) {
		throw new Error(`<RecommendationBundle> Component requires 'cartStore' to exist in the recommendation store`);
	}

	if (!(results && results.length) && !controller.store?.results?.length) {
		controller.log.error(`<RecommendationBundle> Component has no results to render!`);
		return null;
	}

	const seed = results
		? results.filter((result) => result.bundleSeed == true).pop()
		: controller.store?.results?.filter((result) => result.bundleSeed == true).pop();

	const resultSubProps: Partial<ResultProps> = alias == 'recommendationBundleList' ? { hideImage: true, hideBadge: true } : {};

	const subProps: RecommendationBundleSubProps = {
		carousel: {
			loop: loop,
			// default props
			internalClassName: 'ss__recommendation__carousel',
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
		result: {
			// default props
			internalClassName: 'ss__recommendation__result',
			...resultSubProps,
			// inherited props
			...defined({
				disableStyles,
			}),
			// component theme overrides
			theme: props?.theme,
			treePath,
		},
	};

	const hasSeed = Boolean(resultsToRender.filter((result) => result.bundleSeed == true).length);

	let slidesPerView = props.carousel?.slidesPerView || props.slidesPerView;
	if (!slidesPerView) {
		slidesPerView = 2;
	} else if (resultsToRender.length < Number(slidesPerView)) {
		slidesPerView = resultsToRender.length;
	}

	const styling = mergeStyles<RecommendationBundleProps & { hasSeed: boolean; carouselEnabled: boolean }>(
		{ ...props, carousel: { ...mergedCarouselProps, slidesPerView }, hasSeed, carouselEnabled },
		defaultStyles
	);

	const _preSelectedCount = typeof preselectedCount == 'number' ? preselectedCount : carouselEnabled ? slidesPerView : resultsToRender.length;

	//this resets the selected items if the results to render changes
	// so you dont end up with something selected that is no longer rendered
	useEffect(() => {
		cartStore.reset();

		if (_preSelectedCount) {
			resultsToRender?.forEach((result, idx) => {
				if (idx < Number(_preSelectedCount)) {
					cartStore.addItems([result]);
				}
			});
		}
	}, [resultsToRender.length]);

	const selectedItems = cartStore.items;

	const modifiedBreakpoints: BreakpointsProps = { ...breakpoints };

	if (carouselEnabled) {
		const adjustSlides = (obj: BreakpointsEntry) => {
			// fallback in case slides per view/group were not provided in breakpoint...
			const currentBreakpointSlidesPerView = obj?.slidesPerView || obj.slidesPerView || 2;
			const currentBreakpointSlidesPerGroup = obj?.slidesPerGroup || obj.slidesPerGroup || 2;

			let newSlidesPerView = currentBreakpointSlidesPerView;
			let newSlidesPerGroup = currentBreakpointSlidesPerGroup;

			const resultCount = !hasSeed || seedInCarousel ? resultsToRender.length : resultsToRender.length - 1;

			if (resultCount) {
				if (resultCount >= currentBreakpointSlidesPerView) {
					newSlidesPerView = currentBreakpointSlidesPerView - (!seedInCarousel && hasSeed ? 1 : 0);
					if (!seedInCarousel) {
						newSlidesPerGroup = currentBreakpointSlidesPerGroup! - 1 || 1;
					}
				} else {
					(newSlidesPerView = resultCount), (newSlidesPerGroup = resultCount);
				}
			}
			return {
				slidesPerView: newSlidesPerView,
				slidesPerGroup: newSlidesPerGroup,
			};
		};

		//no breakpoint props allowed in templates
		if (!(properties.theme?.name || globalTheme.name)) {
			Object.keys(props.breakpoints!).forEach((breakpoint) => {
				const obj = props.breakpoints![breakpoint as keyof typeof props.breakpoints];

				const { slidesPerView: adjustedSlidesPerView, slidesPerGroup: adjustedSlidesPerGroup } = adjustSlides(obj);

				modifiedBreakpoints[breakpoint as keyof typeof props.breakpoints] = {
					...modifiedBreakpoints[breakpoint as keyof typeof props.breakpoints],
					slidesPerView: adjustedSlidesPerView,
					slidesPerGroup: adjustedSlidesPerGroup,
				};
			});
		} else {
			const { slidesPerView: adjustedSlidesPerView, slidesPerGroup: adjustedSlidesPerGroup } = adjustSlides({
				...mergedCarouselProps,
				slidesPerView: slidesPerView,
			});

			displaySettings = {
				...mergedCarouselProps,
				slidesPerView: adjustedSlidesPerView,
				slidesPerGroup: adjustedSlidesPerGroup,
			};
		}
	}

	const onProductSelect = (product: Product) => {
		if (product) {
			const idx = selectedItems.findIndex((result) => result.id == product.id);
			//is it in the selected items?
			if (idx > -1) {
				//already selected, deselect it now
				cartStore.removeItems([product]);

				if (cartStore.items.length == 0 && seed) {
					//we dont call addItems here to prevent tracking
					cartStore.items.push(seed);
				}
			} else {
				//add it to the list;
				cartStore.addItems([product]);
			}
		}
	};
	const addToCart = (e: MouseEvent) => {
		// add to cart tracking
		controller.addToCart(selectedItems);

		//call the function passed
		onAddToCart && onAddToCart(e, selectedItems);
	};

	const setSeedwidth = () => {
		if (seedRef.current) {
			// @ts-ignore - todo can this be typed appropriatly?
			const seedElem: HTMLElement = seedRef.current?.base;
			// @ts-ignore - todo can this be typed appropriatly?
			const carouselElem: HTMLElement = carouselRef.current?.base;

			const visibleSlide = carouselElem?.querySelector(`.swiper-slide-visible .${classNamePrefix}__wrapper__selector`) as HTMLElement;
			const width = visibleSlide?.offsetWidth;

			if (seedElem) {
				seedElem.style.width = `${width}px`;
			}
		}
	};

	const seedRef = useRef();
	const carouselRef = useRef();
	const [isVisible, setIsVisible] = useState(false);
	const recsRef = useRef(null);
	const inView = mergedlazyRender?.enabled ? useIntersection(recsRef, `${mergedlazyRender.offset} 0px ${mergedlazyRender.offset} 0px`, true) : true;
	if (inView) {
		setIsVisible(true);
	}

	//initialize lang
	const defaultLang: Partial<RecommendationBundleLang> = {
		seedText: {
			value: seedText,
		},
		ctaButtonText: {
			value: ctaButtonText,
		},
		ctaButtonSuccessText: {
			value: ctaButtonSuccessText,
		},
		ctaSubtotalTitle: {
			value: `Subtotal for ${cartStore.count} items`,
		},
	};

	//deep merge with props.lang
	const lang = deepmerge(defaultLang, props.lang || {});

	const renderedResults = useMemo(() => {
		return resultsToRender.map((result, idx) => {
			const isSeed = Boolean(result.bundleSeed);
			const selected = selectedItems.findIndex((item) => item.id == result.id) > -1;

			let attributes: BundleSelectorProps = {
				onCheck: (e: any) => {
					e.stopPropagation();
					onProductSelect(result);
				},
				checked: selected,
				hideCheckboxes: hideCheckboxes,
				theme: props.theme,
				icon: separatorIconSeedOnly ? false : separatorIcon,
				className: idx + 1 == resultsToRender.length ? 'ss__recommendation-bundle__wrapper__selector--last' : '',
				classNamePrefix,
				treePath,
			};
			if (isSeed) {
				attributes = {
					...attributes,
					seedText: seedText,
					seed: true,
					icon: separatorIcon,
					lang: { seedText: lang.seedText },
				};
			}
			return !isSeed || ((seedInCarousel || carousel?.enabled == false) && isSeed && !hideSeed) ? (
				<ResultTracker key={result.id} controller={controller} result={result} track={{ impression: Boolean(!isSeed) }}>
					<BundleSelector {...attributes}>
						{resultComponent ? (
							cloneWithProps(resultComponent, { controller: controller, treePath: treePath, result: result, seed: isSeed, selected, onProductSelect })
						) : (
							<Result {...subProps.result} controller={controller} result={result} />
						)}
					</BundleSelector>
				</ResultTracker>
			) : null;
		});
	}, [
		resultsToRender,
		selectedItems,
		hideCheckboxes,
		separatorIconSeedOnly,
		separatorIcon,
		seedInCarousel,
		hideSeed,
		resultComponent,
		props.theme,
		seedText,
	]);

	if (hideSeedText) {
		delete lang.seedText.value;
	}

	return resultsToRender?.length ? (
		<CacheProvider>
			<div
				{...styling}
				ref={recsRef}
				className={classnames(classNamePrefix, { [`${classNamePrefix}--stacked`]: !ctaInline }, className, internalClassName)}
			>
				{isVisible ? (
					<RecommendationProfileTracker controller={controller}>
						{title && (
							<h3 className={`${classNamePrefix}__title`}>
								<span>{title}</span>
							</h3>
						)}
						{description && (
							<p className="ss__recommendation-bundle__description">
								<span>{description}</span>
							</p>
						)}
						<div
							className={classnames(`${classNamePrefix}__wrapper`, {
								[`${classNamePrefix}__wrapper--seed-in-carousel`]: seedInCarousel,
								[`${classNamePrefix}__wrapper--vertical`]: vertical,
							})}
						>
							{carouselEnabled ? (
								<>
									{!seedInCarousel && !hideSeed && seed && (
										<div className={`${classNamePrefix}__wrapper__seed-container`}>
											<ResultTracker controller={controller} result={seed} track={{ impression: false }}>
												<BundleSelector
													seedText={seedText}
													seed={true}
													title={seed.display.mappings.core?.name}
													onCheck={(e) => {
														e.stopPropagation();
														onProductSelect(seed);
													}}
													checked={selectedItems.findIndex((item) => item.id == seed.id) > -1}
													icon={separatorIcon}
													hideCheckboxes={hideCheckboxes}
													theme={props.theme}
													ref={seedRef}
													treePath={treePath}
													classNamePrefix={classNamePrefix}
													lang={{ seedText: lang.seedText }}
												>
													{(() => {
														if (resultComponent && controller) {
															return cloneWithProps(resultComponent, {
																controller,
																seed: true,
																selected: selectedItems.findIndex((item) => item.id == seed.id) > -1,
																onProductSelect,
																result: seed,
																treePath,
															});
														} else {
															return <Result {...subProps.result} controller={controller} result={seed} />;
														}
													})()}
												</BundleSelector>
											</ResultTracker>
										</div>
									)}
									<div className={`${classNamePrefix}__wrapper__carousel`}>
										<Carousel
											prevButton={prevButton}
											nextButton={nextButton}
											hideButtons={hideButtons}
											loop={loop}
											spaceBetween={spaceBetween}
											pagination={pagination}
											breakpoints={modifiedBreakpoints}
											watchSlidesProgress={true}
											observer={true}
											vertical={vertical}
											onResize={() => setSeedwidth()}
											{...subProps.carousel}
											{...additionalProps}
											{...displaySettings}
											ref={carouselRef}
											children={renderedResults}
										/>
									</div>
								</>
							) : (
								<>{renderedResults}</>
							)}

							{ctaInline && (
								<BundledCTA
									ctaSlot={ctaSlot}
									cartStore={cartStore}
									onAddToCart={(e) => addToCart(e as unknown as MouseEvent)}
									ctaButtonText={ctaButtonText}
									ctaButtonSuccessText={ctaButtonSuccessText}
									ctaButtonSuccessTimeout={ctaButtonSuccessTimeout}
									ctaIcon={ctaIcon}
									treePath={treePath}
									classNamePrefix={classNamePrefix}
									lang={{
										ctaButtonSuccessText: lang.ctaButtonSuccessText,
										ctaButtonText: lang.ctaButtonText,
										ctaSubtotalTitle: lang.ctaSubtotalTitle,
									}}
								/>
							)}
						</div>
						{!ctaInline && (
							<BundledCTA
								ctaSlot={ctaSlot}
								cartStore={cartStore}
								onAddToCart={(e) => addToCart(e as unknown as MouseEvent)}
								ctaButtonText={ctaButtonText}
								ctaButtonSuccessText={ctaButtonSuccessText}
								ctaButtonSuccessTimeout={ctaButtonSuccessTimeout}
								ctaIcon={ctaIcon}
								treePath={treePath}
								classNamePrefix={classNamePrefix}
								lang={{
									ctaButtonSuccessText: lang.ctaButtonSuccessText,
									ctaButtonText: lang.ctaButtonText,
									ctaSubtotalTitle: lang.ctaSubtotalTitle,
								}}
							/>
						)}
					</RecommendationProfileTracker>
				) : (
					<RecommendationProfileTracker controller={controller}>
						{resultsToRender.map((result) => (
							<ResultTracker controller={controller} result={result}>
								<></>
							</ResultTracker>
						))}
					</RecommendationProfileTracker>
				)}
			</div>
		</CacheProvider>
	) : null;
});

type BundleCarouselProps = {
	controller?: RecommendationController;
	enabled?: boolean;
	seedInCarousel?: boolean;
	slidesPerView?: number;
} & Partial<Omit<CarouselProps, 'slidesPerView'>>;

export type RecommendationBundleProps = {
	controller: RecommendationController;
	breakpoints?: BreakpointsProps;
	resultComponent?: JSXComponent | JSX.Element;
	alias?: string;
	lang?: Partial<RecommendationBundleLang>;
	results?: Product[];
} & RecommendationBundleTemplatesLegalProps &
	Omit<ComponentProps, 'customComponent'>;

export type RecommendationBundleTemplatesLegalProps = {
	limit?: number;
	onAddToCart?: (e: MouseEvent, items: Product[]) => void;
	title?: JSX.Element | string;
	preselectedCount?: number;
	hideCheckboxes?: boolean;
	hideSeed?: boolean;
	seedText?: string;
	hideSeedText?: boolean;
	separatorIconSeedOnly?: boolean;
	separatorIcon?: IconType | Partial<IconProps> | false;
	ctaInline?: boolean;
	description?: JSX.Element | string;
	ctaIcon?: IconType | Partial<IconProps> | false;
	ctaButtonText?: string;
	ctaButtonSuccessText?: string;
	ctaButtonSuccessTimeout?: number;
	ctaSlot?: JSX.Element | React.FunctionComponent<BundledCTAProps>;
	vertical?: boolean;
	carousel?: BundleCarouselProps;
	slidesPerView?: number;
	lazyRender?: {
		enabled: boolean;
		offset?: string;
	};
};

export interface RecommendationBundleLang {
	seedText: Lang<never>;
	ctaButtonText: Lang<never>;
	ctaButtonSuccessText: Lang<never>;
	ctaSubtotalTitle: Lang<{
		cartStore: CartStore;
	}>;
}

interface RecommendationBundleSubProps {
	result: Partial<ResultProps>;
	carousel: Partial<CarouselProps>;
}
