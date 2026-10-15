import { until } from '@athoscommerce/snap-toolbox';
import type { AbstractController, AutocompleteController, RecommendationController, SearchController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { AbstractPluginConfig } from '../types';

export type PluginSwymWishlistConfig = AbstractPluginConfig;

// attributes the Swym SDK reads from a grid wishlist button - `swymWishlistButtonProps` builds them from a result
export type SwymWishlistButtonProps = {
	className: string;
	'data-swaction': 'addToWishlist';
	'data-with-epi': 'true';
	'data-product-id': string;
	'data-variant-id': string;
	'data-product-url': string;
};

type SwymId = string | number;

// product data in the shape the Swym SDK keeps in its `SwymViewProducts` and `SwymProductVariants` maps
type SwymProductData = {
	empi: SwymId;
	epi: SwymId;
	du: string;
	dt?: string;
	iu?: string;
	pr?: number;
	op?: number;
	stk?: number;
	variants: Array<Record<string, SwymId>>;
};

// variant availability in the shape the Swym SDK keeps in its `SwymWatchProducts` map
type SwymWatchVariant = {
	id: SwymId;
	available: boolean;
	inventory_quantity?: number;
	title?: string;
};

type SwymSDK = {
	initializeActionButtons: (containerSelector: string, selector?: string) => void;
};

type SwymWindow = Window & {
	SwymCallbacks?: Array<(swat: SwymSDK) => void>;
	SwymViewProducts?: Record<string, SwymProductData>;
	SwymProductVariants?: Record<string, SwymProductData>;
	SwymWatchProducts?: Record<string, SwymWatchVariant | Record<string, SwymWatchVariant>>;
};

type ResultsController = SearchController | AutocompleteController | RecommendationController;
type Variant = NonNullable<Product['variants']>['data'][number];

const LOG_PREFIX = '[swymWishlist]';
const CONTAINER_ATTRIBUTE = 'data-ss-swym-wishlist';
// both Swym button styles: with `data-with-epi` (ids from the attributes) and without (product looked up by id)
const BUTTON_SELECTOR = '[data-swaction="addToWishlist"]';
const VARIANT_ATTRIBUTE = 'data-variant-id';

export const pluginSwymWishlist = (cntrlr: AbstractController, config?: PluginSwymWishlistConfig): void => {
	// plugin is opt-in and does nothing unless enabled
	if (config?.enabled !== true) return;

	if (cntrlr.type !== 'search' && cntrlr.type !== 'autocomplete' && cntrlr.type !== 'recommendation') return;

	const containerSelector = `[${CONTAINER_ATTRIBUTE}="${cntrlr.id.replace(/["\\]/g, '\\$&')}"]`;
	const swym = swymReady();

	let taggedContainer: Element | undefined;
	let observer: MutationObserver | undefined;
	let latestRun = 0;
	let warnedMissingButtons = false;

	// Swym looks the container up by selector, so the tag is set right before every bind - another controller whose
	// buttons share the container would otherwise have replaced it with its own id
	const bindButtons = (swat: SwymSDK, container: Element): void => {
		container.setAttribute(CONTAINER_ATTRIBUTE, cntrlr.id);
		try {
			swat.initializeActionButtons(containerSelector);
		} catch (err) {
			cntrlr.log.error(`${LOG_PREFIX} The Swym SDK failed to initialize the wishlist buttons.`, err);
		}
	};

	cntrlr.on('afterStore', async ({ controller }: { controller: ResultsController }, next) => {
		const products = controller.store.results.filter((result) => result.type === 'product') as Product[];

		registerSwymProductData(products);

		const productIds = new Set(products.flatMap(matchableProductIds));
		const run = ++latestRun;

		// not awaited - the Swym SDK may load (or never load) long after the results have rendered
		swym.then(async (swat) => {
			if (run !== latestRun || productIds.size === 0) return;

			let buttons: Element[] = [];
			try {
				await until(() => {
					// a newer search has rendered since this one - it will initialize its own buttons
					if (run !== latestRun) return true;
					buttons = findButtons(controller, productIds);
					return buttons.length > 0;
				});
			} catch {
				// `until` rejects without an error when the buttons never render
				if (run !== latestRun || warnedMissingButtons) return;
				warnedMissingButtons = true;
				controller.log.warn(
					`${LOG_PREFIX} No wishlist buttons found in the rendered results - add a button with the attributes from 'swymWishlistButtonProps' to the result component.`
				);
				return;
			}

			if (run !== latestRun) return;

			// initialize the buttons
			const container = lowestCommonAncestor(buttons);
			if (!container) return;

			if (taggedContainer !== container) {
				// the previous container keeps its tag when another controller has tagged it since
				if (taggedContainer?.getAttribute(CONTAINER_ATTRIBUTE) === cntrlr.id) {
					taggedContainer.removeAttribute(CONTAINER_ATTRIBUTE);
				}
				observer?.disconnect();
				taggedContainer = container;

				// the SDK captures the variant when it binds a button, so a result whose selected variant changes
				// (and re-renders its button with the new variant id) needs its buttons bound again
				observer = new MutationObserver((records) => {
					const variantChanged = records.some(
						(record) =>
							record.target instanceof Element &&
							record.target.matches(BUTTON_SELECTOR) &&
							record.oldValue !== record.target.getAttribute(VARIANT_ATTRIBUTE)
					);
					if (variantChanged) {
						bindButtons(swat, container);
					}
				});
				observer.observe(container, { attributes: true, attributeFilter: [VARIANT_ATTRIBUTE], attributeOldValue: true, subtree: true });
			}

			bindButtons(swat, container);
		});

		await next();
	});
};

// the attributes and classnames the Swym SDK needs on a wishlist button rendered for a result; the `product_{id}`
// classname is how the SDK finds the button again to mark it as added
export const swymWishlistButtonProps = (result: Product): SwymWishlistButtonProps | undefined => {
	const ids = resolveIds(result);
	if (!ids) return undefined;

	return {
		className: `swym-button swym-add-to-wishlist-view-product product_${ids.productId}`,
		'data-swaction': 'addToWishlist',
		'data-with-epi': 'true',
		'data-product-id': ids.productId,
		'data-variant-id': ids.variantId,
		'data-product-url': ids.url,
	};
};

/*
	Swym identifies a wishlisted item by its product id (`empi`), variant id (`epi`) and product URL (`du`). Every
	result is a variant: `uid` is the variant id and `parentId` the product id (`uid` doubles as the product id when
	the result has no parent). When Snap variants are in use the selected variant's mappings are masked onto the
	result's display data, so the variant id and URL are read from there.
*/
const resolveIds = (product: Product): { productId: string; variantId: string; url: string } | undefined => {
	const core = product.mappings.core || {};
	const display = product.display.mappings.core || {};

	const productId = idString(core.parentId) || idString(core.uid);
	const variantId = idString(display.uid);
	const url = absoluteUrl(display.url);

	if (!productId || !variantId || !url) return undefined;

	return { productId, variantId, url };
};

const idString = (value: unknown): string | undefined => {
	if (typeof value === 'string' && value !== '') return value;
	if (typeof value === 'number' && Number.isFinite(value)) return String(value);
	return undefined;
};

// Swym stores product URLs as absolute URLs - a path is resolved against the storefront origin
const absoluteUrl = (path: string | undefined): string | undefined => {
	if (!path) return undefined;
	if (/^https?:\/\//i.test(path)) return path;
	return `${window.location.origin}${path.startsWith('/') ? '' : '/'}${path}`;
};

// resolves once the Swym SDK has loaded; the SDK invokes callbacks pushed before it loads once it is ready, and
// invokes callbacks pushed after it loads immediately
const swymReady = (): Promise<SwymSDK> => {
	return new Promise((resolve) => {
		const swymWindow = window as SwymWindow;
		swymWindow.SwymCallbacks = swymWindow.SwymCallbacks || [];
		swymWindow.SwymCallbacks.push((swat) => resolve(swat));
	});
};

// the elements the controller renders into - buttons are only looked for inside them, so the theme's buttons and
// other controllers' buttons for the same products are left alone; a controller without targets (results rendered
// by hand) is searched across the whole document
const renderRoots = (controller: AbstractController): ParentNode[] => {
	const targeters = Object.values(controller.targeters);
	if (targeters.length === 0) return [document];

	return targeters.flatMap((targeter) => {
		const targets = targeter.getTargets();
		return targeter.getTargetedElems().flatMap((elem): ParentNode[] => {
			const inject = targets.find((target) => elem.matches(target.selector))?.inject;
			if (!inject) return [elem];
			// the component rendered into an injected element: a given one, or one created inside or beside the target
			if (inject.element instanceof Element) return inject.element.isConnected ? [inject.element] : [];
			if (inject.action === 'before' || inject.action === 'after') return elem.parentElement ? [elem.parentElement] : [];
			return [elem];
		});
	});
};

// the wishlist buttons rendered for the given products
const findButtons = (controller: AbstractController, productIds: Set<string>): Element[] => {
	const buttons = renderRoots(controller).flatMap((root) => Array.from(root.querySelectorAll(BUTTON_SELECTOR)));
	return Array.from(new Set(buttons)).filter((button) => productIds.has(button.getAttribute('data-product-id') || ''));
};

// Swym stores platform ids as numbers; non-numeric ids are kept as given
const swymId = (id: string): SwymId => (/^\d+$/.test(id) ? Number(id) : id);

// ids a button rendered for this product may carry in `data-product-id` - the product id, or the result's own uid
// when the button was written by hand
const matchableProductIds = (product: Product): string[] => {
	const core = product.mappings.core || {};
	return [idString(core.parentId), idString(core.uid)].filter((id): id is string => Boolean(id));
};

// prices and quantities arrive as numbers or numeric strings depending on the feed
const numeric = (value: unknown): number | undefined => {
	if (value === undefined || value === null || value === '') return undefined;
	const number = Number(value);
	return Number.isFinite(number) ? number : undefined;
};

const variantTitle = (variant: Variant): string => {
	const title = variant.attributes?.title;
	if (typeof title === 'string' && title) return title;
	const options: Variant['options'] = variant.options || {};
	return Object.values(options)
		.map((option) => option.value)
		.join(' / ');
};

// the maps are shared by every Swym button on the page, so entries are merged in rather than replaced
const registerSwymProductData = (products: Product[]): void => {
	const swymWindow = window as SwymWindow;
	const viewProducts = (swymWindow.SwymViewProducts = swymWindow.SwymViewProducts || {});
	const productVariants = (swymWindow.SwymProductVariants = swymWindow.SwymProductVariants || {});
	const watchProducts = (swymWindow.SwymWatchProducts = swymWindow.SwymWatchProducts || {});

	products.forEach((product) => {
		const ids = resolveIds(product);
		if (!ids) return;

		const core = product.mappings.core || {};
		const empi = swymId(ids.productId);
		const epi = swymId(ids.variantId);

		const watchVariants: Record<string, SwymWatchVariant> = {};
		const variants = product.variants?.data || [];

		variants.forEach((variant) => {
			const variantId = idString(variant.mappings.core?.uid);
			if (!variantId) return;

			const variantCore = variant.mappings.core || {};
			const title = variantTitle(variant);
			const quantity = numeric(variant.attributes?.quantity);

			productVariants[variantId] = {
				empi,
				epi: swymId(variantId),
				du: absoluteUrl(variantCore.url) || ids.url,
				dt: core.name,
				iu: variantCore.thumbnailImageUrl || variantCore.imageUrl || core.thumbnailImageUrl || core.imageUrl,
				pr: numeric(variantCore.price),
				op: numeric(variantCore.msrp),
				stk: quantity,
				variants: [{ [title]: swymId(variantId) }],
			};

			const watchVariant: SwymWatchVariant = {
				id: swymId(variantId),
				available: variant.available,
				inventory_quantity: quantity,
				title,
			};
			watchVariants[variantId] = watchVariant;
			watchProducts[variantId] = watchVariant;
		});

		if (variants.length === 0) {
			const watchVariant: SwymWatchVariant = {
				id: epi,
				available: core.available !== false,
			};
			watchVariants[ids.variantId] = watchVariant;
			watchProducts[ids.variantId] = watchVariant;
		}

		const active = product.variants?.active;
		const activeVariant = active && productVariants[ids.variantId];

		viewProducts[ids.productId] = {
			empi,
			epi,
			du: ids.url,
			dt: core.name,
			iu: core.thumbnailImageUrl || core.imageUrl,
			pr: numeric(core.price),
			op: numeric(core.msrp),
			stk: activeVariant?.stk,
			variants: [{ [active ? variantTitle(active) : 'Default Title']: epi }],
		};
		watchProducts[ids.productId] = watchVariants;
	});
};

// the closest element containing every button - normally the results grid; Swym initializes buttons by a
// container selector, so this element is the one that gets tagged
const lowestCommonAncestor = (elements: Element[]): Element | undefined => {
	let ancestor = elements[0]?.parentElement;
	while (ancestor && !elements.every((element) => ancestor!.contains(element))) {
		ancestor = ancestor.parentElement;
	}
	return ancestor || undefined;
};
