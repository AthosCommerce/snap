import { until } from '@athoscommerce/snap-toolbox';
import type { AbstractController, AutocompleteController, RecommendationController, SearchController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import type { AbstractPluginConfig } from '../types';
import { getVariantId } from '../../../bigcommerce/src/getVariantId';

export type PluginSwymWishlistConfig = AbstractPluginConfig & {
	bigCommerce?: {
		// Storefront API token used to look up the variant id of products without options, which BigCommerce feeds do not
		// carry; defaults to the token Swym's BigCommerce embed places on the page
		token?: string;
	};
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
	platform?: { apiToken?: string };
};

type BigCommerceGraphQLResponse = {
	data?: {
		site?: {
			products?: {
				edges?: Array<{
					node: {
						entityId: number;
						variants?: { edges?: Array<{ node: { entityId: number; isPurchasable?: boolean } }> };
					};
				}>;
			};
		};
	};
	errors?: Array<{ message: string }>;
};

type SwymWindow = Window & {
	SwymCallbacks?: Array<(swat: SwymSDK) => void>;
	initSwymBC?: unknown;
	swymJSObject?: { apiToken?: string };
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
const WITH_EPI_ATTRIBUTE = 'data-with-epi';
// the element inside a button that Swym writes its "Add to Wishlist" / "Added" label into; the BigCommerce SDK fails
// to bind a button that does not have one
const CTA_SELECTOR = '.swym-wishlist-cta';

// a BigCommerce product without options has a base variant whose id the feed does not carry, and Swym rejects its
// product id in its place, so those variant ids are looked up through the Storefront GraphQL API - as Swym's SDK does
const BIGCOMMERCE_GRAPHQL_PATH = '/graphql';
const BIGCOMMERCE_GRAPHQL_PAGE_SIZE = 50;
const BIGCOMMERCE_GRAPHQL_QUERY = `query ($ids: [Int!]) {
	site {
		products(entityIds: $ids, first: ${BIGCOMMERCE_GRAPHQL_PAGE_SIZE}) {
			edges {
				node {
					entityId
					variants(first: 10) {
						edges {
							node {
								entityId
								isPurchasable
							}
						}
					}
				}
			}
		}
	}
}`;

// looked up variant ids by product id, shared by every controller on the page
const bigCommerceVariantIds = new Map<string, string>();

export const pluginSwymWishlist = (cntrlr: AbstractController, config?: PluginSwymWishlistConfig): void => {
	// plugin is opt-in and does nothing unless enabled
	if (config?.enabled !== true) return;

	if (cntrlr.type !== 'search' && cntrlr.type !== 'autocomplete' && cntrlr.type !== 'recommendation') return;

	const swym = swymReady();

	// the containers currently tagged for this controller, one per element it renders into, each with its own tag and
	// variant observer
	let tagged = new Map<Element, { tag: string; observer: MutationObserver }>();
	let latestRun = 0;
	let warnedMissingButtons = false;
	let warnedMissingCta = false;
	let warnedBigCommerce = false;
	let latestProducts: Product[] = [];
	let latestProductIds = new Set<string>();

	// Swym looks the container up by selector, so the tag is set right before every bind - another controller whose
	// buttons share the container would otherwise have replaced it with its own id
	const bindButtons = (swat: SwymSDK, container: Element, tag: string, buttons: Element[]): void => {
		if (isBigCommerceSdk()) {
			// the BigCommerce SDK binds a `data-with-epi` button with its ids alone and no product URL, which the Swym
			// API rejects; without the attribute it binds through the registered product data, URL included
			buttons.forEach((button) => button.removeAttribute(WITH_EPI_ATTRIBUTE));
		}
		container.setAttribute(CONTAINER_ATTRIBUTE, tag);
		try {
			swat.initializeActionButtons(`[${CONTAINER_ATTRIBUTE}="${tag.replace(/["\\]/g, '\\$&')}"]`);
		} catch (err) {
			cntrlr.log.error(`${LOG_PREFIX} The Swym SDK failed to initialize the wishlist buttons.`, err);
		}
	};

	const ensureBigCommerceVariantIds = async (products: Product[], swat: SwymSDK): Promise<void> => {
		const productIds = Array.from(new Set(products.map(missingBigCommerceVariantId).filter((id): id is string => !!id)));
		if (productIds.length === 0) return;

		const token = config?.bigCommerce?.token || swat.platform?.apiToken || (window as SwymWindow).swymJSObject?.apiToken;
		if (!token) {
			if (warnedBigCommerce) return;
			warnedBigCommerce = true;
			cntrlr.log.warn(
				`${LOG_PREFIX} No BigCommerce Storefront API token available to look up the variant ids of products without options - set 'bigCommerce.token' in the plugin config; Swym rejects those products without one.`
			);
			return;
		}

		try {
			await lookupBigCommerceVariantIds(productIds, token);
		} catch (err) {
			if (warnedBigCommerce) return;
			warnedBigCommerce = true;
			cntrlr.log.warn(`${LOG_PREFIX} Looking up BigCommerce variant ids failed - Swym rejects products without options without one.`, err);
		}
	};

	cntrlr.on('afterStore', async ({ controller }: { controller: ResultsController }, next) => {
		const products = controller.store.results.filter((result) => result.type === 'product') as Product[];

		registerSwymProductData(products);

		const productIds = new Set(products.flatMap(matchableProductIds));
		latestProducts = products;
		latestProductIds = productIds;
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

			// only the BigCommerce SDK fails without the element - the Shopify SDK skips it when it is missing
			if (!warnedMissingCta && isBigCommerceSdk() && buttons.some((button) => !button.querySelector(CTA_SELECTOR))) {
				warnedMissingCta = true;
				controller.log.warn(
					`${LOG_PREFIX} Wishlist buttons without a '${CTA_SELECTOR}' element found - Swym's BigCommerce SDK cannot bind a button without one; render the button label inside <span class="swym-wishlist-cta">.`
				);
			}

			if (isBigCommerceSdk()) {
				await ensureBigCommerceVariantIds(products, swat);
				if (run !== latestRun) return;
				// Swym copies the registered data when it binds, so it must carry the looked up variant ids first
				registerSwymProductData(products);
			}

			// initialize the buttons - each element the controller renders into is bound on its own, since the elements
			// containing several of them can hold the theme's or other controllers' buttons
			const groups = groupByRoot(renderRoots(controller), buttons);
			const nextTagged = new Map<Element, { tag: string; observer: MutationObserver }>();

			groups.forEach((groupButtons, index) => {
				const container = lowestCommonAncestor(groupButtons);
				if (!container || nextTagged.has(container)) return;

				// Swym looks the container up with `querySelector`, which returns the first match, so every tag is unique
				const tag = index === 0 ? cntrlr.id : `${cntrlr.id}__${index}`;
				const existing = tagged.get(container);
				if (existing && existing.tag === tag) {
					nextTagged.set(container, existing);
				} else {
					existing?.observer.disconnect();
					// the SDK captures the variant when it binds a button, so a result whose selected variant changes
					// (and re-renders its button with the new variant id) needs its buttons bound again
					const observer = new MutationObserver((records) => {
						const variantChanged = records.some(
							(record) =>
								record.target instanceof Element &&
								record.target.matches(BUTTON_SELECTOR) &&
								record.oldValue !== record.target.getAttribute(VARIANT_ATTRIBUTE)
						);
						if (variantChanged) {
							// Swym copies the registered product data when it binds, so the selected variant has to be in it first
							registerSwymProductData(latestProducts);
							const rebind = findButtons(cntrlr, latestProductIds).filter((button) => container.contains(button));
							bindButtons(swat, container, tag, rebind);
						}
					});
					observer.observe(container, { attributes: true, attributeFilter: [VARIANT_ATTRIBUTE], attributeOldValue: true, subtree: true });
					nextTagged.set(container, { tag, observer });
				}
			});

			// containers no longer rendered into lose their observer, and their tag unless another controller has retagged them
			tagged.forEach((entry, container) => {
				if (nextTagged.get(container) === entry) return;
				entry.observer.disconnect();
				if (!nextTagged.has(container) && container.getAttribute(CONTAINER_ATTRIBUTE) === entry.tag) {
					container.removeAttribute(CONTAINER_ATTRIBUTE);
				}
			});
			tagged = nextTagged;

			tagged.forEach(({ tag }, container) => {
				bindButtons(
					swat,
					container,
					tag,
					buttons.filter((button) => container.contains(button))
				);
			});
		});

		await next();
	});
};

