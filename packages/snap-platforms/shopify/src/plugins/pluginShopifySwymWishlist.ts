import type { AbstractController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import { pluginSwymWishlist, swymWishlistButtonProps as buttonProps, absoluteUrl, idString } from '../../../common/src/plugins/pluginSwymWishlist';
import type { PluginSwymWishlistConfig, SwymWishlistButtonProps, SwymWishlistResolver } from '../../../common/src/plugins/pluginSwymWishlist';

export type PluginShopifySwymWishlistConfig = PluginSwymWishlistConfig;
export type { SwymWishlistButtonProps };

/*
	Shopify feeds come in two shapes:
	- one record per product: `uid` is the product id and `ss_id` the id of its representative variant
	- one record per variant: `uid` is the variant id and `parentId` the product id
	When Snap variants are in use the active (selected) variant is the one that gets wishlisted. The product URL is
	built from the handle like Swym's own theme snippets, falling back to the core url without its query string.
*/
export const swymWishlistResolver: SwymWishlistResolver = {
	product: (product) => {
		const core = product.mappings.core || {};
		const parentId = idString(core.parentId);
		const uid = idString(core.uid);
		const handle = typeof product.attributes.handle === 'string' && product.attributes.handle ? product.attributes.handle : undefined;

		const productId = parentId || uid;
		const variantId = idString(product.variants?.active?.mappings.core?.uid) || (parentId ? uid : idString(product.attributes.ss_id));
		const url = absoluteUrl(handle ? `/products/${handle}` : core.url?.split('?')[0]);

		if (!productId || !variantId || !url) return undefined;

		// Swym's Shopify snippets key the product data by handle as well as by id
		return { productId, variantId, url, keys: handle ? [handle] : [] };
	},
	// a Shopify product page selects a variant through the `variant` query parameter
	variantUrl: (_, { variantId, product }) => `${product.url}?variant=${variantId}`,
};

export const pluginShopifySwymWishlist = (cntrlr: AbstractController, config?: PluginShopifySwymWishlistConfig): void =>
	pluginSwymWishlist(cntrlr, { ...config, resolver: config?.resolver || swymWishlistResolver });

export const swymWishlistButtonProps = (result: Product): SwymWishlistButtonProps | undefined => buttonProps(result, swymWishlistResolver);
