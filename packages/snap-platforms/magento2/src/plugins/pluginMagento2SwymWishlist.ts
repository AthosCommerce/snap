import type { AbstractController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import { pluginSwymWishlist, swymWishlistButtonProps as buttonProps, swymWishlistResolver } from '../../../common/src/plugins/pluginSwymWishlist';
import type { PluginSwymWishlistConfig, SwymWishlistButtonProps } from '../../../common/src/plugins/pluginSwymWishlist';

export type PluginMagento2SwymWishlistConfig = PluginSwymWishlistConfig;
export type { SwymWishlistButtonProps };

// Magento 2 feeds carry the product entity id in `uid` and the storefront product URL in `url`, which is what the
// core mappings resolver reads; configurable children are provided by Snap variants as the variant `uid`. Swym does
// not publish a Magento 2 storefront SDK - this plugin expects a Swym build that exposes the same SDK as the Shopify
// and BigCommerce ones (`SwymCallbacks` and `initializeActionButtons`).
export { swymWishlistResolver };

export const pluginMagento2SwymWishlist = (cntrlr: AbstractController, config?: PluginMagento2SwymWishlistConfig): void =>
	pluginSwymWishlist(cntrlr, { ...config, resolver: config?.resolver || swymWishlistResolver });

export const swymWishlistButtonProps = (result: Product): SwymWishlistButtonProps | undefined => buttonProps(result, swymWishlistResolver);