// the attributes and classnames the Swym SDK needs on a wishlist button rendered for a result; the `product_{id}`
// classname is how the SDK finds the button again to mark it as added. The button's label belongs in a child
// `<span class="swym-wishlist-cta">`, which Swym updates when the item is added or removed
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
	result is a variant: `uid` is the variant id (or `{productId}_{variantId}` on BigCommerce) and `parentId` the product
	id (`uid` doubles as the product id when the result has no parent). When Snap variants are in use the selected variant's mappings are masked onto the
	result's display data, so the variant id and URL are read from there.
*/
// the variant id from a BigCommerce `{productId}_{variantId}` uid, or the uid as it is
const variantIdFrom = (uid: unknown, productId: string | undefined): string | undefined =>
	getVariantId({ uid: idString(uid), parentId: productId }) || idString(uid);

// the product id of a result whose variant id would otherwise be its product id, and that has not been looked up yet
const missingBigCommerceVariantId = (product: Product): string | undefined => {
	const ids = resolveIds(product);
	return ids && ids.variantId === ids.productId && /^\d+$/.test(ids.productId) ? ids.productId : undefined;
};

// stores each product's first purchasable variant id, 50 products per request
const lookupBigCommerceVariantIds = async (productIds: string[], token: string): Promise<void> => {
	for (let index = 0; index < productIds.length; index += BIGCOMMERCE_GRAPHQL_PAGE_SIZE) {
		const chunk = productIds.slice(index, index + BIGCOMMERCE_GRAPHQL_PAGE_SIZE);
		const response = await fetch(`${window.location.origin}${BIGCOMMERCE_GRAPHQL_PATH}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({ query: BIGCOMMERCE_GRAPHQL_QUERY, variables: { ids: chunk.map(Number) } }),
		});

		if (!response.ok) {
			throw new Error(`BigCommerce GraphQL HTTP ${response.status}`);
		}

		const json = (await response.json()) as BigCommerceGraphQLResponse;
		if (json.errors?.length) {
			throw new Error(`BigCommerce GraphQL errors: ${JSON.stringify(json.errors)}`);
		}

		(json.data?.site?.products?.edges || []).forEach(({ node }) => {
			const variants = (node.variants?.edges || []).map((edge) => edge.node);
			const variant = variants.find((candidate) => candidate.isPurchasable) || variants[0];
			if (variant) bigCommerceVariantIds.set(String(node.entityId), String(variant.entityId));
		});
	}
};

const resolveIds = (product: Product): { productId: string; variantId: string; url: string } | undefined => {
	const core = product.mappings.core || {};
	const display = product.display.mappings.core || {};

	const productId = idString(core.parentId) || idString(core.uid);
	const parsedVariantId = variantIdFrom(display.uid, productId);
	const variantId = productId && parsedVariantId === productId ? bigCommerceVariantIds.get(productId) || parsedVariantId : parsedVariantId;
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

// the BigCommerce SDK build is the one that defines `initSwymBC`; the Shopify build defines `initSwymShopify` instead
const isBigCommerceSdk = (): boolean => typeof (window as SwymWindow).initSwymBC === 'function';

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
			const variantId = variantIdFrom(variant.mappings.core?.uid, ids.productId);
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
// the buttons grouped by the element the controller rendered them into, in render order; a button inside several of
// those elements belongs to the first
const groupByRoot = (roots: ParentNode[], buttons: Element[]): Element[][] => {
	const groups = roots.map(() => [] as Element[]);
	buttons.forEach((button) => {
		const index = roots.findIndex((root) => root.contains(button));
		if (index !== -1) groups[index].push(button);
	});
	return groups.filter((group) => group.length > 0);
};

const lowestCommonAncestor = (elements: Element[]): Element | undefined => {
	let ancestor = elements[0]?.parentElement;
	while (ancestor && !elements.every((element) => ancestor!.contains(element))) {
		ancestor = ancestor.parentElement;
	}
	return ancestor || undefined;
};
