import type { Product } from '@athoscommerce/snap-store-mobx';
import { getVariantId } from './getVariantId';

export type BigCommerceAddToCartConfig = {
	redirect?: boolean | string;
	idFieldName?: string; // display.mappings.core.id
};

type BigCommerceId = number | string;

// a Storefront Cart API line item - https://docs.bigcommerce.com/docs/rest-storefront/carts/cart-items
type LineItem = {
	productId: BigCommerceId;
	quantity: number;
	variantId?: BigCommerceId;
	optionSelections?: { optionId: BigCommerceId; optionValue: BigCommerceId }[];
};

// BigCommerce ids are integers; anything else is passed through for the API to report
const toId = (value: unknown): BigCommerceId => (typeof value === 'string' && /^\d+$/.test(value) ? Number(value) : (value as BigCommerceId));

export const addToCart = async (items: Product[], config?: BigCommerceAddToCartConfig) => {
	if (!items) {
		console.error('bigcommerce/addToCart: No products to add!');
		return;
	}

	const lineItems: LineItem[] = [];

	items.map((item) => {
		const core = item?.display?.mappings?.core;
		let id: unknown = core?.uid;

		// try to find custom field in data
		if (config?.idFieldName) {
			let level: any = item;
			config.idFieldName.split('.').map((field) => {
				if (level && level[field]) {
					level = level[field];
				} else {
					console.error(`bigcommerce/addToCart: Could not find column in item data. Please verify 'idFieldName' in the config.`);
					level = undefined;
					id = undefined;
					return;
				}
			});

			if (level && level !== item) {
				id = level;
			}
		}

		if (!id || !item.quantity) return;

		// a product with options in an Athos feed is identified as `{parentId}_{variantId}`
		const parentId = item.mappings?.core?.parentId ?? core?.parentId;
		const variantId = config?.idFieldName ? undefined : getVariantId({ uid: core?.uid, parentId });

		if (variantId && parentId !== undefined) {
			lineItems.push({ productId: toId(parentId), quantity: item.quantity, variantId: toId(variantId) });
			return;
		}

		const lineItem: LineItem = {
			productId: toId(id),
			quantity: item.quantity,
		};

		// feeds whose variants carry the product id identify the variant through its option selections
		const options = item.variants?.active?.options;
		if (options) {
			lineItem.optionSelections = [];
			Object.keys(options).forEach((option) => {
				const optionId = options[option].optionId;
				const optionValue = options[option].optionValue;

				if (optionId && optionValue) {
					lineItem.optionSelections?.push({ optionId: toId(optionId), optionValue: toId(optionValue) });
				}
			});
		}

		lineItems.push(lineItem);
	});

	if (lineItems.length) {
		const addToCartResponse = await addLineItemsToCart(lineItems);

		// do redirect (or not)
		if (config?.redirect !== false) {
			setTimeout(() => (window.location.href = typeof config?.redirect == 'string' ? config?.redirect : '/cart.php'));
		}

		return addToCartResponse;
	}
};

async function addLineItemsToCart(lineItems: LineItem[]): Promise<any> {
	try {
		const cartId = await getExistingCartId();

		// if existing cartId use it, otherwise create new cart with items
		let addToCartUrl = '/api/storefront/carts';
		if (cartId) {
			addToCartUrl = `/api/storefront/carts/${cartId}/items`;
		}

		const body = JSON.stringify({ lineItems });

		const response = await fetch(addToCartUrl, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body,
		});

		if (response.status !== 200) {
			throw new Error(`API rejected addToCart: ${response.status}`);
		}

		const responseData = await response.json();

		if (responseData?.id) {
			// cart Id should exist now.
			return responseData;
		}
	} catch (err) {
		console.error('bigcommerce/addToCart: Encountered an error!');
		console.error(err);
	}
}

async function getExistingCartId(): Promise<string | undefined> {
	try {
		const response = await fetch('/api/storefront/carts', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		const responseData = await response.json();

		if (Array.isArray(responseData) && responseData.length) {
			return responseData[0].id;
		}
	} catch (err) {
		// error...
	}
}
