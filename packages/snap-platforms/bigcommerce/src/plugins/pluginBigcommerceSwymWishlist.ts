import type { AbstractController } from '@athoscommerce/snap-controller';
import type { Product } from '@athoscommerce/snap-store-mobx';
import { pluginSwymWishlist, swymWishlistButtonProps as buttonProps, swymWishlistResolver } from '../../../common/src/plugins/pluginSwymWishlist';
import type { PluginSwymWishlistConfig, SwymWishlistButtonProps } from '../../../common/src/plugins/pluginSwymWishlist';

export type PluginBigcommerceSwymWishlistConfig = PluginSwymWishlistConfig;
export type { SwymWishlistButtonProps };

// BigCommerce feeds carry the product entity id in `uid` (`parentId` when the feed has one record per variant) and
// the storefront product URL in `url`, which is what the core mappings resolver reads. Swym identifies a variant by
// its entity id, which Snap variants provide as the variant `uid`; without them the product id stands in for it.
export { swymWishlistResolver };

export const pluginBigcommerceSwymWishlist = (cntrlr: AbstractController, config?: PluginBigcommerceSwymWishlistConfig): void =>
	pluginSwymWishlist(cntrlr, { ...config, resolver: config?.resolver || swymWishlistResolver });

export const swymWishlistButtonProps = (result: Product): SwymWishlistButtonProps | undefined => buttonProps(result, swymWishlistResolver);
