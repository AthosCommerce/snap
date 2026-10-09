import { until } from '@athoscommerce/snap-toolbox';
import type { AbstractController, AutocompleteController, RecommendationController, SearchController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { AbstractPluginConfig } from '../types';

export type SwymWishlistVariant = NonNullable<Product['variants']>['data'][number];

// the identifiers Swym keeps for a wishlisted item, resolved from a result
export type SwymWishlistProduct = {
	// Swym `empi` - the platform's product id
	productId: string;
	// Swym `epi` - the platform's variant id; the active (selected) variant when Snap variants are in use
	variantId: string;
	// Swym `du` - the absolute product URL
	url: string;
	// keys the product data is registered under besides the product id (e.g. the Shopify handle)
	keys?: string[];
};

// how results map to Swym identifiers - each platform supplies its own, `swymWishlistResolver` is the default
export type SwymWishlistResolver = {
	product: (product: Product) => SwymWishlistProduct | undefined;
	// the URL of one of the product's variants; defaults to the variant's own core url, or the product URL
	variantUrl?: (variant: SwymWishlistVariant, context: { variantId: string; product: SwymWishlistProduct }) => string;
};

export type PluginSwymWishlistConfig = AbstractPluginConfig & {
	resolver?: SwymWishlistResolver;
};

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

const LOG_PREFIX = '[swymWishlist]';
const CONTAINER_ATTRIBUTE = 'data-ss-swym-wishlist';
// both Swym button styles: with `data-with-epi` (ids from the attributes) and without (product looked up by id)
const BUTTON_SELECTOR = '[data-swaction="addToWishlist"]';
const VARIANT_ATTRIBUTE = 'data-variant-id';

export const pluginSwymWishlist = (cntrlr: AbstractController, config?: PluginSwymWishlistConfig): void => {
	// plugin is opt-in and does nothing unless enabled
	if (config?.enabled !== true) return;

	if (cntrlr.type !== 'search' && cntrlr.type !== 'autocomplete' && cntrlr.type !== 'recommendation') return;

	const resolver = config.resolver || swymWishlistResolver;
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

		registerSwymProductData(products, resolver);

		const productIds = new Set(products.flatMap((product) => matchableProductIds(product, resolver)));
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
export const swymWishlistButtonProps = (
	result: Product,
	resolver: SwymWishlistResolver = swymWishlistResolver
): SwymWishlistButtonProps | undefined => {
	const product = resolver.product(result);
	if (!product) return undefined;

	return {
		className: `swym-button swym-add-to-wishlist-view-product product_${product.productId}`,
		'data-swaction': 'addToWishlist',
		'data-with-epi': 'true',
		'data-product-id': product.productId,
		'data-variant-id': product.variantId,
		'data-product-url': product.url,
	};
};

/*
	The default resolver uses the core mappings, which every platform's feed provides:
	- `parentId` is the product id and `uid` the variant id when the feed has one record per variant
	- `uid` is the product id otherwise, and also stands in for the variant id unless Snap variants are in use
	- `url` is the product URL, without its query string
*/
export const swymWishlistResolver: SwymWishlistResolver = {
	product: (product) => {
		const core = product.mappings.core || {};
		const parentId = idString(core.parentId);
		const uid = idString(core.uid);

		const productId = parentId || uid;
		const variantId = idString(product.variants?.active?.mappings.core?.uid) || uid;
		const url = absoluteUrl(core.url?.split('?')[0]);

		if (!productId || !variantId || !url) return undefined;

		return { productId, variantId, url };
	},
};

export const idString = (value: unknown): string | undefined => {
	if (typeof value === 'string' && value !== '') return value;
	if (typeof value === 'number' && Number.isFinite(value)) return String(value);
	return undefined;
};

// Swym stores product URLs as absolute URLs - a path is resolved against the storefront origin
export const absoluteUrl = (path: string | undefined): string | undefined => {
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

// ids a button rendered for this product may carry in `data-product-id`: the resolved product id, or the core ids
// when the button was written by hand
const matchableProductIds = (product: Product, resolver: SwymWishlistResolver): string[] => {
	const core = product.mappings.core || {};
	const ids = [resolver.product(product)?.productId, idString(core.parentId), idString(core.uid)];
	return ids.filter((id): id is string => Boolean(id));
};

// prices and quantities arrive as numbers or numeric strings depending on the feed
const numeric = (value: unknown): number | undefined => {
	if (value === undefined || value === null || value === '') return undefined;
	const number = Number(value);
	return Number.isFinite(number) ? number : undefined;
};

const variantTitle = (variant: SwymWishlistVariant): string => {
	const title = variant.attributes?.title;
	if (typeof title === 'string' && title) return title;
	const options: SwymWishlistVariant['options'] = variant.options || {};
	return Object.values(options)
		.map((option) => option.value)
		.join(' / ');
};

const variantUrl = (variant: SwymWishlistVariant, variantId: string, product: SwymWishlistProduct, resolver: SwymWishlistResolver): string => {
	if (resolver.variantUrl) return resolver.variantUrl(variant, { variantId, product });
	return absoluteUrl(variant.mappings.core?.url?.split('?')[0]) || product.url;
};

// the maps are shared by every Swym button on the page, so entries are merged in rather than replaced
const registerSwymProductData = (products: Product[], resolver: SwymWishlistResolver): void => {
	const swymWindow = window as SwymWindow;
	const viewProducts = (swymWindow.SwymViewProducts = swymWindow.SwymViewProducts || {});
	const productVariants = (swymWindow.SwymProductVariants = swymWindow.SwymProductVariants || {});
	const watchProducts = (swymWindow.SwymWatchProducts = swymWindow.SwymWatchProducts || {});

	products.forEach((product) => {
		const resolved = resolver.product(product);
		if (!resolved) return;

		const core = product.mappings.core || {};
		const empi = swymId(resolved.productId);
		const epi = swymId(resolved.variantId);
		const keys = [resolved.productId, ...(resolved.keys || [])];

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
				du: variantUrl(variant, variantId, resolved, resolver),
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
			watchVariants[resolved.variantId] = watchVariant;
			watchProducts[resolved.variantId] = watchVariant;
		}

		const active = product.variants?.active;
		const activeVariant = active && productVariants[resolved.variantId];

		const viewProduct: SwymProductData = {
			empi,
			epi,
			du: resolved.url,
			dt: core.name,
			iu: core.thumbnailImageUrl || core.imageUrl,
			pr: numeric(core.price),
			op: numeric(core.msrp),
			stk: activeVariant?.stk,
			variants: [{ [active ? variantTitle(active) : 'Default Title']: epi }],
		};

		keys.forEach((key) => {
			viewProducts[key] = viewProduct;
			watchProducts[key] = watchVariants;
		});
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
